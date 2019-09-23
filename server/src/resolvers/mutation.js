import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import config from '../config';

const { appSecret } = config;

// Generate auth token
function authToken(user) {
  return jwt.sign(
    {
      sub: user.id,
    },
    appSecret
  );
}

const Mutation = {
  async signup(
    parent,
    {
      data: { email, username, password },
    },
    { db, response },
    info
  ) {
    try {
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = await db.mutation.createUser(
        {
          data: {
            email: email.toLowerCase(),
            username,
            password: hashedPassword,
            roles: {
              set: ['USER'],
            },
          },
        },
        info
      );

      const token = authToken(newUser);

      response.cookie('reddit-token', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 365,
      });

      return newUser;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async login(
    parent,
    {
      data: { username, password },
    },
    { db, response },
    info
  ) {
    try {
      const foundUser = await db.query.user({ where: { username } });

      if (!foundUser) {
        throw new Error(`Sorry! There is no user corresponding to ${username}`);
      }

      const isValid = await bcrypt.compare(password, foundUser.password);

      if (!isValid) {
        throw new Error('Invalid Password!');
      }

      const token = authToken(foundUser);

      response.cookie('reddit-token', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 365,
      });

      return foundUser;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async createSubreddit(parent, { data }, { db }, info) {
    try {
      const newSubreddit = await db.mutation.createSubreddit({ data }, info);

      return newSubreddit;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async createPost(parent, { data }, { db }, info) {
    try {
      const newPost = await db.mutation.createPost({ data }, info);

      return newPost;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default Mutation;
