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

const TabInfo = (props: any) => {
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
                value={props.user.address.city}
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
                value={props.user.address.woreda}
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
                value={props.user.address.subCity}
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
                value={props.user.address.kebelle}
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
                value={props.user.address.street}
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
                value={props.user.address.houseNo}
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
                value={props.user.address.zone}
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
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabInfo
