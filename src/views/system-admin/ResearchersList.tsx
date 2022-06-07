import { Fragment, useEffect, useState } from 'react'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { Button, Grid, Typography, Avatar, IconButton } from '@mui/material'
import AddResearcher from 'src/views/shared-components/form-components/AddResearcherForm'

import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import requests from 'src/utils/repository'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'

import { useSession } from 'next-auth/react'


const Researchers = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [researchers, setResearchers] = useState([])
  const [edit, setEdit] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClickClose = () => setOpen(false)
  const [loading, setLoading] = useState(true)
  const [currResearcher, setCurrResearcher] = useState()

  const { data: session } = useSession();


  useEffect(() => {
    requests.get(`/researcher`,  session ? session.accessToken.toString() : "").then(response => {
      setResearchers(response.data)
      setLoading(false)
    })
  },[])

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
      width: 230,
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
      width: 200,
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
              <EditIcon onClick={(e) =>{ setEdit(true); setOpen(true)} } />
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
            Researchers
          </Typography>
        </Grid>
        <Grid item xs={2} md={2} lg={3}>
          <Button variant='outlined' color='primary' size='small' startIcon={<AddIcon />} onClick={handleClickOpen}>
            <Typography color='primary' sx={{ fontSize: 14, display: { xs: 'none', md: 'block', lg: 'block' } }}>
              Researcher
            </Typography>
          </Button>
        </Grid>
      </Grid>

      <div style={{ height: 400, width: '100%', backgroundColor: 'white' }}>
        <DataGrid
          sx={{ px: 4 }}
          rows={researchers}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          onSelectionModelChange={(newSelectionModel) => {
            console.log("new", newSelectionModel  , researchers.find(i => i.id === newSelectionModel[0]))
            setCurrResearcher(newSelectionModel[0]);
          }}
          selectionModel={currResearcher}
          loading={loading}
        />
      </div>
      <Fragment>
        <Dialog open={open} maxWidth='md' onClose={handleClickClose} aria-labelledby='max-width-dialog-title'>
          <DialogTitle id='max-width-dialog-title'>Researcher Registration Form </DialogTitle>
          <DialogContent>
            <AddResearcher edit={edit} researcher={currResearcher} />
          </DialogContent>
          <DialogActions className='dialog-actions-dense'></DialogActions>
        </Dialog>
      </Fragment>
    </div>
  )
}

export default Researchers
