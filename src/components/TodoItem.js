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
    <li className={`todo-item ${isCompleted && 'completed'}`}>
      <div className="left">
        <input type="checkbox" checked={isCompleted} onChange={() => dispatch(setComplete({id, isCompleted: !isCompleted}))} />
        <label>{text}</label>
      </div>
      <button onClick={() => dispatch(deleteTodo({id}))}>-</button>
    </li>
  )
}

export default TodoItem
