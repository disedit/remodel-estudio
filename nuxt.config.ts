// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: process.env.NUXT_PUBLIC_NODE_ENV === 'production' ? true : false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        { name: 'theme-color', content: '#181818' },
        { name: 'msapplication-TileColor', content: '#181818' },
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'mask-icon', color: '#652B80', href: '/safari-pinned-tab.svg' },
        { rel: 'manifest', color: '#652B80', href: '/site.webmanifest' },
      ]
    }
  },

  runtimeConfig: {
    public: {
      baseUrl: 'https://remodelestudio.com',
      environment: 'preview'
    }
  },

  css: ['~/assets/scss/main.scss'],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_TOKEN }],
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/scss/_variables.scss";
            @import "@/assets/scss/_mixins.scss";
            @import 'node_modules/include-media/dist/_include-media.scss';
          `
        }
      }
    }
  },

  i18n: {
    defaultLocale: 'es',
    locales: [
      { code: 'es', language: 'es-ES', name: 'Castellano', short: 'CAS', file: 'es.js' },
      { code: 'en', language: 'en', name: 'English', short: 'ENG', file: 'en.js' },
    ],
    lazy: true,
    langDir: 'lang',
    baseUrl: 'https://remodelestudio.com'
  },

  image: {
    provider: 'storyblok',
    storyblok: {
      baseURL: 'https://a.storyblok.com'
    }
  },

  googleFonts: {
    families: {
      Lato: {
        wght: [300, 400, 700],
        ital: [400, 700]
      }
    }
  }
})