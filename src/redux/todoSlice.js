import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    initialTodos: [
      {id: 1, text: 'Todo 1', isCompleted: false},
      {id: 2, text: 'Todo 2', isCompleted: false},
      {id: 3, text: 'Todo 3', isCompleted: true},
      {id: 4, text: 'Todo 4', isCompleted: false}
    ]
  },
  reducers: {
    addNewTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload.text,
        isCompleted: false
      }
      state.initialTodos.push(newTodo)
    },
    deleteTodo: (state, action) => {
      const selectedId = action.payload.id
      state.initialTodos = state.initialTodos.filter(todo => todo.id !== selectedId)
    },
    setComplete: (state, action) => {
      const selectedTodo = state.initialTodos.find(todo => todo.id === action.payload.id)
      selectedTodo.isCompleted = action.payload.isCompleted
    }
  },
})

// Action creators are generated for each case reducer function
export const { addNewTodo, deleteTodo, setComplete } = todoSlice.actions

export default todoSlice.reducer