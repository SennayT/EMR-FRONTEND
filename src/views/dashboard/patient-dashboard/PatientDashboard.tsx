import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

import PatientDiagnosis from 'src/views/patient-details/PatientDiagnosis'
import user from 'src/data/userData'

export default function PatientDashboard() {
  return (
    <Card>
      <Grid container spacing={7}>
        <Grid sx={{ mx: 4, my: 4 }} item xs={5}>
          <PatientDiagnosis user={user} />
        </Grid>
        <Grid sx={{ mx: 4, my: 4, px: 4, py: 4 }} container xs={6}>
          <Grid item xs={5} sx={{ backgroundColor: 'white', borderRadius: 1, mx: 5, my: 4 }}></Grid>
          <Grid item xs={5} sx={{ backgroundColor: 'white', borderRadius: 2, mx: 5, my: 4 }}></Grid>
          <Grid item xs={5} sx={{ backgroundColor: 'white', borderRadius: 1, mx: 5, my: 4 }}></Grid>
          <Grid item xs={5} sx={{ backgroundColor: 'white', borderRadius: 1, mx: 5, my: 4 }}></Grid>
          <Grid item xs={5} sx={{ backgroundColor: 'white', borderRadius: 1, mx: 5, my: 4 }}></Grid>
          <Grid item xs={5} sx={{ backgroundColor: 'white', borderRadius: 1, mx: 5, my: 4 }}></Grid>
        </Grid>
      </Grid>
    </Card>
  )
}

// CardStatsVertical.defaultProps = {
//   color: 'primary',
//   trend: 'positive'
// }
