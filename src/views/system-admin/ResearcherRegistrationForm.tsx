import * as React from 'react'
import { useState, ChangeEvent, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import { Card, Typography, CardContent } from '@mui/material'
import { TextField, CardActions, Button } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'

import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'

import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import AccountOutline from 'mdi-material-ui/AccountOutline'
import Phone from 'mdi-material-ui/Phone'
import EmailOutline from 'mdi-material-ui/EmailOutline'

import CityIcon from 'mdi-material-ui/City'
import HouseIcon from 'mdi-material-ui/Home'
import StreetIcon from 'mdi-material-ui/RoadVariant'

import SubcityIcon from 'mdi-material-ui/TownHall'

// import AddressInformationForm from '../shared-components/form-components/AddressInformationForm'

// import user from '../../data/userData'
import requests from 'src/utils/repository'

import { useSession } from 'next-auth/react'

export default function ResearcherRegistrationForm(props: any) {
  const [name, setName] = useState(props.edit ? props.researcher.name : '')
  const [email, setEmail] = useState(props.edit ? props.researcher.email : '')
  const [phone, setPhone] = useState(props.edit ? props.researcher.phone : '')
  const [gender, setGender] = useState(props.edit ? props.researcher.gender : 'female')
  const [age, setAge] = useState(props.edit ? props.researcher.age : 0)
  const [city, setCity] = useState(props.edit ? props.researcher.address.city : '')
  const [subCity, setSubCity] = useState(props.edit ? props.researcher.address.subCity : '')
  const [woreda, setWoreda] = useState(props.edit ? props.researcher.address.woreda : '')
  const [kebelle, setKebelle] = useState(props.edit ? props.researcher.address.kebelle : '')
  const [zone, setZone] = useState(props.edit ? props.researcher.address.zone : '')
  const [street, setStreet] = useState(props.edit ? props.researcher.name.street : '')
  const [houseNo, setHouseNo] = useState(props.edit ? props.researcher.name.houseNo : '')

  const [nameErrors, setNameErrors] = useState<{ name: string }>()
  const [emailErrors, setEmailErrors] = useState<{ email: string }>()
  const [phoneErrors, setPhoneErrors] = useState<{ phone: string }>()
  const [cityErrors, setCityErrors] = useState<{ city: string }>()
  const [subCityErrors, setSubCityErrors] = useState<{ subCity: string }>()
  const [woredaErrors, setWoredaErrors] = useState<{ woreda: string }>()
  const [kebelleErrors, setKebelleErrors] = useState<{ kebelle: string }>()
  const [streetErrors, setStreetErrors] = useState<{ street: string }>()
  const [houseNoErrors, setHouseNoErrors] = useState<{ houseNo: string }>()
  const [zoneErrors, setZoneErrors] = useState<{ zone: string }>()

  // const [currResearcher, setCurrResearcher] = useState(-1)

  const { data: session } = useSession()

  const disableButton =
    nameErrors?.name ||
    !name ||
    emailErrors?.email ||
    !email ||
    phoneErrors?.phone ||
    !phone ||
    cityErrors?.city ||
    !city ||
    woredaErrors?.woreda ||
    subCityErrors?.subCity ||
    !subCity ||
    kebelleErrors?.kebelle ||
    streetErrors?.street ||
    houseNoErrors?.houseNo ||
    zoneErrors?.zone
      ? true
      : false

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setNameErrors({ name: '' })
    setName(value)
    const regName = new RegExp(/^[a-zA-Z\s]{3,30}$/).test(value)

    if (value == '') {
      setNameErrors({ name: 'Name field cannot be empty' })
    } else if (value.length <= 3) {
      setNameErrors({ name: "Name can't be less than 3 characters" })
    } else if (value.length >= 30) {
      setNameErrors({ name: "Name can't be longer than 30 characters" })
    } else if (!regName) {
      setNameErrors({ name: 'Name can only include alphabets' })
    }
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setEmailErrors({ email: '' })
    setEmail(value)
    const reg = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(value)

    if (value == '') {
      setEmailErrors({ email: 'Email field cannot be empty' })
    } else if (!reg) {
      setEmailErrors({ email: 'Invalid email' })
    }
  }

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setPhoneErrors({ phone: '' })
    setPhone(value)
    const reg = new RegExp(/^\d{9,10}$/).test(value)

    if (value == '') {
      setPhoneErrors({ phone: 'Phone field cannot be empty' })
    } else if (value.length < 9) {
      setPhoneErrors({ phone: "Phone number length can't be less than 9" })
    } else if (value.length > 10) {
      setPhoneErrors({ phone: "Phone number length can't be longer than 10" })
    } else if (!reg) {
      setPhoneErrors({ phone: "Phone number can't include alphabet" })
    }
  }

  const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setCityErrors({ city: '' })
    setCity(value)
    const regName = new RegExp(/^[a-zA-Z\s]{3,20}$/).test(value)

    if (value == '') {
      setCityErrors({ city: 'City field cannot be empty' })
    } else if (value.length <= 3) {
      setCityErrors({ city: "City can't be less than 3 characters" })
    } else if (value.length >= 20) {
      setCityErrors({ city: "City can't be longer than 20 characters" })
    } else if (!regName) {
      setCityErrors({ city: 'City can only include alphabets' })
    }
  }

  const handleWoredaChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setWoredaErrors({ woreda: '' })
    setWoreda(value)

    if (value.length < 2 && value.length != 0) {
      setWoredaErrors({ woreda: "Woreda can't be less than 2 characters" })
    } else if (value.length >= 10 && value.length != 0) {
      setWoredaErrors({ woreda: "Woreda can't be longer than 10 characters" })
    }
  }

  const handleSubCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setSubCityErrors({ subCity: '' })
    setSubCity(value)
    const regName = new RegExp(/^[a-zA-Z\s]{3,30}$/).test(value)

    if (value == '') {
      setSubCityErrors({ subCity: 'Sub City field cannot be empty' })
    } else if (value.length <= 3) {
      setSubCityErrors({ subCity: "Sub City can't be less than 3 characters" })
    } else if (value.length >= 30) {
      setSubCityErrors({ subCity: "Sub City can't be longer than 10 characters" })
    } else if (!regName) {
      setSubCityErrors({ subCity: 'Sub City can only include alphabets' })
    }
  }

  const handleKebelleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setKebelleErrors({ kebelle: '' })
    setKebelle(value)

    if (value.length < 2 && value.length != 0) {
      setKebelleErrors({ kebelle: "Kebelle can't be less than 2 characters" })
    } else if (value.length >= 30 && value.length != 0) {
      setKebelleErrors({ kebelle: "Kebelle can't be longer than 30 characters" })
    }
  }

  const handleStreetChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setStreetErrors({ street: '' })
    setStreet(value)

    if (value.length <= 3 && value.length != 0) {
      setStreetErrors({ street: "Street can't be less than 3 characters" })
    } else if (value.length >= 30 && value.length != 0) {
      setStreetErrors({ street: "Street can't be longer than 30 characters" })
    }
  }

  const handleHouseNoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setHouseNoErrors({ houseNo: '' })
    setHouseNo(value)

    if (value.length < 2 && value.length != 0) {
      setHouseNoErrors({ houseNo: "HouseNo can't be less than 2 characters" })
    } else if (value.length >= 10 && value.length != 0) {
      setHouseNoErrors({ houseNo: "HouseNo can't be longer than 10 characters" })
    }
  }

  const handleZoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setZoneErrors({ zone: '' })
    setZone(value)

    if (value.length <= 3 && value.length != 0) {
      setZoneErrors({ zone: "Zone can't be less than 3 characters" })
    } else if (value.length >= 30 && value.length != 0) {
      setZoneErrors({ zone: "Zone can't be longer than 10 characters" })
    }
  }

  const registerResearcher = () => {
    //console.log({ name: name, phone: phone, email: email, age: age, gender: gender, city: city, subCity: subCity })
    const body = {
      name: name,
      email: email,
      age: age,
      phone: phone,
      gender: gender,
      address: {
        city: city,
        subCity: subCity,
        woreda: woreda,
        zone: zone,
        street: street,
        kebelle: kebelle,
        houseNo: houseNo
      },
      healthCenterId: props.edit
    }
    if (props.edit) {
      delete body.healthCenterId
    }

    // if (props.edit) {
    //   delete body.healthCenterId
    // }
    console.log('body', body)
    if (!props.edit) {
      requests
        .post(`/researcher`, body, session ? session.accessToken.toString() : '')
        .then(res => props.closeHandler(true, 'success'))
        .catch(props.closeHandler(true, 'error'))
      props.closeHandler(false)
    } else {
      requests
        .put(`/researcher/${props.researcher.id}`, body, session ? session.accessToken.toString() : '')
        .catch(props.closeHandler(true))
    }
  }

  const [value, setValue] = React.useState<Date | null>(new Date('2014-08-18T21:11:54'))

  const handleDateChange = (newValue: Date | null) => {
    setValue(newValue)

    const today = new Date()

    let val = today.getFullYear() - newValue.getFullYear()
    const m = today.getMonth() - newValue.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < newValue.getDate())) {
      val--
    }
    setAge(val)
  }

  return (
    <Grid container spacing={6}>
      <Card sx={{ width: 5 / 6, mx: 18, my: 4, backgroundColor: 'white' }}>
        <form onSubmit={e => e.preventDefault()}>
          <CardContent sx={{ px: 4 }}>
            <Grid sx={{ px: 4 }} container spacing={5}>
              <Grid item xs={12}>
                <Typography variant='body2' sx={{ fontWeight: 600, mt: 2, mb: 3 }}>
                  Personal Information
                </Typography>
              </Grid>
              <Grid sx={{ mb: 1, pr: 2 }} item xs={12} sm={6}>
                <TextField
                  size='small'
                  value={name}
                  onChange={handleNameChange}
                  error={Boolean(nameErrors?.name)}
                  fullWidth
                  helperText={nameErrors?.name}
                  required
                  label='Full Name'
                  placeholder='Rediet Demisse'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <AccountOutline />
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
                  required
                  type='email'
                  label='Email'
                  placeholder='ruthgd2000@gmail.com'
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
                  label='Phone Number'
                  value={phone}
                  onChange={handlePhoneChange}
                  error={Boolean(phoneErrors?.phone)}
                  helperText={phoneErrors?.phone}
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
              <Grid sx={{ mb: 1, pr: 2 }} item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <MobileDatePicker
                    label='Date of Birth'
                    openTo='year'
                    value={value}
                    maxDate={new Date()}
                    onChange={handleDateChange}
                    inputFormat='MM/dd/yyyy'
                    renderInput={params => <TextField size='small' fullWidth {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid sx={{ mb: 1, pr: 2 }} item xs={12} sm={6}>
                <FormControl>
                  <FormLabel id='demo-row-radio-buttons-group-label'>Gender</FormLabel>
                  <RadioGroup
                    onChange={e => {
                      setGender(e.target.value)
                    }}
                    value={gender}
                    row
                    aria-labelledby='demo-row-radio-buttons-group-label'
                    name='row-radio-buttons-group'
                  >
                    <FormControlLabel value='female' control={<Radio />} label='Female' />
                    <FormControlLabel value='male' control={<Radio />} label='Male' />
                  </RadioGroup>
                </FormControl>
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
                    required
                    onChange={handleCityChange}
                    error={Boolean(cityErrors?.city)}
                    helperText={cityErrors?.city}
                    value={city}
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
                    onChange={handleWoredaChange}
                    error={Boolean(woredaErrors?.woreda)}
                    helperText={woredaErrors?.woreda}
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
                    onChange={handleSubCityChange}
                    error={Boolean(subCityErrors?.subCity)}
                    helperText={subCityErrors?.subCity}
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
                    onChange={handleKebelleChange}
                    error={Boolean(kebelleErrors?.kebelle)}
                    helperText={kebelleErrors?.kebelle}
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
                    onChange={handleStreetChange}
                    error={Boolean(streetErrors?.street)}
                    helperText={streetErrors?.street}
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
                    onChange={handleHouseNoChange}
                    error={Boolean(houseNoErrors?.houseNo)}
                    helperText={houseNoErrors?.houseNo}
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
                    onChange={handleZoneChange}
                    error={Boolean(zoneErrors?.zone)}
                    helperText={zoneErrors?.zone}
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
              <CardActions>
                <Button
                  disabled={disableButton}
                  size='large'
                  type='submit'
                  variant='contained'
                  onClick={registerResearcher}
                >
                  Register
                </Button>
              </CardActions>
            </Grid>
          </CardContent>
        </form>
      </Card>
    </Grid>
  )
}
