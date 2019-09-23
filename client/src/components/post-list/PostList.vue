<template>
  <div>
    <span v-if="isLoading">Loading</span>
    <span v-else-if="error">Error</span>
    <div v-else>
      <span v-if="postList.length === 0"
        >Sorry! There are no posts in this community yet</span
      >
      <template v-else v-for="post in postList">
        <thread-link :post="post" :key="post.id" />
      </template>
    </div>
  </div>
</template>

<script>
import { POSTS } from '../../graphql/queries';

import ThreadLink from '../subreddit/ThreadLink';

export default {
  name: 'post-list',
  components: {
    ThreadLink,
  },
  props: {
    subredditName: {
      type: String,
    },
  },
  data() {
    return {
      postList: [],
      isLoading: false,
      error: null,
    };
  },
  async created() {
    this.isLoading = true;

    try {
      this.isLoading = false;

      const {
        data: { posts },
      } = await this.$apollo.query({
        query: POSTS,
        variables: {
          where: {
            subreddit: {
              path: this.subredditName,
            },
          },
        },
      });

      this.postList = posts;
      this.isLoading = false;
      this.error = null;
    } catch (error) {
      this.isLoading = false;
      this.error = error;
    }
  },
};
</script>
