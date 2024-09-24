<script setup>
const props = defineProps({
  media: { type: Object, required: true },
  width: { type: Number, default: null }
})

const isVideo = props.media.filename.endsWith('mp4')
</script>

<template>
  <video v-if="isVideo" :src="media.filename" playsinline muted autoplay loop />
  <NuxtImg v-else :src="media.filename" :width="width" :alt="media.alt" />
</template>
