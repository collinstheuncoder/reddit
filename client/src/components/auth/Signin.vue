<template>
  <ApolloMutation
    :mutation="{SIGNIN}"
    :variables="{
      data: { 
        username, 
        email 
      }
    }"
    refetchQueries="{[{ query: CURRENT_USER }]}"
  >
    <template v-slot="{ mutate, loading, error }">
      <form @submit.prevent="signin"></form>
    </template>
  </ApolloMutation>
</template>

<script>
import { SIGNIN } from "@/graphql/mutations";
import { CURRENT_USER } from "@/graphql/queries";

export default {
  name: "signin-form",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    signin() {
      // TBD
    }
  }
};
</script>
