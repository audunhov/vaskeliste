export default defineNuxtConfig({
  target: 'static',

  router: {
    base: '/vaskeliste/'
  },

  ssr: false,

  meta: {
    title: 'Vaskeliste',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },

  modules: [
    '@nuxtjs/tailwindcss'
  ]

})
