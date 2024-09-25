<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" :class="['two-pictures', { 'full-height': blok.full_height }]">
    <div class="container padded grid gap-8 md:grid-cols-2 items-center">
      <div class="picture"><UtilsMedia :media="blok.picture_1" /></div>
      <div class="picture"><UtilsMedia :media="blok.picture_2" /></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.two-pictures {
  .picture img {
    max-width: 100%;
    object-fit: contain;
  }

  .container {
    gap: var(--site-padding-x);
    align-items: center;
  }

  &.full-height {
    .container {
      display: flex;
      height: 100vh;
      padding: var(--site-padding-x);
      height: 100vh;
      justify-content: space-evenly;
    }

    .picture {
      position: relative;
      height: 100%;

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        inset: 0;
        object-fit: contain;
        display: block;
      }
    }
  }
}
</style>