<template>
  <form @submit.prevent="signup"></form>
</template>

<script>
export default {
  name: 'signup-form',
  data() {
    return {
      email: '',
      username: '',
      password: '',
    };
  },
  methods: {
    signup() {
      // TBD
    },
  },
};
</script>
