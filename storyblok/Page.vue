<script setup>
const props = defineProps({ blok: Object })
</script>

<template>
  <div v-editable="blok" class="page">
    Page
    <div v-if="blok.sticky_title" class="sticky-title">
      {{ blok.sticky_title }}
    </div>
  </div>
</template>
