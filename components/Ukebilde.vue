<template>
  <div>
    <h3 class="pt-20">Ukas bilde</h3>
    <img
      :src="url"
      alt="Tilfeldig bilde"
      class="w-64 pb-20 self-center"
      :key="weekNumber"
    />
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  weekNumber: number}>()

const url = ref<string>()

onMounted(async () => {
  const response = await fetch(`https://picsum.photos/id/${props.weekNumber}/600`);
  url.value = response.url;
})
</script>
