import { Card, CardContent, Grid, Typography } from '@mui/material'

const NurseLayout = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant='body1'>Nurse Dashboard</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default NurseLayout
