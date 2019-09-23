<template>
  <div class="row gen-info">
    <div class="col-12 banner"></div>
    <img src="../../assets/images/profile-pic.jpg" alt="u/sleekcollins" class="profile-pic" />
    <div class="col-12 user-bio">
      <router-link to="/account/profile" class="profile-link">u/sleekcollins</router-link>
      <p class="bio">Lurker!</p>
    </div>
    <div class="col-12 karma-cakeday">
      <div>
        <span class="label">Karma</span>
        <br />
        <span>
          <i class="fas fa-cog icon"></i> 127,366
        </span>
      </div>
      <div>
        <span class="label">Cake day</span>
        <br />
        <span>
          <i class="fas fa-birthday-cake icon"></i> September 5, 2014
        </span>
      </div>
    </div>
    <p class="followers">
      <span class="label">Followers</span>
      <br />
      <span>
        <i class="fas fa-user icon"></i> 24
      </span>
    </p>
    <button class="btn btn-primary new-post">New Post</button>
  </div>
</template>

<script>
import { TOTAL_KARMA } from "@/graphql/queries";

export default {
  name: "profile-general-info",
  data() {
    return {
      karma: 0
    };
  },
  methods: {
    async fetchUserKarma() {
      const {
        data: { totalKarma }
      } = await this.$apollo.query({
        query: TOTAL_KARMA,
        variables: {
          username: "sleekcollins"
        }
      });

      this.karma = totalKarma;
    }
  },
  created() {
    this.fetchUserKarma();
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/index";

.gen-info {
  background-color: $white;
  padding-top: 0;
}

.banner {
  height: 5rem;
  background-color: lighten($app-blue, 20%);
}

.profile-pic {
  width: 5rem;
  border: 0.25rem solid $white;
  border-radius: 0.25rem;
  margin-top: -4rem;
  margin-left: 1rem;
  z-index: 1;
}

.profile-link {
  font-size: 0.85rem;
  color: #333333;

  &:hover {
    text-decoration: none;
  }
}

.bio {
  margin: 0;
}

.karma-cakeday {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  margin-top: 0.5rem;
}

.label {
  font-weight: 500;
}

.followers {
  width: 100%;
  margin: 0.5rem 1rem 1rem;
  font-size: 0.85rem;
}

.icon {
  color: $app-blue;
}

.new-post {
  width: 100%;
  margin: 0 1rem 0.5rem;
}
</style>
