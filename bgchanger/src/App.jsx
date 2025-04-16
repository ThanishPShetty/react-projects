import React,{ useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('white')

  return (
    <>
      <div className='min-h-screen w-full flex flex-col justify-end  ' style={{backgroundColor: color}}>

      <div 
  className="px-2 py-2 w-150 rounded-3xl h-14 flex flex-row justify-between items-center gap-4" 
  style={{ backgroundColor: 'white' }}
>
  <button className="rounded-2xl px-4 py-2 text-center" onClick={() => setColor('red')} style={{ backgroundColor: 'red', color: 'white' }}>Red</button>
  <button className="rounded-2xl px-4 py-2 text-center" onClick={() => setColor('green')} style={{ backgroundColor: 'green', color: 'white' }}>Green</button>
  <button className="rounded-2xl px-4 py-2 text-center" onClick={() => setColor('blue')} style={{ backgroundColor: 'blue', color: 'white' }}>Blue</button>
  <button className="rounded-2xl px-4 py-2 text-center" onClick={() => setColor('yellow')} style={{ backgroundColor: 'yellow', color: 'white' }}>Yellow</button>
  <button className="rounded-2xl px-4 py-2 text-center" onClick={() => setColor('orange')} style={{ backgroundColor: 'orange', color: 'white' }}>Orange</button>
</div>

      </div>
    </>
  )
}

export default App
