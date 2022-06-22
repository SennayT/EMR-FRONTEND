import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import requests from 'src/utils/repository'
import CardImgTop from 'src/views/cards/CardImgTop'

const ViewList = () => {
  const [results, setResults] = useState([])
  const { data: session } = useSession()
  const router = useRouter()
  useEffect(() => {
    session.role == 'Doctor'
      ? requests
          .get(
            `/investigation-request/${router.query.invId}/lab-results`,
            session ? session.accessToken.toString() : ''
          )
          .then(response => {
            setResults(response.data)
          })
      : requests
          .get(`/lab-result/${router.query.invId}`, session ? session.accessToken.toString() : '')
          .then(response => {
            setResults([response.data])
          })
  }, [])

  return results.length != 0 ? results.map(res => <CardImgTop result={res} />) : <p>No Result Data Entered</p>
}
export default ViewList
