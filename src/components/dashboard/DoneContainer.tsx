import * as Type from "../../types"
import TaskCard from "./TaskCard"

const DoneContainer = ({task}: {task:Type.tasksStructure[]}) => {
  return (
    <div className="border-2 border-dashed border-clr-800 flex flex-col w-2/6 ml-2 h-fit p-2 rounded-md">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-clr-100 font-bold md:text-2xl">
          Done
        </h2>
      </div>
      <div>
        {task.map((t, index) => (
          <TaskCard task={t} key={index} />
        ))}
      </div>
    </div>
  )
}

export default DoneContainer