import React, { useRef } from "react";
import { IoAddOutline } from "react-icons/io5";

const AddTodo = ({ onNewItemAdded }) => {
  const todoName = useRef();
  const dueDate = useRef();

  const handleAdd = () => {
    const name = todoName.current.value.trim();
    const date = dueDate.current.value;

    if (!name || !date) {
      alert("Please enter todo name and due date!");
      return;
    }

    onNewItemAdded(name, date);

    // reset inputs
    todoName.current.value = "";
    dueDate.current.value = "";
  };

  return (
    <div className="container text-center my-3">
      <div className="row g-2">
        <div className="col-5">
          <input
            type="text"
            className="form-control"
            placeholder="Enter todo..."
            ref={todoName}
          />
        </div>
        <div className="col-4">
          <input type="date" className="form-control" ref={dueDate} />
        </div>
        <div className="col-3">
          <button className="btn btn-primary w-100" onClick={handleAdd}>
            <IoAddOutline size={20} /> Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
