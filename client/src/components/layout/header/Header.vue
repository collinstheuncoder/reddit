<template>
  <header class="header">
    <nav class="nav row">
      <div class="col-2">
        <img
          src="https://www.printplaygames.com/wp-content/uploads/2018/06/reddit-1-logo-png-transparent.png"
          alt="Reddit Logo"
          class="header-logo"
        />
      </div>
      <nav-feeds />
      <div class="header-search col-3">
        <search-form />
      </div>
      <nav-auth />
    </nav>
  </header>
</template>

<script>
import NavFeeds from './NavFeeds';
import NavAuth from './NavAuth';
import SearchForm from '../../forms/Search';

export default {
  name: 'reddit-header',
  components: {
    NavFeeds,
    SearchForm,
    NavAuth,
  },
};
</script>

<style lang="scss" scoped>
@import '../../../scss/index';

.header {
  background-color: $white;

  &-logo {
    width: 6rem;
  }

  &-search {
    display: none;

    @include mediumDevices {
      display: block;
    }
  }
}

.nav {
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
}
</style>
