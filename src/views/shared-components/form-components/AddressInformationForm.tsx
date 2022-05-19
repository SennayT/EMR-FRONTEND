// ** MUI Imports
import Typography from '@mui/material/Typography'

// import { ReactChild, ReactFragment, ReactPortal } from 'react'
import Grid from '@mui/material/Grid'
import { TextField, CardActions, Button } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import CardContent from '@mui/material/CardContent'

import CityIcon from 'mdi-material-ui/City'
import HouseIcon from 'mdi-material-ui/Home'
import StreetIcon from 'mdi-material-ui/RoadVariant'

import SubcityIcon from 'mdi-material-ui/TownHall'
import { useState } from 'react'

const AddressInformationForm = (props: any) => {
  const submitForm = (event: any) => {
    props.setAddress({
      city: city,
      subCity: subCity,
      woreda: woreda,
      zone: zone,
      street: street,
      kebelle: kebelle,
      houseNo: houseNo
    })
    console.log({
      city: city,
      subCity: subCity,
      woreda: woreda,
      zone: zone,
      street: street,
      kebelle: kebelle,
      houseNo: houseNo
    })
    props.onSubmit()
  }
  const [city, setCity] = useState('')
  const [subCity, setSubCity] = useState('')
  const [woreda, setWoreda] = useState('')
  const [kebelle, setKebelle] = useState('')
  const [zone, setZone] = useState('')
  const [street, setStreet] = useState('')
  const [houseNo, setHouseNo] = useState('')

  return (
    <CardContent>
      <form>
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
              value={city}
              onChange={e => {
                setCity(e.target.value)
              }}
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
          <Grid item sx={{ mb: 8, px: 2 }} xs={12} sm={6}>
            <TextField
              size='small'
              fullWidth
              label='Woreda'
              placeholder='04'
              value={woreda}
              onChange={e => {
                setWoreda(e.target.value)
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <HouseIcon />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item sx={{ mb: 8, pr: 2 }} xs={12} sm={6}>
            <TextField
              size='small'
              fullWidth
              label='Sub City'
              placeholder='Bole'
              value={subCity}
              onChange={e => {
                setSubCity(e.target.value)
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SubcityIcon />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item sx={{ mb: 8, px: 2 }} xs={12} sm={6}>
            <TextField
              size='small'
              fullWidth
              label='Kebele'
              placeholder='32'
              value={kebelle}
              onChange={e => {
                setKebelle(e.target.value)
              }}
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
              value={street}
              onChange={e => {
                setStreet(e.target.value)
              }}
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
              value={houseNo}
              onChange={e => {
                setHouseNo(e.target.value)
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <HouseIcon />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item sx={{ mb: 8, pr: 2 }} xs={12} sm={6}>
            <TextField
              size='small'
              fullWidth
              value={zone}
              onChange={e => {
                setZone(e.target.value)
              }}
              label='Zone'
              placeholder='zone'
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
      </form>
      <CardActions sx={{ mx: 70 }}>
        <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained' onClick={submitForm}>
          Register
        </Button>
      </CardActions>
    </CardContent>
  )
}

export default AddressInformationForm
