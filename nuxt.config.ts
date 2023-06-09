// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "bootstrap/scss/bootstrap.scss",
    "vue3-carousel/dist/carousel.css",
    "~/assets/scss/main.scss",
  ],
  components: true,
  plugins: [
    { src: "./plugins/vue-masonry-wall.ts", mode: "client" },
    { src: "./plugins/vue3-toastify.ts", mode: "client" },
    { src: '~/plugins/vercel.ts', mode: 'client' }
  ],
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore',
          ['defineStore', 'definePiniaStore'],
        ],
      },
    ],
    'nuxt-icon',
    '@nuxtjs/supabase',
    // 'nuxt-stripe-module'
  ],
  app: {
    head: {
      title: "PESCA FURIOSA - Loja de Pesca 🎣",
      // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js",
        },
      ],
    },
  },
  runtimeConfig: {
    // stripe: {
    //   publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    // },
    public: {
      BASE_URL: process.env.BASE_URL,
      MP_APPLICATION_NUMBER: process.env.MP_APPLICATION_NUMBER,
      MP_CLIENT_SECRET: process.env.MP_CLIENT_SECRET,
      MP_USER_ID: process.env.MP_USER_ID,
      MP_TEST_KEY: process.env.MP_TEST_KEY,
      MP_TEST_ACCESS_TOKEN: process.env.MP_TEST_ACCESS_TOKEN,
      CLIENT_SECRET: process.env.CLIENT_SECRET,
      REDIRECT_URI: process.env.REDIRECT_URI,
      PUBLIC_KEY: process.env.PUBLIC_KEY,
      TEST_KEY: process.env.TEST_KEY,
      ACCESS_TOKEN: process.env.ACCESS_TOKEN,
      SYS_PWD: process.env.SYS_PWD,
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
      NUXT_PUBLIC_DATOCMS_TOKEN: process.env.NUXT_PUBLIC_DATOCMS_TOKEN,
      NUXT_PUBLIC_DATOCMS_URL: process.env.NUXT_PUBLIC_DATOCMS_URL,
    }
  }
  // add envs
  

})
