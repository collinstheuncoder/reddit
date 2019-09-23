<template>
  <div class="signup row">
    <div class="col-2 col--img"></div>
    <div class="col-10 col--form">
      <img src="../../assets/images/logo.png" alt="Reddit Logo" class="logo" />
      <h3>Sign up</h3>
      <p>
        By having a Reddit account, you can join, vote, and comment on all your
        favorite Reddit content.
      </p>
      <signup-form />
      <p class="msg msg--signin-link">
        Already a Redditor?
        <router-link to="/account/login">LOG IN</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import SignupForm from '@/components/forms/Signup';

export default {
  name: 'signup-page',
  components: {
    SignupForm,
  },
};
</script>

<style lang="scss" scoped>
.signup {
  min-height: 100vh;
}

.col {
  &--img {
    background-image: url('../../assets/images/auth-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
}

.logo {
  border-radius: 50%;
}
</style>
