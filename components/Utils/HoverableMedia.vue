<script setup>
const props = defineProps({
  media: { type: Object, required: true },
  hover: { type: Object, default: null },
  width: { type: Number, default: null }
})

const isVideo = props.media && props.media.filename && props.media.filename.endsWith('mp4')
const isHoverVideo = props.hover && props.hover.filename && props.hover?.filename?.endsWith('mp4')
</script>

<template>
  <div class="hoverable-media relative">
    <video
      v-if="isVideo"
      :src="media.filename"
      class="media"
      playsinline
      muted
      autoplay
      loop
    />
    <NuxtImg
      v-else
      :src="media.filename"
      :width="width"
      :alt="media.alt"
      class="media"
    />
    
    <div class="hoverable">
      <video
        v-if="isHoverVideo"
        :src="hover.filename"
        class="media"
        playsinline
        muted
        autoplay
        loop
      />
      <NuxtImg
        v-else-if="hover && hover.filename"
        :src="hover.filename"
        :width="width"
        :alt="hover.alt"
        class="media"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hoverable-media {
  display: flex;

  .media {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .hoverable {
    display: flex;
    opacity: 0;
    position: absolute;
    inset: 0;
    transition: .25s ease;
  }

  &:hover {
    .hoverable {
      opacity: 1;
    }
  }
}
</style>