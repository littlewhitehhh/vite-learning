<script lang="ts" setup>
import style from "./index.module.scss";

console.log("style", style);
</script>
<template>
  <div class="header">This is Header</div>
  <div :class="style.header">This is Header</div>
</template>

<style scoped lang="scss">
@import "./index.scss";
// .header {
//   color: $theme-color;
// }
</style>
