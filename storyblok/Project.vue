<script setup>
const props = defineProps({ blok: Object })

// Fetch next page
const { internalLink } = useLinks()
const { slug } = useRoute().params
const { locale } = useI18n()
const version = useEnvironment()
const storyblokApi = useStoryblokApi()
const { data } = await useAsyncData('nextProject', async () => await storyblokApi.get(`cdn/stories`, {
    starts_with: 'proyectos/',
    sort_by: 'sort_by_date:desc,created_at:desc',
    excluding_fields: 'blocks,thumbnail,description,title',
    is_startpage: 0,
    language: locale.value,
    version
}))
const orderedPages = data.value.data.stories
const currentIndex = orderedPages.findIndex(page => slug[1] === page.slug)
const nextPage = computed(() => {
  if (currentIndex + 1 >= orderedPages.length) {
    return orderedPages[0]
  }
  return orderedPages[currentIndex + 1]
})

const nextLink = computed(() => {
  return internalLink(nextPage.value.full_slug)
})
</script>

<template>
  <div v-editable="blok" class="page">
    <h1 class="page-title">
      {{ blok.title }}
    </h1>

    <div class="flex flex-col gap-24 mb-24">
      <StoryblokComponent
        v-for="blok in blok.blocks"
        :key="blok._uid"
        :blok="blok"
      />
    </div>

    <div class="container padded grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
      <div class="project-details">
        <UtilsRichText :content="blok.details" />
      </div>
      <div class="project-next">
        <NuxtLink :to="nextLink" class="text-black hover:underline">
          {{ $t('projects.next') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  &-title {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 900;
    text-transform: uppercase;
    font-size: var(--text-md);
    writing-mode: vertical-rl;
    text-orientation: mixed;
    padding: var(--spacer-5);
    text-align: center;
    color: var(--gray-700);
  }
}

.project-details {
  font-weight: 300;
  font-size: var(--text-base);
  line-height: 1.5;

  &:deep(strong),
  &:deep(b) {
    font-weight: 800;
  }
}

.project-next {
  display: flex;
  align-items: flex-end;
  width: 100px;
  margin-inline-start: auto;
  text-align: right;
  font-size: var(--text-base);
  line-height: 1.25;
}

@include media('<sm') { 
  .page {
    &-title {
      display: none;
    }
  }
}
</style>