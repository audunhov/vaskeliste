<template>
  <ul role="list" class="divide-y divide-gray-100">
    <li v-for="(person, index) in people" :key="person" class="py-4 flex items-center justify-between">
      <span>{{ person }}</span>
      <span class="text-gray-600">{{actions[index]}}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">

const props = defineProps<{
  weekNumber: number
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
