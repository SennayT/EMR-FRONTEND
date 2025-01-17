import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'

// import Card from '@mui/material/Card'

import PatientDiagnosis from 'src/views/patient-details/PatientDiagnosis'
import { useSession } from 'next-auth/react'
import requests from 'src/utils/repository'
import { useRouter } from 'next/router'

// import NoDataView from 'src/views/shared-components/NoDataView'
import { Box, Typography, BoxProps, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

import PatientVitals from 'src/views/patient-details/PatientVitals'

// import PatientDetail from 'src/views/patient-details/PatientDetails'
import DiagnosisHistory from 'src/views/patient-details/DiagnosisHistory'
import ShowRefDialog from 'src/views/shared-components/ShowRefDialog'

const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw'
  }
}))

export default function PatientDashboard(props: any) {
  const [user, setUser] = useState({
    name: '',
    phone: '',
    age: 0,
    email: '',
    image: null,
    gender: null,
    isActive: true,
    isResearcher: false,
    isAdmin: false,
    address: {
      id: 6,
      city: '',
      subCity: '',
      zone: '',
      woreda: '',
      kebelle: '',
      street: '',
      houseNo: ''
    },
    role: {
      id: 0,
      name: ' '
    },
    healthCenter: {
      id: 0,
      name: '',
      email: '',
      phone: '',
      type: ''
    }
  })

  // const session = useSession()

  const { data: session } = useSession()
  const [vitals, setVitals] = useState([])
  const [refId, setRefId] = useState('')

  // const router = useRouter()

  useEffect(() => {
    requests.get(`/patient/user/profile`, session ? session.accessToken.toString() : '').then(response => {
      setUser(response.data)
      setRefId(response.data.refId)
      console.log('user', response.data)
      requests.get(`/vitals/patient/${response.data.id}`, session ? session.accessToken : '').then(r => {
        setVitals(r.data)
      })
    })
  }, [])

  return vitals.length == 0 ? (
    <Grid className='container-grid' spacing={5} container item>
      <Grid item xs={12}>
        <TextField value={refId} />
        <PatientDiagnosis user={user} />
      </Grid>
      <Grid item xs={8}>
        <Box className='content-center'>
          <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <BoxWrapper>
              <Typography variant='h3'>No Vitals Yet </Typography>
              {/* <Typography variant='body2' sx={{ mb: 1 }}>
               please add data to view here ⚠️
              </Typography> */}
            </BoxWrapper>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <DiagnosisHistory />
      </Grid>
    </Grid>
  ) : (
    <Grid className='container-grid' spacing={2} container item>
      <Grid item xs={12}>
        <PatientDiagnosis user={user} />
      </Grid>
      <Grid item xs={12}>
        {/* {vitals.map(function (vital) {
          return (
            <div>
              <p>vital number {vital['id']}</p>
              <PatientVitals vital={vital} />
            </div>
          )
        })} */}
      </Grid>
      <Grid item xs={12}>
        <DiagnosisHistory />
      </Grid>
    </Grid>
  )
}
