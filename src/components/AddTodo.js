import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTodo } from '../redux'

const AddTodo = () => {
  const [inputedText, setInputedText] = useState('')
  const dispatch = useDispatch()

  const handleChange = e => {
    setInputedText(e.target.value)
  }

  const handleClick = e => {
    dispatch(addNewTodo({text: inputedText}))
    setInputedText('')
  }

  return (
    <div className='add-todo'>
      <div className="container">
        <input type="text" placeholder="Add New Todo" value={inputedText} onChange={handleChange} />
        <button onClick={handleClick}>Add Todo</button>
      </div>
    </div>
  )
}

export default AddTodo
