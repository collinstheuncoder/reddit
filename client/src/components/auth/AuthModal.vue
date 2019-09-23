<template>
  <div class="auth-modal">
    <div class="buttons">
      <b-button v-b-modal.auth variant="outline-primary" class="btn--login"
        >Login</b-button
      >
      <b-button v-b-modal.auth variant="primary" class="btn--signup"
        >Sign up</b-button
      >
    </div>
    <b-modal id="auth">
      <div class="row">
        <div class="col-2 auth-bg"></div>
        <div class="col-10">
          <signup-form />
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import LoginForm from '../forms/Login';
import SignupForm from '../forms/Signup';

export default {
  name: 'auth-modal',
  components: {
    LoginForm,
    SignupForm,
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/index';

.btn {
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.125rem;
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;

  @include mediumDevices {
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;
  }

  @include largeDevices {
    padding: 0.25rem 1rem;
    font-size: 0.85rem;
  }

  &--signup {
    margin: 0 1rem;
  }
}

.auth-modal {
  .modal-body {
    padding: 0;
    height: 22.5rem;
    display: flex;
  }

  .modal-footer {
    display: none;
  }
}

.auth-bg {
  background-image: url('../../assets/images/auth-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
