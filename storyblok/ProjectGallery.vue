<script setup>
import * as focusTrap from 'focus-trap'

const props = defineProps({ blok: Object })

let trap
const dialog = ref(null)
const galleryOpen = ref(false)
const currentPicture = ref(0)

function openGallery (index) {
  galleryOpen.value = true
  currentPicture.value = index
  document.documentElement.classList.add('overflow-hidden')
  nextTick(() => {
    trap = focusTrap.createFocusTrap(dialog.value)
    trap.activate()
    scrollToPicture(index)
  })
}

function closeGallery () {
  galleryOpen.value = false
  document.documentElement.classList.remove('overflow-hidden')
  dialog.value.close()
  trap && trap.deactivate()
}

function scrollToPicture (index) {
  console.log('scrolling to', index)
  const picture = document.getElementById(`picture-${index}`)
  picture.scrollIntoView()
  currentPicture.value = index
}

function scrollUp () {
  if (currentPicture.value > 0) {
    scrollToPicture(currentPicture.value - 1)
  }
}

function scrollDown () {
  if (currentPicture.value < props.blok.pictures.length - 1) {
    scrollToPicture(currentPicture.value + 1)
  } else {
    scrollToPicture(0)
  }
}
</script>

<template>
  <section v-editable="blok" class="project-gallery">
    <div class="container padded">
      <ul class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <li
          v-for="(picture, index) in blok.pictures"
          :key="picture.id"
        >
          <a
            :href="picture.filename"
            target="_blank"
            @click.prevent="openGallery(index)"
          >
            <NuxtImg
              :src="picture.filename"
              :alt="picture.alt"
              :width="500"
              class="project-gallery-picture"
            />
          </a>
        </li>
      </ul>
    </div>
    <Transition name="fade">
      <dialog v-if="galleryOpen" class="project-gallery-dialog" ref="dialog" open>
        <button @click="closeGallery" class="button button-close" :aria-label="$t('assist.close')">
          <IconPlus />
        </button>
        <button @click="scrollUp" class="button button-up" :aria-label="$t('assist.next')">
          <IconArrow />
        </button>
        <button @click="scrollDown" class="button button-down" :aria-label="$t('assist.prev')">
          <IconArrow />
        </button>
        <div class="project-gallery-dialog-pictures">
          <div
            v-for="(picture, index) in blok.pictures"
            :key="picture.id"
            :id="`picture-${index}`"
            class="project-gallery-dialog-picture"
          >
            <NuxtImg :src="picture.filename" :width="800" :alt="picture.alt" />
          </div>
        </div>
      </dialog>
    </Transition>
  </section>
</template>

<style lang="scss" scoped>
.project-gallery {
  margin: var(--spacer-10) 0;

  &-picture {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }

  &-dialog {
    display: block;
    position: fixed;
    inset: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    max-width: 100vw;
    max-height: 100vh;
    z-index: 2000;
    overflow: auto;
    scroll-behavior: smooth;

    &-pictures {
      display: flex;
      flex-direction: column;
    }

    &-picture {
      padding: var(--spacer-4);

      &:not(:last-child) {
        margin-bottom: calc(var(--spacer-4) * -1);
      }

      img {
        width: 100%;
        height: calc(100dvh - (var(--spacer-4) * 2));
        object-fit: contain;
      }
    }
  }
}

.button {
  appearance: none;
  position: fixed;
  z-index: 2100;
  background: var(--white);
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  color: var(--black);

  &:hover {
    background: var(--black);
    color: var(--white);
  }

  svg {
      width: 1.5rem;
      height: 1.5rem;
    }

  &-close {
    top: var(--site-padding-y);
    right: var(--site-padding-x);

    svg {
      rotate: 45deg;
    }
  }

  &-up {
    left: 50%;
    top: var(--site-padding-y);
    translate: -50% 0;
  }
  
  &-down {
    bottom: var(--site-padding-y);
    left: 50%;
    translate: -50% 0;

    svg {
      rotate: 180deg;
    }
  }
}
</style>