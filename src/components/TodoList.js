import React, { useEffect } from 'react'
import TodoItem from './TodoItem'
import { useSelector, useDispatch } from 'react-redux'
import { getTodosAsync } from '../redux'

const TodoList = () => {
  const todos = useSelector(state => state.todos.initialTodos)
  const isLoading = useSelector(state => state.todos.isLoading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodosAsync())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ul className='todo-list'>
      <div className="container">
        {
          isLoading ? <div className='loading-text'>Loading...</div> : todos.map(todo => (
            <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
          ))
        }
      </div>
    </ul>
  )
}

export default TodoList
