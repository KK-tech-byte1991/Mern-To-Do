import axios from 'axios';
import React, { useState } from 'react'

const AddToDo = () => {
  const [toDoName, setToDoName] = useState("")
  const [startTime, setStartTime] = useState(null);
  const [endTime, startEndTime] = useState(null)
  const [toDoPriority, setToDoPriority] = useState(0)
  const onSubmit = () => {
    let data = { toDoName, startTime, endTime, toDoPriority }
    console.log("fff",data)
    axios.post("http://localhost:3000/todo/create",data)
  }

  return (
    <div>
      <input type="text" placeholder="ToDo Name" value={toDoName} onChange={(e) => setToDoName(e.target.value)} /><br />
      <input type="date" value={startTime} onChange={(e) => setStartTime(e.target.value)} /><br />
      <input type="date" value={endTime} onChange={(e) => startEndTime(e.target.value)} />
      <input type="number" value={toDoPriority} onChange={(e) => setToDoPriority(e.target.value)} />
      <button type="submit" onClick={onSubmit}>Add New To Do</button>


    </div >
  )
}

export default AddToDo