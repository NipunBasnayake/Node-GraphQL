import { gql } from "apollo-server";
import userTypeDefs from "../modules/users/user.typeDefs.js";
import todoTypeDefs from "../modules/todos/todo.typeDefs.js";

const typeDefs = gql`
  ${userTypeDefs}
  ${todoTypeDefs}
`;

export default typeDefs;
