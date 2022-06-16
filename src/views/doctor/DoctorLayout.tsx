
// ** MUI Imports
import { Alert, Snackbar, Card } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useState } from 'react'
import SearchField from '../shared-components/SearchField'

const DoctorLayout = () => {
  // ** State

  const [errOpen, setErrOpen] = useState(false)

const handleClose = () => {
    setErrOpen(false)
  }
  const handleOpen =() => {
    setErrOpen(true)
  }

  return (

    <Grid className="container-grid" container>
      <Snackbar open={errOpen} autoHideDuration={1200} onClose={() => setErrOpen(false)}>
        <Card>
          <Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
            Please make sure you entered the right reference Id
          </Alert>
        </Card>
        </Snackbar>
      <Grid item xs={12}>
        <SearchField errHandler={handleOpen}/>
      </Grid>
    </Grid>
  )
}

export default DoctorLayout;
