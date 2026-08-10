import { createContext, useContext, useEffect, useState } from "react";

import {
  getTasks,
  addTask as apiAddTask,
  toggleTask as apiToggleTask,
  deleteTask as apiDeleteTask
} from "../services/api";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadTasks() {
    try {
      setLoading(true);
      setError("");

      const data = await getTasks();

      setTasks(data);
    } catch (error) {
      setError("Failed to load tasks.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  async function addTask(title) {
    try {
      const newTask = await apiAddTask(title);

      setTasks((previousTasks) => [
        ...previousTasks,
        newTask
      ]);
    } catch (error) {
      setError("Failed to add task.");
    }
  }

  async function toggleTask(id) {
    try {
      const updatedTask = await apiToggleTask(id);

      setTasks((previousTasks) =>
        previousTasks.map((task) =>
          task.id === updatedTask.id
            ? updatedTask
            : task
        )
      );
    } catch (error) {
      setError("Failed to update task.");
    }
  }

  async function deleteTask(id) {
    try {
      await apiDeleteTask(id);

      setTasks((previousTasks) =>
        previousTasks.filter((task) => task.id !== id)
      );
    } catch (error) {
      setError("Failed to delete task.");
    }
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        error,
        addTask,
        toggleTask,
        deleteTask,
        reloadTasks: loadTasks
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}