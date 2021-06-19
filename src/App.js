import { AddTodo, TodoList, CountTodo } from "./components";

const App = () => {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
      <CountTodo />
    </div>
  );
}

export default App;
