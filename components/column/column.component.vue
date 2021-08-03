<template>
  <div :class="$style.column">
    <slot />
  </div>
</template>

<style module lang="scss">
@use "../variables" as variables;

.column {
  max-width: 100%;
  padding-left: variables.$gutter;
  padding-right: variables.$gutter;
}
</style>
