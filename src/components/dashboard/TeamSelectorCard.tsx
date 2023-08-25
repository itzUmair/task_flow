import { useEffect, useState } from "react"
import * as Type from "../../types"
import api from "../../api/axios"
import Caret from "../../assets/caret.svg"
import TeamMembersDisplay from "./TeamMembersDisplay"

const TeamSelectorCard = () => {
  const [team, setTeam] = useState<Type.teamStucture>()
  const [showTeamMembers, setShowTeamMembers] = useState<boolean>(false)

  useEffect(() => {
    const getTeams = async () => {
      const response = await api.get("/user/teams")
      setTeam(response.data.data[0])
    }
    getTeams()

  }, [])


  return (
    <div className="relative" id="teamBTN">
      <button className="w-fit h-[3rem] bg-clr-850 p-2 rounded-lg text-clr-100 flex items-center justify-center gap-x-2 cursor-pointer" onClick={() => setShowTeamMembers(prevState => !prevState)}><div style={{ backgroundColor: team?.badgeColor }} className="w-2 h-2 rounded-full"></div>{team?.name}<img src={Caret} className="w-8 h-8" /></button>
      {showTeamMembers && <TeamMembersDisplay teamID={team?._id} />}
    </div>
  )
}

export default TeamSelectorCard