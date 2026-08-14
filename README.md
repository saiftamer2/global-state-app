# Global State & Data Fetching App

A React and Express application built to demonstrate global state management, shared state between features, data fetching patterns, loading states, and empty states.

## 🌐 Live Demo
https://global-state-app.vercel.app/

## Features

- Global state management using React Context API
- Global task state with shared actions
- Global authentication state
- Task fetching from an Express backend
- Add, complete, and delete tasks
- Loading spinner while fetching data
- Empty state when there are no tasks
- Error state for failed requests
- Demo login and logout
- Authentication state persisted using localStorage
- Responsive user interface

## Global State Management

The application uses React Context API for global state management.

### Task Context

TaskContext manages:

- Tasks
- Loading state
- Error state
- Adding tasks
- Updating tasks
- Deleting tasks
- Reloading tasks

Components access the shared task state using:

```javascript
useTasks()

Authentication Context

AuthContext manages:

Current user
Authentication status
Login
Logout

Refactored Shared Features

Two features use shared global state:

Task Management
TaskForm
TaskList
TaskCard
Authentication
Navbar
User authentication state
Login and logout actions

Both features access their state directly through React Context instead of passing state through multiple component levels.

Loading State

The application displays a loading spinner while tasks are being fetched from the backend.

 Introduced a global state solution using React Context API
 Refactored Task Management to use shared global state
 Refactored Authentication to use shared global state
 Added loading spinner for data fetching
 Added empty state when there are zero tasks
 Added error state for failed requests


global-state-app/
│
├── backend/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── EmptyState/
│   │   │   ├── Loading/
│   │   │   ├── Navbar/
│   │   │   ├── TaskCard/
│   │   │   ├── TaskForm/
│   │   │   └── TaskList/
│   │   │
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── TaskContext.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
