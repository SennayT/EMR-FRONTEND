// ** React Imports
import { ReactChild, ReactFragment, ReactPortal, useState, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

import PatientVitals from './PatientVitals'
import { Card } from '@mui/material'

import axios from 'axios'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))



const PatientDiagnosis = (props: {
  user: { name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined }
}) => {
  // ** State
  const [imgSrc] = useState<string>('/images/avatars/1.png')

  const [vitals, setVitals] = useState([]);

  useEffect(() => {
    axios.get(`https://capstone-backend-0957-11-v2.herokuapp.com/vitals`).then(response => {
      setVitals([response.data[4]])
    })
  });

  return (
    <Card sx={{ backgroundColor: 'white' }}>
      <CardContent>
        <form>
          <Grid container spacing={7}>
            <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ImgStyled src={imgSrc} alt='Profile Pic' />
                <Box sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='h3'>{props.user.name}</Typography>
                  <Typography variant='subtitle2'>Last Data Entry: April 20, 2021</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item>
              <Typography variant='h6' sx={{ marginBottom: 3.5 }}>
                Recent Diagnosis Note
              </Typography>
              <Typography variant='body2'>
                Here, I focus on a range of items and features that we use in life without giving them a second thought
                such as Coca Cola, body muscles and holding ones own breath. Though, most of these notes are not
                fundamentally necessary, they are such that you can use them for a good laugh, at a drinks party or for
                picking up women or men.
              </Typography>
              {vitals.map(function (vital) {
                return <div>
                  <p>vital number {vital.id}</p>
                  <PatientVitals vital={vital} />
                </div>
              })}
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default PatientDiagnosis
