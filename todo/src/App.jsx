import { useState } from "react";
import ToDo from "./components/ToDo";
import ToDoForm from "./components/ToDoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Terminar a ToDo List com React",
      category: "Estudos",
      completed: false,
    },
    {
      id: 2,
      text: "Jogar Wild Rift com amigo",
      category: "Pessoal",
      completed: false,
    },
  ]);

  const addToDo = (text, category) => {
    const newTodos = [
      ...todos, 
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        completed: false
      }
    ];

    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Just do it.</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <ToDo key={todo.id} todo={todo} />
        ))}
      </div>
      <ToDoForm addToDo={addToDo} />
    </div>
  );
}

export default App;
