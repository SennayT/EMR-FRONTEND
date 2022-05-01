import { Fragment, useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Button, Grid, Typography } from '@mui/material'
import AddHealthCenter from 'src/views/shared-components/form-components/AddHealthCenterForm'

import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'

// import Magnify from 'mdi-material-ui/Magnify'
// import InputAdornment from '@mui/material/InputAdornment'

const rows = [
  {
    id: 1,
    HealthCenterName: 'St. Paul Hospital',
    note: 'Lorem ipsum sth sth they always write on the templates',
    date: '12/12/2022',
    City: 'Addis Ababa'
  },
  {
    id: 2,
    HealthCenterName: 'St. Paul Hospital',
    note: 'Lorem ipsum sth sth they always write on the templates',
    date: '12/12/2022',
    City: 'Addis Ababa'
  },
  {
    id: 3,
    HealthCenterName: 'St. Paul Hospital',
    note: 'Lorem ipsum sth sth they always write on the templates',
    date: '12/12/2022',
    City: 'Addis Ababa'
  },
  {
    id: 4,
    HealthCenterName: 'St. Paul Hospital',
    note: 'Lorem ipsum sth sth they always write on the templates',
    date: '12/12/2022',
    City: 'Addis Ababa'
  },
  {
    id: 5,
    HealthCenterName: 'St. Paul Hospital',
    note: 'Lorem ipsum sth sth they always write on the templates',
    date: '12/12/2022',
    City: 'Addis Ababa'
  },
  {
    id: 6,
    HealthCenterName: 'St. Paul Hospital',
    note: 'Lorem ipsum sth sth they always write on the templates',
    date: '12/12/2022',
    City: 'Addis Ababa'
  },
  {
    id: 7,
    HealthCenterName: 'St. Paul Hospital',
    note: 'Lorem ipsum sth sth they always write on the templates',
    date: '12/12/2022',
    City: 'Addis Ababa'
  }
]

const HealthCenters = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = () => setOpen(true)
  const handleClickClose = () => setOpen(false)

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'HealthCenterName',
      headerName: 'Health Center',
      width: 150,
      editable: false
    },
    {
      field: 'date',
      headerName: 'Date',
      type: 'number',
      width: 150,
      editable: false
    },
    {
      field: 'note',
      headerName: 'Note',
      width: 400,
      editable: false
    },
    {
      field: 'City',
      headerName: 'City',
      width: 150,
      editable: false
    }
  ]

  return (
    <div>
      <Grid container>
        <Grid item xs={8}>
          <Typography variant='h5' sx={{ marginLeft: 2, marginBottom: 4 }}>
            Health Centers
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Button variant='outlined' color='primary' size='small' style={{ marginLeft: 128 }} onClick={handleClickOpen}>
            Add Health Center
          </Button>
        </Grid>
      </Grid>

      <div style={{ height: 400, width: '100%', backgroundColor: 'white' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
      <Fragment>
        <Dialog open={open} maxWidth='md' onClose={handleClickClose} aria-labelledby='max-width-dialog-title'>
          <DialogTitle id='max-width-dialog-title'>Health Ceneter Registration Form </DialogTitle>
          <DialogContent>
            <AddHealthCenter />
          </DialogContent>
          <DialogActions className='dialog-actions-dense'></DialogActions>
        </Dialog>
      </Fragment>
    </div>
  )
}

export default HealthCenters
