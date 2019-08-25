import gql from 'graphql-tag';

export const SIGNUP = gql`
  mutation Signup($data: SignupInput!) {
    signup(data: $data) {
      authenticated
      token
    }
  }
`;

export const SIGNIN = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      authenticated
      token
    }
  }
`;
