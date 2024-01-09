import TodoApp from "./components/TodoApp"
import { TodoContextProvider } from "./contexts/todoContext"

function App() {
  return (
    <div className="app">
      <TodoContextProvider>
        <TodoApp />
      </TodoContextProvider>
    </div>
  )
}

export default App
