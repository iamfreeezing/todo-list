import {useState} from 'react';
import Todolist from './components/TodoList.jsx'

function App() {

  /*the component in which useState is defined, reloads everytime set() is run.*/

  const [todos, setTodos] = useState([])

  return (
    <main>
    <h1>todolist</h1>
    <Todolist todos = {todos} setTodos = {setTodos}/>
    </main>
  )
}

export default App
