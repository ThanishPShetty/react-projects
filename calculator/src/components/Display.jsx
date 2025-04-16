import React from 'react';
import './Display.css'

function Display({text}) {
  return (
    <div className='display'>
        {text}
    </div>
  )
}

export default Display