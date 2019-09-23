<template>
  <div>
    <create-subreddit-form />
  </div>
</template>

<script>
import CreateSubredditForm from '@/components/forms/CreateSubreddit';

export default {
  name: 'create-subreddit-page',
  components: {
    CreateSubredditForm,
  },
};
</script>
