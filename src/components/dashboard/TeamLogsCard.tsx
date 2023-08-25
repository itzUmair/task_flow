import * as Type from "../../types"

const TeamLogsCard = ({log}:{log: Type.teamLogsStructute}) => {
  const logDate = new Date(log.date).toLocaleString()
  return (
    <div className="absolute right-0 top-16 w-80 max-h-[40vh] overflow-y-auto bg-clr-800 p-2 rounded-md">
      <p className="text-sm text-clr-100/50 text-center">{logDate}</p>
      <p className="bg-clr-850 rounded-lg w-fit p-2 text-clr-100 text-center">{log.message}</p>
    </div>
  )
}

export default TeamLogsCard