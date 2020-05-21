<template>
  <div class="terminal-nav flex">
    <header class="terminal-logo w-1/3">
      <div class="logo">
        <a href="#" class="no-style terminal-prompt">2019 6 Hours of Spa</a>
        <span>Free practice 1</span>
      </div>
    </header>
    <div class="w-1/3 text-center">
      <span class="session-timer">23:59:20</span>
    </div>
    <nav class="terminal-menu w-1/3">
      <ul vocab="https://schema.org/" typeof="BreadcrumbList" class="normal-menu">
        <li v-for="item in menu" :key="item.title" property="itemListElement" typeof="ListItem">
          <nuxt-link :to="item.to">
            <span property="name">{{ item.title }}</span>
          </nuxt-link>
        </li>
        <li style="height: 28px;">
          <span />
        </li>
      </ul>
      <ul vocab="https://schema.org/" typeof="BreadcrumbList" class="submenu">
        <li v-for="submenu in sublinks" :key="submenu.title" property="itemListElement" typeof="list">
          <nuxt-link :to="submenu.to">
            <span property="name">{{ submenu.title }}</span>
          </nuxt-link>
        </li>
        <li style="height: 28px;">
          <span />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: [
        {
          to: '/dashboard',
          title: 'Dashboard',
          subLinks: [
            {
              to: '/tailwindtest',
              title: 'Tailwind test',
            },
          ],
        },
        {
          to: '/tv/trackmap',
          title: 'TV',
          subLinks: [
            {
              to: '/tv/',
              title: 'TV',
            },
            {
              to: '/tv/guide',
              title: 'Guide',
            },
          ],
        },
        {
          to: '/radio',
          title: 'Radio',
          subLinks: [
            {
              to: '/',
              title: 'Dashboard',
            },
          ],
        },
        {
          to: '/data',
          title: 'Data',
          subLinks: [
            {
              to: '/',
              title: 'Dashboard',
            },
          ],
        },
        {
          to: '/timing',
          title: 'Timing',
          subLinks: [
          ],
        },
        {
          to: '/strategy',
          title: 'Strategy',
          subLinks: [
            {
              to: '/strategy',
              title: 'Dashboard',
            },
            {
              to: '/strategy',
              title: 'Stint editor',
            },
            {
              to: '/strategy/spreadsheet',
              title: 'Spreadsheets',
            },
          ],
        },
        {
          to: '/info',
          title: 'Info',
          subLinks: [
            {
              to: '/info/Welcome',
              title: 'Welcome',
            },
            {
              to: '/info/guide',
              title: 'Rulebook',
            },
            {
              to: '/info/guide',
              title: 'Entrylist',
            },
            {
              to: '/info/guide',
              title: 'Spotterguide',
            },
            {
              to: '/info/guide',
              title: 'Players',
            },
            {
              to: '/info/guide',
              title: 'Guide',
            },
          ],
        },
      ],
    };
  },
  computed: {
    sublinks () {
      if (this.$nuxt._route.matched[0]) {
        const res = this.menu.filter(row => this.$nuxt._route.matched[0].path.includes(row.to))[0];
        if (res) {
          return res.subLinks;
        }
      }
      return {};
    },
  },
};
</script>

<style scoped>
.terminal-menu {
  width: 33.333333%;
}
.submenu {
  margin: 0;
}
.normal-menu {
    margin-top: calc(var(--global-space) * 1);
    margin-bottom: 0;
}
.terminal-menu li a.active {
    color: #151515;
    color: var(--font-color);
}
</style>
