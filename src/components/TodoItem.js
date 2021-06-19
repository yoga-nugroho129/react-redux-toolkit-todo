import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, setComplete } from '../redux'

const TodoItem = ({
  id,
  text,
  isCompleted
}) => {
  const dispatch = useDispatch()

  return (
    <li 
      className={`todo-item ${isCompleted && 'completed'}`}
      onClick={() => dispatch(setComplete({id, isCompleted: !isCompleted}))}
    >
      <div className="left">
        <input type="checkbox" checked={isCompleted} />
        <label>{text}</label>
      </div>
      <button onClick={() => dispatch(deleteTodo({id}))}>-</button>
    </li>
  )
}

export default TodoItem
