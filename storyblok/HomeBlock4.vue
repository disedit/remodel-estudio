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
    <NuxtLink :to="internalLink(blok.link_2)" :target="target(blok.link_2)" class="caption caption-2-above">
      <UtilsRichText :content="blok.caption_2_above" />
    </NuxtLink>
    <NuxtLink :to="internalLink(blok.link_2)" :target="target(blok.link_2)" class="caption caption-2-below">
      <UtilsRichText :content="blok.caption_2_below" />
    </NuxtLink>
    <NuxtLink :to="internalLink(blok.link_3)" :target="target(blok.link_3)" class="picture picture-3">
      <UtilsHoverableMedia :media="blok.picture_3" :hover="blok.picture_3_hover" :width="800" class="picture-asset" />
    </NuxtLink>
    <NuxtLink :to="internalLink(blok.link_3)" :target="target(blok.link_3)" class="caption caption-3">
      <UtilsRichText :content="blok.caption_3" />
    </NuxtLink>
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