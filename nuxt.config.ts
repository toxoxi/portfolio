// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'plant_ja',
      meta: [
        { name: 'google-site-verification', content: '4bVyf-gAdLZkUMBLpKZ8LxdRCGju13BMT969WtgMkaA' }
      ]
    },
  },
  css:['assets/scss/index.scss']
})
