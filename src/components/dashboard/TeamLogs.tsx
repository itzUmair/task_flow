import {useEffect, useState} from "react"
import * as Type from "../../types"
import api from "../../api/axios"
import Logs from "../../assets/logs.svg"
import TeamLogsCard from "./TeamLogsCard"

const TeamLogs = () => {
  const [TeamLogs, setTeamLogs] = useState<Type.teamLogsStructute[]>()
  const [viewTeamLogs, setViewTeamLogs] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getTeams = async () => {
      try {
        setIsLoading(true)
        const teamData = await api.get("/user/teams")
        setTeamLogs(teamData.data.data[0].logs)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    getTeams()
  }, [])

    return (
      <div className="relative" id="logsBTN" >
        <button onClick={() => setViewTeamLogs(prevState => !prevState)} className="w-fit h-[3rem] bg-clr-850 p-2 rounded-lg text-clr-100 flex items-center justify-center gap-x-2 cursor-pointer"><img src={Logs} className="w-5 h-5"/>Logs</button>
        {isLoading && <p className="absolute right-0 top-16 w-80 text-clr-100 text-center capitalize">Loading...</p>}
        {TeamLogs && viewTeamLogs && TeamLogs.map((log, index) =>(
          <TeamLogsCard log={log} key={index} />
        ))}
        {!TeamLogs && viewTeamLogs && <p className="absolute right-0 top-16 text-clr-100 w-80 p-2 text-center rounded-md bg-clr-850">No Logs Available</p>}
      </div>
    )
}

export default TeamLogs