// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/nuxt-studio-demo/', 
  },
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
  ],
  css: [
    '~/assets/css/main.css',
  ],

  nitro: {
    prerender: {
      crawlLinks: true, // サイト内のリンクをクロールして静的ファイルを生成
      routes: ['/', '/step1', '/about', '/sweettrap']     // 生成したいページを明示的に指定
    }
  },

  experimental: {
    payloadExtraction: false
  },

  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})
