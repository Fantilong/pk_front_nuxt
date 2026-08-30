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
})
