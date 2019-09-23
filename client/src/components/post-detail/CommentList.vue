<template>
  <div class="row comment-list">
    <div class="col-12 comment" v-for="i in [1, 2, 3, 4, 5]" :key="i">
      <div class="row">
        <div class="col-1 col--votes">
          <span class="vote vote--upvote">
            <i class="fas fa-chevron-up"></i>
          </span>
          <span class="vote vote--downvote">
            <i class="fas fa-chevron-down"></i>
          </span>
        </div>
        <div class="col-11">
          <p class="comment-info">
            <span class="comment-added-by"
              ><a href="">BounceonmydickLebron</a></span
            >
            <span class="comment-votes">10 points</span>
            <span class="comment-datetime"> · 11 hours ago</span>
          </p>
          <p class="comment-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ipsa
            aut aliquam doloremque ipsum quidem debitis fuga quam iste ab.
          </p>
          <div class="comment-actions row">
            <div class="col-12">
              <span class="action"
                ><i class="fas fa-comment-alt"></i> Reply</span
              >
              <span class="action">Share</span>
              <span class="action">Report</span>
              <span class="action">Save</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comment-list',
};
</script>

<style lang="scss" scoped>
.comment-list {
}

.comment {
  margin-bottom: 1rem;

  &-body {
    text-align: justify;
  }

  &-actions {
    .col-12 {
      padding-left: 0;
    }

    span {
      color: #808080;
    }
  }
}

.col--votes {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  max-width: 3.333333%;
}

.vote {
  cursor: pointer;
}

.action {
  font-size: 0.85rem;
  font-weight: 600;
  margin-right: 0.5rem;
  cursor: pointer;
}
</style>
