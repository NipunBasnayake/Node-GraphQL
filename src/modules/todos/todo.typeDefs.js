export default `
  type Todo {
    title: String!
    by: ID!
  }

  extend type Query {
    todos: [Todo]
    todosByUser(userId: ID!): [Todo]
  }

  extend type Mutation {
    createTodo(title: String!, by: ID!): Todo
  }
`;
