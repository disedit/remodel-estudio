<script setup>
const props = defineProps({ blok: Object })
const { locale } = useI18n()
const { internalLink } = useLinks()
const version = useEnvironment()
const storyblokApi = useStoryblokApi()

const { data: projects } = await useAsyncData(
  'projects_' + props.blok._uid,
  async () => await storyblokApi.get(`cdn/stories`, {
    version,
    language: locale.value,
    excluding_fields: 'blocks',
    starts_with: `proyectos/`,
    sort_by: props.sort_by || 'sort_by_date:desc,content.name:asc',
    is_startpage: false
  })
)

const { data: categories } = await useAsyncData(
  'categories_' + props.blok._uid,
  async () => await storyblokApi.get(`cdn/datasource_entries`, {
    version,
    language: locale.value,
    datasource: 'categories',
  })
)

const selectedCategory = ref(null)
const filteredProjects = computed(() => {
  if (!selectedCategory.value) return projects.value.data.stories
  return projects.value.data.stories.filter(project => project.content.category === selectedCategory.value)
})

function setCategory(category) {
  selectedCategory.value = category
}
</script>

<template>
  <section v-editable="blok" class="projects">
    <div class="container padded">
      <nav class="categories">
        <a
          href="#"
          :class="{ active: selectedCategory === null }"
          @click.prevent="setCategory(null)"
        >
          Todos
        </a>
        <a
          :href="`#${category.value}`"
          v-for="category in categories.data.datasource_entries"
          :key="category.id"
          :class="{ active: selectedCategory === category.value }"
          @click.prevent="setCategory(category.value)"
        >
          {{ category.value }}
        </a>
      </nav>

      <ul class="project-gallery">
        <li
          v-for="project in filteredProjects"
          :key="project.uuid">
          <NuxtLink :to="internalLink(project.full_slug)">
            {{ project.content.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.project-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacer-4);
}

.categories {
  .active {
    font-weight: bold;
  }
}
</style>