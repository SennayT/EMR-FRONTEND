// ** React Imports
// import { forwardRef, useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// import Radio from '@mui/material/Radio'
// import Select from '@mui/material/Select'
import Button from '@mui/material/Button'

// import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'

// import FormLabel from '@mui/material/FormLabel'
// import InputLabel from '@mui/material/InputLabel'

// import RadioGroup from '@mui/material/RadioGroup'
import CardContent from '@mui/material/CardContent'

// import FormControl from '@mui/material/FormControl'
// import OutlinedInput from '@mui/material/OutlinedInput'

// import FormControlLabel from '@mui/material/FormControlLabel'

// ** Third Party Imports
// import DatePicker from 'react-datepicker'

// ** Styled Components
// import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import InputAdornment from '@mui/material/InputAdornment'

import CityIcon from 'mdi-material-ui/City'
import HouseIcon from 'mdi-material-ui/Home'
import StreetIcon from 'mdi-material-ui/RoadVariant'

import SubcityIcon from 'mdi-material-ui/TownHall'

// const CustomInput = forwardRef((props, ref) => {
//   return <TextField inputRef={ref} label='Birth Date' fullWidth {...props} />
// })

const TabInfo = () => {
  // ** State

  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
          <Grid sx={{ px: 4, marginTop: 4.8, marginBottom: 3 }} container spacing={5}>
            <Grid item sx={{ mb: 1, pr: 2 }} xs={12} sm={6}>
              <TextField
                fullWidth
                label='City'
                placeholder='Addis Ababa'
                defaultValue='Addis Ababa'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <CityIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item sx={{ mb: 1, pr: 2 }} xs={12} sm={6}>
              <TextField
                fullWidth
                label='Woreda'
                placeholder='04'
                defaultValue='04'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <HouseIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item sx={{ mb: 1, pr: 2 }} xs={12} sm={6}>
              <TextField
                fullWidth
                label='Sub City'
                placeholder='Bole'
                defaultValue='Bole'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <SubcityIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item sx={{ mb: 1, pr: 2 }} xs={12} sm={6}>
              <TextField
                fullWidth
                label='Kebele'
                placeholder='32'
                defaultValue='32'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <CityIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item sx={{ mb: 1, pr: 2 }} xs={12} sm={6}>
              <TextField
                fullWidth
                label='Street'
                placeholder='Mauritania street'
                defaultValue='Mauritania street'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <StreetIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item sx={{ mb: 1, pr: 2 }} xs={12} sm={6}>
              <TextField
                fullWidth
                label='House Number'
                placeholder='432'
                defaultValue='432'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <HouseIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item sx={{ mb: 1, pr: 2 }} xs={12} sm={6}>
              <TextField
                fullWidth
                label='Zone'
                placeholder='32'
                defaultValue='32'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <CityIcon />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' sx={{ marginRight: 3.5 }}>
              Save Changes
            </Button>
            <Button type='reset' variant='outlined' color='secondary'>
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabInfo
