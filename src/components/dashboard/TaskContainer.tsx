import DoingContainer from "./DoingContainer"
import DoneContainer from "./DoneContainer"
import TodoContainer from "./TodoContainer"
import {useEffect, useState} from "react"
import api from "../../api/axios"
import * as Type from "../../types"

const TaskContainer = () => {
  const [Todo, setTodo] = useState<Type.tasksStructure[]>()
  const [Doing, setDoing] = useState<Type.tasksStructure[]>()
  const [Done, setDone] = useState<Type.tasksStructure[]>()

  useEffect(() => {
    const getTasks = async() => {
      try {
        const response = await api.get("/user/teams")

        const todo = response.data.data[0].tasks.filter((task:Type.tasksStructure) => {
          if(task.state === "pending") {
            return task
          }
        })
        const doing = response.data.data[0].tasks.filter((task:Type.tasksStructure) => {
          if (task.state === "working") {
            return task
          }
        })
        const done = response.data.data[0].tasks.filter((task:Type.tasksStructure) => {
          if (task.state === "complete") {
            return task
          }
        })
        setTodo(todo)
        setDoing(doing)
        setDone(done)

      } catch(error) {
        console.log(error)
      }
    }
    getTasks()
  },[])


  return (
    <div className="py-4">
      <div className="flex gap-x-2 text-clr-100">
        <p className="font-bold">Priority:</p>
        <p className="flex items-center gap-x-2"><span className="block w-2 h-2 bg-clr-300 rounded-full"></span>High</p>
        <p className="flex items-center gap-x-2"><span className="block w-2 h-2 bg-clr-500 rounded-full"></span>Medium</p>
        <p className="flex items-center gap-x-2"><span className="block w-2 h-2 bg-clr-400 rounded-full"></span>Low</p>
      </div>
      <div className="flex mt-4">
        {Todo && <TodoContainer task={Todo} />}
        {Doing && <DoingContainer task={Doing} />}
        {Done && <DoneContainer task={Done}/>}
      </div>
    </div>
  )
}

export default TaskContainer