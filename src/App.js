import React ,{useState} from 'react';
import './App.css';
import TodoList from "./component/TodoList.js";
import Todo from "./component/Todo.js";




function App() {

  const [todos,setTodos]=useState([
    {text:"Crsitiano Ronaldo"},
    {text:"Marcos Rashford"},
   
  ]);

  const addTodo =text=>{
    const newTodo=[...todos,{text}]
    setTodos(newTodo)
  }
  



  return (
    <div className="App">
      {todos.map(todo=>
     <Todo todo={todo}/>
     )}

     <TodoList className="li" addTodo={addTodo}/>
    </div>
  );
}

export default App;