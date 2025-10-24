export default `
  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    todos: [Todo]
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(
      firstName: String!, 
      lastName: String!, 
      email: String!, 
      password: String!
    ): User
  }
`;
