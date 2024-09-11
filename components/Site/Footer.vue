<script setup>
const settings = useState('settings')
</script>

<template>
  <footer class="footer bg-rose text-white">
    <div class="footer-logo">
      <SiteMark />
    </div>
    <div class="footer-socials">
      <ul>
        <li v-for="link in settings.data.story.content.footer_links" :key="link._uid">
          <a
            :href="link.link.cached_url"
            target="_blank"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
    <div class="footer-address">
      <UtilsRichText :content="settings.data.story.content.footer_address" />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: grid;
  grid-template-columns: 1fr auto auto;
  padding: var(--spacer-20) var(--site-padding-x);
  font-size: var(--text-base);
  gap: var(--spacer-20);

  &-logo svg {
    height: 3em;
  }

  &-address {
    text-align: right;
  }

  :deep(a) {
    color: var(--white);

    &:hover {
      text-decoration: underline;
    }
  }
}

@include media('<sm') {
  .footer {
    grid-template-columns: 1fr;
    gap: var(--site-padding-x);

    &-address {
      text-align: left;
    }
  }
}
</style>
