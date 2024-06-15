import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AddToDo = (props) => {
  const [toDoName, setToDoName] = useState(props.selectedToDo?.toDoName || "")
  const [startTime, setStartTime] = useState(props.selectedToDo?.startTime || null);
  const [endTime, setEndTime] = useState(props.selectedToDo?.endTime || null)
  const [toDoPriority, setToDoPriority] = useState(props.selectedToDo?.toDoPriority || 0)

  useEffect(() => {
    setToDoName(props.selectedToDo?.toDoName || "")
    setStartTime(props.selectedToDo?.startTime || null)
    setEndTime(props.selectedToDo?.endTime || null)
    setToDoPriority(props.selectedToDo?.toDoPriority || 0)

  }, [props.selectedToDo])
  const onSubmit = () => {
    let data = { toDoName, startTime, endTime, toDoPriority }
    console.log("fff", data)
    axios.post("http://localhost:3000/todo/create", data).then((res) => props.refreshPage());

  }

  return (
    <div>
      <input type="text" placeholder="ToDo Name" value={toDoName} onChange={(e) => setToDoName(e.target.value)} /><br />
      <input type="date" value={startTime} onChange={(e) => setStartTime(e.target.value)} /><br />
      <input type="date" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
      <input type="number" value={toDoPriority} onChange={(e) => setToDoPriority(e.target.value)} />
      <button type="submit" onClick={onSubmit}>Add New To Do</button>


    </div >
  )
}

export default AddToDo