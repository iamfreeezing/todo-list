import React from 'react'
import { useEffect } from 'react'
import Todocard from './Todocard'

function TodoList({todos, setTodos, fetchData}) {

    useEffect(() => {

        fetchData();

    },[])

  return (
    <div className="main-list">
    <ul>
        {
            todos.map(value => {
                return (<li key = {value.id}><Todocard content = {value.content}/></li>);
            })
        }
    </ul>
    </div>
  )
}

export default TodoList