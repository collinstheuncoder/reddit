import { setContext } from 'apollo-link-context';

// Get the authentication token from local storage if it exists
const token = localStorage.getItem('reddit-token');

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export default authLink;
