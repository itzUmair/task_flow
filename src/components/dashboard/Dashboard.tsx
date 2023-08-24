import { useEffect, useState } from "react"
import Titlebar from "../common/Titlebar"
import Cookies from "js-cookie"
import * as Types from "../../types"
import ProfileCard from "./ProfileCard"

const Dashboard = () => {
  const [userData, setUserData] = useState<Types.userDataStructute>({
    userid: "",
    fname: "",
    lname: "",
    email:"",
    badgeColor:""
  })

  useEffect(() => {
    const data = Cookies.get("_auth_state")
    if (data) {
      setUserData(JSON.parse(data))
    }
  },[])

  return (
    <main >
      <Titlebar />
      <div className="mx-auto 2xl:w-[1440px] px-4 py-4 md:px-16">
        <ProfileCard userData={userData} />
      </div>
    </main>
  )
}

export default Dashboard