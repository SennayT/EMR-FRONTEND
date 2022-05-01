import { Fragment, useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Button, Grid, Typography } from '@mui/material'
import AddMoHEmployee from 'src/views/shared-components/form-components/AddMoHEmployeeForm'

import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'

const rows = [
  {
    id: 1,
    MoHEmployeeName: 'Rediet Demisse',
    note: 'Lorem ipsum sth sth they always write on the templates',
    date: '12/12/2022',
    City: 'Addis Ababa'
  },
  {
    id: 2,
    MoHEmployeeName: 'Rediet Demisse',
    note: 'Lorem ipsum sth sth they always write on the templates',
    date: '12/12/2022',
    City: 'Addis Ababa'
  },
  {
    id: 3,
    MoHEmployeeName: 'Rediet Demisse',
    note: 'Lorem ipsum sth sth they always write on the templates',
    date: '12/12/2022',
    City: 'Addis Ababa'
  },
  {
    id: 4,
    MoHEmployeeName: 'Rediet Demisse',
    note: 'Lorem ipsum sth sth they always write on the templates',
    date: '12/12/2022',
    City: 'Addis Ababa'
  },
  {
    id: 5,
    MoHEmployeeName: 'Rediet Demisse',
    note: 'Lorem ipsum sth sth they always write on the templates',
    date: '12/12/2022',
    City: 'Addis Ababa'
  },
  {
    id: 6,
    MoHEmployeeName: 'Rediet Demisse',
    note: 'Lorem ipsum sth sth they always write on the templates',
    date: '12/12/2022',
    City: 'Addis Ababa'
  },
  {
    id: 7,
    MoHEmployeeName: 'Rediet Demisse',
    note: 'Lorem ipsum sth sth they always write on the templates',
    date: '12/12/2022',
    City: 'Addis Ababa'
  }
]

const MoHEmployees = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = () => setOpen(true)
  const handleClickClose = () => setOpen(false)

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'MoHEmployeeName',
      headerName: 'MoH Employee',
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
            MoH Employees
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Button variant='outlined' color='primary' size='small' style={{ marginLeft: 128 }} onClick={handleClickOpen}>
            Add MoH Employee
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
          <DialogTitle id='max-width-dialog-title'>MoH Employee Registration Form </DialogTitle>
          <DialogContent>
            <AddMoHEmployee />
          </DialogContent>
          <DialogActions className='dialog-actions-dense'></DialogActions>
        </Dialog>
      </Fragment>
    </div>
  )
}

export default MoHEmployees
