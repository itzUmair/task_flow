import {useEffect, useState} from "react"
import * as Type from "../../types"
import api from "../../api/axios"
import ProfileCard from "./ProfileCard"

const TeamMembersDisplay = ({teamID} : {teamID:string | undefined}) => {
  const [teamMembers, setTeamMembers] = useState<Type.teamMemberStructure[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const getTeamMembers = async() => {
      try {
        setIsLoading(true)
        const members = await api.get(`/team/members/all/${teamID}`)
        setTeamMembers(members.data.data)
      } catch(error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    getTeamMembers()
  },[teamID])

  return (
    <div className="absolute right-0 top-16 max-h-[40vh] overflow-y-auto bg-clr-850 p-2 rounded-md">
      {isLoading ? 
      <p className="text-clr-100 text-center capitalize">Loading...</p> : 
      <div className="flex flex-col gap-y-4">
        {teamMembers.map((member, index) => (
          <ProfileCard key={index} userData={member} isTeamProfile={true} />
        ))}
      </div>}
    </div>
  )
}

export default TeamMembersDisplay