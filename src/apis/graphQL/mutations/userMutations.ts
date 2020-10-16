import gql from "graphql-tag";

//ASK: username not email?
const CREATE_USER = gql`
  mutation CreateUser(
    $username: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    createUser(
      username: $username
      password: $password
      firstName: $firstName
      lastName: $lastName
    ) {
      message
      token
      status
      userData {
        id
        username
        firstName
        lastName
      }
    }
  }
`;

export { CREATE_USER };
