import Box from '@mui/material/Box'
import { Card, Typography, CardContent, TextField } from '@mui/material'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'

import { CardActions, Button } from '@mui/material'

import Phone from 'mdi-material-ui/Phone'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import HospitalIcon from 'mdi-material-ui/HospitalBox'

import CityIcon from 'mdi-material-ui/City'
import HouseIcon from 'mdi-material-ui/Home'
import StreetIcon from 'mdi-material-ui/RoadVariant'
import SubcityIcon from 'mdi-material-ui/TownHall'
import BackIcon from '@mui/icons-material/ArrowBack'
import IconButton from '@mui/material/IconButton'
import { useRouter } from 'next/router'
import * as React from 'react'
import { ChangeEvent, useState } from 'react'

import requests from 'src/utils/repository'
import { useSession } from 'next-auth/react'

export default function UpdateHealthCenterForm(props: any) {
  const router = useRouter()
  const { data: session } = useSession()
  const healthCenter = props.healthCenter

  const [name, setName] = useState(healthCenter.name)
  const [type, setType] = useState(healthCenter.type)
  const [email, setEmail] = useState(healthCenter.email)
  const [phone, setPhone] = useState(healthCenter.phone)
  const [city, setCity] = useState(healthCenter.address.city)
  const [subCity, setSubCity] = useState(healthCenter.address.subCity)
  const [woreda, setWoreda] = useState(healthCenter.address.woreda)
  const [kebelle, setKebelle] = useState(healthCenter.address.kebelle)
  const [zone, setZone] = useState(healthCenter.address.zone)
  const [street, setStreet] = useState(healthCenter.address.street)
  const [houseNo, setHouseNo] = useState(healthCenter.address.houseNo)

  const [nameErrors, setNameErrors] = useState<{ name: string }>()
  const [emailErrors, setEmailErrors] = useState<{ email: string }>()
  const [typeErrors, setTypeErrors] = useState<{ type: string }>()
  const [phoneErrors, setPhoneErrors] = useState<{ phone: string }>()
  const [cityErrors, setCityErrors] = useState<{ city: string }>()
  const [subCityErrors, setSubCityErrors] = useState<{ subCity: string }>()
  const [woredaErrors, setWoredaErrors] = useState<{ woreda: string }>()
  const [kebelleErrors, setKebelleErrors] = useState<{ kebelle: string }>()
  const [zoneErrors, setZoneErrors] = useState<{ zone: string }>()
  const [streetErrors, setStreetErrors] = useState<{ street: string }>()
  const [houseNoErrors, setHouseNoErrors] = useState<{ houseNo: string }>()

  const disableButton =
    nameErrors?.name ||
    !name ||
    emailErrors?.email ||
    !email ||
    phoneErrors?.phone ||
    !phone ||
    typeErrors?.type ||
    !type ||
    cityErrors?.city ||
    !city ||
    woredaErrors?.woreda ||
    !woreda ||
    subCityErrors?.subCity ||
    !subCity ||
    kebelleErrors?.kebelle ||
    !kebelle ||
    streetErrors?.street ||
    !street ||
    houseNoErrors?.houseNo ||
    !houseNo ||
    zoneErrors?.zone ||
    !zone

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
    const regName = new RegExp(/^[a-zA-Z\s]{3,30}$/).test(value)

    if (value == '') {
      setCityErrors({ city: 'City field cannot be empty' })
    } else if (value.length <= 3) {
      setCityErrors({ city: "City can't be less than 3 characters" })
    } else if (value.length >= 30) {
      setCityErrors({ city: "City can't be longer than 30 characters" })
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

    if (value == '') {
      setWoredaErrors({ woreda: 'Woreda field cannot be empty' })
    } else if (value.length < 2) {
      setWoredaErrors({ woreda: "Woreda can't be less than 2 characters" })
    } else if (value.length >= 10) {
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

    if (value == '') {
      setKebelleErrors({ kebelle: 'Kebelle field cannot be empty' })
    } else if (value.length < 2) {
      setKebelleErrors({ kebelle: "Kebelle can't be less than 2 characters" })
    } else if (value.length >= 30) {
      setKebelleErrors({ kebelle: "Kebelle can't be longer than 30 characters" })
    }
  }

  const handleStreetChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setStreetErrors({ street: '' })
    setStreet(value)

    if (value == '') {
      setStreetErrors({ street: 'Street field cannot be empty' })
    } else if (value.length <= 3) {
      setStreetErrors({ street: "Street can't be less than 3 characters" })
    } else if (value.length >= 30) {
      setStreetErrors({ street: "Street can't be longer than 30 characters" })
    }
  }

  const handleHouseNoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setHouseNoErrors({ houseNo: '' })
    setHouseNo(value)

    if (value == '') {
      setHouseNoErrors({ houseNo: 'HouseNo field cannot be empty' })
    } else if (value.length < 2) {
      setHouseNoErrors({ houseNo: "HouseNo can't be less than 2 characters" })
    } else if (value.length >= 10) {
      setHouseNoErrors({ houseNo: "HouseNo can't be longer than 10 characters" })
    }
  }

  const handleZoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setZoneErrors({ zone: '' })
    setZone(value)

    if (value == '') {
      setZoneErrors({ zone: 'Zone field cannot be empty' })
    } else if (value.length <= 3) {
      setZoneErrors({ zone: "Zone can't be less than 3 characters" })
    } else if (value.length >= 30) {
      setZoneErrors({ zone: "Zone can't be longer than 10 characters" })
    }
  }

  const registerHealthCenter = () => {
    const body = {
      name,
      type,
      email,
      phone,
      address: {
        city,
        subCity,
        woreda,
        zone,
        street,
        kebelle,
        houseNo
      }
    }
    requests
      .put(`/health-center/${healthCenter.id}`, body, session ? session.accessToken.toString() : '')
      .then(res => {
        props.changeHandler(res.data)
        props.closeHandler()
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Box>
      <Grid container spacing={6} sx={{ backgroundColor: 'white', mt: 4 }}>
        <Card sx={{ width: 5 / 6, mx: 18, my: 2, backgroundColor: 'white' }}>
          <form onSubmit={e => e.preventDefault()}>
            <CardContent sx={{ px: 4 }}>
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
                    type='email'
                    label='Email'
                    required
                    placeholder='Email'
                    value={email}
                    onChange={handleEmailChange}
                    error={Boolean(emailErrors?.email)}
                    helperText={emailErrors?.email}
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
                    helperText={typeErrors?.type}
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
                <Button onClick={registerHealthCenter} size='large' type='submit' variant='contained'>
                  Submit
                </Button>
              </CardActions>
            </CardContent>
          </form>
        </Card>
      </Grid>
    </Box>
  )
}
