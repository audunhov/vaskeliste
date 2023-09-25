<template>
  <Vaskeliste :week-number="parseInt($route.params.week)" />
</template>

<script setup lang="ts">
import Vaskeliste from "~/components/Vaskeliste.vue";
</script>