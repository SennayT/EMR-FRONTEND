import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

import PatientDiagnosis from 'src/views/patient-details/PatientDiagnosis'
import user from 'src/data/userData'
import PatientVitals from 'src/views/patient-details/PatientVitals'

export default function PatientDashboard() {
  return (
    <Card>
      <Grid container spacing={7}>
        <Grid sx={{ mx: 4, my: 4 }} item xs={5}>
          <PatientDiagnosis user={user} />
        </Grid>
        <Grid item sx={{ mx: 4, my: 4, px: 4, py: 4 }} container xs={6}>
          <PatientVitals />
        </Grid>
      </Grid>
    </Card>
  )
}
