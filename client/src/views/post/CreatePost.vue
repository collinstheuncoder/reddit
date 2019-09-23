<template>
  <div>
    <select-subreddit v-on:subredditId="selectSubreddit" />
    <b-card no-body>
      <b-tabs card>
        <b-tab no-body title="Post" active>
          <create-post-form post-type="text" :subreddit-id="subredditId" />
        </b-tab>
        <b-tab no-body title="Image & Video">
          <create-post-form post-type="image" :subreddit-id="subredditId" />
        </b-tab>
        <b-tab no-body title="Link">
          <create-post-form post-type="link" :subreddit-id="subredditId" />
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import SelectSubreddit from '@/components/shared/SelectSubreddit';
import CreatePostForm from '@/components/forms/CreatePost';

export default {
  name: 'create-post-page',
  components: {
    SelectSubreddit,
    CreatePostForm,
  },
  data() {
    return {
      subredditId: '',
    };
  },
  methods: {
    selectSubreddit(id) {
      this.subredditId = id;
    },
  },
};
</script>
