<script setup>
import * as focusTrap from 'focus-trap'

const settings = useState('settings')
const localePath = useLocalePath()
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const { internalLink } = useLinks()

/* Hide/Show nav bar on scorll */
const { y } = useWindowScroll()
const showNavbar = ref(true)
const lastScrollPosition = ref(0)
const scrolled = computed(() => y.value > 200 && showNavbar.value)

watch(y, (currentScrollPosition) => {
  if (scrolled.value || menuOpen.value) {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#fbecf1')
  } else {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#ffffff')
  }

  if (currentScrollPosition < 0 || Math.abs(currentScrollPosition - lastScrollPosition.value) < 60) {
    return
  }
  showNavbar.value = currentScrollPosition < lastScrollPosition.value
  lastScrollPosition.value = currentScrollPosition
})

let trap
const nav = ref()
const menuOpen = ref(false)
const hovering = ref(null)

const showMenu = () => {
  menuOpen.value = true
  document.documentElement.classList.add('overflow-hidden')
  trap = focusTrap.createFocusTrap(nav.value)
  trap.activate()
}
const hideMenu = () => {
  menuOpen.value = false
  document.documentElement.classList.remove('overflow-hidden')
  trap && trap.deactivate()
}

function toggleMenu() {
  const action = menuOpen.value ? hideMenu : showMenu
  action()
}

/* Menu animations */
const { $gsap } = useNuxtApp()
let timeline

function beforeEnter(el) {
  $gsap.set(el, { opacity: 0 })
}

function onEnter(el, done) {
  $gsap.set('.menu .animate', { y: '105%' })
  timeline = $gsap.timeline()

  timeline.to(el, {
    opacity: 1,
    duration: .5,
    ease: 'power4.out',
  }).to('.menu .animate', {
    y: 0,
    duration: .25,
    ease: 'power4.out',
    stagger: .1,
    onComplete: done
  }, "-=.5s")
}

function onLeave (el, done) {
  timeline = $gsap.timeline()
  timeline.to('.menu .animate', {
    y: '105%',
    duration: .25,
    stagger: {
      amount: .25,
      from: 'end'
    },
  }).to(el, {
    opacity: 0,
    duration: .5,
    ease: 'power4.in',
    onComplete: done
  }, "-=.25s")
}

function onEnterCancelled() {
  timeline && timeline.kill()
}

function onLeaveCancelled() {
  timeline && timeline.kill()
}
</script>

<template>
  <div class="nav-wrapper" ref="nav">
    <nav :class="['nav', { open: menuOpen, scrolled, 'nav-hidden': !showNavbar }]">
      <div class="container nav-container">
        <NuxtLink :to="localePath('/')" class="nav-logo" :aria-label="$t('assist.logo')">
          <SiteLogo />
        </NuxtLink>

        <button @click="toggleMenu" class="nav-toggle" :aria-label="$t('assist.toggle_menu')">
          <IconPlus />
        </button>
      </div>
    </nav>
    <Transition
      @before-enter="beforeEnter"
      @enter="onEnter"
      @enter-cancelled="onEnterCancelled"
      @leave="onLeave"
      @leave-cancelled="onLeaveCancelled"
    >
      <div class="menu" v-if="menuOpen">
        <div class="container padded">
          <div class="menu-pictures">
            <div
              v-for="item in settings.data.story.content.menu"
              :key="item._uid"
              class="menu-picture"
            >
              <Transition name="fade">
                <NuxtImg
                  v-if="item.picture.filename && hovering === item._uid"
                  :src="item.picture.filename"
                  :width="500"
                />
              </Transition>
            </div>
          </div>
          <div class="menu-content">
            <ul class="menu-items" :aria-label="$t('assist.menu')">
              <li
                v-for="item in settings.data.story.content.menu"
                :key="item._uid"
                class="menu-item"
              >
                <NuxtLink
                  :to="internalLink(item.link?.story?.full_slug)"
                  @click="hideMenu"
                  @mouseenter="hovering = item._uid"
                  @mouseleave="hovering = null"
                >
                  <div class="animate">
                    {{ item.label }}
                  </div>
                </NuxtLink>
              </li>
            </ul>
            <ul class="menu-languages" aria-label="Idioma / Language">
              <li v-for="lang in locales" :key="lang.code">
                <NuxtLink
                  :to="switchLocalePath(lang.code)"
                  @click="hideMenu"
                  :class="{ 'active': locale === lang.code }"
                  :title="lang.name"
                >
                  {{ lang.code }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  position: relative;
  z-index: 1200;
  transition: all .5s ease-out;

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--navbar-safe-area);
    padding: var(--site-padding-y) var(--site-padding-x);
  }

  &-wrapper {
    position: sticky;
    z-index: 1100;
    top: 0;
    left: 0;
    right: 0;
  }

  &-logo svg {
    height: 2rem;
  }

  &-toggle {
    padding: 1rem;
    margin-inline-end: -1rem;
    
    svg {
      height: 2rem;
      color: var(--primary);
    }
  }

  &.scrolled {
    background-color: var(--rose-light);
  }

  &.nav-hidden {
    transform: translate3d(0, -100%, 0);
  }
}

.menu {
  position: fixed;
  inset: 0;
  background: var(--rose-light);
  z-index: 1000;
  display: flex;

  .container {
    padding-block-start: var(--navbar-safe-area);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: ". pictures content";
    height: 100%;
  }

  &-pictures {
    grid-area: pictures;
    position: relative;
  }

  &-picture {
    position: absolute;
    display: flex;
    inset: 0;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
    grid-area: content;
    justify-content: flex-end;
  }

  &-items {
    margin-block: auto;
  }

  &-item {
    a {
      display: block;
      overflow: clip;
      text-align: right;
      font-size: var(--text-xl);
      color: var(--gray-700);
      padding-inline: .5em;
      margin-inline: -.5em;

      &:hover {
        font-style: italic;
        color: var(--primary);
      }
    }
  }

  &-languages {
    display: flex;
    justify-content: flex-end;
    font-size: var(--text-md);

    a {
      color: var(--gray-700);

      &.active {
        font-weight: 700;
      }

      &:hover {
        color: var(--primary);
      }
    }

    li:not(:last-child)::after {
      content: '/';
    }
  }
}

@include media('<md') {
  .nav {
    &-logo {
      svg {
        height: 1.5rem;
      }
    }
  }

  .menu {
    grid-template-columns: 1fr;
    grid-template-areas: "content";

    &-pictures {
      display: none;
    }
  }
}
</style>