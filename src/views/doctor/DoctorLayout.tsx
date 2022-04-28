
// ** MUI Imports
import Grid from '@mui/material/Grid'
import SearchField from '../shared-components/SearchField'

const DoctorLayout = () => {
  // ** State



  return (

    <Grid className="container-grid" container>
      <Grid item xs={12}>
        <SearchField/>
      </Grid>
    </Grid>
  )
}

export default DoctorLayout;
