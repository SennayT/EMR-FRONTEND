import { Grid } from '@mui/material'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import healthCenter from 'src/data/healthCenterData'
import EmployeeGeneralInfo from '../shared-components/EmployeeGeneralInfo'

import ProfileDetail from './ProfileDetail'

const ProfileDetailLayout = () => {
  // ** State

  return (
    <Grid container spacing={5}>
      <Grid item xs={4}>
        <ProfileDetail></ProfileDetail>
      </Grid>
      <Grid item xs={8}>
        <EmployeeGeneralInfo healthCenter={healthCenter} />
      </Grid>
    </Grid>
  )
}

export default ProfileDetailLayout
