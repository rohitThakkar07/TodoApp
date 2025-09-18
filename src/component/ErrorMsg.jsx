import React from 'react'
import { MdError } from "react-icons/md";


const ErrorMsg = ({todoItem}) => {
  return todoItem.length==0 ? <div className="alert alert-warning w-50" role="alert">
 <MdError/> No Todos. Please add some tasks!
</div> : null
}

export default ErrorMsg