// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: { //
    // 仅服务端可用的私有键
    apiSecret: '123',
    // public 中的键同样暴露给客户端
    public: {
      apiBase: '/api',
    },
  },
  css: ['~/assets/css/testCssProperty.css', '~/assets/scss/main.scss'],
  app: {
    head: {
      // link: [{
      //   rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' 
      // }]
      title: 'Nuxt Page',
      htmlAttrs: {
        lang: 'en'
      },
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_colors.scss" as *;',
        },
      },
    },
  },
  postcss: {
    plugins: {
      'postcss-nested': {},
      "postcss-custom-media": {}
    }
  }


})
