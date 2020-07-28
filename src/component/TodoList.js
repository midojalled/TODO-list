  
import React ,{useState} from 'react'





function TodoList({addTodo}) {

 const[value,setValue]=useState("Write your best footballer name");

 const handlechange=event=>{
   
  setValue(event.target.value)
};

const handleClick=e=>{
      e.preventDefault();
      if(value.trim()) {
          addTodo(value);
          setValue("")
      }
};

    return (
        <div>
          <input className="add" type="text" value={value} onChange={handlechange} />  
          <button className="buut" onClick={handleClick}>ADD</button>
        </div>
        
    )
}
export default TodoList