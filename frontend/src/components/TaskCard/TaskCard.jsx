import { useTasks } from "../../context/TaskContext";
import "./TaskCard.css";

function TaskCard({ task }) {
  const { toggleTask, deleteTask } = useTasks();

  return (
    <div className="task-card">

      <div>
        <h3>{task.title}</h3>

        <p>
          Status:
          {task.completed
            ? " ✅ Completed"
            : " ⏳ Pending"}
        </p>
      </div>

      <div className="task-actions">

        <button
          className="complete-btn"
          onClick={() =>
            toggleTask(task.id)
          }
        >
          {task.completed
            ? "Mark Pending"
            : "Mark Completed"}
        </button>

        <button
          className="delete-btn"
          onClick={() =>
            deleteTask(task.id)
          }
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TaskCard;