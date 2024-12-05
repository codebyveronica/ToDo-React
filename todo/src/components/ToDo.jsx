const ToDo = ({ todo, removeToDo, completeToDo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <p>{todo.text}</p>
        <div className="category">({todo.category})</div>
      </div>
      <div className="buttons">
        <button onClick={() => completeToDo(todo.id)}>
          <i className="fa-solid fa-check"></i>
        </button>
        <button onClick={() => removeToDo(todo.id)}>
          <i className="fa-solid fa-delete-left"></i>
        </button>
      </div>
    </div>
  );
};

export default ToDo;
