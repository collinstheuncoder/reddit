import gql from 'graphql-tag';

export const votesFragment = gql`
  fragment votesFields on Post {
    upvotes {
      id
      upvotedBy {
        username
      }
    }
    downvotes {
      id
      downvotedBy {
        username
      }
    }
  }
`;
