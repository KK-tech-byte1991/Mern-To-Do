import { useEffect, useState } from 'react'

import './App.css'
import axios from "axios"
import AddToDo from "./pages/addToDo"
function App() {

  const [toDoList, setToDoList] = useState([])
  const [selectedToDo, setSelectedToDo] = useState(null)

  const getToDos = () => {
    axios.get("http://localhost:3000/todo/all").then((res) => {
      console.log(res, "ttttttt")
      setToDoList(res.data)
    })
  }

  useEffect(() => {
    getToDos()
  }, [])


  return (
    <>
      <AddToDo
        refreshPage={getToDos}
        selectedToDo={selectedToDo}
      />
      <button onClick={() => setSelectedToDo(null)}>Add TO Do</button>
      <ul>
        {toDoList.map((toDo) => <li key={toDo._id}>

          <h6>{toDo.toDoName}</h6>
          <p> Start Time :{toDo.startTime}</p>
          <p>End time :{toDo.endTime}</p>
          <p>Priority:{toDo.toDoPriority}</p>

          <button onClick={() => setSelectedToDo(toDo)}>Edit</button>

        </li>)}

      </ul>
    </>
  )
}

export default App
