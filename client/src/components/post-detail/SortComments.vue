<template>
  <div class="post-sort">
    <div class="dropdown">
      <span
        class="dropdown-toggle options"
        id="comments-options"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        >Sort by</span
      >
      <div class="dropdown-menu" aria-labelledby="comments-options">
        <a class="dropdown-item" href="#">Best</a>
        <a class="dropdown-item" href="#">Top</a>
        <a class="dropdown-item" href="#">New</a>
        <a class="dropdown-item" href="#">Old</a>
        <a class="dropdown-item" href="#">Controversial</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.options {
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #ebe0dc;
  cursor: pointer;
}
</style>
