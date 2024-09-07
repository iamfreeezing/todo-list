import React from 'react'

export default function Todocard({content}) {
  return (
    <div className="todocard">
        <div>{content}</div>
        <div className="cardbuttons">
            <button><i className="fa-regular fa-trash-can"></i></button>
        </div>
    </div>
  )
}
