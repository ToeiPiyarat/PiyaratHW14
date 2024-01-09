/* eslint-disable react/prop-types */

import useTodo from "../hooks/useTodo"

function Dashboard() {

  const { task } = useTodo()
  return (
    <div className="dashboard">
      <h2>{new Date().toDateString()}</h2>
      <p>{task} Tasks</p>
    </div>
  )
}

export default Dashboard