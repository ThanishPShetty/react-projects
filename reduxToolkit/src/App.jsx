import { useState } from 'react'
import './App.css'
import { reset,increment,decrement,incrementByAmount } from './features/counter/counterSlice'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  let count=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();

  const handleincrement=()=>{
     dispatch(increment())
  }
  
  const handledecrement=()=>{
    dispatch(decrement())
 }

 const handleReset=()=>{
  dispatch(reset())
}

const handleAmount=(e)=>{
  dispatch(incrementByAmount(e.target.value))
}

  return (
    <>
    <button onClick={()=>handleincrement()}>+</button>
    <div>
      count:{count}
    </div>
    <button onClick={()=>handledecrement()}>-</button>
    <br />
    <br />
    <button onClick={()=>handleReset()}>Reset</button>
    <br />
    <br />
    <input type="text" onChange={(e)=>handleAmount(e)} />
    </>
  )
}

export default App
