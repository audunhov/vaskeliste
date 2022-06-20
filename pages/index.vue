<template>
  <div>
    <nav
      class="navbar navbar-expand-lg shadow-md p-2 bg-white relative flex items-center w-full justify-between"
    >
      <h1>Vaskeliste</h1>
    </nav>
    <div class="flex flex-col justify-center text-center text-gray-800 py-10">
      <h1 class="text-3xl pb-10">Uke: {{ weekNumber }}</h1>

      <List :weekNumber="weekNumber" class="text-4xl" />

      <h3 class="pt-20">Ukas bilde</h3>
      <img
        :src="`https://picsum.photos/id/${weekNumber}/200/200`"
        alt="Tilfeldig bilde"
        class="w-100 pb-20 self-center"
      />
      <h2>Neste uke:</h2>
      <List :weekNumber="weekNumber + 1" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
  computed: {
    weekNumber() {
      let now = new Date();
      let onejan = new Date(now.getFullYear(), 0, 1);
      let weekNumber = Math.ceil(
        ((now.getTime() - onejan.getTime()) / 86400000 + onejan.getDay() + 1) /
          7
      );
      return weekNumber - 1;
    },
  },
});
</script>
