<template>
  <div>
    <form @submit.prevent="checkForEmailAvailability">
      <label for="email">
        Email
        <input id="email" type="email" name="email" required v-model="email" />
      </label>
      <button class="btn btn-primary" type="submit">Next</button>
    </form>
    <p v-show="isEmailUnavailable">
      The email you've entered is already in use. Please select another email.
    </p>
    <form v-show="displaySignupForm" @submit.prevent="signup">
      <fieldset :disabled="isLoading" :aria-busy="isLoading">
        <br />
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
        <button type="submit">Sig{{ isLoading ? 'ning' : 'n' }} up</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { SIGNUP } from '@/graphql/mutations';
import { CURRENT_USER, CHECK_FOR_EMAIL_AVAILABILITY } from '@/graphql/queries';

export default {
  name: 'signup-form',
  data() {
    return {
      email: '',
      username: '',
      password: '',
      isEmailUnavailable: false,
      displaySignupForm: false,
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async checkForEmailAvailability() {
      this.isLoading = true;

      try {
        const {
          data: { checkForEmailAvailability },
        } = await this.$apollo.query({
          query: CHECK_FOR_EMAIL_AVAILABILITY,
          variables: {
            email: this.email.trim(),
          },
        });

        if (checkForEmailAvailability) {
          this.isEmailUnavailable = true;
          this.displaySignupForm = false;
        } else {
          this.isEmailUnavailable = false;
          this.displaySignupForm = true;
        }

        this.isLoading = false;
        this.error = null;
      } catch (error) {
        this.isLoading = false;
        this.error = error;
        console.log(error);
      }
    },

    async signup() {
      this.isLoading = true;

      try {
        const res = await this.$apollo.mutate({
          mutation: SIGNUP,
          variables: {
            data: {
              email: this.email.trim(),
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
