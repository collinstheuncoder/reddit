<template>
  <div class="post-auth-status row">
    <div class="col-6">
      <p class="message">What are your thoughts? Log in or Sign up</p>
    </div>
    <div class="col-6 buttons">
      <button class="btn btn-outline-primary btn--login">Login</button>
      <button class="btn btn-primary btn--signup">Sign up</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'post-auth-status',
};
</script>

<style lang="scss" scoped>
.post-auth-status {
  align-items: center;
  margin: 0;
  border-radius: 0.25rem;
  border: 1px solid #dedede;
  padding: 0.75rem 0;
  justify-content: center;
}

.message {
  font-size: 1rem;
  color: #a0a0a0;
  margin: 0;
}

.buttons {
  text-align: right;
}

.btn {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.125rem;
  padding: 0.25rem 1rem;
  text-transform: uppercase;

  &--login {
  }

  &--signup {
    margin-left: 1rem;
  }
}
</style>
