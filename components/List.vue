<template>
  <div
    class="text-center text-gray-800 py-20 px-6 flex flex-col justify-center"
  >
    <h1 class="text-3xl pb-10">Uke: {{ weekNumber }}</h1>
    <h2 class="text-4xl" v-for="person in people">
      {{ person }}
    </h2>
    <h3 class="pt-20">Ukas bilde:</h3>
    <img
      :src="`https://picsum.photos/id/${weekNumber}/200/200`"
      alt="Tilfeldig bilde"
      class="w-100 pb-20 self-center"
    />
  </div>
</template>

<script>
export default {
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
    people() {
      let names = ["Audun", "Ane", "Joachim", "Camila", "Sindre"];
      let p0 = (this.weekNumber + 0) % names.length;
      let p1 = (this.weekNumber + 1) % names.length;
      let p2 = (this.weekNumber + 2) % names.length;
      return [names[p0], names[p1], names[p2]];
    },
  },
};
</script>
