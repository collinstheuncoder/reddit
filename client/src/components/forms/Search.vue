<template>
  <form class="search" @submit.prevent="search">
    <div class="input-group">
      <input
        class="form-control py-2 border-right-0 border"
        v-model="query"
        placeholder="Search..."
      />
      <span class="input-group-append" @click.prevent="search">
        <div class="input-group-text bg-transparent">
          <i class="fas fa-search"></i>
        </div>
      </span>
    </div>
  </form>
</template>

<script>
export default {
  name: 'search-form',
  data() {
    return {
      query: '',
    };
  },
  methods: {
    search() {
      console.log(this.query);

      this.query = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.input-group-append {
  cursor: pointer;
}
</style>
