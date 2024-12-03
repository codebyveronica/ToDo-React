const ToDo = ({ todo }) => {
  return <div className="todo">
  <div className="content">
    <p>{todo.text}</p>
    <div className="category">({todo.category})</div>
  </div>
  <div className="buttons">
    <button><i className="fa-solid fa-check"></i></button>
    <button><i className="fa-solid fa-delete-left"></i></button>
  </div>
</div>
}

export default ToDo;