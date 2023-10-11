import { useState } from "react";
import { nanoid } from "nanoid";

export default function TaskForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Adds a task to the task list
    e.preventDefault();
    const newTask = {
      title: title,
      description: description,
      completed: false,
      id: nanoid()
    };
    props.addTask(newTask);
    // Reset title + description
    setTitle("");
    setDescription("");
  }

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            onChange={handleTitleChange}
            value={title}
            className="newTask"
            placeholder="Add new task..."
          />
        </label>
        <button className="add-btn">Add</button>
      </form>
    </div>
  );
}
