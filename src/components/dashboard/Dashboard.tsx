import { useEffect, useState } from "react"
import Titlebar from "../common/Titlebar"
import Cookies from "js-cookie"
import * as Types from "../../types"
import ProfileCard from "./ProfileCard"
import TeamSelectorCard from "./TeamSelectorCard"

const Dashboard = () => {
  const [userData, setUserData] = useState<Types.userDataStructute>({
    _id: "",
    first_name: "",
    last_name: "",
    email:"",
    badgeColor:""
  })

  useEffect(() => {
    const data = Cookies?.get("_auth_state")
    if (data) {
      const user = JSON.parse(data)
      setUserData({
        _id: user.userid,
        first_name: user.fname,
        last_name: user.lname,
        email: user.email,
        badgeColor: user.badgeColor
      })
    }
  },[])

  return (
    // TODO: Handle exception when the user is not in any team
    <main >
      <Titlebar />
      <div className="mx-auto 2xl:w-[1440px] px-4 py-4 md:px-16 flex justify-between">
        <ProfileCard userData={userData} isTeamProfile={false}/>
        <TeamSelectorCard />
      </div>
    </main>
  )
}

export default Dashboard