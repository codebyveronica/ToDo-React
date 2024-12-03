const ToDoForm = () => {
  return (
    <div className="todo-form">
      <h2>Add new task</h2>
      <form>
        <input type="text" placeholder="Add your task" />

        <select>
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
