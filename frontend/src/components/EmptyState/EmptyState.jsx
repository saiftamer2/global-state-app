import "./EmptyState.css";

function EmptyState() {
  return (
    <div className="empty-state">
      <div className="empty-icon">📋</div>

      <h2>No tasks yet</h2>

      <p>
        Add your first task to get started.
      </p>
    </div>
  );
}

export default EmptyState;