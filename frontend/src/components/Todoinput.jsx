import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Todoinput({todos, setTodos, fetchData}) {

    const [inp, setInp] = useState('')

    const addData = async (inp) => {
        const res = await fetch('http://localhost:4002/api/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: inp
            })
        });
    }

  return (
    <form>
            <input type = "text" value = {inp} onChange = {(e) => setInp(e.target.value)}></input>
            <button onClick={async (e) =>  {
                e.preventDefault();
                await addData(inp);
                fetchData();
            }}>Add</button>
    </form>
  )
}
