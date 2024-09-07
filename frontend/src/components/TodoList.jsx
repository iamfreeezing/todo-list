import React from 'react'
import { useEffect } from 'react'

function TodoList({todos, setTodos, fetchData}) {

    useEffect(() => {

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