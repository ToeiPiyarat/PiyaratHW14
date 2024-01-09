import { useState } from "react"
import TodoEditForm from "./TodoEditForm"
import TodoItem from "./TodoItem"
import useTodo from "../hooks/useTodo"

function TodoContainer() {
  const {todos} = useTodo()
  const [editId, setEditId] = useState(-1)
  return (
    <div className="todo-container">
    { todos.map( el=> (
     (el.id===editId)
        ? <TodoEditForm 
            key={el.id} 
            job={el} 
            onDone={()=>setEditId(-1)}          
          />
        : <TodoItem key={el.id} job={el} setEditId={setEditId} />
    ))  
    }  
    </div>
  )
}

export default TodoContainer