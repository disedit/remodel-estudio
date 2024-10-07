<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" class="generic-text">
    <div class="container container-sm padded">
      <h1 v-if="blok.heading" class="generic-text-title">
        {{ blok.heading }}
      </h1>
      <UtilsRichText :content="blok.content" class="generic-text-content" />
    </div>
  </section>
</template>

<style lang="scss">
.generic-text {
  &-title {
    color: var(--primary);
    font-size: var(--text-4xl);
    font-weight: bold;
  }

  p {
    margin-bottom: 1rem;
    font-size: var(--text-base);
  }

  h1 {
    font-size: var(--text-3xl);
  }

  h2 {
    font-size: var(--text-lg);
  }

  h3 {
    font-size: var(--text-md);
  }

  ul {
    list-style: disc;
    padding-left: 1.5rem;
  }

  ol {
    list-style: decimal;
    padding-left: 1.5rem;
  }
}
</style>