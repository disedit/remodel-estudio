<script setup>
const props = defineProps({ blok: Object })
const showDescription = ref(false)
</script>

<template>
  <section v-editable="blok" class="project-header">
    <div class="container padded grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16">
      <div class="col">
        <h1 class="project-header-title mb-6">
          <UtilsRichText :content="blok.title" />
        </h1>
        <button class="toggle-description" @click="showDescription = true" v-if="!showDescription">
          <IconPlus />
        </button>
        <Transition name="fade">
          <div class="project-header-description" v-if="showDescription">
            <UtilsRichText :content="blok.description" />
          </div>
        </Transition>
      </div>
      <div class="col">
        <UtilsMedia :media="blok.media" :width="600" class="project-header-picture" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.project-header {
  &-title {
    font-size: var(--text-xl);
    line-height: 1.1;
  }

  &-picture {
    width: 100%;
  }

  &-description {
    font-size: var(--text-md);
    font-weight: 300;

    &:deep(p) {
      margin-bottom: 1em;
    }
  }
}

.toggle-description {
  svg {
    height: 2em;
    width: 2em;
  }
}
</style>