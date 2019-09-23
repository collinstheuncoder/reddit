<template>
  <div>
    <subreddit-header :subredditName="subredditName" />
    <secondary-nav />
    <subreddit-nav />
    <post-list :subredditName="subredditName" />
  </div>
</template>

<script>
import SubredditHeader from '@/components/subreddit-detail/Header';
import SecondaryNav from '@/components/shared/SecondaryNav';
import SubredditNav from '@/components/subreddit/SubredditNav';
import PostList from '@/components/post-list/PostList';

export default {
  name: 'subreddit-detail-page',
  components: {
    SubredditHeader,
    SecondaryNav,
    SubredditNav,
    PostList,
  },
  data() {
    return {
      subredditName: this.$route.params.subredditName,
    };
  },
  watch: {
    '$route.params.subredditName'(subredditName) {
      this.subredditName = subredditName;
    },
  },
};
</script>
