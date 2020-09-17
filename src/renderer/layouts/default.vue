<template>
  <div>
    <app-header />
    <nuxt />
  </div>
</template>

<script>
import appHeader from '@/components/header';
import { mapActions } from 'vuex';
export default {
  components: { appHeader },
  async fetch ({ store, params }) {
    console.log('test');
    await store.dispatch('lemans/getJson');
  },
  mounted () {
    this['lemans/getJson']();
    setInterval(async () => {
      this['lemans/getJson']();
    }, 15000);
  },
  methods: {
    ...mapActions(['lemans/getJson']),
  },

};
</script>

<style>
body {
  margin: 0 !important;
  word-spacing: 0.3em;
}

:root {
  --global-font-size: 15px;
  --global-line-height: 1.3em;
  --global-space: 10px;
  --font-stack: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace, serif;
  --mono-font-stack: Inter, Menlo, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
  --background-color: #222225;
  --page-width: 60em;
  --font-color: #e8e9ed;
  --invert-font-color: #222225;
  --secondary-color: #a3abba;
  --tertiary-color: #a3abba;
  --primary-color: #62c4ff;
  --error-color: #ff3c74;
  --progress-bar-background: #3f3f44;
  --progress-bar-fill: #62c4ff;
  --code-bg-color: #3f3f44;
  --input-style: solid;
  --display-h1-decoration: none;
}

.red-text {
  color: #ff0000;
}

.yellow-text {
  color: #ffff00;
}

.blue-text {
  color: #0000ff;
}

.green-text {
  color: #00ff00;
}

.orange-text {
  color: #ff9900;
}

.purple-text {
  color: #ff00ff;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #1f1f1f;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
