<template>
  <div class="col-1 votes" :style="[threadLinkStyles]">
    <span class="vote vote--upvote">
      <i class="fas fa-chevron-up"></i>
    </span>
    <span class="vote vote--total">521</span>
    <span class="vote vote--downvote">
      <i class="fas fa-chevron-down"></i>
    </span>
  </div>
</template>

<script>
import { UPVOTE, DOWNVOTE } from '../../graphql/mutations';

export default {
  name: 'vote-action',
  props: {
    isThreadLink: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    threadLinkStyles() {
      let linkStyles;

      if (this.isThreadLink) {
        linkStyles = {
          justifyContent: 'center',
          backgroundColor: '#f8f9fa',
          maxWidth: '5.33333%',
        };
      }

      return linkStyles;
    },
  },
  methods: {
    async upvote() {
      this.isLoading = true;

      try {
        const res = await this.$apollo.mutate({
          mutation: UPVOTE,
          variables: {
            data: {
              user: {
                connect: {
                  username: 'user.username',
                },
              },
              post: {
                connect: {
                  id: 'post.id',
                },
              },
            },
          },
        });

        this.isLoading = false;

        console.log(res);
      } catch (error) {
        this.isLoading = false;
        this.error = error;
      }
    },

    async downvote() {
      this.isLoading = true;

      try {
        const res = await this.$apollo.mutate({
          mutation: DOWNVOTE,
          variables: {
            data: {
              user: {
                connect: {
                  username: 'user.username',
                },
              },
              post: {
                connect: {
                  id: 'post.id',
                },
              },
            },
          },
        });

        this.isLoading = false;

        console.log(res);
      } catch (error) {
        this.isLoading = false;
        this.error = error;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.votes {
  display: flex;
  flex-direction: column;
  font-weight: 600;
  align-items: center;
  padding: 0;
  max-width: 3.333333%;
}

.vote {
  cursor: pointer;
}
</style>
