// ** React Imports
import { useState } from 'react'
import { useSession } from 'next-auth/react'

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
import requests from 'src/utils/repository'

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

  const [city, setCity] = useState(props.user.address.city)
  const [woreda, setWoreda] = useState(props.user.address.woreda)
  const [subCity, setSubCity] = useState(props.user.address.subCity)
  const [kebelle, setKebelle] = useState(props.user.address.kebelle)
  const [street, setStreet] = useState(props.user.address.street)
  const [houseNo, setHouseNo] = useState(props.user.address.houseNo)
  const [zone, setZone] = useState(props.user.address.zone)

  const { data: session } = useSession()

  const updateUser = () => {
    const data = {
      address: {
        city: props.user.address.city,
        subCity: props.user.address.subCity,
        zone: props.user.address.zone,
        woreda: props.user.address.wereda,
        kebelle: props.user.address.kebelle,
        street: props.user.address.street,
        houseNo: props.user.address.houseNo
      }
    }

    requests.put(`/user/${props.user.id}`, data, session ? session.accessToken.toString() : '').then(response => {
      console.log(response.data)
    })
  }

  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
          <Grid sx={{ px: 4, marginTop: 4.8, marginBottom: 3 }} container spacing={5}>
            <Grid item sx={{ mb: 1, pr: 2 }} xs={12} sm={6}>
              <TextField
                fullWidth
                label='City'
                value={city}
                onChange={e => {
                  setCity(e.target.value)
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
            <Grid item sx={{ mb: 1, pr: 2 }} xs={12} sm={6}>
              <TextField
                fullWidth
                label='Woreda'
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
            <Grid item sx={{ mb: 1, pr: 2 }} xs={12} sm={6}>
              <TextField
                fullWidth
                label='Sub City'
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
            <Grid item sx={{ mb: 1, pr: 2 }} xs={12} sm={6}>
              <TextField
                fullWidth
                label='Kebele'
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
            <Grid item sx={{ mb: 1, pr: 2 }} xs={12} sm={6}>
              <TextField
                fullWidth
                label='Street'
                value={street}
                onChange={e => {
                  setStreet(e.target.value)
                }}
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
            <Grid item sx={{ mb: 1, pr: 2 }} xs={12} sm={6}>
              <TextField
                fullWidth
                label='Zone'
                value={zone}
                onChange={e => {
                  setZone(e.target.value)
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
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' sx={{ marginRight: 3.5 }} onSubmit={updateUser}>
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
