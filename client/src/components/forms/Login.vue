<template>
  <form @submit.prevent="login">
    <fieldset :disabled="isLoading" :aria-busy="isLoading">
      <label for="username">
        Username
        <input id="username" name="username" required v-model="username" />
      </label>
      <br />
      <label for="password">
        Password
        <input
          id="password"
          type="password"
          name="password"
          required
          v-model="password"
        />
      </label>
      <button type="submit">Log{{ isLoading ? 'ging' : '' }} in</button>
    </fieldset>
  </form>
</template>

<script>
import { LOGIN } from '@/graphql/mutations';
import { CURRENT_USER } from '@/graphql/queries';

export default {
  name: 'login-form',
  data() {
    return {
      username: '',
      password: '',
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async login() {
      this.isLoading = true;

      try {
        const res = await this.$apollo.mutate({
          mutation: LOGIN,
          variables: {
            data: {
              username: this.username.trim(),
              password: this.password.trim(),
            },
          },
          refetchQueries: [{ query: CURRENT_USER }],
        });

        this.isLoading = false;
        console.log(res);
      } catch (error) {
        this.isLoading = false;
        this.error = error;
        console.log(error);
      }
    },
  },
};
</script>
