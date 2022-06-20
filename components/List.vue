<template>
  <div>
    <h2 v-for="person in people">{{ person }}</h2>
  </div>
</template>

<script>
export default {
  props: ["weekNumber"],
  computed: {
    people() {
      let names = ["Audun", "Ane", "Joachim", "Camila", "Sindre"];
      let p0 = (this.weekNumber + 0) % names.length;
      let p1 = (this.weekNumber + 2) % names.length;
      let p2 = (this.weekNumber + 4) % names.length;
      return [names[p0], names[p1], names[p2]];
    },
  },
};
</script>
