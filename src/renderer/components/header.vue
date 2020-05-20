<template>
  <div class="terminal-nav">
    <header class="terminal-logo">
      <div class="logo terminal-prompt">
        <a href="https://terminalcss.xyz" class="no-style">Terminal CSS</a>
      </div>
    </header>
    <nav class="terminal-menu">
      <ul vocab="https://schema.org/" typeof="BreadcrumbList">
        <li>
          <nuxt-link to="/tailwindtest">
            <span>Light</span>
            <meta property="position">
          </nuxt-link>
        </li>
        <li property="itemListElement" typeof="ListItem">
          <nuxt-link to="/about">
            <span property="name">Dark</span>
            <meta property="position" content="1">
          </nuxt-link>
        </li>
        <li property="itemListElement" typeof="ListItem">
          <nuxt-link to="/about">
            <span property="name">Sans</span>
          </nuxt-link>
          <meta property="position" content="2">
          </nuxt-link>
        </li>
        <li property="itemListElement" typeof="ListItem">
          <nuxt-link to="/about">
            <span property="name">Sans Dark</span>
            </a>
            <meta property="position" content="3">
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

};
</script>

<style scoped>

</style>
