<template>
  <div class="sec-nav">
    <router-link to="/r/nba" class="sub-link">Posts</router-link>
  </div>
</template>

<script>
export default {
  name: 'secondary-nav',
};
</script>

<style lang="scss" scoped>
@import '../../scss/index';

.sec-nav {
  background-color: #f4f4f4;
  display: flex;
  height: 3rem;
  padding: 0 2rem;

  .sub-link {
    align-items: center;
    border-bottom: 0.125rem solid $primary-color;
    color: $primary-color;
    display: flex;
    font-weight: 600;
    height: 100%;
    padding: 0 0.5rem;

    &:hover {
      text-decoration: none;
    }
  }
}
</style>
