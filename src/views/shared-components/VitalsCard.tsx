// ** MUI Imports
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// import { ReactChild, ReactFragment, ReactPortal } from 'react'

import { Vital } from 'src/data/models/VitalModel'

// import { Patient } from 'src/data/models/PatientModel'

const VitalCard = (props: { vital: Vital }) => {
  console.log(props.vital)

  return (
    <Grid spacing={3} item height={140} xs={5} sx={{ backgroundColor: 'white', borderRadius: 1, px: 4, mx: 5 }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography sx={{ mx: 3, my: 5, display: 'block' }} variant='subtitle1'>
            {props.vital.name}
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <img src={props.vital.image} alt='heart rate' height={70} />
        </Grid>
        <Grid item xs={5}>
          <Typography sx={{ display: 'inline' }} variant='h4'>
            {props.vital.value}
            <Typography sx={{ display: 'inline' }} variant='subtitle1'>
              {props.vital.measuredBy}
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default VitalCard
