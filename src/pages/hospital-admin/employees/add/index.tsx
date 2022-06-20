import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import requests from "src/utils/repository"
import EmRegistrationForm from "src/views/hospital-admin/RegisterEmployee"

const EmployeAdd = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter()
  const {data:session} = useSession()
  useEffect(() => {
    if(router.query.userId){
    requests.get(`user/${router.query.userId}`, session ? session.accessToken : "").then(res => {
      setUser(res.data)
      setLoading(false)
    })
  }else{
    setLoading(false)
  }
  })

  return loading ? <div></div> : <EmRegistrationForm user={user}/>
}

export default EmployeAdd
