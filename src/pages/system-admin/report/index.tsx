import { useState } from 'react'
import {
  Grid,
  TextField,
  Button,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  SelectChangeEvent,
  Chip,
  Typography
} from '@mui/material'

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

import Box from '@mui/material/Box'
import { DatePicker } from '@mui/x-date-pickers'

// import PDFViewer from 'pdf-viewer-reactjs'
import requests from 'src/utils/repository'
import { useSession } from 'next-auth/react'
import { Document, Page, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
    }
  }
}

const ReportGenerationUI = () => {
  const [typeOfReport, setTypeOfReport] = useState('')
  const [personName, setPersonName] = useState<string[]>([])
  const types = ['General', 'Specific']
  const [startDate, setStartDate] = useState<Date | null>(new Date())
  const [endDate, setEndDate] = useState<Date | null>(new Date())

  const { data: session } = useSession()

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value }
    } = event
    setPersonName(typeof value === 'string' ? value.split(',') : value)
  }
  const handleReportRender = (period: string) => {
    console.log('pdfdata')
    const pdfUrl = `http://capstone-backend-0957-11-v2.herokuapp.com/system-admin/report/${period}`
    const link = document.createElement('a');
    link.href = pdfUrl;
    // link.setAttribute('download', 'report.pdf');
    document.body.appendChild(link);
    link.click();
  }


  return (
    <Grid>
      <Grid item xs={12}>
        <Typography variant='h5' sx={{ marginLeft: 2, marginBottom: 4 }}>
          Report Generation
        </Typography>
      </Grid>
      {/* <iframe id='pdfViewer'>

      </iframe> */}
       <Button sx={{mx: 2}} variant='outlined' onClick={() => handleReportRender("weekly")}>
            Generate Weekly
          </Button>

          <Button sx={{mx: 2}} variant='outlined' onClick={() => handleReportRender("monthly")}>
            Generate Monthly
          </Button>
          <Button sx={{mx: 2}} variant='outlined' onClick={() => handleReportRender("semerterly")}>
            Generate Semesterly
          </Button>
          <Button sx={{mx: 2}} variant='outlined' onClick={() => handleReportRender("yearly")}>
            Generate Annual
          </Button>
          <Button sx={{mx: 2}} variant='outlined' onClick={() => handleReportRender("general")}>
            Generate General
          </Button>
    </Grid>
  )
}

export default ReportGenerationUI
