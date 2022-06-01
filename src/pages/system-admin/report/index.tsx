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

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value }
    } = event
    setPersonName(typeof value === 'string' ? value.split(',') : value)
  }
  console.log({ typeOfReport: typeOfReport, startDate: startDate, endDate: endDate })
  const body = {
    information: "DIAGNOSIS",
    startDate: "2020-06-01T09:02:11.022Z",
    endDate: "2022-06-01T09:02:11.022Z"
  }
  requests.post(`/generate-report` , body).then(response => {
//     return <PDFViewer
//     document={response.data}
// />
  })

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
      <Grid item xs={8}>
        <Typography variant='h5' sx={{ marginLeft: 2, marginBottom: 4 }}>
          Report Generation
        </Typography>
      </Grid>
      <Grid
        container
        xs={12}
        minHeight={400}
        sx={{ backgroundColor: 'white', my: 2, mx: 2, pb: 16, pt: 10, px: 8 }}
        spacing={1}
      >
        <Grid item xs={12} md={6} lg={6}>
          <FormControl sx={{ m: 1, width: 300 }}>
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
        <Grid item xs={12} md={6} lg={6}>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id='demo-multiple-chip-label'>Report Type</InputLabel>
            <Select
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
        <Grid item xs={12} md={6} lg={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
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
        <Grid item xs={12} md={6} lg={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
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
        <Grid item xs={12} md={12} lg={12}>
          <Button variant='outlined' onSubmit={ReportGenerationUI}>
            Generate Report
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ReportGenerationUI
