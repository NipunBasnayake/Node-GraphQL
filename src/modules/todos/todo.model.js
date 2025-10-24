import { todos } from "../../utils/db.js";

export const getTodosByUser = (userId) => todos.filter(t => t.by === userId);

export const getAllTodos = () => todos;

export const createTodo = (title, userId) => {
  const newTodo = { title, by: userId };
  todos.push(newTodo);
  return newTodo;
};
