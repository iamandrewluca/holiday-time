<template>
  <div :class="$style.row">
    <slot />
  </div>
</template>

<style module lang="scss">
@use "../variables" as variables;

.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: variables.$gutter * -1;
  margin-right: variables.$gutter * -1;
}
</style>
