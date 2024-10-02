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
          @mouseenter="showingAfter = false"
          :aria-controls="`before-after-${blok._uid}`"
          :aria-pressed="showingAfter ? 'false' : 'true'"
        >
          {{ $t('comparison.before') }}
        </button>
        {{ $t('comparison.and') }}
        <button
          @click="showingAfter = true"
          @mouseenter="showingAfter = true"
          :aria-controls="`before-after-${blok._uid}`"
          :aria-pressed="showingAfter ? 'true' : 'false'"
        >
          {{ $t('comparison.after') }}
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
    font-size: var(--text-md);
    font-weight: 300;

    button {
      font-weight: 300;

      &:hover {
        text-decoration: underline;
        text-decoration-thickness: 1px;
        text-underline-offset: .1em;
      }

      &[aria-pressed='true'] {
        font-weight: bold;
        text-decoration-thickness: 2px;
      }
    }
  }
}
</style>