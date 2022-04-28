
// ** MUI Imports
import Grid from '@mui/material/Grid'
import { Divider } from '@mui/material'
import PatientGeneralInfo from './PatientGeneralInfo'
import PatientDiagnosis from './PatientDiagnosis'
import DiagnosisHistory from './DiagnosisHistory'



const PatientDetail = () => {
  // ** State



  return (

    <Grid className="container-grid" spacing={5} container item>
      <Grid item xs={4}>
        <PatientGeneralInfo/>
      </Grid>
      <Divider />
      <Grid item xs={8} >
        <PatientDiagnosis/>
      <DiagnosisHistory  />

      </Grid>
    </Grid>
  )
}

export default PatientDetail;
