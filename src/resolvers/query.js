import { forwardTo } from 'prisma-binding';

const Query = {
  async users(parent, args, { db }, info) {
    try {
      const users = await db.query.users(
        {},
        `{
        email
      }`
      );

      return users;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async user(parent, args, ctx, info) {
    try {
      // TBD
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async currentUser(
    parent,
    args,
    {
      request: { userId },
      db,
    },
    info
  ) {
    try {
      if (!userId) {
        return null;
      }

      return await db.query.user(
        {
          where: {
            id: userId,
          },
        },
        info
      );
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async checkForEmailAvailability(parent, { email }, { db }, info) {
    try {
      const savedUsers = await db.query.users(
        {},
        `{
        email
      }`
      );

      const usedEmails = savedUsers.map(user => user.email);

      return usedEmails.includes(email);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  subreddits: forwardTo('db'),
  subreddit: forwardTo('db'),
  posts: forwardTo('db'),
  post: forwardTo('db'),

  async totalKarma(parent, { username }, { db }, info) {
    try {
      const postUpvotes = await db.query.upvotesConnection(
        {
          where: {
            post: {
              postedBy: {
                username,
              },
            },
          },
        },
        `
      { aggregate {
        count
      } }
      `
      );

      const postDownvotes = await db.query.downvotesConnection(
        {
          where: {
            post: {
              postedBy: {
                username,
              },
            },
          },
        },
        `
      { aggregate {
        count
      } }
      `
      );

      const commentUpvotes = await db.query.upvotesConnection(
        {
          where: {
            comment: {
              commentedBy: {
                username,
              },
            },
          },
        },
        `
      { aggregate {
        count
      } }
      `
      );

      const commentDownvotes = await db.query.downvotesConnection(
        {
          where: {
            comment: {
              commentedBy: {
                username,
              },
            },
          },
        },
        `
      { aggregate {
        count
      } }
      `
      );

      const postUpvotesCount = postUpvotes.aggregate.count,
        postDownvotesCount = postDownvotes.aggregate.count,
        commentUpvotesCount = commentUpvotes.aggregate.count,
        commentDownvotesCount = commentDownvotes.aggregate.count;

      const totalPostKarma = postUpvotesCount - postDownvotesCount;
      const totalCommentKarma = commentUpvotesCount - commentDownvotesCount;

      return {
        postTotal: totalPostKarma >= 0 ? totalPostKarma : 0,
        commentTotal: totalCommentKarma >= 0 ? totalCommentKarma : 0,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default Query;
