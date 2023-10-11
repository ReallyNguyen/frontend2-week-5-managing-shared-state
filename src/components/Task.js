export default function Task(props) {
  const task = props.task;

  function handleDelete() {
    props.remove(task);
  }

  function handleStatusChange() {
    props.toggleCompleted(task);
  }

  return (
    <li className="task">
      <div className="task-details">
        <p>
          <span>
            <input
              type="checkbox"
              onChange={handleStatusChange}
              value={task.completed}
            />
            <span className="task-title">
              {task.completed === true ? <del>{task.title}</del> : task.title}
            </span>
          </span>
          <span className="task-description">{task.description}</span>
        </p>
      </div>
      <div onClick={handleDelete} className="remove-btn">
        <span>Delete</span>
      </div>
    </li>
  );
}
