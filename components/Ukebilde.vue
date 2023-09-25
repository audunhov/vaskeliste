<template>
    <img
      :src="`https://picsum.photos/id/${weekNumber}/600`"
      alt="Ukas bilde"
      class="object-cover"
      :key="weekNumber"
    />
</template>

<script setup lang="ts">
defineProps<{
  weekNumber: number}>()
</script>
