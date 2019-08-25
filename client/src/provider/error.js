import { onError } from 'apollo-link-error';

// Error handling
/* eslint-disable */
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );

      return message;
    });

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);

    return networkError;
  }
});

export default errorLink;
