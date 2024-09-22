<script setup>
const props = defineProps({ blok: Object })
</script>

<template>
  <div v-editable="blok" class="page">
    <h1 v-if="blok.sticky_title" class="page-title">
      {{ blok.sticky_title }}
    </h1>

    <StoryblokComponent
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>

<style lang="scss" scoped>
.page {
  &-title {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 900;
    text-transform: uppercase;
    font-size: var(--text-md);
    writing-mode: vertical-rl;
    text-orientation: mixed;
    padding: var(--spacer-5);
    text-align: center;
    color: var(--gray-700);
  }
}

@include media('<sm') { 
  .page {
    &-title {
      display: none;
    }
  }
}
</style>