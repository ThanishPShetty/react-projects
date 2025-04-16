import React from 'react'
import "./Inputcontainer.css"

function Inputcontainer({inputvalue,writeinput,add}) {
  return (
    
    <div className='input-container'>
        <input type='text' value={inputvalue} onChange={writeinput}/>
        <button onClick={add}>+</button>

    </div>
  )
}

export default Inputcontainer