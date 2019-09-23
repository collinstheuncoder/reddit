<template>
  <div class="login row">
    <div class="col-2 col--img"></div>
    <div class="col-10 col--form">
      <img src="../../assets/images/logo.png" alt="Reddit Logo" class="logo" />
      <h3>Log in</h3>
      <login-form />
      <p class="msg msg--forgot">
        <span>
          <router-link to="/">Forgot username</router-link>
        </span>
        ·
        <span>
          <router-link to="/">Forgot password</router-link>
        </span>
      </p>
      <p class="msg msg--signup-link">
        New to Reddit?
        <router-link to="/account/signup">SIGN UP</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/forms/Login';

export default {
  name: 'login-page',
  components: {
    LoginForm,
  },
};
</script>

<style lang="scss" scoped>
.login {
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
