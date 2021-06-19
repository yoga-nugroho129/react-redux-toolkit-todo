import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

const TodoList = () => {
  const todos = useSelector(state => state.todos.initialTodos)

  return (
    <ul className='todo-list'>
      <div className="container">
        {
          todos.map(todo => (
            <TodoItem key={todo.id} id={todo.id} text={todo.text} isCompleted={todo.isCompleted} />
          ))
        }
      </div>
    </ul>
  )
}

export default TodoList
