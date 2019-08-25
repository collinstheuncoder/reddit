import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

import createServer from './server';

import config from './config';

const { appSecret, frontendUrl } = config;

const server = createServer();

server.express.use(cookieParser());
server.express.use((req, res, next) => {
  const { token } = req.cookies;

  if (token) {
    const { sub } = jwt.verify(token, appSecret);

    req.userId = sub;
  }

  next();
});

server.start(
  {
    cors: {
      credentials: true,
      origin: frontendUrl,
    },
  },
  ({ port }) => {
    console.log(`Server is now running on port http://localhost:${port}`);
  }
);
