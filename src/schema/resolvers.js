import userResolvers from "../modules/users/user.resolvers.js";
import todoResolvers from "../modules/todos/todo.resolvers.js";

export default {
  Query: {
    ...userResolvers.Query,
    ...todoResolvers.Query
  },
  Mutation: {
    ...userResolvers.Mutation
  },
  User: {
    ...userResolvers.User
  }
};
