import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

import PatientDiagnosis from 'src/views/patient-details/PatientDiagnosis'
import user from 'src/data/userData'

export default function PatientDashboard() {
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

  return (
    <Card>
      <Grid container spacing={7}>
        <Grid sx={{ mx: 4, my: 4 }} item xs={5}>
          <PatientDiagnosis user={user} />
        </Grid>
        <Grid item sx={{ mx: 4, my: 4, px: 4, py: 4 }} container xs={6}>
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
          {/* <Grid item height={140} xs={5} sx={{ backgroundColor: 'white', borderRadius: 2, mx: 5, my: 4 }}>
            <Grid container sx={{ mx: 4 }}>
              <Grid item xs={12}>
                <Typography sx={{ px: 3, pt: 4, pb: 2 }} variant='h5'>
                  Fever
                </Typography>
              </Grid>
              <Grid item xs={5} sx={{ ml: 2 }}>
                <img src='/images/fever.png' alt='heart rate' height={60} />
              </Grid>
              <Grid item xs={5} sx={{ mx: 2, my: 4 }}>
                40 C
              </Grid>
            </Grid>
          </Grid>
          <Grid item height={140} xs={5} sx={{ backgroundColor: 'white', borderRadius: 1, mx: 5, my: 4 }}>
            <Grid container>
              <Typography sx={{ px: 3, pt: 4, pb: 2 }} variant='h5'>
                Blood Pressure
              </Typography>
              <Grid item xs={5} sx={{ ml: 4 }}>
                <img src='/images/bp.jpg' alt='heart rate' height={60} />
              </Grid>
              <Grid item xs={5} sx={{ mx: 2, my: 4 }}>
                75/124
              </Grid>
            </Grid>
          </Grid>
          <Grid item height={140} xs={5} sx={{ backgroundColor: 'white', borderRadius: 1, mx: 5, my: 4 }}>
            <Grid container sx={{ mx: 4 }}>
              <Grid item xs={12}>
                <Typography sx={{ px: 3, pt: 4, pb: 2 }} variant='h5'>
                  Height
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <img src='/images/height.jpg' alt='heart rate' height={60} />
              </Grid>
              <Grid item xs={5} sx={{ mx: 2, my: 4 }}>
                170 cm
              </Grid>
            </Grid>
          </Grid>
          <Grid item height={140} xs={5} sx={{ backgroundColor: 'white', borderRadius: 1, mx: 5, my: 4 }}>
            <Grid container sx={{ mx: 4 }}>
              <Grid item xs={12}>
                <Typography sx={{ px: 3, pt: 4, pb: 2 }} variant='h5'>
                  Weight
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <img src='/images/weight.jpg' alt='heart rate' height={60} />
              </Grid>
              <Grid item xs={5} sx={{ mx: 2, my: 4 }}>
                74 Kg
              </Grid>
            </Grid>
          </Grid>
          <Grid item height={140} xs={5} sx={{ backgroundColor: 'white', borderRadius: 1, mx: 5, my: 4 }}>
            <Grid container sx={{ mx: 4 }}>
              <Grid item xs={12}>
                <Typography sx={{ px: 3, pt: 4, pb: 2 }} variant='h5'>
                  BMI
                </Typography>
              </Grid>

              <Grid item xs={5}>
                <img src='/images/bmi.jpg' alt='heart rate' height={84} />
              </Grid>
              <Grid item xs={5} sx={{ mx: 2, my: 4 }}>
                23.1
              </Grid>
            </Grid>
          </Grid> */}
        </Grid>
      </Grid>
    </Card>
  )
}

// CardStatsVertical.defaultProps = {
//   color: 'primary',
//   trend: 'positive'
// }
