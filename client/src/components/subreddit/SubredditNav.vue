<template>
  <div class="subreddit-nav row">
    <div class="col-2 col--view">
      <span class="label">View</span> <span class="view view--two"></span>
      <span class="view view--three"></span>
      <span class="view view--four"></span>
    </div>
    <div class="col-2 col--sort">
      <div class="dropdown">
        <span
          class="dropdown-toggle"
          id="comments-options"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Sort by
        </span>
        <div class="dropdown-menu" aria-labelledby="comments-options">
          <a class="dropdown-item" href="#"><i class="fas fa-burn"></i> Hot</a>
          <a class="dropdown-item" href="#"><i class="fas fa-sun"></i> New</a>
          <a class="dropdown-item" href="#"
            ><i class="fas fa-bolt"></i> Controversial</a
          >
          <a class="dropdown-item" href="#"
            ><i class="far fa-chart-bar"></i> Top</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.subreddit-nav {
  height: 2.5rem;
  align-items: center;
  background-color: #ffffff;
}
</style>
