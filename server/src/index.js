import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import express from 'express';
import path from 'path';

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

server.express.use(express.static(path.join(__dirname, '../client/dist')));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  server.express.use(express.static('../client/dist'));

  server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client', 'dist', 'index.html'));
  });
}

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
