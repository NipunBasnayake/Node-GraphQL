import { users } from "../../utils/db.js";
import { randomUUID } from "crypto";

export default {
  Query: {
    users: (_, __, { userLoggedIn }) => {
      if (!userLoggedIn) throw new Error("User not authenticated");
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
    todos: (parent, _, { todos }) => todos.filter(todo => todo.by === parent.id)
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
};
