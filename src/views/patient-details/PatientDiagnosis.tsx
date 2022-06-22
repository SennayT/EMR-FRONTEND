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

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

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
  const [imgSrc] = useState<string>(props.user.image)

  const [vitals, setVitals] = useState([])
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    requests
      .get(`/vitals/patient/${router.query.pid}`, session ? session.accessToken.toString() : '')
      .then(response => {
        console.log(response.data)
        setVitals(response.data)
      })
  }, [])
  const [lastDiagnosis, setLastDiagnosis] = useState({
    id: 0,
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
    requests
      .get(`/diagnosis/patient/${router.query.pid}`, session ? session.accessToken.toString() : '')
      .then(response => {
        if (response.data[0]) {
          setLastDiagnosis(response.data[0])
          console.log('last diagnosis', lastDiagnosis)
          console.log('diseases', lastDiagnosis.diseases)
        }
      })
  }, [])

  return (
    <Card sx={{ backgroundColor: 'white' }}>
      <CardContent>
        <form>
          <Grid container spacing={7}>
            <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ImgStyled
                  src={
                    imgSrc
                      ? imgSrc
                      : 'https://t4.ftcdn.net/jpg/03/32/59/65/240_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg'
                  }
                  alt='Profile Pic'
                />
                <Box sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='h3'>{props.user.name}</Typography>
                  {/* <Typography variant='subtitle2'>Last Data Entry: April 20, 2021</Typography> */}
                </Box>
              </Box>
            </Grid>
            <Grid item>
              {vitals.length != 0
                ? vitals.map(function (vital) {
                    return (
                      <div>
                        <p>vital number {vital['id']}</p>
                        <PatientVitals vital={vital} />
                      </div>
                    )
                  })
                : <p>No Vitals Yet</p>}

              <Typography variant='h6' sx={{ marginBottom: 3.5 }}>
                Recent Diagnosis
              </Typography>

              <Typography variant='body2'>{lastDiagnosis.comment}</Typography>

              {lastDiagnosis.id != 0 ? lastDiagnosis.diseases.map(disease => {
                console.log('here', disease)

                return (
                  <div>
                    <Typography variant='body1'>{disease.name}</Typography>
                    <Typography variant='body2'>{disease.description}</Typography>
                  </div>
                )
              }) : <p>No Diagnosis Yet</p>}
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default PatientDiagnosis
