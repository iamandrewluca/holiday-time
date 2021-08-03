<template>
  <div>
    <slot />
  </div>
</template>

<style scoped lang="scss">
$space: 20px;
$breakpoints: 640px, 768px, 1024px, 1280px, 1536px;

div {
  margin-left: auto;
  margin-right: auto;
  padding-left: $space;
  padding-right: $space;
  width: 100%;
}

@each $breakpoint in $breakpoints {
  @media (min-width: #{$breakpoint}) {
    div {
      max-width: #{$breakpoint};
    }
  }
}
</style>
