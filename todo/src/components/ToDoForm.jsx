import { useState } from "react";

const ToDoForm = ({ addToDo }) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!text || !category) return;
    addToDo(text, category)
    setText("");
    setCategory("");
  }

  return (
    <div className="todo-form">
      <h2>Add new task</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          type="text"
          placeholder="Add your task"
          onChange={(e) => setText(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select a category</option>
          <option value="Work">Work</option>
          <option value="Private">Private</option>
          <option value="Study">Study</option>
        </select>

        <button type="submit">
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;
