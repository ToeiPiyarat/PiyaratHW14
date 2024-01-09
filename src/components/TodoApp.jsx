
import useTodo from "../hooks/useTodo"
import Dashboard from "./Dashboard"
import FormAddTodo from "./FormAddTodo"
import TodoContainer from "./TodoContainer"

function TodoApp() {
  const {isLoading} = useTodo()

  if (isLoading) {
    return ( <h1>Loading...</h1> )
  }

  return (
    <div className="todo-app">
      <Dashboard />
      <FormAddTodo />
      <TodoContainer />
    </div>
  )
}

export default TodoApp