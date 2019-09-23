<template>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-item">
        <router-link
          to="/account/profile"
          exact
          class="nav-link"
          active-class="nav-link--active"
          >Overview</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          to="/account/profile/posts"
          class="nav-link"
          active-class="nav-link--active"
          >Posts</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          to="/account/profile/comments"
          class="nav-link"
          active-class="nav-link--active"
          >Comments</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          to="/account/profile/saved"
          class="nav-link"
          active-class="nav-link--active"
          >Saved</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          to="/account/profile/hidden"
          class="nav-link"
          active-class="nav-link--active"
          >Hidden</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          to="/account/profile/upvoted"
          class="nav-link"
          active-class="nav-link--active"
          >Upvoted</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          to="/account/profile/downvoted"
          class="nav-link"
          active-class="nav-link--active"
          >Downvoted</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import '../../scss/index';

.nav {
  padding: 0.65rem 1rem;
  border-top: 1px solid #dcdcdc;
  background-color: #ffffff;

  &-list {
    display: flex;
    margin: 0;
  }

  &-item {
    margin: 0 0.75rem;

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }

  &-link {
    color: #333333;
    text-transform: uppercase;
    font-weight: 500;
    padding: 0;

    &--active {
      color: $app-blue;
    }
  }
}
</style>
