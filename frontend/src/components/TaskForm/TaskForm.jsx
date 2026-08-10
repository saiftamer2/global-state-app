import { useState } from "react";
import { useTasks } from "../../context/TaskContext";
import "./TaskForm.css";

function TaskForm() {
  const [title, setTitle] = useState("");

  const { addTask } = useTasks();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) {
      return;
    }

    await addTask(title);

    setTitle("");
  }

  return (
    <form
      className="task-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Enter a new task..."
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;