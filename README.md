# 🧩 Hapi.js User Management API

This is a minimal API to manage users, built with [Hapi.js](https://hapi.dev) and integrated with [Swagger UI](https://swagger.io/tools/swagger-ui/) for API documentation.

---

## 🚀 How to Run the App

1. **Clone the repo or download the files:**

   ```bash
   git clone [<repo-url>](https://github.com/dowpm/user-management)
   cd [<repo-folder>](https://github.com/dowpm/user-management)
   ```

2. **Install all dependencies:**

   ```bash
   npm install
   ```

3. **Start the Hapi.js server:**

   ```bash
   node server.js
   ```

4. **Access the Swagger API documentation in your browser:**

   ```
   http://localhost:3000/docs
   ```

---

## 🛠️ Tech Stack

- **Hapi.js** – Web framework
- **Joi** – Data validation
- **hapi-swagger** – Swagger documentation
- **Inert** & **Vision** – Required plugins for Swagger UI
- **Node.js (fs)** – Used to persist user data to a `.js` file

---

## 📚 Main Endpoints

| Method | Route         | Description         |
| ------ | ------------- | ------------------- |
| GET    | `/users`      | List all users      |
| GET    | `/users/{id}` | Get a specific user |
| POST   | `/users`      | Create a new user   |
| PUT    | `/users/{id}` | Update a user       |
| DELETE | `/users/{id}` | Delete a user       |
