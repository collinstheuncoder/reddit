import { Prisma } from 'prisma-binding';

import config from '../config';

const { prismaEndpoint, prismaSecret } = config;

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: prismaEndpoint,
  secret: prismaSecret,
  debug: false,
});

export default db;
