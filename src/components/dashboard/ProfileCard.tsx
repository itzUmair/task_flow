import { userDataStructute } from "../../types"
import {useState} from "react"
import { useNavigate } from "react-router-dom"

const ProfileCard = ({userData}:userDataStructute) => {
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const navigate = useNavigate()
  return (
    <div className="flex gap-x-2 bg-clr-850 w-fit p-2 rounded-lg cursor-pointer transition-all" onClick={() => navigate("/profile")} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <div style={{backgroundColor: userData.badgeColor || "#88FD51"}} className="text-clr-900 rounded-full w-11 h-11 flex items-center justify-center font-bold capitalize text-xl">{userData.fname[0]}</div>
      <div>
      <p className={`text-clr-100 capitalize max-w-[14ch] ${isHovering && "max-w-full"} transition-all truncate`}>{userData.fname + " " + userData.lname}</p>
      <p className={`text-clr-100/50 max-w-[14ch] ${isHovering && "max-w-full"} transition-all truncate text-sm`}>{userData.email}</p>
      </div>
    </div>
  )
}

export default ProfileCard