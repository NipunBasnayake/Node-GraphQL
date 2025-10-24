import { ApolloServer } from "apollo-server";
import typeDefs from "./schema/typeDefs.js";
import resolvers from "./schema/resolvers.js";
import { buildContext } from "./utils/auth.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: buildContext
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
