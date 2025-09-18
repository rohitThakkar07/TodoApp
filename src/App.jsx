import AppName from './component/AppName'
import AddTodo from './component/AddTodo';
import TodoItem from './component/TodoItem';
import { useState } from 'react';
import ErrorMsg from './component/ErrorMsg';


const App = () => {
   const [todoItem,setTodoItem] = useState([ {
      name:"Buy Ghee",
      dueDate:"25/07/2024"
    }]);

    const onNewItemAdded=(name,date)=>{
      setTodoItem([...todoItem,{name:name,dueDate:date}]);
      todoItem.name="";
      todoItem.dueDate="";
    }

const handleDelete = (id) => {

  const updatedItems = todoItem.filter((_, index) => index !== id);

  setTodoItem(updatedItems);
};

 
  return (
    <center>
     <AppName/>
     <AddTodo onNewItemAdded={onNewItemAdded}/>
     <ErrorMsg todoItem={todoItem}/>
      <TodoItem todoItems = {todoItem} handleDelete={handleDelete} />
    </center>
  )
}

export default App