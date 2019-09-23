import { GraphQLServer } from 'graphql-yoga';

import { Query, Mutation } from './resolvers';

import db from './db';

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Query,
      Mutation,
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: req => {
      return {
        ...req,
        db,
      };
    },
  });
}

export default createServer;
