import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, setComplete } from '../redux'

const TodoItem = ({
  id,
  title,
  completed
}) => {
  const dispatch = useDispatch()

  return (
    <li 
      className={`todo-item ${completed && 'completed'}`}
      onClick={() => dispatch(setComplete({id, completed: !completed}))}
    >
      <div className="left">
        <input type="checkbox" checked={completed} />
        <label>{title}</label>
      </div>
      <button onClick={() => dispatch(deleteTodo({id}))}>-</button>
    </li>
  )
}

export default TodoItem
