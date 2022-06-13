import { Fragment, useEffect, useState } from 'react'
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid'
import { Button, Grid, Typography, IconButton, Snackbar, Alert } from '@mui/material'
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
import { useSession } from 'next-auth/react'



const HealthCenters = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [healthCenters, setHealthCenters] = useState([])
  const [loading, setLoading] = useState(true)
  const [currHealthCenter, setCurrHealthCenter] = useState(-1)
  const [edit, setEdit]  = useState(false)

  const [errOpen, setErrOpen] = useState(false)
  const [severity, setSeverity] = useState("success")


  const handleClickOpen = () => { setEdit(false); setOpen(true); }
  const handleClickClose = (origin: boolean, severity: string) => {if(origin) {setErrOpen(true); setSeverity(severity); setOpen(false); } else { setOpen(false)}}

  const handleClose = () => {
    setErrOpen(false);
  };

  const { data: session } = useSession();

  useEffect(() => {
    requests.get(`/health-center`, session ? session.accessToken.toString() : "" ).then(response => {
      setHealthCenters(response.data)
      setLoading(false)
    })
  },[])

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
            <IconButton onClick={(e) =>{ setEdit(true) ; setOpen(true); }}>
              <EditIcon  />
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
      <Snackbar open={errOpen} autoHideDuration={600}  onClose={() => setOpen(false)}>
              <Alert onClose={handleClose} severity={severity == "success" ? "success" : "error"} sx={{ width: '100%' }}>
                This is an error message!
              </Alert>
            </Snackbar>
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
          onSelectionModelChange={(newSelectionModel) => {
            console.log("new", newSelectionModel  , healthCenters.find(i => i.id === newSelectionModel[0]))
            setCurrHealthCenter(Number(newSelectionModel[0]));
          }}
          selectionModel={currHealthCenter}
          rowsPerPageOptions={[5]}

          loading={loading}
        />
      </div>
      <Fragment>
        <Dialog open={open} maxWidth='md' onClose={() => handleClickClose(false, "")} aria-labelledby='max-width-dialog-title'>
          <DialogTitle id='max-width-dialog-title'>Health Center Registration Form </DialogTitle>
          <DialogContent>
            <AddHealthCenter closeHandler={handleClickClose} edit={edit} healthCenter={healthCenters.find(i => i.id === currHealthCenter)}/>
          </DialogContent>
          <DialogActions className='dialog-actions-dense'></DialogActions>
        </Dialog>
      </Fragment>
    </div>
  )
}

export default HealthCenters
