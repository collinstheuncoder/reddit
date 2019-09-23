<template>
  <div class="row">
    <div v-for="post in upvotedPosts" :key="post" class="col-12 card post">
      <h5>Post {{ post }}</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut hic quod rem
        provident nostrum placeat, impedit id facere corrupti alias nemo soluta
        unde. Natus porro sit quidem culpa, quod eaque.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "upvoted-posts",
  data() {
    return {
      upvotedPosts: [1, 2, 3, 4, 5, 6, 7]
    };
  }
};
</script>

<style lang="scss" scoped>
.post:not(.post:last-child) {
  border-bottom: none;
}
</style>