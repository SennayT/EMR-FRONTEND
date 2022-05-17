// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'



const vitalCategories = [
  {
    name: 'Heart Rate',
    value: '117',
    measuredBy: '/87',
    image: '/images/heart.png'
  },
  {
    name: 'Fever',
    value: '40',
    measuredBy: 'c',
    image: '/images/fever.png'
  },
  {
    name: 'Blood Pressure',
    value: '75',
    measuredBy: '/123',
    image: '/images/bp.jpg'
  },
  {
    name: 'Height',
    value: '170',
    measuredBy: 'cm',
    image: '/images/height.jpg'
  },
  {
    name: 'Weight',
    value: '123',
    measuredBy: 'c',
    image: '/images/weight.jpg'
  },
  {
    name: 'BMI',
    value: '20',
    measuredBy: '.3',
    image: '/images/bmi.jpg'
  }
]

const PatientVitals = () => {
  return (
    <div>

{vitalCategories.map(function (vital) {
            return (
              <Grid
                spacing={3}
                key={vital.name}
                item
                height={140}
                xs={5}
                sx={{ backgroundColor: 'white', borderRadius: 1, px: 4, mx: 5 }}
              >
                <Grid container>
                  <Grid item xs={12}>
                    <Typography sx={{ mx: 3, my: 5, display: 'block' }} variant='subtitle1'>
                      {vital.name}
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <img src={vital.image} alt='heart rate' height={70} />
                  </Grid>
                  <Grid item xs={5}>
                    <Typography sx={{ display: 'inline' }} variant='h4'>
                      {vital.value}
                      <Typography sx={{ display: 'inline' }} variant='subtitle1'>
                        {vital.measuredBy}
                      </Typography>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            )
          })}
    </div>
  )
}

export default PatientVitals
