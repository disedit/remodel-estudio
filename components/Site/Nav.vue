<script setup>
const settings = useState('settings')
const localePath = useLocalePath()
</script>

<template>
  <nav class="nav">
    <NuxtLink :to="localePath('/')" class="nav-logo" :aria-label="$t('assist.logo')">
      <SiteLogo />
    </NuxtLink>
  </nav>
</template>
