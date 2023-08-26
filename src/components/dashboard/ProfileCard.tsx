import { userDataStructute } from "../../types"
import {useState} from "react"
import { useNavigate } from "react-router-dom"
import {useSignOut} from "react-auth-kit"

const ProfileCard = ({userData, isTeamProfile}:{userData:userDataStructute, isTeamProfile:boolean}) => {
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const navigate = useNavigate()
  const signOut = useSignOut()

  const logout = () => {
    signOut()
    navigate("/login")
  }

  return (
    <div className={`md:w-[14rem] max-h-14 md:max-h-16 ${!isTeamProfile ? "bg-clr-850" : "bg-clr-800"} p-2 rounded-lg relative`} onMouseEnter={() => {!isTeamProfile && setIsHovering(true)}} onMouseLeave={() => {!isTeamProfile && setIsHovering(false)}}>
      <div className={`flex gap-x-2 ${!isTeamProfile ? "bg-clr-850" : "bg-clr-800"} w-fit rounded-lg cursor-pointer`} onClick={() => navigate("/profile")} >
        <div style={{backgroundColor: userData.badgeColor || "#88FD51"}} className="text-clr-900 rounded-full w-8 h-8 md:w-11 md:h-11 flex items-center justify-center font-bold capitalize text-md md:text-xl">{userData.first_name[0]}</div>
          <div>
            <p className={`text-clr-100 capitalize md:max-w-[14ch] ${isHovering && "max-w-full"} truncate text-sm md:text-lg`}>{userData.first_name + " " + userData.last_name}</p>
            <p className={`text-clr-100/50 max-w-[14ch] ${isHovering && "max-w-full"} truncate text-xs md:text-sm`}>{userData.email}</p>
          </div>
      </div>
      {!isTeamProfile && isHovering && <div className="p-2 bg-clr-850 w-full absolute left-0 rounded-md top-[3.45rem]"><button className="p-2 bg-clr-900 text-clr-100 w-full rounded-md" onClick={logout}>Logout</button></div>}
    </div>
  )
}

export default ProfileCard