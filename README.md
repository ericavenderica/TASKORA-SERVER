# Taskora Server

The backend API for the Taskora project management application. This server provides authentication and project management capabilities using Node.js, Express, and MongoDB.

## Features

- **Authentication**: Secure user registration and login using JWT (JSON Web Tokens).
- **Project Management**: Create, read, update, and delete projects.
- **Security**: Password hashing with bcryptjs and protected routes.
- **CORS Support**: Configured for frontend integration.

## Tech Stack

- **Node.js**: Runtime environment.
- **Express**: Web framework.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM for MongoDB.
- **JWT**: Stateless authentication.

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- MongoDB (Local instance or Atlas URI)
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ericavenderica/TASKORA-SERVER.git
   ```

2. Navigate to the project directory:
   ```bash
   cd TASKORA-SERVER
   ```

3. Install dependencies:
   ```bash
   cd server
   npm install
   ```

### Running the Application

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will launch on `http://localhost:5005`.

## API Reference

### Auth

| Method | Endpoint        | Description           | Auth Required |
| :----- | :-------------- | :-------------------- | :------------ |
| POST   | `/api/auth/register` | Register a new user   | No            |
| POST   | `/api/auth/login`    | Login user            | No            |
| GET    | `/api/auth/me`       | Get current user info | Yes           |

### Projects

| Method | Endpoint        | Description           | Auth Required |
| :----- | :-------------- | :-------------------- | :------------ |
| GET    | `/api/projects`         | Get all user projects    | Yes           |
| POST   | `/api/projects`         | Create a project         | Yes           |
| PUT    | `/api/projects/:id`     | Update a project         | Yes           |
| DELETE | `/api/projects/:id`     | Delete a project         | Yes           |

---
*Created for IronHack Project*
