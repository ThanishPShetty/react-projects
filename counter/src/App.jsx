import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState("")

  function addvalue()
  {
    setCount(counter+1)
    setCount(counter+1)
    setCount(counter+1)
    setCount(counter+1)
  }
  return (
    <>
      <div>
        {count}
      </div>

      <div className="card">
        <button onClick={addvalue}>
          increment count is {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          decrement count is {count}
        </button>
       </div>
    </>
  )
}

export default App
