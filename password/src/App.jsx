import { useCallback, useState ,useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number,setNumber]=useState(false)
  const [character,setCharacter]=useState(false)
  const [Password,setPassword]=useState("")
  let passwordref=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number){ 
      str += "0123456789" 
    }
    
    if(character){
      str += "@!#$%^&*()?/={}[]"
    }

    for(let i=1;i<=length;i++){
      let char= Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)

    }
    setPassword(pass)
    
  },[length,number,character,setPassword])

useEffect(()=>{
  passwordGenerator()
},[length,number,character,setPassword])


const copytoclipboard=()=>{
  passwordref.current.select();
  passwordref.current.setSelectionRange(0,10)
  window.navigator.clipboard.writeText(Password)
}


  return (
    <>
    <div className="w-[800px] h-[100px ] mt-10  bg-[#3c403d] rounded-2xl fixed top-0 left-1/2 -translate-x-1/2 p-4 text-white text-center shadow-lg">
     <input type="text" className='w-[600px] px-2 py-2 text-black rounded-l-md bg-amber-50' placeholder='password' readOnly value={Password} ref={passwordref}/>
     <button className='bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600' onClick={copytoclipboard}>Copy</button>
     <div className='flex flex-row mt-2'>
     <input type='range' min={8} max={100} value={length} className='cursor-pointer ml-16' onChange={(e)=>{setLength(e.target.value)}}/>
     <label>Length:{length}</label>
     <input type="checkbox" className='ml-10 cursor-pointer' onChange={()=>{setNumber((prev)=>!prev)}}/>
     <label>Number</label>
     <input type="checkbox" className='ml-10 cursor-pointer' onChange={()=>{setCharacter((prev)=>!prev)}} />
     <label>character</label>
     </div>

    </div>
     
    </>
  )
}

export default App
