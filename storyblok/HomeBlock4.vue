<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" class="home-block">
    <div class="picture picture-1">
      <UtilsMedia :media="blok.picture_1" :width="800" class="picture-asset" />
    </div>
    <div class="caption caption-1">
      <UtilsRichText :content="blok.caption_1" />
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
    <div class="text text-3">
      <UtilsRichText :content="blok.text_3" />
    </div>
    <div class="text text-4">
      <UtilsRichText :content="blok.text_4" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home-block {
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(36, 1fr);
  height: 117vw;
}

.picture-1 {
  grid-area: 4 / 2 / 15 / 11;
}

.caption-1 {
  grid-area: 2 / 2 / 4 / 6;
  display: flex;
  align-items: flex-end;
  padding-bottom: var(--spacer-4);
}

.text-1 {
  grid-area: 9 / 7 / 14 / 14;
  font-size: var(--text-2xl);
  display: flex;
  justify-content: center;
  align-items: center;
}

.picture-2 {
  grid-area: 9 / 14 / 24 / 24;
}

.caption-2-above {
  grid-area: 7 / 14 / 9 / 18;
  display: flex;
  align-items: flex-end;
  padding-bottom: var(--spacer-4);
}

.caption-2-below {
  grid-area: 24 / 14 / 26 / 18;
  padding-top: var(--spacer-4);
}

.picture-3 {
  grid-area: 17 / 4 / 31 / 13;
}

.caption-3 {
  grid-area: 31 / 4 / 33 / 8;
  padding-top: var(--spacer-4);
}

.text-3 {
  grid-area: 23 / 2 / 27 / 7;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-300);
  font-weight: bold
}

.text-4 {
  grid-area: 32 / 15 / 36 / 22;
  font-size: var(--text-2xl);
}
</style>