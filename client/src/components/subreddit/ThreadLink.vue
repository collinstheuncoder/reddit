<template>
  <div class="row thread-link">
    <vote-action :is-thread-link="true" />
    <div class="col-11">
      <h3 class="thread-link-title">
        <router-link
          :to="{
            name: 'post-detail',
            params: { subredditName, postTitle: post.title, postId: post.id },
          }"
          >{{ post.title }}</router-link
        >
      </h3>
      <p class="thread-link-posted-by">
        Posted by
        <router-link :to="`/u/${post.postedBy.username}`">{{
          post.postedBy.username
        }}</router-link>
        {{ timeElapsedSincePostCreation }}
      </p>
      <user-actions />
    </div>
  </div>
</template>

<script>
import VoteAction from '../shared/VoteAction';
import UserActions from '../shared/UserActions';

import { timeElapsed } from '../../utils';

export default {
  name: 'thread-link',
  components: {
    VoteAction,
    UserActions,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      subredditName: this.$route.params.subredditName,
    };
  },
  computed: {
    timeElapsedSincePostCreation() {
      return timeElapsed(this.post.createdAt, this.post.updatedAt);
    },
  },
};
</script>

<style lang="scss" scoped>
.thread-link {
  align-items: center;
  border-bottom: 1px solid #e1e1e1;

  &-title {
    font-size: 1.25rem;
    margin: 0.5rem 0;
    text-align: justify;

    a {
      text-decoration: none;
      color: initial;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &-posted-by {
    font-size: 0.85rem;
    color: #898989;
  }
}
</style>
