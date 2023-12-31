import * as Type from "../../types"
import Drag from "../../assets/drag.svg"
import React from "react"

const TaskCard = ({task}:{task: Type.tasksStructure}) => {
  const setPriorityColor = (priority:string) => {
    if(priority === "high") {
      return "bg-clr-300"
    } else if (priority === "medium") {
      return "bg-clr-500"
    } else {
      return "bg-clr-400"
    }
  } 

  const taskDate = new Date(task.deadline)
  const currentDate = new Date()
  const taskCompletedDate = new Date(task.createdOn)

  const setDeadlineColor = () => {
    if((taskDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24) <= 2) {
      return "bg-clr-300"
    } else if ((taskDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24) <= 5) {
      return "bg-clr-400"
    } else {
      return "bg-clr-500"
    }
  }

  return (
    <div className="flex flex-col bg-clr-850 text-clr-100 p-2 rounded-md my-3">
      <div className="flex justify-between items-center">
        <h4 className="font-bold md:text-xl flex items-center gap-x-2">{task.title} <span className={`block w-2 h-2 rounded-full ${setPriorityColor(task.priority)}`}></span></h4> <button><img src={Drag} alt="drag" /></button>
      </div>
      <p className="text-sm my-2">
        {task.description}
      </p>
      <p className={`${task.state === "complete" ? "bg-clr-800" : setDeadlineColor()} rounded-sm px-2 text-clr-900 font-bold`}>Deadline: {taskDate.toLocaleDateString()}</p>
      {task.state === "complete" && <p className="bg-clr-800 rounded-sm px-2 text-clr-900 font-bold mt-1">Completed On: {taskCompletedDate.toLocaleDateString()}</p>}
      {task.state === "complete" && <p className="bg-clr-800 rounded-sm px-2 text-clr-900 font-bold mt-1">Completed By: {task.completedBy}</p>}
    </div>
  )
}

export default TaskCard