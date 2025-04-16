import React , {useState} from 'react'
import './App.css'
import Inputcontainer from './components/Inputcontainer';
import Todocontainer from './components/Todocontainer';

function App() {
    const [inputvalue, setInputvalue]=useState('')
    const [todo,settodo]=useState([])

    function writeinput(e){
     setInputvalue(e.target.value)
    }

    function add(){
      if(inputvalue!=""){
       settodo((pretodo)=>[...pretodo,inputvalue])
       setInputvalue('')
      }
      }

      function del(index){
        settodo((pretodo)=>pretodo.filter((pretodo,preindex)=>{
          return preindex !== index
        }  ))
      }
      
    return (
    <main >
      <h1>To Do List</h1>
      <Inputcontainer inputvalue={inputvalue} writeinput={writeinput} add={add}/>
      <Todocontainer todos={todo} del={del}/>
    </main>
    
  );
}

export default App