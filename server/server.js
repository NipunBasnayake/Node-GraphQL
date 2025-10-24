import { ApolloServer, gql } from "apollo-server";
import { randomUUID } from "crypto";

const users = [
  {
    id: "asdasdasdasdsdfsfs",
    firstName: "Nipun",
    lastName: "Residue",
    email: "nipun@example.com",
    password: "12345"
  },
  {
    id: "sdfsfdsfsafsfsadfsd",
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    password: "54321",
  }
];

const todos = [
  {
    title: "Learn GraphQL",
    by: "asdasdasdasdsdfsfs"
  },
  {
    title: "Build a GraphQL API",
    by: "sdfsfdsfsafsfsadfsd"
  },
  {
    title: "Profit",
    by: "asdasdasdasdsdfsfs"
  }
];

const typeDefs = gql`
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

  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    todos: [Todo]
  }

  type Todo {
    title: String!
    by: ID!
  }
`;

const resolvers = {
  Query: {
    users: (_, __, { userLoggedIn }) => {
      if (!userLoggedIn) {
        throw new Error("User not authenticated");
      }
      return users;
    },
    user: (_, { id }, { userLoggedIn }) => {
      if (!userLoggedIn) {
        throw new Error("User not authenticated");
      }
      return users.find(user => user.id === id);
    }
  },
  User: {
    todos: (parent) => todos.filter(todo => todo.by === parent.id)
  },
  Mutation: {
    createUser: (_, { firstName, lastName, email, password }, context) => {
      console.log("Context in Mutation:", context);
      const newUser = {
        id: randomUUID(),
        firstName,
        lastName,
        email,
        password
      };
      users.push(newUser);
      return newUser;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { userLoggedIn: true }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
