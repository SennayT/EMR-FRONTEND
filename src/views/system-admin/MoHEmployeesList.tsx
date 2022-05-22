import { Fragment, useState, useEffect } from 'react'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { Button, Grid, Typography, Avatar, IconButton } from '@mui/material'
import AddMoHEmployee from 'src/views/shared-components/form-components/AddMoHEmployeeForm'

import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'

import axios from 'axios'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

const MoHEmployees = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [mohEmployees, setMohEmployees] = useState([])
  const handleClickOpen = () => setOpen(true)
  const handleClickClose = () => setOpen(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`https://capstone-backend-0957-11-v2.herokuapp.com/moh-employee`).then(response => {
      setMohEmployees(response.data.map(res => res.user))
      setLoading(false)
    })
  })
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'name',
      headerName: 'Researcher',
      width: 200,
      editable: false,
      renderCell: (params: GridRenderCellParams<string>) => (
        <Grid container spacing={2} alignItems='center'>
          <Grid item xs={3}>
            <Avatar sx={{ backgroundColor: '#e5f7d0', padding: 1 }} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant='body1'>{params.value}</Typography>
          </Grid>
        </Grid>
      )
    },
    {
      field: 'email',
      headerName: 'Email',
      type: 'string',
      width: 200,
      editable: false
    },
    {
      field: 'age',
      headerName: 'Age',
      width: 150,
      editable: false,
      renderCell: (params: GridRenderCellParams<string>) => {
        return <Typography variant='subtitle2'>{params.value}</Typography>
      }
    },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 150,
      editable: false
    },

    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      editable: false,
      renderCell: () => {
        return (
          <div>
            <IconButton>
              <EditIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </div>
        )
      }
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
          rows={mohEmployees}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          loading={loading}
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
