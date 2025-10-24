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
]

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
  }
`;

const resolvers = {
  Query: {
    users: () => users,
    user: (parent, args, context) => {
      return users.find(item => item.id == args.id);
    }
  },
  Mutation: {
    createUser: (_, { firstName, lastName, email, password }) => {
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
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});