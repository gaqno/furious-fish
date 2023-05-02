// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "bootstrap/scss/bootstrap.scss",
    "vue3-carousel/dist/carousel.css",
    "~/assets/scss/main.scss",
  ],
  plugins: [
    { src: "./plugins/vue-masonry-wall.ts", mode: "client" },
    { src: "./plugins/vue3-toastify.ts", mode: "client" },
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
    'nuxt-icon'
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
    public: {
      BASE_URL: process.env.BASE_URL,
      CLIENT_ID: process.env.CLIENT_ID,
      CLIENT_SECRET: process.env.CLIENT_SECRET,
      REDIRECT_URI: process.env.REDIRECT_URI,
      PUBLIC_KEY: process.env.PUBLIC_KEY,
      ACCESS_TOKEN: process.env.ACCESS_TOKEN,
      SYS_PWD: process.env.SYS_PWD,
    }
  }
  // add envs
  

})
