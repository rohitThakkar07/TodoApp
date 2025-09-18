import React, { useState } from 'react';
import { IoAddOutline } from "react-icons/io5";


const AddTodo = ({ onNewItemAdded }) => {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAdd = () => {
    onNewItemAdded(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container text-center my-3">
      <div className="row g-2">
        <div className="col-5">
          <input
            type="text"
            className="form-control"
            placeholder="Enter todo..."
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
            required
          />
        </div>
        <div className="col-4">
          <input
            type="date" 
            className="form-control "
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <div className="col-3">
          <button
            className="btn btn-primary w-100"
            onClick={handleAdd}
          >
            <IoAddOutline size={20} /> Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
