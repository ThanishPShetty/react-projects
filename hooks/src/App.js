import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';

function App() {
  let [counter,setCounter]=useState(0);
  const addvalue=()=>{
    if(counter!=20){
      setCounter(counter+1)
    }
  }

  const delvalue=()=>{
    if(counter!=0){
      setCounter(counter-1)
    }
  }


  return (
  <>
  <div className='App'>
    <h1>react and Hooks</h1>
    <h2>Counter value :{counter}</h2>

    <button onClick={addvalue}>Add value{counter}</button>
    <br/>
    <button onClick={delvalue}>remove value{counter}</button>
    </div>
  </>
  );
}

export default App;
