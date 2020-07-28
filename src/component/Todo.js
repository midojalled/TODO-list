import React from 'react'

function Todo({todo,}) {
    return (
        <div className="todo">
           <h2 className="txt">{todo.text}</h2> 
        <button className="dl" >DELETE</button>
        <button className="ed">EDIT</button>
        </div>
    )
}
export default Todo