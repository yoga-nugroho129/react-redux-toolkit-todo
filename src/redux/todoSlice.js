import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getTodosAsync = createAsyncThunk(
  'todos',
  async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5')
    const todos = await response.data
    return todos
  }
)

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    initialTodos: [],
    isLoading: false
  },
  reducers: {
    addNewTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.text,
        completed: false
      }
      state.initialTodos.push(newTodo)
    },
    deleteTodo: (state, action) => {
      const selectedId = action.payload.id
      state.initialTodos = state.initialTodos.filter(todo => todo.id !== selectedId)
    },
    setComplete: (state, action) => {
      const selectedTodo = state.initialTodos.find(todo => todo.id === action.payload.id)
      selectedTodo.completed = action.payload.completed
    }
  },
  extraReducers: {
    [getTodosAsync.pending]: state => {
      state.isLoading = true
    },
    [getTodosAsync.fulfilled]: (state, action) => {
      state.isLoading = false
      state.initialTodos = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { addNewTodo, deleteTodo, setComplete } = todoSlice.actions

export default todoSlice.reducer