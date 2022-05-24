import { useState } from 'react'
import { useEffect } from 'react'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { Avatar, Button, Grid, Typography, Chip, IconButton, Link } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { Paper } from '@mui/material'

import axios from 'axios'

const Employees = () => {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`https://capstone-backend-0957-11-v2.herokuapp.com/employee`).then(response => {
      setEmployees(response.data)
      setLoading(false)
    })
  })

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'name',
      headerName: 'Employee',
      width: 250,
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
      width: 250,
      editable: false
    },
    {
      field: 'role',
      headerName: 'Role',
      width: 150,
      renderCell: (params: GridRenderCellParams) => {
        return <p>{params.value ? params.value.name.toString() : " "}</p>
      },
      editable: false
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      editable: false,
      renderCell: (params: GridRenderCellParams<string>) => {
        return (
          <Chip
            label={params.value ? 'active' : 'inactive'}
            sx={{ backgroundColor: params.value ? '#e5f7d0' : '#f7d6d0' }}
          />
        )
      }
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
            Employees
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Link href='/hospital-admin/employees/add'>
            <Button variant='outlined' color='primary' size='small' style={{ marginLeft: 128 }}>
              Add Employee
            </Button>
          </Link>
        </Grid>
      </Grid>

      <div style={{ height: 420, width: '100%', backgroundColor: 'white' }}>
        <Paper sx={{ width: '100%', height: '400px' }}>
          <DataGrid
            rows={employees}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            loading={loading}
          />
        </Paper>
      </div>
    </div>
  )
}

export default Employees
