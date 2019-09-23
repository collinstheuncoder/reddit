<template>
  <div>
    <span v-if="isLoading">Loading</span>
    <span v-else-if="error">Error</span>
    <header
      v-else
      class="banner"
      :style="{ backgroundImage: `url(${subreddit.headerBgImage})` }"
    >
      <router-link :to="`/r/${subredditName}`">
        <img :src="subreddit.image" :alt="subreddit.name" class="sub-img" />
      </router-link>
    </header>
  </div>
</template>

<script>
import { SUBREDDIT } from '../../graphql/queries';

export default {
  name: 'subreddit-header',
  props: {
    subredditName: {
      type: String,
    },
  },
  data() {
    return {
      subreddit: null,
      isLoading: false,
      error: null,
    };
  },
  async created() {
    this.isLoading = true;

    try {
      this.isLoading = false;

      const {
        data: { subreddit },
      } = await this.$apollo.query({
        query: SUBREDDIT,
        variables: {
          where: {
            path: this.subredditName,
          },
        },
      });

      this.subreddit = subreddit;
      this.isLoading = false;
      this.error = null;
    } catch (error) {
      this.isLoading = false;
      this.error = error;
    }
  },
};
</script>

<style lang="scss" scoped>
.banner {
  align-items: center;
  display: flex;
  height: 10rem;
  justify-content: center;
}
</style>
