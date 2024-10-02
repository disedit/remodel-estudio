<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok"
    :class="[
      'centered-picture',
      {
        'full-height': blok.full_height,
        'has-width': blok.width && !blok.full_height
      }
    ]"
    :style="{ '--width': blok.width }"
  >
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
      padding: var(--site-padding-x);
      height: 100svh;
    }

    .centered-picture-media {
      height: 100%;
    }
  }

  &.has-width {
    .centered-picture-media {
      width: var(--width);
    }
  }
}

@include media('<md') {
  .centered-picture {
    &.full-height {
      .container {
        height: auto;
        padding: 0 var(--site-padding-x);
      }
    }
  }
}
</style>