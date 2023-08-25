import * as Type from "../../types"

const TeamLogsCard = ({log}:{log: Type.teamLogsStructute}) => {
  const logDate = new Date(log.date).toLocaleString()
  return (
    <div className="my-4">
      <p className="text-sm text-clr-100/50 text-center">{logDate}</p>
      <p className="bg-clr-800 rounded-lg w-fit p-2 text-clr-100 text-center">{log.message}</p>
    </div>
  )
}

export default TeamLogsCard