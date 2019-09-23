<template>
  <div>
    <secondary-nav />
    <div class="post row">
      <section class="post-main col-8">
        <span v-if="isLoading">Loading...</span>
        <span v-else-if="error">{{ error }}</span>
        <div v-else>
          <post-description />
          <comment-list />
        </div>
      </section>
      <sub-info />
    </div>
  </div>
</template>

<script>
import SecondaryNav from '@/components/shared/SecondaryNav';
import SubInfo from '@/components/shared/SubInfo';
import PostDescription from '@/components/post-detail/Description';
import CommentList from '@/components/post-detail/CommentList';

import { POST } from '@/graphql/queries';

export default {
  name: 'post-page',
  components: {
    SecondaryNav,
    PostDescription,
    CommentList,
    SubInfo,
  },
  data() {
    return {
      postId: this.$route.params.postId,
      post: null,
      isLoading: false,
      error: null,
    };
  },
  async created() {
    this.isLoading = true;

    try {
      this.isLoading = false;

      const {
        data: { post },
      } = await this.$apollo.query({
        query: POST,
        variables: {
          where: {
            id: this.postId,
          },
        },
      });

      this.post = post;
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
.post {
  padding: 2rem;

  &-main {
    background-color: #ffffff;
    margin-right: 1rem;
    padding: 1rem;
  }
}
</style>
