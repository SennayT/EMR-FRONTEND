import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import PatientVitals from '../patient-details/PatientVitals'
import PatientNurseBar from './PatitentNurseBar'


import requests from 'src/utils/repository'
import NoDataView from '../shared-components/NoDataView'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'



const NurseLayout = (props: any) => {

  const [vitals, setVitals] = useState([]);

  const router = useRouter()
  const {data:session} = useSession()

  useEffect(() => {
    requests.get(`/vitals/patient/${router.query.id}`, session ? session.accessToken : "").then(response =>{console.log(response.data); setVitals(response.data)})
  },[])

  return vitals.length == 0 ? <Grid className="container-grid" spacing={5} container item>
  <Grid item xs={12}>
    <PatientNurseBar patientId={router.query.id} />
  </Grid>
  <Grid item xs={8} >
    <NoDataView />

  </Grid>
</Grid>:
   (
    <Grid className="container-grid" spacing={2} container item>
    <Grid item xs={12}>
      <PatientNurseBar />
    </Grid>
    <Grid item xs={12}  >
    {vitals.map(function (vital) {
      return <div>
        <p>vital number {vital['id']}</p>
        <PatientVitals vital={vital} />
        </div>
    })}
        </Grid>
  </Grid>
  )
}

export default NurseLayout
