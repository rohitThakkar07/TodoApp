import React from "react";
import Item from "./Item";


const TodoItem = ({ todoItems,handleDelete }) => {
 
  return (
    <div className="container mt-4">
      <ul className="list-group">
        {todoItems.map((item, idx) => (
          <Item key={idx} id={idx} item={item.name} date={item.dueDate} handleDelete= {handleDelete}/>
        ))}
      </ul>
    </div>
  );
};

export default TodoItem;
