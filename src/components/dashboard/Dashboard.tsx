import { useEffect, useState } from "react"
import Titlebar from "../common/Titlebar"
import Cookies from "js-cookie"
import * as Types from "../../types"
import api from "../../api/axios"

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
    <main>
      <Titlebar />
    </main>
  )
}

export default Dashboard