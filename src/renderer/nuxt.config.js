/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */

module.exports = {
  mode: 'spa', // or 'universal'
  head: {
    title: 'sportscar-game',
  },
  loading: false,
  plugins: [
    { ssr: true, src: '@/plugins/icons.js' },
    { ssr: false, src: '@/plugins/vac.js' },
    // { ssr: false, src: '@/plugins/socket.io.js' },
    { ssr: false, src: '@/plugins/vueapexcharts.js' },
    { src: '@/plugins/vue-flags.js' },
    { src: '~/plugins/pixijs', mode: 'client', ssr: false },
  ],
  buildModules: [
    '@nuxtjs/tailwindcss',
    // TODO: Remove when upgrading to nuxt 2.13+
    '@nuxt/components',
    '@nuxtjs/date-fns',
  ],
  modules: [
    'nuxt-spreadsheet',
  ],
  css: [
    'terminal.css',
    'typeface-inter',
  ],
  bodyAttrs: {
    class: 'terminal"',
  },
  components: {
    dirs: [
      '@/components',
      {
        path: '@/components/awesome/',
        prefix: 'awesome',
      },
      {
        path: '@/components/common/',
        prefix: 's',
      },
    ],
  },
  router: {
    linkActiveClass: 'active',
    linkExactActiveClass: 'active-exact',
  },
};
