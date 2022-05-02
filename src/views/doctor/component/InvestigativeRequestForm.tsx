import {useState} from 'react'
import Grid from '@mui/material/Grid'
import { Card, Typography, CardContent, Button, CardActions, Divider, Select, MenuItem , SelectChangeEvent, FormControlLabel, Checkbox } from '@mui/material'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

import Phone from 'mdi-material-ui/Phone'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import CalendarMonthIcon from 'mdi-material-ui/CalendarMonth'
import CityIcon from 'mdi-material-ui/City'
import HouseIcon from 'mdi-material-ui/Home'
import StreetIcon from 'mdi-material-ui/RoadVariant'

// import LocationCityIcon from 'mdi-material-ui/LocationCity'

// import LocationCityIcon from '@mui/icons-material/LocationCity'

export default function InvestigativeRequestForm() {

  const [personName, setPersonName] = useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    setPersonName(event.target.value as string[])
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

const tests = [
  'blood test',
  'urine test',
  'blood test',
  'urine test',
  'blood test',
  'urine test',
  'blood test',
  'urine test',
  'blood test',
  'urine test',
]

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

  return (
    <Grid container spacing={6}>
      <Grid sx={{ mx: 12, my: 4 }} item xs={12}>
        <Typography variant='h5'>Issue Investigation</Typography>
      </Grid>
      <Card sx={{ width: 5 / 6, mx: 18, my: 4, backgroundColor: 'white' }}>
        <form onSubmit={e => e.preventDefault()}>
          <CardContent sx={{ px: 4 }}>
            <Grid sx={{ px: 4 }} container spacing={5}>

              <Grid item xs={12} sm={6}>
              <Select

            label='Vitals'
            value={personName}
            MenuProps={MenuProps}
            onChange={handleChange}
            fullWidth
            size='small'
          >
            {names.map(name => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size='small'
                  fullWidth
                  label='Date of Birth'
                  placeholder='01/01/2000'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <CalendarMonthIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                  rows={5}
                  multiline
                  fullWidth
                  label='Comment'
                  defaultValue='no comment'
                  id='textarea-outlined-static'
                />
              </Grid>



              <Grid item xs={12}>
                {/* <Divider sx={{ marginBottom: 0 }} /> */}
              </Grid>


                  <Grid item xs={6} >
                  <Typography variant='body2' sx={{ fontWeight: 600, mb: 3 }}>
                  Lab tests
                </Typography>
                    {tests.map( function(test) {
                      return(
                        <FormControlLabel sx={{marginRight: 3, marginBottom: 3}} label={test} control={<Checkbox defaultChecked name='basic-checked' />} />
                      );
                    }
                    )
                    }

                  </Grid>
                  <Divider />
                  <Grid item xs={6} >
                  <Typography variant='body2' sx={{ fontWeight: 600, mb: 3 }}>
                  Radiology tests
                </Typography>
                    {tests.map( function(test) {
                      return(
                        <FormControlLabel sx={{marginRight: 3, marginBottom: 3}} label={test} control={<Checkbox defaultChecked name='basic-checked' />} />
                      );
                    }
                    )
                    }

                  </Grid>

            </Grid>
          </CardContent>
          {/* <Divider sx={{ margin: 0 }} /> */}
          <CardActions sx={{ mx: 80 }}>
            <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
              Register
            </Button>
            {/* <Button size='large' color='secondary' variant='outlined'>
            Cancel
          </Button> */}
          </CardActions>
        </form>
      </Card>
    </Grid>
  )
}

