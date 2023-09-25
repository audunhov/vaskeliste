<template>
  <Vaskeliste v-if="weekNumber" :week-number="weekNumber" @change="weekNumber = Math.max(Math.min($event,53), 1)"/>
</template>

<script setup lang="ts">
import {getWeek} from "date-fns"
import Vaskeliste from "~/components/Vaskeliste.vue";

const weekNumber = ref(0)

onMounted(() => {
  const now = new Date()
  weekNumber.value = getWeek(now, {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  })
})
</script>
