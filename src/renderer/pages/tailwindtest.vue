<template>
  <section class="container">
    <div class="grid grid-cols-3 gap-8">
      <div class="col-span-1 px-4 pb-12">
        <SContainer title="test">
          <Logo width="100%" height="250" />
          <h3>My Blog</h3>
          <ul>
            <li>
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about">About</nuxt-link>
            </li>
          </ul>
        </SContainer>
      </div>
      <SContainer title="test">
        <div>
          <div>
            <h1>Some title</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
              no sea takimata sanctus est Lorem ipsum
            </p>
          </div>
        </div>
      </SContainer>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/SystemInformation.vue';

export default {
  components: {
    Logo,
  },
};
</script>
