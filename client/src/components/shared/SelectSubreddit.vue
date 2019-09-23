<template>
  <div>
    <vue-select
      v-show="!isLoading"
      :options="options"
      :value="subredditId"
      @input="selectSubreddit"
    />
  </div>
</template>

<script>
import VueSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

import { SUBREDDITS } from '../../graphql/queries';

export default {
  name: 'select-subreddit',
  components: {
    VueSelect,
  },
  data() {
    return {
      options: [],
      subredditId: '',
      isLoading: false,
      error: null,
    };
  },
  methods: {
    selectSubreddit(subreddit) {
      this.subredditId = subreddit.label;

      this.$emit('subredditId', subreddit.value);
    },
  },
  async created() {
    this.isLoading = true;

    try {
      const {
        data: { subreddits },
      } = await this.$apollo.query({
        query: SUBREDDITS,
      });

      this.options = subreddits.map(subreddit => ({
        label: subreddit.name,
        value: subreddit.id,
      }));

      this.isLoading = false;
      this.error = null;
    } catch (error) {
      this.error = error;
      this.isLoading = false;
    }
  },
};
</script>
