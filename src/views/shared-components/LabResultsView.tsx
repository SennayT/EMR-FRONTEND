import { Fragment, useEffect, useState } from 'react'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { Button, Typography, Chip } from '@mui/material'
import LabResultFrom from './form-components/LabResultForm'

import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'

import requests from 'src/utils/repository'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'


// import Magnify from 'mdi-material-ui/Magnify'
// import InputAdornment from '@mui/material/InputAdornment'

const LabResultsView = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = (param: any) => {
    // console.log(req)
    console.log(param)
    setcurrentLabTest(param)
    setOpen(true)
  }
  const { data: session } = useSession();

  const handleClickClose = () => setOpen(false)
  const router = useRouter()
  const handleViewClick = () => {
    router.push({pathname: '/patient/view/results/list/',
    query: {
      invId: currentLabTest.id
    }})
  }
  const [labTests, setlabTests] = useState([
    ])

  const [currentLabTest, setcurrentLabTest] = useState({
  })
  useEffect(() => {
    requests.get(`/lab-result/user/filled`,session ? session.accessToken.toString() : "").then(response => {
      console.log(response.data)
      setlabTests(response.data)
    })
  }, [])

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },

    {
      field: 'name',
      headerName: 'Name',
      width: 250,
      editable: false
    },
    {
      field: 'normalRange',
      headerName: 'Normal Range',
      width: 150,
      editable: false
    },
    {
      field: 'measuredIn',
      headerName: 'Measured In',
      width: 180,
      editable: false,

    },
    {
      field: 'testCategory',
      headerName: 'Test Category',
      width: 200,
      editable: false,
      renderCell: (params: GridRenderCellParams<Array<any>>) => (
        <Chip color='primary' label={params.value} sx={{px: 5}}/>
      )
    },
    {
      field: 'Action',
      headerName: 'Action',
      description: '',
      sortable: false,
      width: 160,
      renderCell: () => (
        <strong>
          <Button onClick={handleViewClick} variant='outlined' color='primary' size='small' style={{ marginLeft: 16 }}>
            View Results
          </Button>
        </strong>
      )
    }
  ]

  return (
    <div>
      <Typography variant='h5' sx={{ marginLeft: 2, marginBottom: 4 }}>
        Lab Tests
      </Typography>
      <div style={{ height: 400, width: '100%', backgroundColor: 'white' }}>
        <DataGrid
          rows={labTests}
          columns={columns}
          pageSize={5}
          onCellClick={(params) => {
            console.log(params.row)
            handleClickOpen(params.row)
          }}
          rowsPerPageOptions={[5]}
          onSelectionModelChange={newSelectionModel => {
            console.log(
              'new',
              newSelectionModel,
              labTests.find(i => i.id === newSelectionModel[0])
            )
            setcurrentLabTest(Number(newSelectionModel[0]))
          }}
          selectionModel={currentLabTest}

        />
      </div>

    </div>
  )
}

export default LabResultsView
