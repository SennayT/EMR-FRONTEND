import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import PatientVitals from '../patient-details/PatientVitals'
import PatientNurseBar from './PatitentNurseBar'


import axios from 'axios'
import NoDataView from '../shared-components/NoDataView'

const NurseLayout = () => {

  const [vitals, setVitals] = useState([]);

  useEffect(() => {
    axios.get(`https://capstone-backend-0957-11-v2.herokuapp.com/vitals`).then(response => {
      setVitals(response.data)
    })
  });

  return vitals.length == 0 ? <Grid className="container-grid" spacing={5} container item>
  <Grid item xs={12}>
    <PatientNurseBar />
  </Grid>
  <Grid item xs={8} >
    <NoDataView />

  </Grid>
</Grid>:
   (
    <Grid className="container-grid" spacing={5} container item>
    <Grid item xs={12}>
      <PatientNurseBar />
    </Grid>
    <Grid item xs={8} >
       <PatientVitals />
        </Grid>
  </Grid>
  )
}

export default NurseLayout
