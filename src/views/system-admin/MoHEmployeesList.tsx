import { Fragment, useState, useEffect } from 'react'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { Button, Grid, Typography, Avatar, IconButton, Snackbar, Alert } from '@mui/material'
import AddMoHEmployee from 'src/views/shared-components/form-components/AddMoHEmployeeForm'

import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'

import requests from 'src/utils/repository'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'

import { useSession } from 'next-auth/react'

const MoHEmployees = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [mohEmployees, setMohEmployees] = useState([])
  const [currEmployee, setCurrEmployee] = useState(-1)
  const [edit, setEdit] = useState(false)

  const [errOpen, setErrOpen] = useState(false)
  const [severity, setSeverity] = useState('success')

  const handleClickOpen = () => {
    setEdit(false)
    setOpen(true)
  }
  const handleClickClose = (origin: boolean, severity: string) => {
    if (origin) {
      setErrOpen(true)
      setSeverity(severity)
      setOpen(false)
    } else {
      setOpen(false)
    }
  }

  const [loading, setLoading] = useState(true)
  const handleClose = () => {
    setErrOpen(false)
  }

  const { data: session } = useSession()

  useEffect(() => {
    requests.get(`/moh-employee`, session ? session.accessToken.toString() : '').then(response => {
      setMohEmployees(response.data.map((res: any) => res.user))
      setLoading(false)
    })
  }, [])
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'image',
      headerName: '',
      width: 20,
      editable: false,
      renderCell: (params: GridRenderCellParams<string>) => (
          <Grid item xs={3}>
            <Avatar src={params.value} />
          </Grid>

      )
    },
    {
      field: 'name',
      headerName: 'Employee Name',
      width: 200,
      editable: false,
      renderCell: (params: GridRenderCellParams<string>) => (

          <Grid item xs={6}>
            <Typography variant='body1'>{params.value}</Typography>
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
            <IconButton
              onClick={e => {
                setEdit(true)
                setOpen(true)
              }}
            >
              <EditIcon />
            </IconButton>
          </div>
        )
      }
    }
  ]

  return (
    <div>
      <Grid container>
        <Snackbar open={errOpen} autoHideDuration={600} onClose={() => setOpen(false)}>
          <Alert onClose={handleClose} severity={severity == 'success' ? 'success' : 'error'} sx={{ width: '100%' }}>
            {severity == 'success' ? 'Changes Made successfully' : 'There has been an error, please try again'}!
          </Alert>
        </Snackbar>
        <Grid item xs={10} md={10} lg={9}>
          <Typography variant='h5' sx={{ marginLeft: 2, marginBottom: 4 }}>
            MoH Employees
          </Typography>
        </Grid>
        <Grid item xs={2} md={2} lg={3}>
          <Button variant='outlined' color='primary' size='small' startIcon={<AddIcon />} onClick={handleClickOpen}>
            <Typography color='primary' sx={{ fontSize: 14, display: { xs: 'none', md: 'none', lg: 'block' } }}>
              MoH employee
            </Typography>
          </Button>
        </Grid>
      </Grid>

      <div style={{ height: 400, width: '100%', backgroundColor: 'white' }}>
        <DataGrid
          sx={{ px: 4 }}
          rows={mohEmployees}
          columns={columns}
          pageSize={5}
          onSelectionModelChange={newSelectionModel => {
            console.log(
              'new',
              newSelectionModel,
              mohEmployees.find(i => i.id === newSelectionModel[0])
            )
            setCurrEmployee(newSelectionModel[0])
          }}
          selectionModel={currEmployee}
          rowsPerPageOptions={[5]}
          loading={loading}
        />
      </div>
      <Fragment>
        <Dialog
          open={open}
          maxWidth='md'
          onClose={() => handleClickClose(false, '')}
          aria-labelledby='max-width-dialog-title'
        >
          <DialogTitle id='max-width-dialog-title'>MoH Employee Registration Form </DialogTitle>
          <DialogContent>
            <AddMoHEmployee
              closeHandler={handleClickClose}
              edit={edit}
              employee={mohEmployees.find(i => i.id === currEmployee)}
            />
          </DialogContent>
          <DialogActions className='dialog-actions-dense'></DialogActions>
        </Dialog>
      </Fragment>
    </div>
  )
}

export default MoHEmployees
