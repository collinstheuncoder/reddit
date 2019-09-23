<template>
  <aside class="sub-info col-4">
    <h3 class="sub-info-heading">Community details</h3>
    <div class="sub-info-main">
      <img
        src="https://styles.redditmedia.com/t5_2qo4s/styles/communityIcon_1podsfdai4301.png"
        alt="r/nba"
        class="sub-info-logo"
      />
      <span>
        <a href="/r/nba" class="sub-info-name">r/nba</a>
      </span>
      <div class="sub-info-stats row">
        <p class="col-6 col--subscribers">
          <span class="stat-number">2.0m</span>
          <br />
          <span class="stat-label">Subcribers</span>
        </p>
        <p class="col-6 col--online">
          <span class="stat-number">20.8k</span>
          <br />
          <span class="stat-label">Online</span>
        </p>
      </div>
      <p class="sub-info-bio">All things NBA basketball.</p>
      <div class="sub-info-actions">
        <button class="btn btn--subscribe">Subscribe</button>
        <button class="btn btn--create-post">Create Post</button>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'sub-info',
};
</script>

<style lang="scss" scoped>
@import '../../scss/index';

.sub-info {
  background-color: $white;

  margin-left: 1rem;
  max-width: 30.75%;
  padding: 0;
  height: max-content;

  &-heading {
    background-color: $primary-color;
    color: $white;
    font-size: 0.75rem;
    font-weight: 600;
    margin: 0;
    padding: 1rem;
    text-transform: uppercase;
  }

  &-main {
    padding: 1rem;
  }

  &-logo {
    height: 2rem;
    width: 2rem;
    border-radius: 1.5rem;
    margin-right: 0.5rem;
    flex: none;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 100%;
  }

  &-name {
  }

  &-stats {
    margin: 0.5rem 0;
  }

  &-bio {
    margin-bottom: 0.5rem;
  }

  &-actions {
    display: flex;
    flex-direction: column;
  }
}

.col--subscribers,
.col--online {
  padding: 0;
}

.col--online {
  border-left: 1px solid #efefef;
  padding-left: 1rem;
}

.stat {
  &-number {
    font-weight: 600;
  }

  &-label {
    font-size: 0.85rem;
  }
}

.btn {
  background-color: $primary-color;
  border-color: $primary-color;
  color: $white;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  margin: 0.25rem 0;

  &:hover {
    color: $white;
  }
}
</style>
