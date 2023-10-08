<script setup lang="ts">
import InlineEditor from "@ckeditor/ckeditor5-build-inline";
import CKEditor from "@ckeditor/ckeditor5-vue"
import {useEventListener, watchDebounced} from "@vueuse/core";
import {onMounted} from "vue";

const props = defineProps<{
  name: string
}>()

useEventListener("beforeunload", (ev) => {
  if (changed.value) ev.preventDefault()
})

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

const changed = ref(false)

async function update(name: string, body: string) {
  changed.value = true
  await supabase
      .from('instruction')
      .update({body, updated: new Date()})
      .eq('name', name)
      .select()
      .single()
  changed.value = false
}

function subscribe() {
  supabase.channel('instruction-updates')
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

watchDebounced(data, (newValue, oldValue) => {
  if (!oldValue) return // Triggered by initial load
  update(props.name, newValue)
}, {debounce: 1000})


</script>

<template>
  <div v-if="!loading">
    <CKEditor.component @update:modelValue="changed = true" :editor="editor" v-model="data" :config="config"/>
  </div>
  <div v-else class="h-4 bg-gray-200 mx-2 animate-pulse"/>
</template>

<style scoped>
:deep(ul, ol) {
  list-style-position: inside;
}
</style>
