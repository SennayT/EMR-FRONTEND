// ** MUI Imports
import Typography from '@mui/material/Typography'

// import { ReactChild, ReactFragment, ReactPortal } from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import CardContent from '@mui/material/CardContent'

import CityIcon from 'mdi-material-ui/City'
import HouseIcon from 'mdi-material-ui/Home'
import StreetIcon from 'mdi-material-ui/RoadVariant'

import SubcityIcon from 'mdi-material-ui/TownHall'

const AddressInformationForm = () => {
  return (
    <CardContent>
      <Grid container>
        <Grid item xs={12} sx={{ px: 2 }}>
          <Typography variant='body2' sx={{ fontWeight: 600, mb: 7, mt: 3 }}>
            Address Information
          </Typography>
        </Grid>
        <Grid item sx={{ mb: 8, pr: 2 }} xs={12} sm={6}>
          <TextField
            size='small'
            fullWidth
            label='City'
            placeholder='Addis Ababa'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <CityIcon />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid sx={{ mb: 8, px: 2 }} xs={12} sm={6}>
          <TextField
            size='small'
            fullWidth
            label='Woreda'
            placeholder='04'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <HouseIcon />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid sx={{ mb: 8, pr: 2 }} xs={12} sm={6}>
          <TextField
            size='small'
            fullWidth
            label='Sub City'
            placeholder='Bole'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SubcityIcon />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid sx={{ mb: 8, px: 2 }} xs={12} sm={6}>
          <TextField
            size='small'
            fullWidth
            label='Kebele'
            placeholder='32'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <CityIcon />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item sx={{ mb: 8, pr: 2 }} xs={12} sm={6}>
          <TextField
            size='small'
            fullWidth
            label='Street'
            placeholder='Mauritania street'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <StreetIcon />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item sx={{ mb: 8, px: 2 }} xs={12} sm={6}>
          <TextField
            size='small'
            fullWidth
            label='House Number'
            placeholder='432'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <HouseIcon />
                </InputAdornment>
              )
            }}
          />
        </Grid>
      </Grid>
    </CardContent>
  )
}

export default AddressInformationForm
