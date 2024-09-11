<script setup>
const settings = useState('settings')
const currentPicture = ref(0)
const hide = ref(false)
const maxPictures = settings.value.data.story.content.loading_screen.length
let interval

onMounted(() => {
  document.documentElement.classList.add('overflow-hidden')

  interval = setInterval(() => {
    if (currentPicture.value < maxPictures - 1) {
      currentPicture.value += 1
    } else {
      hide.value = true
      document.documentElement.classList.remove('overflow-hidden')
      clearInterval(interval)
    }
  }, 250)
})
</script>

<template>
  <Transition name="intro">
    <div v-if="!hide" class="loading-screen">
      <div class="loading-screen-mark">
        <SiteMark />
      </div>
      <div class="loading-screen-pictures">
        <div
          v-for="(picture, i) in settings.data.story.content.loading_screen"
          :key="picture.id"
          class="loading-screen-picture"
        >
          <NuxtImg
            v-show="currentPicture > i"
            :src="picture.filename"
          />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.loading-screen {
  overflow: clip;
  position: relative;
  height: 100vh;
  z-index: 950;

  &-picture {
    position: absolute;
    inset: 0;
    z-index: 10;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &-mark {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    z-index: 20;

    svg {
      height: 10vh;
      color: var(--white);
      opacity: .75;
    }
  }
}

.intro-enter-active,
.intro-leave-active {
  transition: height 2s cubic-bezier(.7,0,.3,1);
}

.intro-enter-from,
.intro-leave-to {
  height: 0;
}

</style>