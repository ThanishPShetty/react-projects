import { useState } from 'react'
import './App.css'
import { useDispatch ,useSelector} from 'react-redux'
import { addTodo } from './features/todo/TodoSlice'
import TodoList from './components/TodoList'

function App() {
  const [input, setInput] = useState('')
  
  const dispatch=useDispatch();
  const todos=useSelector(state=>state.todos);

  const addhandleTodo=(e)=>{
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <>
    <div className='mt-5 mb-3 ml-10 mr-10'>
       <form  className="flex" onSubmit={addhandleTodo}>
                <input
                    type="text"
                    placeholder="Write Todo..."
                    className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                />
                <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0" >
                    Add
                </button>
        </form>
      </div>
        {
           todos.map((todo)=>(
            <TodoList key={todo.id} todo={todo}/>
           ))
        }
    </>
  )
}

export default App
