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
  ],
  buildModules: [
    '@nuxtjs/tailwindcss',
    // TODO: Remove when upgrading to nuxt 2.13+
    '@nuxt/components',
  ],
  modules: [

  ],
  css: [
    'terminal.css',
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
    ],
  },
};
