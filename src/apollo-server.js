import { ApolloServer } from 'apollo-server';

import resolvers from './resolvers';

import db from './db';

const apolloServer = new ApolloServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: ({ req }) => {
    const token = req.headers['x-access-token'] || req.headers.authorization;

    return {
      ...req,
      db,
      token,
    };
  },
  playground: {
    endpoint: '/graphql',
    settings: {
      'editor.theme': 'dark',
      'editor.cursorShape': 'line',
    },
  },
  debug: process.env.NODE_ENV === 'development',
  formatError: error => {
    const message = error.message.replace('Validation error: ', '');

    return {
      ...error,
      message,
    };
  },
});

apolloServer.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
