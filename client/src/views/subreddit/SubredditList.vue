<template>
  <div>
    <secondary-nav />
    <subreddit-nav />
    <div class="subreddit row">
      <main class="subreddit-main col-8">
        <template v-for="i in [1, 2, 3, 4, 5]">
          <thread-link :key="i" />
        </template>
      </main>
      <sub-info />
    </div>
  </div>
</template>

<script>
import SecondaryNav from '@/components/shared/SecondaryNav';
import SubInfo from '@/components/shared/SubInfo';
import SubredditNav from '@/components/subreddit/SubredditNav';
import ThreadLink from '@/components/subreddit/ThreadLink';

export default {
  name: 'subreddit-list-page',
  components: {
    SecondaryNav,
    SubInfo,
    SubredditNav,
    ThreadLink,
  },
};
</script>

<style lang="scss" scoped>
.subreddit {
  padding: 2rem;

  &-main {
    background-color: #ffffff;
    margin-right: 1rem;
    padding: 0;
  }

  &-nav {
    height: 2.5rem;
    align-items: center;
    background-color: #ffffff;
  }
}
</style>
