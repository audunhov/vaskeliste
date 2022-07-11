<template>
  <div>
    <h3 class="pt-20">Ukas bilde</h3>
    <img
      :src="`https://picsum.photos/id/${weekNumber}/600/600`"
      alt="Tilfeldig bilde"
      class="w-64 pb-20 self-center"
      :key="weekNumber"
    />
  </div>
</template>

<script>
export default {
  props: ["weekNumber"],
};
</script>
