import React from 'react'

function Swap({swap}) {
  return (
    <div>
        <button className='bg-blue-400 w-20 h-10 text-white rounded-xl hover:bg-blue-700 transition duration-300 z-10' onClick={swap}>swap</button>
    </div>
  )
}

export default Swap