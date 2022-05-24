import { Fragment, useEffect, useState } from 'react'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { Button, Typography, Chip } from '@mui/material'
import RadiologyResultFrom from './form-components/RadiologyResultForm'

import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'

import axios from 'axios'

// import Magnify from 'mdi-material-ui/Magnify'
// import InputAdornment from '@mui/material/InputAdornment'

const InvestigativeRequestTableRadiology = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = (param: any) => {
    console.log(param)
    setCurrentInvReq(param)
    setOpen(true)
  }
  const handleClickClose = () => setOpen(false)

  const [invReqs, setInvReqs] = useState([
    { id: 0, date: '', note: '', labTests: [{ id: 0, name: '', normalRange: '', measuredIn: '', testCategory: '' }] }
  ])

  const [currentInvReq, setCurrentInvReq] = useState({
    id: 0,
    date: '',
    note: '',
    labTests: [{ id: 0, name: '', normalRange: '', measuredIn: '', testCategory: '' }]
  })
  useEffect(() => {
    axios.get(`https://capstone-backend-0957-11-v2.herokuapp.com/investigation-request/include/radiology`).then(response => {
      setInvReqs(response.data)
    })
  })

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },

    {
      field: 'note',
      headerName: 'Note',
      width: 450,
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
      field: 'labTests',
      headerName: 'Number of Tests',
      type: 'number',
      width: 150,
      editable: false,
      renderCell: (params: GridRenderCellParams) => (
        <Chip color='primary' size='small'>
          {params.value ? params.value.length : 0}
        </Chip>
      )
    },
    {
      field: 'Action',
      headerName: 'Action',
      description: '',
      sortable: false,
      width: 110,
      renderCell: () => (
        <strong>
          <Button variant='outlined' color='primary' size='small' style={{ marginLeft: 16 }}>
            Report
          </Button>
        </strong>
      )
    }
  ]

  return (
    <div>
      <Typography variant='h5' sx={{ marginLeft: 2, marginBottom: 4 }}>
        Investigative Requests
      </Typography>
      <div style={{ height: 400, width: '100%', backgroundColor: 'white' }}>
        <DataGrid
          rows={invReqs}
          columns={columns}
          {...currentInvReq}
          pageSize={5}
          onCellClick={(params) => {
            console.log(params.row)
            handleClickOpen(params.row)
          }}
          rowsPerPageOptions={[5]}

        />
      </div>
      <Fragment>
        <Dialog open={open} maxWidth='md' onClose={handleClickClose} aria-labelledby='max-width-dialog-title'>
          <DialogTitle id='max-width-dialog-title'>Lab Result Form </DialogTitle>
          <DialogContent>
            <RadiologyResultFrom labTests={currentInvReq.labTests} invReqId={currentInvReq.id}  />
          </DialogContent>
          <DialogActions className='dialog-actions-dense'></DialogActions>
        </Dialog>
      </Fragment>
    </div>
  )
}

export default InvestigativeRequestTableRadiology
