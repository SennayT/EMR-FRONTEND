import { useState, Fragment } from 'react'
import { Grid, TextField, Button , Select, FormControl, InputLabel, MenuItem, OutlinedInput, SelectChangeEvent, Chip } from '@mui/material'

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import Box from '@mui/material/Box';
import { DatePicker } from '@mui/x-date-pickers';


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
  const [typeOfReport, setTypeOfReport] = useState("");
  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


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
    'Kelly Snyder',
  ];
  const types = [
    'General',
    'Fairly Detailed',
    'Specific'
  ];
  const [value, setValue] = useState<Date | null>(new Date());

  return <Grid container xs={12}>
    <Grid item xs={4}>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Included Info</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Included Info" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={4}>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Type of Report</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"

          value={typeOfReport}
          onChange={e => {
            setTypeOfReport(e.target.value)
          }}
          input={<OutlinedInput id="select-multiple-chip" label="Included Info" />}
          MenuProps={MenuProps}
        >
          {types.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={4}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          disableFuture
          label="Choose Month"
          openTo="year"
          views={['year', 'month']}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Grid>
          <Button variant='outlined'>some</Button>
  </Grid>
}

export default ReportGenerationUI
