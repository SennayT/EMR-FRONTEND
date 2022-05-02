import { Fragment, useState } from 'react'
import { DataGrid, GridColDef, GridRenderCellParams, GridToolbarContainer, GridToolbarExport} from '@mui/x-data-grid'
import { Avatar, Button, Grid, Typography, Chip, IconButton  } from '@mui/material'
import AddEmployee from 'src/views/shared-components/form-components/AddEmployeeForm'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'

const rows = [
  {
    id: 1,
    EmployeesName: 'Rediet Demisse',
    email: 'example@gmail.com',
    role: 'Doctor',
    status: 'active',
    HealthCenter: 'St. Paul Hospital'
  },
  {
    id: 2,
    EmployeesName: 'Rediet Demisse',
    email: 'example@gmail.com',
    role: 'Radiologist',
    status: 'in active',
    HealthCenter: 'St. Paul Hospital'
  },
  {
    id: 3,
    EmployeesName: 'Rediet Demisse',
    email: 'example@gmail.com',
    role: 'Doctor',
    status: 'active',
    HealthCenter: 'St. Paul Hospital'
  },
  {
    id: 4,
    EmployeesName: 'Rediet Demisse',
    email: 'example@gmail.com',
    role: 'Doctor',
    status: 'active',
    HealthCenter: 'St. Paul Hospital'
  },
  {
    id: 5,
    EmployeesName: 'Rediet Demisse',
    email: 'example@gmail.com',
    role: 'Doctor',
    status: 'active',
    HealthCenter: 'St. Paul Hospital'
  },
  {
    id: 6,
    EmployeesName: 'Rediet Demisse',
    email: 'example@gmail.com',
    role: 'Doctor',
    status: 'active',
    HealthCenter: 'St. Paul Hospital'
  },
  {
    id: 7,
    EmployeesName: 'Rediet Demisse',
    email: 'example@gmail.com',
    role: 'Doctor',
    status: 'active',
    HealthCenter: 'St. Paul Hospital'
  }
]

const Employees = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = () => setOpen(true)
  const handleClickClose = () => setOpen(false)

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'EmployeesName',
      headerName: 'Employee',
      width: 200,
      editable: false,
      renderCell: (params: GridRenderCellParams<string>) => (
        <Grid container spacing={2} alignItems='center'>
          <Grid item xs={3}>
            <Avatar sx={{ backgroundColor: '#e5f7d0' }} />
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
      field: 'role',
      headerName: 'Role',
      width: 150,
      editable: false,
      renderCell: (params: GridRenderCellParams<string>) => {
        return(
          <Typography variant='subtitle2'>

            {params.value}
          </Typography>

        );
      }
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      editable: false,
      renderCell: (params: GridRenderCellParams<string>) => {
        return(
        <Chip label={params.value} sx={{backgroundColor:  '#dbf2bf'}}>
            {params.value}
        </Chip>
        );
      }
    },

    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      editable: false,
      renderCell: () => {
        return(
          <div>
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton>
          <DeleteIcon/>
        </IconButton>
        </div>
        );
      }
    }
  ]

  return (
    <div>
      <Grid container>
        <Grid item xs={8}>
          <Typography variant='h5' sx={{ marginLeft: 2, marginBottom: 4 }}>
            Employees
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Button variant='outlined' color='primary' size='small' style={{ marginLeft: 128 }} onClick={handleClickOpen}>
            Add Employee
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
          components={{ Toolbar: CustomToolbar }}
        />

      </div>
      <Fragment>
        <Dialog open={open} maxWidth='md' onClose={handleClickClose} aria-labelledby='max-width-dialog-title'>
          <DialogTitle id='max-width-dialog-title'>Employee Registration Form </DialogTitle>
          <DialogContent>
            <AddEmployee />
          </DialogContent>
          <DialogActions className='dialog-actions-dense'></DialogActions>
        </Dialog>
      </Fragment>
    </div>
  )
}

export default Employees
function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport sx={{margin: 1}}/>
    </GridToolbarContainer>
  );
}
