import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTodo } from '../redux'

const AddTodo = () => {
  const [inputedText, setInputedText] = useState('')
  const dispatch = useDispatch()

  const handleChange = e => {
    setInputedText(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addNewTodo({text: inputedText}))
    setInputedText('')
  }

  return (
    <div className='add-todo'>
      <form className="container" onSubmit={handleSubmit}>
        <input type="text" placeholder="Add New Todo" value={inputedText} onChange={handleChange} required />
        <button>Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo
