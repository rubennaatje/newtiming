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
          <a href="https://terminalcss.xyz" class="menu-item">
            <span>Light</span>
          </a>
          <meta property="position" />
        </li>
        <li property="itemListElement" typeof="ListItem">
          <a
            href="https://terminalcss.xyz/dark/"
            property="item"
            typeof="WebPage"
            class="menu-item active"
          >
            <span property="name">Dark</span>
          </a>
          <meta property="position" content="1" />
        </li>
        <li property="itemListElement" typeof="ListItem">
          <a
            href="https://terminalcss.xyz/sans-serif/"
            property="item"
            typeof="WebPage"
            class="menu-item"
          >
            <span property="name">Sans</span>
          </a>
          <meta property="position" content="2" />
        </li>
        <li property="itemListElement" typeof="ListItem">
          <a
            href="https://terminalcss.xyz/sans-serif-dark/"
            property="item"
            typeof="WebPage"
            class="menu-item"
          >
            <span property="name">Sans Dark</span>
          </a>
          <meta property="position" content="3" />
        </li>
        <li style="height: 28px;">
          <span></span>
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
.main-header {
  height: 50px;
  display: flex;
  background-color: #364758;
}

nav {
  width: 100%;
  display: flex;
  justify-content: center;
}

nav div {
  height: 100%;
  margin: 0 20px;
  display: flex;
  align-items: center;
}

a {
  font-family: Helvetica, sans-serif;
  color: white;
  font-size: 1rem;
  font-weight: 100;
  text-decoration: underline;
  text-transform: uppercase;
}

a:hover {
  opacity: 0.9;
}
</style>
