<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" :class="['full-picture', { 'screen-height': blok.screen_height }]">
    <UtilsMedia :media="blok.media" class="full-picture-media" />
  </section>
</template>

<style lang="scss" scoped>
.full-picture {
  &-media {
    width: 100%;
  }

  &.screen-height {
    .full-picture-media {
      height: 100vh;
      object-fit: cover;
    }
  }
}
</style>