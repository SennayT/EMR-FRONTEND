
import { Grid } from '@mui/material'


// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

import ProfileDetail from './ProfileDetail'





const ProfileDetailLayout = () => {
  // ** State


  return (
   <Grid container>
     <Grid item xs={4}>
        <ProfileDetail></ProfileDetail>
     </Grid>
     <Grid item xs={6}>
     </Grid>
   </Grid>
  )
}

export default ProfileDetailLayout
