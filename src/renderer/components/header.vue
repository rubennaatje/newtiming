<template>
  <div class="terminal-nav flex">
    <header class="terminal-logo w-1/3">
      <div class="logo">
        <button type="button" @click="startCountdown">
          <a href="#" class="no-style terminal-prompt">{{ params.eventName }}</a>
          <span :class="params.racestate">{{ params.racestate }}</span>
        </button>
      </div>
    </header>
    <div class="w-1/3 text-center">
      <no-ssr>
        <span v-if="params.remaining" class="session-timer">
          <vac ref="vac" :end-time="new Date().getTime() + (params.remaining * 1000)">
            <template
              v-slot:process="{ timeObj }"
            >
              <span :class="params.racestate">{{ `${timeObj.h}:${timeObj.m}:${timeObj.s}` }}</span>
            </template>
            <template
              v-slot:finish
            >
              <span :class="params.racestate">00:00:00</span>
            </template>
          </vac>
        </span>
      </no-ssr>
      </button></span>
    </div>
    <nav class="terminal-menu w-1/3">
      <ul
        vocab="https://schema.org/"
        typeof="BreadcrumbList"
        class="normal-menu"
      >
        <li
          v-for="item in menu"
          :key="item.title"
          property="itemListElement"
          typeof="ListItem"
        >
          <nuxt-link :to="item.to">
            <span property="name">{{ item.title }}</span>
          </nuxt-link>
        </li>
        <li style="height: 28px;">
          <span />
        </li>
      </ul>
      <ul vocab="https://schema.org/" typeof="BreadcrumbList" class="submenu">
        <li
          v-for="submenu in sublinks"
          :key="submenu.title"
          property="itemListElement"
          typeof="list"
        >
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
import {
  mapGetters,
} from 'vuex';

export default {
  data () {
    return {
      menu: [
        {
          to: '/timing',
          title: 'Timing',
          subLinks: [],
        },
        {
          to: '/info',
          title: 'Info',
        },
      ],
    };
  },
  computed: {
    sublinks () {
      if (this.$nuxt._route.matched[0]) {
        const res = this.menu.filter(row =>
          this.$nuxt._route.matched[0].path.includes(row.to)
        )[0];
        if (res) {
          return res.subLinks;
        }
      }
      return {};
    },
    ...mapGetters({
      params: 'lemans/getParams',
    }),
  },
  methods: {
    startCountdown () {
      const vm = this;

      vm.$refs.vac.startCountdown();
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

.red {
  background-color: red;
  padding: 3px;
}

.green {
  background-color: green;
  padding: 3px;
}
.full_yellow {
    background-color: yellow;
  padding: 3px;
  color:black
}

.chk {
  background-color: white;
  color: black;
    padding: 3px;
}
</style>
