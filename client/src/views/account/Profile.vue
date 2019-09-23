<template>
  <div class="profile">
    <profile-nav />
    <div class="row profile-main">
      <section class="col-9">
        <router-view />
      </section>
      <aside class="col-3">
        <gen-info />
      </aside>
    </div>
  </div>
</template>

<script>
import ProfileNav from "@/components/profile/Nav";
import GenInfo from "@/components/profile/GenInfo";

import { USER } from "@/graphql/queries";

export default {
  name: "profile-page",
  components: {
    ProfileNav,
    GenInfo
  },
  data() {
    return {
      user: null
    };
  },
  methods: {
    async fetchUser() {
      const {
        data: { user }
      } = await this.$apollo.query({
        query: USER,
        variables: {
          where: {
            username: "sleekcollins"
          }
        }
      });

      this.user = user;
    }
  },
  created() {
    this.fetchUser();
  }
};
</script>

<style lang="scss" scoped>
.profile {
  flex: 1;
  background-color: #e4e4e4;

  &-main {
    margin: 1.5rem 0.75rem !important;
  }
}
</style>
