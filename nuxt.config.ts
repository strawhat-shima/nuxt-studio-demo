// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/nuxt-studio-demo/', 
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/404.html'],
      ignore: ['/admin']
    },
    output: {
      publicDir: './dist'
    }
  },
  router: {
    options: {
      strict: false,
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
  ],
  css: [
    '~/assets/css/main.css',
  ],

  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})
