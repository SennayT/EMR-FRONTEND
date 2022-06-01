import { Fragment, useEffect, useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Button, Grid, Typography, IconButton } from '@mui/material'
import AddHealthCenter from 'src/views/shared-components/form-components/AddHealthCenterForm'

import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'

// import HealthCenter from 'src/data/models/HealthCenterModel'
// import Magnify from 'mdi-material-ui/Magnify'
// import InputAdornment from '@mui/material/InputAdornment'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'

import requests from 'src/utils/repository'

const HealthCenters = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [healthCenters, setHealthCenters] = useState([])
  const [loading, setLoading] = useState(true)

  const handleClickOpen = () => setOpen(true)
  const handleClickClose = () => setOpen(false)

  useEffect(() => {
    requests.get(`/health-center`).then(response => {
      setHealthCenters(response.data)
      setLoading(false)
    })
  })

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Health Center',
      width: 380,
      editable: false
    },
    {
      field: 'email',
      headerName: 'Email',
      type: 'string',
      width: 250,
      editable: false
    },
    {
      field: 'type',
      headerName: 'Type',
      width: 100,
      editable: false
    },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 160,
      editable: false
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 100,
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
        <Grid item xs={10} md={10} lg={9}>
          <Typography variant='h5' sx={{ marginLeft: 2, marginBottom: 4 }}>
            Health Centers
          </Typography>
        </Grid>
        <Grid item xs={2} md={2} lg={3}>
          <Button variant='outlined' color='primary' size='small' startIcon={<AddIcon />} onClick={handleClickOpen}>
            <Typography color='primary' sx={{ fontSize: 14, display: { xs: 'none', md: 'none', lg: 'block' } }}>
              Health Center
            </Typography>
          </Button>
        </Grid>
      </Grid>

      <div style={{ height: 400, width: '100%', backgroundColor: 'white' }}>
        <DataGrid
          rows={healthCenters}
          columns={columns}
          pageSize={5}
          sx={{ px: 2 }}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          loading={loading}
        />
      </div>
      <Fragment>
        <Dialog open={open} maxWidth='md' onClose={handleClickClose} aria-labelledby='max-width-dialog-title'>
          <DialogTitle id='max-width-dialog-title'>Health Center Registration Form </DialogTitle>
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