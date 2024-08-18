# MERN Users Management

This is a full-stack MERN (MongoDB, Express, React, Node.js) application that includes user authentication, authorization, and user management features. The project utilizes JWT for secure authentication, and users' passwords are hashed using bcryptjs. The frontend is built with React, React Bootstrap, and Redux Toolkit, while the backend is powered by Express and Mongoose.

![Alt text](/homePage.png)
![Alt text](/users_list.png)

## Features

- **User Authentication**: Secure login and registration with JWT.
- **User Management**: View and manage users on a dedicated users page.
- **State Management**: Managed with Redux Toolkit for a more scalable state architecture.
- **Routing**: Implemented with React Router DOM for smooth navigation between pages.
- **Notifications**: User-friendly notifications with React Toastify.
- **Environment Configuration**: Managed securely with dotenv.
- **Error Handling**: Async operations handled using express-async-handler.
- **Cross-Origin Requests**: Enabled with CORS.
- **Session Management**: Cookies are managed with cookie-parser.

## Tech Stack

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: A toolset for efficient Redux development.
- **React Router DOM**: Enables dynamic routing in the app.
- **React Bootstrap**: Bootstrap components built with React.
- **React Toastify**: Notifications for React apps.

### Backend

- **Node.js**: JavaScript runtime built on Chrome's V8 engine.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **Mongoose**: MongoDB object modeling for Node.js.
- **jsonwebtoken**: An implementation of JSON Web Tokens.
- **bcryptjs**: Library to hash passwords.
- **cookie-parser**: Middleware to parse cookies.
- **cors**: Middleware for enabling CORS.
- **dotenv**: Module for loading environment variables from a `.env` file.
- **express-async-handler**: Simplifies error handling in Express routes.

## Usage

- **User Authentication**:

  - Register a new user.
  - Login with existing credentials.
  - The JWT token is stored securely and used for authenticated requests.

- **Users Page**:
  - Navigate to `/users` to view all registered users (only accessible to authenticated users).
