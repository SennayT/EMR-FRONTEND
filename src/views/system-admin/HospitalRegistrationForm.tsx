import { useState, ChangeEvent } from 'react'
import Grid from '@mui/material/Grid'
import { Card, Typography, CardContent, Snackbar, Alert } from '@mui/material'
import { TextField, CardActions, Button } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'

import Phone from 'mdi-material-ui/Phone'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import HospitalIcon from 'mdi-material-ui/HospitalBox'

import CityIcon from 'mdi-material-ui/City'
import HouseIcon from 'mdi-material-ui/Home'
import StreetIcon from 'mdi-material-ui/RoadVariant'

import SubcityIcon from 'mdi-material-ui/TownHall'

// import AddressInformationForm from '../shared-components/form-components/AddressInformationForm'

import requests from 'src/utils/repository'

export default function HospitalRegistrationForm(props: any) {
  const [name, setName] = useState(props.healthCenter.name ? props.healthCenter.name  : '' )
  const [type, setType] = useState(props.healthCenter.type ? props.healthCenter.type  : '')
  const [email, setEmail] = useState(props.healthCenter.phone ? props.healthCenter.phone  : '')
  const [phone, setPhone] = useState(props.healthCenter.name ? props.healthCenter.name  :  '')
  const [city, setCity] = useState(props.healthCenter.address ? props.healthCenter.address.city  : '')
  const [subCity, setSubCity] = useState(props.healthCenter.address ? props.healthCenter.address.subCity  : '')
  const [woreda, setWoreda] = useState(props.healthCenter.address ? props.healthCenter.address.woreda  : '')
  const [kebelle, setKebelle] = useState(props.healthCenter.address ? props.healthCenter.address.kebelle  : '')
  const [zone, setZone] = useState(props.healthCenter.address ? props.healthCenter.address.zone  : '')
  const [street, setStreet] = useState(props.healthCenter.address ? props.healthCenter.address.street  : '')
  const [houseNo, setHouseNo] = useState(props.healthCenter.address ? props.healthCenter.address.houseNo  : '')

  const [nameErrors, setNameErrors] = useState<{ name: string }>()
  const [emailErrors, setEmailErrors] = useState<{ email: string }>()
  const [typeErrors, setTypeErrors] = useState<{ type: string }>()
  const [phoneErrors, setPhoneErrors] = useState<{ phone: string }>()

  const [open, setOpen] = useState(false)


  const disableButton = nameErrors?.name || emailErrors?.email || typeErrors?.type || phoneErrors?.phone ? true : false
  // console.log(disableButton)

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setNameErrors({ name: '' })
    setName(value)
    const regName = new RegExp(/^[a-zA-Z\s]{3,30}$/).test(value)

    if (!regName) {
      setNameErrors({ name: 'Invalid name' })
    }

    if (value == '') {
      setNameErrors({ name: 'Name field cannot be empty' })
    }
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setEmailErrors({ email: '' })
    setEmail(value)
    const reg = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(value)

    if (!reg) {
      setEmailErrors({ email: 'Invalid email' })
    }

    if (value == '') {
      setEmailErrors({ email: 'Email field cannot be empty' })
    }
  }

  const handleTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setTypeErrors({ type: '' })
    setType(value)
    const reg = new RegExp(/^[A-Za-z]{3,10}$/).test(value)

    if (!reg) {
      setTypeErrors({ type: 'Invalid type' })
    }

    if (value == '') {
      setTypeErrors({ type: 'Type field cannot be empty' })
    }
  }

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setPhoneErrors({ phone: '' })
    setPhone(value)
    const reg = new RegExp(/^\d{9,10}$/).test(value)

    if (!reg) {
      setPhoneErrors({ phone: 'Invalid phone number' })
    }

    if (value == '') {
      setPhoneErrors({ phone: 'Phone field cannot be empty' })
    }
  }

  const registerHealthCenter = () => {
    // const healthCenter = new HealthCenter({name: name, type: type, email: email, phone: phone, address: address} );
    // console.log({ name: name, type: type, phone: phone, email: email, city: city, subCity: subCity })
    const body = {
      name: name,
      type: type,
      email: email,
      phone: phone,
      address: {
        city: city,
        subCity: subCity,
        woreda: woreda,
        zone: zone,
        street: street,
        kebelle: kebelle,
        houseNo: houseNo
      }
    }

    requests.post(`/health-center`, body).then(response => {
      console.log("sds")
      if (response.status != 33) {
        console.log("sdfj")
      } else {
        setOpen(true)
      }
    })
  }

  return (
    <Grid container spacing={6} sx={{ backgroundColor: 'white' }}>
      <Card sx={{ width: 5 / 6, mx: 18, my: 4, backgroundColor: 'white' }}>
        <form onSubmit={e => e.preventDefault()}>
          <CardContent sx={{ px: 4 }}>
          {/* <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
              <Alert severity="error" sx={{ width: '100%' }}>
                This is an error message!
              </Alert>
            </Snackbar> */}
            <Grid sx={{ px: 4 }} container spacing={5}>
              <Grid item xs={12}>
                <Typography variant='body2' sx={{ fontWeight: 600, mt: 2, mb: 3 }}>
                  Basic Information
                </Typography>
              </Grid>
              <Grid sx={{ mb: 1, pr: 2 }} item xs={12} sm={6}>
                <TextField
                  size='small'
                  value={name}
                  onChange={handleNameChange}
                  error={Boolean(nameErrors?.name)}
                  fullWidth
                  required
                  label='Health Center Name'
                  helperText={nameErrors?.name}
                  placeholder='St. Paulos Hospital'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <HospitalIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid sx={{ mb: 1, pr: 2 }} item xs={12} sm={6}>
                <TextField
                  size='small'
                  fullWidth
                  value={email}
                  onChange={handleEmailChange}
                  error={Boolean(emailErrors?.email)}
                  helperText={emailErrors?.email}
                  type='email'
                  label='Email'
                  required
                  placeholder='stpaul@gmail.com'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <EmailOutline />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid sx={{ mb: 1, pr: 2 }} item xs={12} sm={6}>
                <TextField
                  size='small'
                  fullWidth
                  required
                  label='Type'
                  value={type}
                  error={Boolean(typeErrors?.type)}
                  onChange={handleTypeChange}
                  placeholder='General Hospital'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <Phone />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid sx={{ mb: 1, pr: 2 }} item xs={12} sm={6}>
                <TextField
                  size='small'
                  fullWidth
                  required
                  label='Phone'
                  value={phone}
                  error={Boolean(phoneErrors?.phone)}
                  helperText={phoneErrors?.phone}
                  onChange={handlePhoneChange}
                  placeholder='987654321'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <Phone />
                        +251
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{ px: 2 }}>
              <Typography variant='body2' sx={{ fontWeight: 600, mb: 7, mt: 3 }}>
                Address Information
              </Typography>
            </Grid>
            <Grid sx={{ px: 4 }} container spacing={5}>
              <Grid item sx={{ mb: 1, pr: 2 }} xs={12} sm={6}>
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
              <Grid item sx={{ mb: 1, pr: 2 }} xs={12} sm={6}>
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
              <Grid item sx={{ mb: 1, pr: 2 }} xs={12} sm={6}>
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
              <Grid item sx={{ mb: 1, pr: 2 }} xs={12} sm={6}>
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
              <Grid item sx={{ mb: 1, pr: 2 }} xs={12} sm={6}>
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
              <Grid item sx={{ mb: 1, pr: 2 }} xs={12} sm={6}>
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
              <Grid item sx={{ mb: 1, pr: 2 }} xs={12} sm={6}>
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
            {/*
            <Grid item xs={12}>
              <AddressInformationForm onSubmit={registerHealthCenter} setAddress={setAddress} />
            </Grid> */}
            <CardActions>
              <Button
                disabled={disableButton ? true : false}
                size='large'
                type='submit'
                variant='contained'
                onClick={registerHealthCenter}
              >
                Register
              </Button>
            </CardActions>
          </CardContent>
        </form>
      </Card>
    </Grid>
  )
}
