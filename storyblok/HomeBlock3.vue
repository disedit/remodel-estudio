<script setup>
defineProps({ blok: Object })

const { internalLink } = useLinks()
</script>

<template>
  <section v-editable="blok" class="home-block">
    <NuxtLink :to="internalLink(blok.link_1)" class="picture picture-1">
      <UtilsHoverableMedia :media="blok.picture_1" :hover="blok.picture_1_hover" :width="800" class="picture-asset" />
    </NuxtLink>
    <NuxtLink :to="internalLink(blok.link_1)" class="caption caption-1">
      <UtilsRichText :content="blok.caption_1" />
    </NuxtLink>
    <div class="text text-1">
      <UtilsRichText :content="blok.text_1" />
    </div>
    <NuxtLink :to="internalLink(blok.link_2)" class="picture picture-2">
      <UtilsHoverableMedia :media="blok.picture_2" :hover="blok.picture_2_hover" :width="800" class="picture-asset" />
    </NuxtLink>
    <NuxtLink :to="internalLink(blok.link_2)" class="caption caption-2-above">
      <UtilsRichText :content="blok.caption_2_above" />
    </NuxtLink>
    <NuxtLink :to="internalLink(blok.link_2)" class="caption caption-2-below">
      <UtilsRichText :content="blok.caption_2_below" />
    </NuxtLink>
    <NuxtLink :to="internalLink(blok.link_3)" class="picture picture-3">
      <UtilsHoverableMedia :media="blok.picture_3" :hover="blok.picture_3_hover" :width="800" class="picture-asset" />
    </NuxtLink>
    <NuxtLink :to="internalLink(blok.link_3)" class="caption caption-3">
      <UtilsRichText :content="blok.caption_3" />
    </NuxtLink>
  </section>
</template>

<style lang="scss" scoped>
.home-block {
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(24, 1fr);
  height: 75vw;
}

.picture-1 {
  grid-area: 3 / 3 / 12 / 13;
}

.caption-1 {
  grid-area: 1 / 3 / 3 / 8;
  display: flex;
  align-items: flex-end;
  padding-bottom: var(--spacer-4);
}

.text-1 {
  grid-area: 6 / 11 / 9 / 16;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--gray-300);
}

.picture-2 {
  grid-area: 7 / 17 / 20 / 25;
}

.caption-2-above {
  grid-area: 5 / 17 / 7 / 21;
  display: flex;
  align-items: flex-end;
  padding-bottom: var(--spacer-4);
}

.caption-2-below {
  grid-area: 20 / 17 / 22 / 21;
  padding-top: var(--spacer-4);
}

.picture-3 {
  grid-area: 15 / 4 / 24 / 16;
}

.caption-3 {
  grid-area: 13 / 4 / 15 / 8;
  display: flex;
  align-items: flex-end;
  padding-bottom: var(--spacer-4);
}
</style>