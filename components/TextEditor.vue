<script setup lang="ts">
import InlineEditor from "@ckeditor/ckeditor5-build-inline";
import CKEditor from "@ckeditor/ckeditor5-vue"
import {watchDebounced} from "@vueuse/core";
import {onMounted} from "vue";
import {load} from "mime";

const props = defineProps<{
  name: string
}>()

const supabase = useSupabaseClient()
const loading = ref(true)

onMounted(async () => {
  const response = await supabase
      .from("instruction")
      .select("name,body")
      .eq("name", props.name)
      .single()
  const {body} = response.data
  data.value = body

  loading.value = false

  subscribe()

})

async function update(name: string, body: string) {
  const {data, error} = await supabase
      .from('instruction')
      .update({body})
      .eq('name', name)
      .select()
      .single()
}

function subscribe() {
  const instruction = supabase.channel('instruction-updates')
      .on(
          'postgres_changes',
          {event: '*', schema: 'public', table: 'instruction'},
          (payload) => {
            const {body, name} = payload.new
            if (name === props.name) data.value = body
          }
      )
      .subscribe()
}


const editor = ref(InlineEditor)
const data = ref("")
const config = {
  toolbar: {
    items: [
      "undo",
      "redo",
      "|",
      "bold",
      "italic",
      "|",
      "numberedList",
      "bulletedList"
    ]
  }
}

watchDebounced(data, () => {
  update(props.name, data.value)
  saving.value = false
}, {debounce: 3000})

const saving = ref(false)

const pingSaved = ref(false)

watch(saving, (newValue, oldValue) => {
  if (!newValue && oldValue) {
    pingSaved.value = true
    setTimeout(() => pingSaved.value = false, 2000)
  }
})

</script>

<template>
  <div v-if="!loading">
    <CKEditor.component @update:modelValue="saving = true" :editor="editor" v-model="data" :config="config"/>
    <div v-if="saving">Editing...</div>
    <div v-else-if="pingSaved">Saved!</div>
  </div>
  <div v-else class="h-4 bg-gray-200 mx-2 animate-pulse" />
</template>

<style scoped>
:deep(ul, ol) {
  list-style-position: inside;
}
</style>
