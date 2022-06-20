<template>
  <div>
    <nav
      class="navbar navbar-expand-lg shadow-md p-2 bg-white relative flex items-center w-full justify-between"
    >
      <h1>Vaskeliste</h1>
      <a href="https://github.com/audunhov/vaskeliste"
        ><img src="../static/GitHub-Mark-64px.png" class="h-6"
      /></a>
    </nav>
    <div class="flex flex-col justify-center text-center text-gray-800 py-10">
      <h1 class="text-3xl pb-10">Uke: {{ weekNumber }}</h1>

      <List :weekNumber="weekNumber" class="text-4xl" />
      <Ukebilde :weekNumber="weekNumber" class="flex flex-col justify-center" />

      <h2>Neste uke:</h2>
      <List :weekNumber="weekNumber + 1" class="flex justify-center gap-6" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Ukebilde from "~/components/Ukebilde.vue";

export default Vue.extend({
  name: "IndexPage",
  computed: {
    weekNumber() {
      const now = new Date();
      const onejan = new Date(now.getFullYear(), 0, 1);
      const weekNumber = Math.ceil(
        ((now.getTime() - onejan.getTime()) / 86400000 + onejan.getDay() + 1) /
          7
      );
      return weekNumber - 1;
    },
    language() {
      return {
        language: this.$store.state.language,
      };
    },
  },
  components: { Ukebilde },
});
</script>
