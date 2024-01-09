import { useState } from "react"
import useTodo from "../hooks/useTodo"

function TodoEditForm(props) {
  const {job, onDone} = props
  const {hdlEdit} = useTodo()
  const [input, setInput] = useState(job.todo)
  const [check, setCheck] = useState(job.completed)

  const hdlSubmit = e => {
    e.preventDefault()
    let updatedJob = { todo: input, completed: check}
    hdlEdit(job.id, updatedJob)
    onDone()
  }
  return (
    <form className='todo-edit-form' onSubmit={hdlSubmit} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
  <input 
    type="checkbox" 
    value={check} 
    checked={check} 
    onChange={() => setCheck(prev => !prev)}
    style={{ marginRight: '5px' }}
  />
  <input 
    type="text" 
    value={input} 
    onChange={e => setInput(e.target.value)} 
    style={{ flex: '1', padding: '8px', borderRadius: '4px', marginRight: '5px', border: '1px solid #ccc' }}
  />
  <button 
    type="submit" 
    style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}
  >
    Save
  </button>
  <button 
    onClick={onDone} 
    type="reset" 
    style={{ backgroundColor: '#ff3333', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}
  >
    Cancel
  </button>
</form>
  )
}

export default TodoEditForm