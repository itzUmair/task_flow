import Add from "../../assets/add.svg"
import * as Type from "../../types"
import TaskCard from "./TaskCard"
import {useState} from "react"

const TodoContainer = ({task}: {task:Type.tasksStructure[]}) => {
  const [Tasks, setTasks] = useState(task)

  return (
    <div className="border-2 border-dashed border-clr-800 flex flex-col w-2/6 mr-2 h-fit p-2 rounded-md">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-clr-100 font-bold md:text-2xl">
          Todo
        </h2>
        <button>
          <img src={Add} alt="add" className="w-5 h-5" />
        </button>
      </div>
      <div>
        {Tasks.map((task, index) => (
          <div key={index}>
            <TaskCard task={task} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoContainer