# GraphQL User & Todo API

This project is a **GraphQL API** built with **Node.js** and **Apollo Server**, demonstrating how to manage users and their associated todos using queries and mutations.  
It includes authentication logic, nested data relationships, and a simple in-memory data store.

---

## 🚀 Features

- Fetch all users or a single user by ID  
- Retrieve todos related to each user  
- Create new users dynamically via GraphQL mutations  
- Demonstrates **GraphQL schema design**, **resolver functions**, and **context-based authentication**

---

## 🧠 Technologies Used

- **Node.js**
- **Apollo Server**
- **GraphQL**
- **ES Modules (ECMAScript imports)**
- **Crypto (UUID generation)**

---

## 📜 GraphQL Schema

```graphql
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
```

## ⚙️ Installation & Setup

1. Clone the repository
git clone https://github.com/yourusername/graphql-user-todo-api.git
cd graphql-user-todo-api

2. Initialize the project
npm init -y

3. Install dependencies
npm install apollo-server graphql

▶️ Running the Server

Start the GraphQL API with:

node index.js

You’ll see an output like:

🚀 Server ready at http://localhost:4000/

🧩 Example Queries
✅ Get All Users
query {
  users {
    id
    firstName
    lastName
    email
    todos {
      title
    }
  }
}

✅ Get a Single User by ID
query {
  user(id: "asdasdasdasdsdfsfs") {
    firstName
    todos {
      title
    }
  }
}

✳️ Create a New User
mutation {
  createUser(
    firstName: "Jane",
    lastName: "Smith",
    email: "jane@example.com",
    password: "abcd1234"
  ) {
    id
    firstName
    email
  }
}
