import gql from 'graphql-tag';

export const SIGNUP = gql`
  mutation Signup($data: SignupInput!) {
    signup(data: $data) {
      id
      username
    }
  }
`;

export const LOGIN = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      id
      username
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation AddComment($data: CommentCreateInput!) {
    addComment(data: $data) {
      id
      body
      commentedBy {
        username
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation CreatePost($data: PostCreateInput!) {
    createPost(data: $data) {
      id
      title
      postedBy {
        username
      }
      subreddit {
        name
      }
    }
  }
`;

export const CREATE_SUBREDDIT = gql`
  mutation CreateSubreddit($data: SubredditCreateInput!) {
    createSubreddit(data: $data) {
      id
      name
      createdBy {
        username
      }
    }
  }
`;

export const UPVOTE = gql`
  mutation Upvote($data: UpvoteCreateInput!) {
    upvote(data: $data) {
      id
      upvotedBy {
        username
      }
    }
  }
`;

export const DOWNVOTE = gql`
  mutation Downvote($data: DownvoteCreateInput!) {
    downvote(data: $data) {
      id
      downvotedBy {
        username
      }
    }
  }
`;
