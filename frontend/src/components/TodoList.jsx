import React from 'react'
import { useEffect } from 'react'

function TodoList({todos, setTodos}) {

    useEffect(() => {
        const fetchData = async () => {

            const res = await fetch('http://localhost:4002/api');
            const arr = await res.json();
            setTodos(arr);
            console.log(arr)
        }

        fetchData();

    },[])

  return (
    <ul>
        {
            todos.map(value => {
                return (<li key = {value.id}>{value.content}</li>);
            })
        }
    </ul>
  )
}

export default TodoList