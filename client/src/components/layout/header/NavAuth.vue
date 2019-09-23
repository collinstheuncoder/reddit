<template>
  <div class="auth col-3">
    <div class="auth-modal"><auth-modal /></div>
    <div class="dropdown">
      <span
        class="dropdown-toggle dropdown--user"
        id="user-options"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i class="fas fa-user"></i>
      </span>
      <div class="dropdown-menu" aria-labelledby="user-options">
        <a class="dropdown-item" href="#">Best</a>
        <a class="dropdown-item" href="#">Top</a>
        <a class="dropdown-item" href="#">New</a>
        <a class="dropdown-item" href="#">Old</a>
        <a class="dropdown-item" href="#">Controversial</a>
      </div>
    </div>
  </div>
</template>

<script>
import AuthModal from '../../auth/AuthModal';

export default {
  name: 'nav-auth',
  components: {
    AuthModal,
  },
};
</script>

<style lang="scss" scoped>
@import '../../../scss/index';

.auth {
  align-items: center;
  display: flex;
  justify-content: flex-end;

  &-modal {
    display: none;

    @include largeDevices {
      display: block;
    }
  }
}

.buttons {
  margin-right: 0.5rem;
  display: none;

  @include mediumDevices {
    margin-right: 0.75rem;
    display: flex;
  }

  @include largeDevices {
    margin-right: 1rem;
  }
}

.dropdown--user {
  color: #808080;
}
</style>
