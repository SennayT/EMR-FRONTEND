import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import requests from "src/utils/repository";
import CardImgTop from "src/views/cards/CardImgTop";

const ViewList = () => {
  const [results, setResults] = useState([])
  const { data: session } = useSession()
  useEffect(() => {
    session.role === 'Doctor' ?
      requests.get(`/lab-result`, session ? session.accessToken.toString() : "").then(response => {
        setResults(response.data)
      })
      : requests.get(`/lab-result/user/filled`, session ? session.accessToken.toString() : "").then(response => {
        setResults(response.data)
      })
  }, [])

  return results.map(res => <CardImgTop result={res} />)


}
export default ViewList;
