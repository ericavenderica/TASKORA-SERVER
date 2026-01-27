# Taskora Server

Backend API for the Taskora project management application. Built with Node.js, Express, and MongoDB.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)

## Features

- User Authentication (Register, Login, JWT)
- Task Management (CRUD operations)
- Protected Routes (Middleware)
- **CORS Enabled**: Configured to accept requests from the frontend (e.g., `http://localhost:5005`).

## Project Structure

The repository contains the backend code in the `server/` directory:

```
Taskora-Server/
├── server/             # Backend Node.js application
│   ├── middleware/     # Authentication middleware
│   ├── models/         # Mongoose models (User, Task)
│   ├── routes/         # API routes (Auth, Tasks)
│   ├── server.js       # Entry point
│   └── .env            # Environment variables
└── README.md
```

## Technologies

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (with Mongoose)
- **Authentication**: JSON Web Tokens (JWT) & bcryptjs
- **CORS**: Enabled for frontend communication

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed and running locally or a MongoDB Atlas URI

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ericavenderica/TASKORA-SERVER.git
   cd TASKORA-SERVER
   ```

2. Install dependencies (navigate to the server directory if needed, though this repo structure seems to have `server/` content at root or inside server folder - *Adjusting based on actual structure*: The code is inside `server/` folder):

   ```bash
   cd server
   npm install
   ```

### Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/taskora
JWT_SECRET=your_jwt_secret_key
```

### Running the Server

Inside the `server` directory:

```bash
# Run in development mode (with nodemon)
npm run dev

# Run in production mode
npm start
```

The server will start on `http://localhost:5000` (or your specified PORT).

## API Endpoints

### Authentication (`/api/auth`)

- **POST** `/register` - Register a new user
  - Body: `{ name, email, password }`
- **POST** `/login` - Login user and get token
  - Body: `{ email, password }`
- **GET** `/me` - Get current user info (Protected)

### Tasks (`/api/tasks`)

- **GET** `/` - Get all tasks for the logged-in user
- **POST** `/` - Create a new task
  - Body: `{ title, description, priority, dueDate }`
- **PUT** `/:id` - Update a task
  - Body: `{ title, description, priority, completed, dueDate }`
- **DELETE** `/:id` - Delete a task
