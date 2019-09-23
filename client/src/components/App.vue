<template>
  <div id="app">
    <reddit-header v-show="displayHeaderAndFooter" />
    <reddit-main />
    <reddit-footer v-show="displayHeaderAndFooter" />
  </div>
</template>

<script>
import RedditHeader from './layout/header/Header';
import RedditMain from './layout/Main';
import RedditFooter from './layout/Footer';

export default {
  name: 'reddit-app',
  components: {
    RedditHeader,
    RedditMain,
    RedditFooter,
  },

  computed: {
    displayHeaderAndFooter() {
      let shouldDisplayHeaderAndFooter = true;

      if (this.$route.name === 'login' || this.$route.name === 'signup') {
        shouldDisplayHeaderAndFooter = false;
      }

      return shouldDisplayHeaderAndFooter;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: #212529;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: #dae0e6;
}

.row {
  margin: 0 !important;
}

p {
  margin: 0;
}

input,
.btn {
  &:focus {
    box-shadow: none !important;
  }
}
</style>
