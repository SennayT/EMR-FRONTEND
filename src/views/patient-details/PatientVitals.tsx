// ** MUI Imports
import Grid from '@mui/material/Grid'

// import Typography from '@mui/material/Typography'

import VitalsCard from '../shared-components/vitalsCard'

const vitalCategories = [
  {
    id: 1,
    name: 'Heart Rate',
    value: '117',
    measuredBy: '/87',
    image: '/images/heart.png'
  },
  {
    id: 2,
    name: 'Fever',
    value: '40',
    measuredBy: 'c',
    image: '/images/fever.png'
  },
  {
    id: 3,
    name: 'Blood Pressure',
    value: '75',
    measuredBy: '/123',
    image: '/images/bp.jpg'
  },
  {
    id: 4,
    name: 'Height',
    value: '170',
    measuredBy: 'cm',
    image: '/images/height.jpg'
  },
  {
    id: 5,
    name: 'Weight',
    value: '123',
    measuredBy: 'c',
    image: '/images/weight.jpg'
  },
  {
    id: 6,
    name: 'BMI',
    value: '20',
    measuredBy: '.3',
    image: '/images/bmi.jpg'
  }
]

const PatientVitals = () => {
  return (
    <>
      {vitalCategories.map(function (vital) {
        return (
          <Grid xs={6} maxWidth={100} key={vital.id}>
            <VitalsCard vital={vital} />
          </Grid>

          // <Grid
          //   spacing={3}
          //   key={vital.name}
          //   item
          //   height={140}
          //   xs={5}
          //   sx={{ backgroundColor: 'white', borderRadius: 1, px: 4, mx: 5 }}
          // >
          //   <Grid container>
          //     <Grid item xs={12}>
          //       <Typography sx={{ mx: 3, my: 5, display: 'block' }} variant='subtitle1'>
          //         {vital.name}
          //       </Typography>
          //     </Grid>

          //     <Grid item xs={6}>
          //       <img src={vital.image} alt='heart rate' height={70} />
          //     </Grid>
          //     <Grid item xs={5}>
          //       <Typography sx={{ display: 'inline' }} variant='h4'>
          //         {vital.value}
          //         <Typography sx={{ display: 'inline' }} variant='subtitle1'>
          //           {vital.measuredBy}
          //         </Typography>
          //       </Typography>
          //     </Grid>
          //   </Grid>
          // </Grid>
        )
      })}
    </>
  )
}

export default PatientVitals
