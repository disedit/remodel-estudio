<script setup>
const siteSettings = await useSettings()

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

useHead({
  htmlAttrs: { lang: head.value.htmlAttrs.lang, dir: head.value.htmlAttrs.dir },
  link: head.value.link,
  meta: head.value.meta
})
</script>

<template>
  <div class="font-sans">
    <NuxtLoadingIndicator :color="false" />
    <SiteLoadScreen />
    <SiteNav />
    <main class="page">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<style lang="scss">
.page {
  min-height: calc(100vh - var(--navbar-safe-area));
  min-height: calc(100svh - var(--navbar-safe-area));
}

.nuxt-loading-indicator {
  background: var(--yellow);
  top: 0;
}
</style>