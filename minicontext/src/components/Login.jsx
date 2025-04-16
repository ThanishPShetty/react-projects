import React, { useContext, useState } from 'react'
import Usercontext from '../context/Usercontext'


function Login() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    const {setUser}= useContext(Usercontext)
    const handleClick=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <input type="text" 
        value={username}
        placeholder='username'
        onChange={(e)=>{setUsername(e.target.value)}}
        />
         <input type="text" 
        value={password}
        placeholder='password'
        onChange={(e)=>{setPassword (e.target.value)}}
        />
        <button type='submit' onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Login