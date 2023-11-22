// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@hebilicious/form-actions-nuxt'],
  typescript: {
    strict: true,
    shim: false,
  },
});
