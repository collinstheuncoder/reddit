<template>
  <div class="row">
    <div v-for="comment in comments" :key="comment" class="col-12 card comment">
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
  name: "comments",
  data() {
    return {
      comments: [1, 2, 3, 4, 5, 6, 7]
    };
  }
};
</script>

<style lang="scss" scoped>
.comment:not(.comment:last-child) {
  border-bottom: none;
}
</style>
