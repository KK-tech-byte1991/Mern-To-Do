import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
function App() {

  const [toDoList, setToDoList] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/todo/all").then((res) => {
      console.log(res, "ttttttt")
      setToDoList(res.data)
    })
  }, [])

  console.log(toDoList)
  return (
    <ul>
        {toDoList.map((toDo) => <li key ={toDo._id}>
         
          <h6>{toDo.toDoName}</h6>
          <p> Start Time :{toDo.startTime}</p>
          <p>End time :{toDo.endTime}</p>
          <p>Priority:{toDo.toDoPriority}</p>

        </li>)}

      </ul>
  )
}

export default App
