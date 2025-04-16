import React from 'react'
import './Todocontainer.css'

function Todo({index,del,todo}) {
  return (
    <div className='todo'>
        <p>{todo}</p>
        <div className='actions'>
           <input type='checkbox' />
           <button onClick={()=>del(index)}>Delete</button>
        </div>
    </div>
  )
}

export default Todo