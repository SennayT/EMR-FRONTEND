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

import requests from 'src/utils/repository'

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
    requests.get(`/vitals`).then(response => {
      setVitals(response[0])
    })
  }, []);
  const [lastDiagnosis, setLastDiagnosis] = useState({
    id: 1,
    comment: '',
    createdAt: '',
    diseases: [
      {
        id: 0,
        name: '',
        description: ''
      }
    ]
  })


  useEffect(() => {
    requests.get(`/diagnosis`).then((response) => {
      setLastDiagnosis(response.data[0])


    })
  })

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
               {vitals ?  vitals.map(function (vital) {
                return <div>
                  <p>vital number {vital['id']}</p>
                  <PatientVitals vital={vital} />
                </div>
              }) :  " " }
              <Typography variant='h6' sx={{ marginBottom: 3.5 }}>
                Recent Diagnosis Note
              </Typography>
              <Typography variant='body2'>
                {lastDiagnosis.comment}
              </Typography>
              <Typography variant='h6' sx={{ marginBottom: 3.5, marginTop: 3.5 }}>
                Diagnosed Diseases
              </Typography>
              {lastDiagnosis.diseases.map((disease) => {
                console.log("here", disease);
                return (
                  <div><Typography variant='body1'>{disease.name}</Typography>
                    <Typography variant='body2'>{disease.description}</Typography></div>
                );

              })}
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default PatientDiagnosis
