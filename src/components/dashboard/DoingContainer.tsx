import * as Type from "../../types"
import TaskCard from "./TaskCard"
import { useState } from "react"

const DoingContainer = ({ task }: { task: Type.tasksStructure[] }) => {
  const [tasks, setTasks] = useState(task);

  return (
    <div className="border-2 border-dashed border-clr-800 flex flex-col w-2/6 h-fit p-2 rounded-md">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-clr-100 font-bold md:text-2xl">
          Doing
        </h2>
      </div>
      <div>
        {tasks && tasks.map((task, index) => (
          <div key={index}>
            <TaskCard task={task} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default DoingContainer;
