<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" :class="['centered-picture', { 'full-height': blok.full_height }]">
    <div class="container padded">
      <UtilsMedia :media="blok.media" class="centered-picture-media" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.centered-picture {
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-media {
    max-width: 100%;
    object-fit: contain;
  }

  &.full-height {
    .container {
      height: 100vh;
      padding: 10vh var(--site-padding-x);
      height: 100vh;
    }

    .centered-picture-media {
      height: 100%;
    }
  }
}
</style>