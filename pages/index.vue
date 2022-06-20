<template>
  <div>
    <nav
      class="navbar navbar-expand-lg shadow-md p-2 bg-white relative flex items-center w-full justify-between"
    >
      <h1>Vaskeliste</h1>
    </nav>
    <List />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
});
</script>
