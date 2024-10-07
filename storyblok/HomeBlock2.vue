<script setup>
defineProps({ blok: Object })

const { internalLink, target } = useLinks()
</script>

<template>
  <section v-editable="blok" class="home-block">
    <NuxtLink :to="internalLink(blok.link_1)" :target="target(blok.link_1)" class="picture picture-1">
      <UtilsHoverableMedia :media="blok.picture_1" :hover="blok.picture_1_hover" :width="800" class="picture-asset" />
    </NuxtLink>
    <NuxtLink :to="internalLink(blok.link_1)" :target="target(blok.link_1)" class="caption caption-1">
      <UtilsRichText :content="blok.caption_1" />
    </NuxtLink>
    <div class="text text-1">
      <UtilsRichText :content="blok.text_1" />
    </div>
    <NuxtLink :to="internalLink(blok.link_2)" :target="target(blok.link_2)" class="picture picture-2">
      <UtilsHoverableMedia :media="blok.picture_2" :hover="blok.picture_2_hover" :width="800" class="picture-asset" />
    </NuxtLink>
    <NuxtLink :to="internalLink(blok.link_2)" :target="target(blok.link_2)" class="caption caption-2">
      <UtilsRichText :content="blok.caption_2" />
    </NuxtLink>
    <div class="text text-2">
      <UtilsRichText :content="blok.text_2" />
    </div>
    <NuxtLink :to="internalLink(blok.link_3)" :target="target(blok.link_3)" class="picture picture-3">
      <UtilsHoverableMedia :media="blok.picture_3" :hover="blok.picture_3_hover" :width="800" class="picture-asset" />
    </NuxtLink>
    <NuxtLink :to="internalLink(blok.link_3)" :target="target(blok.link_3)" class="caption caption-3">
      <UtilsRichText :content="blok.caption_3" />
    </NuxtLink>
    <NuxtLink :to="internalLink(blok.link_4)" :target="target(blok.link_4)" class="picture picture-4">
      <UtilsHoverableMedia :media="blok.picture_4" :hover="blok.picture_4_hover" :width="800" class="picture-asset" />
    </NuxtLink>
    <NuxtLink :to="internalLink(blok.link_4)" :target="target(blok.link_4)" class="caption caption-4">
      <UtilsRichText :content="blok.caption_4" />
    </NuxtLink>
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
  height: 141vw;
}

.picture-1 {
  grid-area: 6 / 3 / 15 / 12;
}

.caption-1 {
  grid-area: 4 / 3 / 6 / 8;
  display: flex;
  align-items: flex-end;
  padding-bottom: var(--spacer-4);
}

.text-1 {
  grid-area: 9 / 10 / 12 / 15;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--gray-300);
}

.picture-2 {
  grid-area: 5 / 16 / 22 / 25;
}

.caption-2 {
  grid-area: 3 / 20 / 5 / 25;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: right;
  padding: var(--spacer-6);
  font-weight: 400;
}

.text-2 {
  grid-area: 17 / 13 / 20 / 19;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: var(--text-2xl);
}

.picture-3 {
  grid-area: 18 / 1 / 31 / 9;
}

.caption-3 {
  grid-area: 31 / 5 / 33 / 9;
  display: flex;
  justify-content: flex-end;
  padding-top: var(--spacer-4);
}

.picture-4 {
  grid-area: 27 / 12 / 36 / 24;
}

.caption-4 {
  grid-area: 25 / 12 / 27 / 18;
  display: flex;
  align-items: flex-end;
  padding-bottom: var(--spacer-4);
}

.text-4 {
  grid-area: 23 / 19 / 26 / 24;
  color: var(--gray-300);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
}
</style>