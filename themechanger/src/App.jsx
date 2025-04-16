import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Themeprovider } from './contexts/Theme'
import { useEffect } from 'react'
import { Button,Card } from './components'

function App() {
  const [themeMode,setThemeMode]=useState("light")
  const darkTheme=()=>{
    setThemeMode("dark")
  }
  const lightTheme=()=>{
    setThemeMode("light")
  }

  useEffect(()=>{
   document.querySelector("html").classList.remove("light","dark")
   document.querySelector("html").classList.add(themeMode)

  },[themeMode])

  return (
    <Themeprovider value={{themeMode,darkTheme,lightTheme}}>
      <div className='flex flex-wrap min-h-screen items-center'>
        <div className='w-full'>
          <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
           <Button/>

          </div>
          <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
            <Card/>

          </div>

        </div>

      </div>
    </Themeprovider>
    
  )
}

export default App
