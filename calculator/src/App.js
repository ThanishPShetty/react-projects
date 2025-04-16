import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Display from './components/Display';
import Content from './components/Content';


function App() {
  const [text,setText]=useState('');
  function plus(){
    setText((pretext)=>(pretext+'+'))
  }
  
  function minus(){
    setText((pretext)=>(pretext+'-'))
  }
  
  function mul(){
    setText((pretext)=>(pretext+'*'))
  }
  
  function div(){
    setText((pretext)=>(pretext+'/'))
  }
  
  function mod(){
    setText((pretext)=>(pretext+'%'))
  }

  function num(number)
  {
    setText((pretext)=>(pretext+number))
  }

  function equal(){
    setText(eval(text).toString())
  }

  
  function clear(){
    setText('')
  }

  
  return (
    <div className="App">
      <Display text={text}/>
      <Content plus={plus} minus={minus} mul={mul} div={div} mod={mod} num={num} equal={equal} clear={clear}/>
    </div>
  );
}

export default App;
