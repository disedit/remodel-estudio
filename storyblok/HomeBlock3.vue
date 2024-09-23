<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" class="home-block">
    <div class="picture picture-1">
      <UtilsMedia :media="blok.picture_1" :width="800" class="picture-asset" />
    </div>
    <div class="text text-1">
      <UtilsRichText :content="blok.text_1" />
    </div>
    <div class="picture picture-2">
      <UtilsMedia :media="blok.picture_2" :width="800" class="picture-asset" />
    </div>
    <div class="caption caption-2-above">
      <UtilsRichText :content="blok.caption_2_above" />
    </div>
    <div class="caption caption-2-below">
      <UtilsRichText :content="blok.caption_2_below" />
    </div>
    <div class="picture picture-3">
      <UtilsMedia :media="blok.picture_3" :width="800" class="picture-asset" />
    </div>
    <div class="caption caption-3">
      <UtilsRichText :content="blok.caption_3" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home-block {
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(23, 1fr);
  height: 75vw;
}

.picture-1 {
  grid-area: 2 / 3 / 11 / 13;
}

.text-1 {
  grid-area: 5 / 11 / 8 / 16;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--gray-300);
}

.picture-2 {
  grid-area: 6 / 17 / 19 / 25;
}

.caption-2-above {
  grid-area: 4 / 17 / 6 / 21;
  display: flex;
  align-items: flex-end;
  padding-bottom: var(--spacer-4);
}

.caption-2-below {
  grid-area: 19 / 17 / 21 / 21;
  padding-top: var(--spacer-4);
}

.picture-3 {
  grid-area: 14 / 4 / 23 / 16;
}

.caption-3 {
  grid-area: 12 / 4 / 14 / 8;
  display: flex;
  align-items: flex-end;
  padding-bottom: var(--spacer-4);
}
</style>