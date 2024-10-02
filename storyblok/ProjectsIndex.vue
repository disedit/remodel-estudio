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
    dimension: 'en'
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
          {{ $t('projects.all') }}
        </a>
        <a
          :href="`#${category.value}`"
          v-for="category in categories.data.datasource_entries"
          :key="category.id"
          :class="{ active: selectedCategory === category.value }"
          @click.prevent="setCategory(category.value)"
        >
          {{ locale === 'es' ? category.value : category.dimension_value }}
        </a>
      </nav>

      <ul class="project-gallery">
        <li
          v-for="project in filteredProjects"
          :key="project.uuid"
          class="project">
          <NuxtLink :to="internalLink(project.full_slug)">
            <NuxtImg
              :src="project.content.thumbnail.filename"
              :alt="project.content.thumbnail.alt"
              sizes="50vw md:500px"
            />
            <div class="project-overlay">
              <h2>{{ project.content.title }}</h2>
              <UtilsRichText class="project-description" :content="project.content.description" />
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.project-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--col-width, 20vw), 1fr));
  gap: var(--spacer-5);
}

.project {
  position: relative;

  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }

  &-overlay {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: .25s ease;
    padding: 15%;

    h2 {
      color: var(--white);
      font-size: var(--text-lg);
      font-weight: bold;
      text-transform: uppercase;
    }

    .project-description {
      font-size: var(--text-sm);
      color: var(--white);
      margin-top: var(--spacer-4);
    }
  }

  &:hover .project-overlay {
    opacity: 1;
  }
}

.categories {
  font-size: var(--text-lg);
  display: flex;
  column-gap: 1em;
  justify-content: center;
  font-weight: 300;
  text-transform: uppercase;
  margin-block: var(--spacer-10);
  flex-wrap: wrap;

  a {
    color: var(--black);

    &.active {
      font-style: italic;
      color: var(--primary);
    }
  }
}

@include media('<xl') {
  .project-gallery {
    --col-width: 300px;
  }

  .categories {
    font-size: var(--text-md);
  }
}
</style>