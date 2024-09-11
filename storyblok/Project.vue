<script setup>
const props = defineProps({ blok: Object })
</script>

<template>
  <div v-editable="blok" class="page">
    <h1 class="page-title">
      {{ $t('projects.title') }}
    </h1>

    <StoryblokComponent
      v-for="blok in blok.blocks"
      :key="blok._uid"
      :blok="blok"
    />
    <pre>{{ blok }}</pre>
    <div class="container padded">
      Details and next
    </div>
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
</style>