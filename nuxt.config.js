const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#8fe0b8' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
		'@/theme/index.scss',
		'swiper/dist/css/swiper.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
		'@/plugins/globals',
		'@/plugins/axios',
		{ src: '~plugins/vue-awesome-swiper', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],

  workbox: {

  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  env: {
    appName: 'Nuxt SSR Blog'
  },

  /*
  ** Build configuration
  */
  build: {
		transpile: [/^element-ui/],
		// vendor: [
    //   'vue-awesome-swiper'
    // ],
    
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
