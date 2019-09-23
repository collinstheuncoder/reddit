<template>
  <div
    class="user-actions row"
    :style="{ margin: isDisplayed ? '1rem 0' : '0.25rem 0 0.5rem' }"
  >
    <div class="col-8">
      <span class="action">
        <i class="fas fa-comment-alt"></i>
        {{ commentsLength }} comments
      </span>
      <span class="action"> <i class="fas fa-share"></i> Share </span>
      <span class="action"> <i class="fas fa-bookmark"></i> Save </span>
      <span class="action"> <i class="fas fa-ban"></i> Hide </span>
      <span class="action"> <i class="fas fa-flag"></i> Report </span>
    </div>
    <div v-show="isDisplayed" class="col-4">
      <span class="upvoted">{{ upvoted }}% Upvoted</span>
    </div>
  </div>
</template>

<script>
import { upvotePercentage } from '../../utils';

export default {
  name: 'user-actions',
  props: {
    isDisplayed: {
      type: Boolean,
      required: false,
    },
    comments: {
      type: Array,
    },
    upvotes: {
      type: Array,
    },
    downvotes: {
      type: Array,
    },
  },
  computed: {
    commentsLength() {
      if (this.comments.length >= 1000) {
        return `${(this.comments.length / 1000).toFixed(1)}k`;
      } else {
        return this.comments.length;
      }
    },

    upvoted() {
      return upvotePercentage(this.upvotes.length, this.downvotes.length);
    },
  },
};
</script>

<style lang="scss" scoped>
.user-actions {
  // margin: 1rem 0;

  .col-8 {
    padding-left: 0;
  }

  .col-4 {
    padding-right: 0;
  }

  span {
    color: #808080;
    padding: 0.25rem 0.5rem;
    border-radius: 0.125rem;

    &:first-of-type {
      padding-left: 0;
    }

    &:hover {
      background-color: #f4f4f4;
    }
  }
}

.action,
.upvoted {
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
}

.upvoted {
  display: block;
  font-size: 0.75rem;
  font-weight: 300;
  text-align: right;
  margin-right: 0;
}
</style>
