<script setup>
defineProps({ blok: Object })
</script>

<template>
  <section v-editable="blok" class="home-block">
    <div class="picture picture-1">
      <UtilsMedia :media="blok.picture_1" :width="600" class="picture-asset" />
    </div>
    <div class="caption caption-1-above">
      <UtilsRichText :content="blok.caption_1_above" />
    </div>
    <div class="caption caption-1-below">
      <UtilsRichText :content="blok.caption_1_below" />
    </div>
    <div class="text text-1">
      <UtilsRichText :content="blok.text_1" />
    </div>
    <div class="picture picture-2">
      <UtilsMedia :media="blok.picture_1" :width="500" class="picture-asset" />
    </div>
    <div class="caption caption-2">
      <UtilsRichText :content="blok.caption_2" />
    </div>
    <div class="text text-2">
      <UtilsRichText :content="blok.text_2" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home-block {
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(24, 1fr);
  height: 72.4vw;
}

.picture-1 {
  grid-area: 6 / 5 / 22 / 12;
}

.caption-1-above {
  grid-area: 4 / 7 / 6 / 12;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-bottom: var(--spacer-4);
}

.caption-1-below {
  grid-area: 22 / 5 / 24 / 10;
  padding-top: var(--spacer-4);
}

.text-1 {
  grid-area: 16 / 2 / 20 / 9;
}

.picture-2 {
  grid-area: 1 / 15 / 17 / 21;
}

.caption-2 {
  grid-area: 17 / 15 / 19 / 20;
  padding-top: var(--spacer-4);
}

.text-2 {
  grid-area: 20 / 18 / 23 / 23;
}
</style>