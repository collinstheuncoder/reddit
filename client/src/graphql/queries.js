import gql from 'graphql-tag';

import { votesFragment } from './fragments';

export const CURRENT_USER = gql`
  query CurrentUser {
    currentUser {
      id
      username
    }
  }
`;

export const SUBREDDITS = gql`
  query Subreddits($where: SubredditWhereInput) {
    subreddits(where: $where) {
      id
      name
      image
    }
  }
`;

export const SUBREDDIT = gql`
  query Subreddit($where: SubredditWhereUniqueInput!) {
    subreddit(where: $where) {
      id
      name
      image
      headerBgImage
      posts {
        id
        title
        comments {
          id
          body
        }
        ...votesFields
      }
    }
  }

  ${votesFragment}
`;

export const POSTS = gql`
  query Posts($where: PostWhereInput) {
    posts(where: $where) {
      id
      title
      postedBy {
        username
      }
      comments {
        body
        commentedBy {
          username
        }
      }
      createdAt
      updatedAt
    }
  }
`;

export const POST = gql`
  query Post($where: PostWhereUniqueInput!) {
    post(where: $where) {
      id
      title
      postedBy {
        username
      }
      comments {
        commentedBy {
          username
        }
      }
      ...votesFields
      createdAt
      updatedAt
    }
  }

  ${votesFragment}
`;

export const USER = gql`
  query User($where: UserWhereUniqueInput!) {
    user(where: $where) {
      id
      username
    }
  }
`;

export const CHECK_FOR_EMAIL_AVAILABILITY = gql`
  query CheckForEmailAvailability($email: String!) {
    checkForEmailAvailability(email: $email)
  }
`;

export const TOTAL_KARMA = gql`
  query TotalKarma($username: String!) {
    totalKarma(username: $username) {
      postTotal
      commentTotal
    }
  }
`;
