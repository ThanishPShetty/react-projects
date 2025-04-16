import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usercontextprovider from './context/Usercontextprovider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  return (
    <Usercontextprovider>
      <h1>Chai aur React</h1>
      <Login/>
      <Profile/>
    </Usercontextprovider>
  )
}

export default App
