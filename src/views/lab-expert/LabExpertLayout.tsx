
// ** MUI Imports
import Grid from '@mui/material/Grid'
import InvestigativeRequestTable from '../shared-components/InvestigativeRequestTable';

const LabExpertLayout = () => {
  // ** State



  return (

    <Grid className="container-grid" container>
      <Grid item xs={12}>
        <InvestigativeRequestTable/>
      </Grid>
    </Grid>
  )
}

export default LabExpertLayout;
