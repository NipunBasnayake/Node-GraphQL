import { getAllTodos, getTodosByUser, createTodo } from "./todo.model.js";

export default {
  Query: {
    todos: () => getAllTodos(),
    todosByUser: (_, { userId }) => getTodosByUser(userId),
  },
  Mutation: {
    createTodo: (_, { title, by }) => createTodo(title, by),
  }
};
