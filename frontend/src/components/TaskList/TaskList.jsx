import { useTasks } from "../../context/TaskContext";
import TaskCard from "../TaskCard/TaskCard";
import Loading from "../Loading/Loading";
import EmptyState from "../EmptyState/EmptyState";

import "./TaskList.css";

function TaskList() {
  const {
    tasks,
    loading,
    error
  } = useTasks();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="error-state">
        {error}
      </div>
    );
  }

  if (tasks.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="task-list">

      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
        />
      ))}

    </div>
  );
}

export default TaskList;