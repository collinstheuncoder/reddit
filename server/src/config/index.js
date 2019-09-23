import dotenv from 'dotenv';

const path =
  process.env.NODE_ENV === 'production'
    ? `${__dirname}/../../../.env.production`
    : `${__dirname}/../../../.env.development`;

dotenv.config({
  path,
});

// To be accessible across app
const config = {};

config.port = process.env.PORT || 4000;

config.frontendUrl = process.env.FRONTEND_URL;
config.prismaEndpoint = process.env.PRISMA_ENDPOINT;
config.prismaSecret = process.env.PRISMA_SECRET;
config.appSecret = process.env.APP_SECRET;
config.mailHost = process.env.MAIL_HOST;
config.mailPort = process.env.MAIL_PORT;
config.mailUser = process.env.MAIL_USER;
config.mailPass = process.env.MAIL_PASS;

export default config;
