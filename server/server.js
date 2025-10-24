import { ApolloServer, gql } from "apollo-server";

const users = [
  {
    id: 1,
    firstName: "Nipun",
    lastName: "Residue",
    email: "nipun@example.com",
    password: "12345"
  },
  {
    id: 2,
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
      console.log(args.id);
      return users.find(item=> item.id == args.id);
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});