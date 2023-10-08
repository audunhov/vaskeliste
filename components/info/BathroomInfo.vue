<script setup lang="ts">

import TextEditor from "~/components/TextEditor.vue";
</script>

<template>
  <div >
    <ClientOnly>
      <TextEditor name="bathroom" />
    </ClientOnly>
  </div>
</template>

