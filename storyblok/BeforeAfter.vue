<script setup>
defineProps({ blok: Object })
const showingAfter = ref(false)
</script>

<template>
  <section v-editable="blok" class="before-after" :style="{ '--width': blok.width }">
    <div class="container padded">
      <div
        class="before-after-pictures"
        :id="`before-after-${blok._uid}`"
        @mouseenter="showingAfter = true"
        @mouseleave="showingAfter = false"
      >
        <NuxtImg
          :src="blok.before.filename"
          :alt="blok.before.alt"
          :class="['before-picture', { shown: !showingAfter }]"
        />
        <NuxtImg
          :src="blok.after.filename"
          :alt="blok.after.alt"
          :class="['after-picture', { shown: showingAfter }]"
        />
      </div>
      <div class="before-after-controls">
        <button
          @click="showingAfter = false"
          :aria-controls="`before-after-${blok._uid}`"
          :aria-pressed="showingAfter ? 'false' : 'true'"
        >
          Antes
        </button>
        and
        <button
          @click="showingAfter = true"
          :aria-controls="`before-after-${blok._uid}`"
          :aria-pressed="showingAfter ? 'true' : 'false'"
        >
          after
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.before-after {
  &-pictures {
    display: grid;
  }

  .container {
    max-width: var(--width);
  }

  .before-picture,
  .after-picture {
    grid-area: 1 / 1;
    width: 100%;
    transition: .25s ease;
    opacity: 0;

    &.shown {
      opacity: 1;
    }
  }

  &-controls {
    button {
      font-weight: normal;

      &:hover {
        text-decoration: underline;
      }

      &[aria-pressed='true'] {
        font-weight: bold;
      }
    }
  }
}
</style>