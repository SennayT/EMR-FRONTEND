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
  const handleReportRender = () => {
    console.log('pdfdata')

    console.log({ typeOfReport: typeOfReport, startDate: startDate, endDate: endDate })
    const body = {
      information: ['DIAGNOSIS'],
      start: '2020-06-01T09:02:11.022Z',
      end: '2022-06-01T09:02:11.022Z'
    }
    requests.post(`/system-admin/report`, body, session ? session.accessToken.toString() : '').then(pdfdata => {
      console.log(typeof pdfdata.data)

      // var len = pdfdata.length;
      // var bytes = new Uint8Array(len);
      // for (var i = 0; i < len; i++) {
      //   bytes[i] = pdfdata.charCodeAt(i);
      //   console.log()
      // // }
      // console.log(bytes.buffer);

      // const renderPdf = bytes.buffer

      var buf = new ArrayBuffer(pdfdata.data.length * 2) // 2 bytes for each char
      var bufView = new Uint16Array(buf)
      for (var i = 0, strLen = pdfdata.data.length; i < strLen; i++) {
        bufView[i] = pdfdata.data.charCodeAt(i)
      }

      console.log('here')

      const url = window.URL.createObjectURL(new Blob([buf]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('view', 'report.pdf')
      document.body.appendChild(link)
      link.click()
    })
  }

  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder'
  ]

  return (
    <Grid>
      <Grid item xs={12}>
        <Typography variant='h5' sx={{ marginLeft: 2, marginBottom: 4 }}>
          Report Generation
        </Typography>
      </Grid>
      {/* <iframe id='pdfViewer'>

      </iframe> */}
      <Grid
        container
        xs={12}
        minHeight={400}
        sx={{ backgroundColor: 'white', my: 2, mx: 2, pb: 16, pt: 10, px: 8 }}
        spacing={1}
      >
        <Grid item xs={12} md={5} lg={5} sx={{ mr: 16 }}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel id='demo-multiple-chip-label'>Included Info</InputLabel>
            <Select
              labelId='demo-multiple-chip-label'
              id='demo-multiple-chip'
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput id='select-multiple-chip' label='Included Info' />}
              renderValue={selected => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map(name => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel id='demo-multiple-chip-label'>Report Type</InputLabel>
            <Select
              fullWidth
              labelId='demo-multiple-chip-label'
              id='demo-multiple-chip'
              value={typeOfReport}
              onChange={e => {
                setTypeOfReport(e.target.value)
              }}
              input={<OutlinedInput id='select-multiple-chip' label='Included Info' />}
              MenuProps={MenuProps}
            >
              {types.map(name => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid sx={{ my: 2 }} item xs={12} md={6} lg={6}>
          <LocalizationProvider sx={{ m: 1, width: 300 }} dateAdapter={AdapterDateFns}>
            <DatePicker
              disableFuture
              label='Start Date'
              openTo='year'
              views={['year', 'month']}
              value={startDate}
              onChange={newValue => {
                setStartDate(newValue)
              }}
              renderInput={params => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid sx={{ my: 2 }} item xs={12} md={6} lg={6}>
          <LocalizationProvider sx={{ m: 1, width: 300 }} dateAdapter={AdapterDateFns}>
            <DatePicker
              disableFuture
              label='End Date'
              openTo='year'
              minDate={startDate}
              views={['year', 'month']}
              value={endDate}
              onChange={newValue => {
                setEndDate(newValue)
              }}
              renderInput={params => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid sx={{ my: 2 }} item xs={12} md={12} lg={12}>
          <Button variant='outlined' onClick={handleReportRender}>
            Generate Report
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ReportGenerationUI
