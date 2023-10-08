<template>
  <ul role="list" class="divide-y divide-gray-100">
    <li v-for="(person, index) in people" :key="person" class="py-4 flex items-center justify-between">
      <span>{{ person }}</span>
      <button class="text-gray-600 hover:text-gray-800 hover:bg-gray-100 border-b rounded hover:border-transparent px-1 border-dashed" @click="emit('setAction', actions[index])">{{actions[index]}}</button>
    </li>
  </ul>
</template>

<script setup lang="ts">

const props = defineProps<{
  weekNumber: number
}>()

const emit = defineEmits<{
  setAction: [action: string]
}>()

const actions = [
    "Living room",
    "Bathroom",
    "Hallway"
]

const people = computed(() => {
  let names = ["Audun", "Heta", "Tuva", "Silvano", "Sindre"];
  let p0 = (props.weekNumber + 0) % names.length;
  let p1 = (props.weekNumber + 2) % names.length;
  let p2 = (props.weekNumber + 4) % names.length;
  return [names[p0], names[p1], names[p2]];
})
</script>
