import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import healthCenter from 'src/data/healthCenterData'
import EmployeeGeneralInfo from '../shared-components/EmployeeGeneralInfo'

import ProfileDetail from './ProfileDetail'

import requests from 'src/utils/repository'

const ProfileDetailLayout = () => {
  // ** State

  const [user, setUser] = useState({
    name: "",
    phone: "",
    age: 0,
    email: "",
    image: null,
    gender: null,
    isActive: true,
    isResearcher: false,
    isAdmin: false,
    address: {
      id: 6,
      city: "",
      subCity: "",
      zone: "",
      woreda: "",
      kebelle: "",
      street: "",
      houseNo: ""
    },
    role: {
      id: 0,
      name: " "
    },
    healthCenter: {
      id: 0,
      name: "",
      email: "",
      phone: "",
      type: ""
    }
  })


  useEffect(() => {
    requests.get(`/user/4`).then(response => {
      setUser(response.data)
    })
  });

  return (
    <Grid container spacing={5}>
      <Grid item xs={4}>
        <ProfileDetail user={user}></ProfileDetail>
      </Grid>
      <Grid item xs={8}>
        <EmployeeGeneralInfo healthCenter={user.healthCenter} />
      </Grid>
    </Grid>
  )
}

export default ProfileDetailLayout
