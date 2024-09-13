<script setup>
const props = defineProps({
  media: { type: Object, required: true }
})

const isVideo = props.media.filename.endsWith('mp4')
</script>

<template>
  <video v-if="isVideo" :src="media.filename" />
  <NuxtImg v-else :src="media.filename" :alt="media.alt" />
</template>
