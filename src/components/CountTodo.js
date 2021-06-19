import React from 'react'
import { useSelector } from 'react-redux'

const CountTodo = () => {
  const count = useSelector(state => state.todos.initialTodos)

  return (
    <div className='count-todo'>
      <div className="container">
        <p>Total: {count.length}</p>
        <p>Completed: {count.filter(todo => todo.isCompleted).length}</p>
        <p>Incompleted: {count.filter(todo => !todo.isCompleted).length}</p>
      </div>
    </div>
  )
}

export default CountTodo
