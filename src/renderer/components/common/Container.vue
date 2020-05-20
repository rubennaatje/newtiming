<template>
  <section class="fieldset">
    <h1 class="fieldset-title">{{ title }}</h1>
    <slot />
  </section>
</template>

<script>
export default {
  name: 'Container',
  // eslint-disable-next-line vue/require-prop-types
  props: ['title'],
};
</script>

<style scoped>
.fieldset {
  position: relative;
  border: 1px solid #ddd;
  padding: 10px;
}

.fieldset .fieldset-title {
  position: absolute;
  top: 0;
  font-size: var(--global-font-size);
  line-height: var(--global-line-height);
  margin: -9px 0 0; /* half of font-size */
  background: var(--background-color);
  padding: 0 3px;
}
</style>
