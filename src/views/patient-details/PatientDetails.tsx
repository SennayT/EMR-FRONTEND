
// ** MUI Imports
import Grid from '@mui/material/Grid'
import { Divider } from '@mui/material'
import PatientDiagnosis from './PatientDiagnosis'
import DiagnosisHistory from './DiagnosisHistory'
import UserGeneralInfo from '../shared-components/UserGeneralInfo'

import user from 'src/data/userData'
import PatientActionsBar from '../doctor/component/PatientActionsBar'

const PatientDetail = () => {
  // ** State



  return (

    <Grid className="container-grid" spacing={5} container item>
      <Grid item xs={12}>
        <PatientActionsBar />
      </Grid>
      <Grid item xs={4}>
        <UserGeneralInfo user={user}/>
      </Grid>
      <Divider />
      <Grid item xs={8} >
        <PatientDiagnosis user={user}/>
      <DiagnosisHistory  />

      </Grid>
    </Grid>
  )
}

export default PatientDetail;
