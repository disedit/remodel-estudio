<script setup>
const settings = useState('settings')
</script>

<template>
  <footer class="footer bg-rose text-white">
    <div class="footer-logo">
      <SiteMark />
    </div>
    Footer
    <pre>{{ settings.data.story.content.footer_links }}</pre>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: var(--spacer-20) var(--site-padding-x);
  font-size: var(--text-base);

  &-logo svg {
    height: 3em;
  }
}
</style>
