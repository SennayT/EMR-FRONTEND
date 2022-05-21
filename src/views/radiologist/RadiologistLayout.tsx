
// ** MUI Imports
import Grid from '@mui/material/Grid'
import InvestigativeRequestTableRadiology from '../shared-components/InvestigationRequestTableRadiology';

const RadiologistLayout = () => {
  // ** State



  return (

    <Grid className="container-grid" container>
      <Grid item xs={12}>
        <InvestigativeRequestTableRadiology/>
      </Grid>
    </Grid>
  )
}

export default RadiologistLayout;
