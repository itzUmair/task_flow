import { userDataStructute } from "../../types"
import {useState} from "react"
import { useNavigate } from "react-router-dom"
import {useSignOut} from "react-auth-kit"

const ProfileCard = ({userData}:{userData:userDataStructute}) => {
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const navigate = useNavigate()
  const signOut = useSignOut()

  const logout = () => {
    signOut()
    navigate("/login")
  }

  return (
    <div className="w-fit bg-clr-850 p-2 rounded-lg" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      <div className="flex gap-x-2 bg-clr-850 w-fit p-2 rounded-lg cursor-pointer" onClick={() => navigate("/profile")} >
        <div style={{backgroundColor: userData.badgeColor || "#88FD51"}} className="text-clr-900 rounded-full w-11 h-11 flex items-center justify-center font-bold capitalize text-xl">{userData.fname[0]}</div>
          <div>
            <p className={`text-clr-100 capitalize max-w-[14ch] ${isHovering && "max-w-full"} truncate`}>{userData.fname + " " + userData.lname}</p>
            <p className={`text-clr-100/50 max-w-[14ch] ${isHovering && "max-w-full"} truncate text-sm`}>{userData.email}</p>
          </div>
      </div>
      {isHovering && <button className="p-2 bg-clr-900 text-clr-100 w-full rounded-md" onClick={logout}>Logout</button>}
    </div>
  )
}

export default ProfileCard