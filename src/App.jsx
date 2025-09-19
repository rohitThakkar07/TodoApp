import React, { useState } from "react";
import AddTodo from "";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  // Function passed to AddTodo
  const handleNewItemAdded = (name, date) => {
    if (!name || !date) {
      alert("Please enter both task and date!");
      return;
    }

    const newTodo = {
      id: Date.now(),
      name,
      date,
    };

    setTodos([...todos, newTodo]);
  };

  // Function for deleting a todo
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">📝 My Todo App</h2>
      <AddTodo onNewItemAdded={handleNewItemAdded} />
      <TodoList todos={todos} onDelete={handleDelete} />
    </div>
  );
}

export default App;
