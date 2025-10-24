import { randomUUID } from "crypto";
import { users } from "../../utils/db.js";

export const getAllUsers = () => users;

export const getUserById = (id) => users.find(u => u.id === id);

export const createUser = (firstName, lastName, email, password) => {
  const newUser = {
    id: randomUUID(),
    firstName,
    lastName,
    email,
    password
  };
  users.push(newUser);
  return newUser;
};
