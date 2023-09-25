<template>
  <div>
    <nav
      class="
        navbar navbar-expand-lg
        shadow-md
        p-2
        bg-white
        relative
        flex
        items-center
        w-full
        justify-between
      "
    >
      <h1>Vaskeliste</h1>
      <a href="https://github.com/audunhov/vaskeliste"
        ><img
          src="https://github.githubassets.com/pinned-octocat.svg"
          class="h-6"
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
import {defineComponent} from "vue";
import Ukebilde from "~/components/Ukebilde.vue";

export default defineComponent({
  name: "IndexPage",
  computed: {
    weekNumber() {
      const now = new Date()
      const d = new Date(
        Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
      );
      const dayNum = d.getUTCDay() || 7;
      d.setUTCDate(d.getUTCDate() + 4 - dayNum);
      const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
      return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
    },
  },
  components: { Ukebilde },
});
</script>
