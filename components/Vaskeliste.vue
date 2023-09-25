<template>
  <div>
    <div class="flex flex-col gap-10 justify-center text-gray-800">

      <div class="p-5 rounded-2xl bg-white shadow-sm">
        <div class="relative isolate grid place-items-center rounded-lg overflow-hidden">
          <Ukebilde :weekNumber="weekNumber" class="w-full h-64"/>
          <div class="absolute h-full w-full z-10 from-transparent to-black/50 bg-gradient-to-b"/>
          <h1 class="text-6xl text-white font-semibold absolute z-10">Uke: {{ weekNumber }}</h1>
        </div>
      </div>

      <div class="p-5 rounded-2xl bg-white shadow-sm">
        <List :weekNumber="weekNumber"/>
      </div>

      <div class="p-5 space-y-5 rounded-2xl bg-white shadow-sm">
        <NuxtLink :to="`${weekNumber + 1}`"
                  class="p-3 cursor-pointer block bg-blue-600 rounded-lg shadow-sm font-semibold hover:bg-blue-500 text-center text-white">
          Neste uke
        </NuxtLink>


        <NuxtLink :to="`${weekNumber - 1}`"
                  class="p-3 cursor-pointer block bg-opacity-80 bg-blue-600 rounded-lg shadow-sm font-semibold hover:bg-blue-500 text-center text-white">
          Forrige uke
        </NuxtLink>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  weekNumber: number
}>()
</script>