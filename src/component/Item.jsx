import React from "react";
import { MdDelete } from "react-icons/md";
import { BsCalendar2DateFill } from "react-icons/bs";



const Item = ({id, item, date ,handleDelete}) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center shadow-sm rounded mb-2">
      <span className="fw-semibold">{item}</span>
      <span className="badge bg-secondary"><BsCalendar2DateFill/> {date}</span>
      <button  className="btn btn-sm btn-danger" onClick={()=>handleDelete(id)}><MdDelete/></button>
    </li>
  );
};

export default Item;
