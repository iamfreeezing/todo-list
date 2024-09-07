import {useState} from 'react';
import Todolist from './components/TodoList.jsx'
import Todoinput from './components/Todoinput.jsx';

function App() {

  /*the component in which useState is defined, reloads everytime set() is run.*/

  const [todos, setTodos] = useState([])


  const fetchData = async () => {

      const res = await fetch('http://localhost:4002/api');
      const arr = await res.json();
      setTodos(arr);
      console.log(arr)
  }

  return (
    <main>
    <Todoinput todos = {todos} setTodos = {setTodos} fetchData = {fetchData}/>
    <Todolist todos = {todos} setTodos = {setTodos} fetchData = {fetchData}/>
    </main>
  )
}

export default App
