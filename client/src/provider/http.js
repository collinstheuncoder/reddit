import { HttpLink } from 'apollo-link-http';

const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });

export default httpLink;
