<template>
  <div class="feeds col-2">feeds</div>
</template>

<script>
export default {
  name: 'nav-feeds',
};
</script>

<style lang="scss" scoped>
@import '../../../scss/index';

.feeds {
  display: none;

  @include largeDevices {
    display: block;
  }
}
</style>
