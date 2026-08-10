import Navbar from "./components/Navbar/Navbar";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Navbar />

      <header className="header">
        <h1>Task Manager</h1>

        <p>
          Global State & Data Fetching Demo
        </p>
      </header>

      <main className="container">

        <TaskForm />

        <TaskList />

      </main>

    </div>
  );
}

export default App;