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
import ResultView from 'src/views/shared-components/ResultView'
import LabResultsView from 'src/views/shared-components/LabResultsView'


// import Magnify from 'mdi-material-ui/Magnify'
// import InputAdornment from '@mui/material/InputAdornment'

const Results = () => {
  const {data:session} = useSession()
  return session.role === 'Doctor' ?  <ResultView/> : <LabResultsView/>
}

export default Results
