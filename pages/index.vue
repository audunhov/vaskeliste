<template>
  <Vaskeliste :week-number="weekNumber"/>
</template>

<script setup lang="ts">
import {getWeek} from "date-fns"
import Vaskeliste from "~/components/Vaskeliste.vue";

const weekNumber = computed(() => {
  const now = new Date()
  return getWeek(now, {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  })
})
</script>
