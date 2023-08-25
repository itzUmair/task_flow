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
    <div className={`w-fit ${!isTeamProfile ? "bg-clr-850" : "bg-clr-800"} p-2 rounded-lg relative`} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <div className={`flex gap-x-2 ${!isTeamProfile ? "bg-clr-850" : "bg-clr-800"} w-fit p-2 rounded-lg cursor-pointer`} onClick={() => navigate("/profile")} >
        <div style={{backgroundColor: userData.badgeColor || "#88FD51"}} className="text-clr-900 rounded-full w-11 h-11 flex items-center justify-center font-bold capitalize text-xl">{userData.first_name[0]}</div>
          <div>
            <p className={`text-clr-100 capitalize max-w-[14ch] ${isHovering && "max-w-full"} truncate`}>{userData.first_name + " " + userData.last_name}</p>
            <p className={`text-clr-100/50 max-w-[14ch] ${isHovering && "max-w-full"} truncate text-sm`}>{userData.email}</p>
          </div>
      </div>
      {!isTeamProfile && isHovering && <div className="p-2 bg-clr-850 w-full absolute left-0 rounded-md top-[4rem]"><button className="p-2 bg-clr-900 text-clr-100 w-full rounded-md" onClick={logout}>Logout</button></div>}
    </div>
  )
}

export default ProfileCard