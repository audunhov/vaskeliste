<template>
  <div>
    <h3 class="pt-20">Ukas bilde</h3>
    <img
      :src="url"
      alt="Tilfeldig bilde"
      class="w-64 pb-20 self-center"
      :key="weekNumber"
    />
  </div>
</template>

<script>
export default {

  data() {
    return {
      url: null,
    }
  },

  async created() {
    // get picture from picsum using week number as id
    const {url} = await fetch(`https://picsum.photos/id/${this.weekNumber}/600`);
    this.url = url;

  },

  props: ["weekNumber"],
};
</script>
