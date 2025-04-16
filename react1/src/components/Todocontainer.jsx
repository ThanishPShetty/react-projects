import React from 'react';
import './Todocontainer.css';
import Todo from './Todo';

function Todocontainer({todos,del}) {
  return (
   <div className='todo-container'>
   {todos.map((todo,index)=>{
    return(
      <Todo key={index} del={del} todo={todo} index={index}/>
      
    )
   })}
</div>
)
}

export default Todocontainer