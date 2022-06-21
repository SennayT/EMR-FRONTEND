import * as React from 'react'
import { useState, ChangeEvent, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import { Card, Typography, CardContent, Divider, Snackbar, Alert, Select, MenuItem } from '@mui/material'
import { TextField, CardActions, Button } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'

import FormControlLabel from '@mui/material/FormControlLabel'

// import InputLabel from '@mui/material/InputLabel'

import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'

import Phone from 'mdi-material-ui/Phone'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import HospitalIcon from 'mdi-material-ui/HospitalBox'
import { useRouter } from 'next/router'

import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import AccountOutline from 'mdi-material-ui/AccountOutline'

import CityIcon from 'mdi-material-ui/City'
import HouseIcon from 'mdi-material-ui/Home'
import StreetIcon from 'mdi-material-ui/RoadVariant'
import SubcityIcon from 'mdi-material-ui/TownHall'
import BackIcon from '@mui/icons-material/ArrowBack'
import IconButton from '@mui/material/IconButton'

// import AddressInformationForm from '../shared-components/form-components/AddressInformationForm'

import requests from 'src/utils/repository'

import { useSession } from 'next-auth/react'

export default function HospitalRegistrationForm(props: any) {
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [subCity, setSubCity] = useState('')
  const [woreda, setWoreda] = useState('')
  const [kebelle, setKebelle] = useState('')
  const [zone, setZone] = useState('')
  const [street, setStreet] = useState('')
  const [houseNo, setHouseNo] = useState('')

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

  const [empName, setEmpName] = useState('')
  const [empEmail, setEmpEmail] = useState('')
  const [empPhone, setEmpPhone] = useState('')
  const [empGender, setEmpGender] = React.useState('female')
  const [empAge, setEmpAge] = useState(24)
  const [emEmpName, setEmEmpName] = useState('')
  const [emEmpPhone, setEmEmpPhone] = useState('')
  const [empCity, setEmpCity] = useState('')
  const [empSubCity, setEmpSubCity] = useState('')
  const [empWoreda, setEmpWoreda] = useState('')
  const [empKebelle, setEmpKebelle] = useState('')
  const [empZone, setEmpZone] = useState('')
  const [empStreet, setEmpStreet] = useState('')
  const [empHouseNo, setEmpHouseNo] = useState('')

  const [empNameErrors, setEmpNameErrors] = useState<{ empName: string }>()
  const [empEmailErrors, setEmpEmailErrors] = useState<{ empEmail: string }>()
  const [empPhoneErrors, setEmpPhoneErrors] = useState<{ empPhone: string }>()
  const [empCityErrors, setEmpCityErrors] = useState<{ empCity: string }>()
  const [emEmpNameErrors, setEmEmpNameErrors] = useState<{ emEmpName: string }>()
  const [emEmpPhoneErrors, setEmEmpPhoneErrors] = useState<{ emEmpPhone: string }>()
  const [empSubCityErrors, setEmpSubCityErrors] = useState<{ empSubCity: string }>()
  const [empWoredaErrors, setEmpWoredaErrors] = useState<{ empWoreda: string }>()
  const [empKebelleErrors, setEmpKebelleErrors] = useState<{ empKebelle: string }>()
  const [empZoneErrors, setEmpZoneErrors] = useState<{ empZone: string }>()
  const [empStreetErrors, setEmpStreetErrors] = useState<{ empStreet: string }>()
  const [empHouseNoErrors, setEmpHouseNoErrors] = useState<{ empHouseNo: string }>()

  const { data: session } = useSession()
  const router = useRouter()

  const disableButton =
    nameErrors?.name ||
    !name ||
    empNameErrors?.empName ||
    !empName ||
    emEmpNameErrors?.emEmpName ||
    !emEmpName ||
    emailErrors?.email ||
    !email ||
    empEmailErrors?.empEmail ||
    !empEmail ||
    phoneErrors?.phone ||
    !phone ||
    empPhoneErrors?.empPhone ||
    !empPhone ||
    emEmpPhoneErrors?.emEmpPhone ||
    !emEmpPhone ||
    typeErrors?.type ||
    !type ||
    cityErrors?.city ||
    !city ||
    empCityErrors?.empCity ||
    !empCity ||
    woredaErrors?.woreda ||
    !woreda ||
    empWoredaErrors?.empWoreda ||
    !empWoreda ||
    subCityErrors?.subCity ||
    !subCity ||
    empSubCityErrors?.empSubCity ||
    !empSubCity ||
    kebelleErrors?.kebelle ||
    !kebelle ||
    empKebelleErrors?.empKebelle ||
    !empKebelle ||
    streetErrors?.street ||
    !street ||
    empStreetErrors?.empStreet ||
    !empStreet ||
    houseNoErrors?.houseNo ||
    !houseNo ||
    empHouseNoErrors?.empHouseNo ||
    !empHouseNo ||
    zoneErrors?.zone ||
    !zone ||
    empZoneErrors?.empZone ||
    !empZone
      ? true
      : false

  const [value, setValue] = React.useState<Date | null>(new Date('2014-08-18T21:11:54'))

  const handleDateChange = (newValue: Date | null) => {
    setValue(newValue)
    const today = new Date()
    let val = today.getFullYear() - newValue.getFullYear()
    const m = today.getMonth() - newValue.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < newValue.getDate())) {
      val--
    }
    setEmpAge(val)
  }

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

  const handleEmpNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setEmpNameErrors({ empName: '' })
    setEmpName(value)
    const regName = new RegExp(/^[a-zA-Z\s]{3,30}$/).test(value)

    if (value == '') {
      setEmpNameErrors({ empName: 'Name field cannot be empty' })
    } else if (value.length <= 3) {
      setEmpNameErrors({ empName: "Name can't be less than 3 characters" })
    } else if (value.length >= 30) {
      setEmpNameErrors({ empName: "Name can't be longer than 30 characters" })
    } else if (!regName) {
      setEmpNameErrors({ empName: 'Name can only include alphabets' })
    }
  }

  const handleEmEmpNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setEmEmpNameErrors({ emEmpName: '' })
    setEmEmpName(value)
    const regName = new RegExp(/^[a-zA-Z\s]{3,30}$/).test(value)

    if (value == '') {
      setEmEmpNameErrors({ emEmpName: 'Name field cannot be empty' })
    } else if (value.length <= 3) {
      setEmEmpNameErrors({ emEmpName: "Name can't be less than 3 characters" })
    } else if (value.length >= 30) {
      setEmEmpNameErrors({ emEmpName: "Name can't be longer than 30 characters" })
    } else if (!regName) {
      setEmEmpNameErrors({ emEmpName: 'Name can only include alphabets' })
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

  const handleEmpEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setEmpEmailErrors({ empEmail: '' })
    setEmpEmail(value)
    const reg = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(value)

    if (value == '') {
      setEmpEmailErrors({ empEmail: 'Email field cannot be empty' })
    } else if (!reg) {
      setEmpEmailErrors({ empEmail: 'Invalid email' })
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

  const handleEmpPhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setEmpPhoneErrors({ empPhone: '' })
    setEmpPhone(value)
    const reg = new RegExp(/^\d{9,10}$/).test(value)

    if (value == '') {
      setEmpPhoneErrors({ empPhone: 'Phone field cannot be empty' })
    } else if (value.length < 9) {
      setEmpPhoneErrors({ empPhone: "Phone number length can't be less than 9" })
    } else if (value.length > 10) {
      setEmpPhoneErrors({ empPhone: "Phone number length can't be longer than 10" })
    } else if (!reg) {
      setEmpPhoneErrors({ empPhone: "Phone number can't include alphabet" })
    }
  }

  const handleEmEmpPhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setEmEmpPhoneErrors({ emEmpPhone: '' })
    setEmEmpPhone(value)
    const reg = new RegExp(/^\d{9,10}$/).test(value)

    if (value == '') {
      setEmEmpPhoneErrors({ emEmpPhone: 'Phone field cannot be empty' })
    } else if (value.length < 9) {
      setEmEmpPhoneErrors({ emEmpPhone: "Phone number length can't be less than 9" })
    } else if (value.length > 10) {
      setEmEmpPhoneErrors({ emEmpPhone: "Phone number length can't be longer than 10" })
    } else if (!reg) {
      setEmEmpPhoneErrors({ emEmpPhone: "Phone number can't include alphabet" })
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

  const handleEmpCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setEmpCityErrors({ empCity: '' })
    setEmpCity(value)
    const regName = new RegExp(/^[a-zA-Z\s]{3,30}$/).test(value)

    if (value == '') {
      setEmpCityErrors({ empCity: 'City field cannot be empty' })
    } else if (value.length <= 3) {
      setEmpCityErrors({ empCity: "City can't be less than 3 characters" })
    } else if (value.length >= 30) {
      setEmpCityErrors({ empCity: "City can't be longer than 30 characters" })
    } else if (!regName) {
      setEmpCityErrors({ empCity: 'City can only include alphabets' })
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

  const handleEmpWoredaChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setEmpWoredaErrors({ empWoreda: '' })
    setEmpWoreda(value)

    if (value == '') {
      setEmpWoredaErrors({ empWoreda: 'Woreda field cannot be empty' })
    } else if (value.length < 2) {
      setEmpWoredaErrors({ empWoreda: "Woreda can't be less than 2 characters" })
    } else if (value.length >= 10) {
      setEmpWoredaErrors({ empWoreda: "Woreda can't be longer than 10 characters" })
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

  const handleEmpSubCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setEmpSubCityErrors({ empSubCity: '' })
    setEmpSubCity(value)
    const regName = new RegExp(/^[a-zA-Z\s]{3,30}$/).test(value)

    if (value == '') {
      setEmpSubCityErrors({ empSubCity: 'Sub City field cannot be empty' })
    } else if (value.length <= 3) {
      setEmpSubCityErrors({ empSubCity: "Sub City can't be less than 3 characters" })
    } else if (value.length >= 30) {
      setEmpSubCityErrors({ empSubCity: "Sub City can't be longer than 10 characters" })
    } else if (!regName) {
      setEmpSubCityErrors({ empSubCity: 'Sub City can only include alphabets' })
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

  const handleEmpKebelleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setEmpKebelleErrors({ empKebelle: '' })
    setEmpKebelle(value)

    if (value == '') {
      setEmpKebelleErrors({ empKebelle: 'Kebelle field cannot be empty' })
    } else if (value.length < 2) {
      setEmpKebelleErrors({ empKebelle: "Kebelle can't be less than 2 characters" })
    } else if (value.length >= 30) {
      setEmpKebelleErrors({ empKebelle: "Kebelle can't be longer than 30 characters" })
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

  const handleEmpStreetChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setEmpStreetErrors({ empStreet: '' })
    setEmpStreet(value)

    if (value == '') {
      setEmpStreetErrors({ empStreet: 'Street field cannot be empty' })
    } else if (value.length <= 3) {
      setEmpStreetErrors({ empStreet: "Street can't be less than 3 characters" })
    } else if (value.length >= 30) {
      setEmpStreetErrors({ empStreet: "Street can't be longer than 30 characters" })
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

  const handleEmpHouseNoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setEmpHouseNoErrors({ empHouseNo: '' })
    setEmpHouseNo(value)

    if (value == '') {
      setEmpHouseNoErrors({ empHouseNo: 'HouseNo field cannot be empty' })
    } else if (value.length < 2) {
      setEmpHouseNoErrors({ empHouseNo: "HouseNo can't be less than 2 characters" })
    } else if (value.length >= 10) {
      setEmpHouseNoErrors({ empHouseNo: "HouseNo can't be longer than 10 characters" })
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

  const handleEmpZoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setEmpZoneErrors({ empZone: '' })
    setEmpZone(value)

    if (value == '') {
      setEmpZoneErrors({ empZone: 'Zone field cannot be empty' })
    } else if (value.length <= 3) {
      setEmpZoneErrors({ empZone: "Zone can't be less than 3 characters" })
    } else if (value.length >= 30) {
      setEmpZoneErrors({ empZone: "Zone can't be longer than 10 characters" })
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
      },
      admin: {
        name: empName,
        email: empEmail,
        phone: empPhone,
        gender: empGender,
        age: empAge,
        address: {
          city: empCity,
          subCity: empSubCity,
          woreda: empWoreda,
          zone: empZone,
          street: empStreet,
          kebelle: empKebelle,
          houseNo: empHouseNo
        }
      }
    }
    if (!props.edit) {
      requests.post(`/health-center`, body, session ? session.accessToken.toString() : '').then(_ => {
        router.back()
      })

      //.then(res => props.closeHandler(true, 'success'))
      //  .catch(props.closeHandler(true, 'error'))
      //props.closeHandler(false)
    } else {
      requests.put(`/health-center/${props.healthCenter.id}`, body, session ? session.accessToken.toString() : '')

      // .catch(props.closeHandler(true))
    }
  }

  return (
    <Card>
      <IconButton aria-label='back' onClick={() => router.back()}>
        <BackIcon />
      </IconButton>
      <Grid container spacing={6} sx={{ backgroundColor: 'white', mt: 4 }}>
        {/* <Snackbar open={errOpen} autoHideDuration={600} onClose={() => setOpen(false)}>
          <Alert onClose={handleClose} severity={severity == 'success' ? 'success' : 'error'} sx={{ width: '100%' }}>
            This is an error message!
          </Alert>
        </Snackbar> */}
        <Card sx={{ width: 5 / 6, mx: 18, my: 4, backgroundColor: 'white' }}>
          <Typography variant='h5' sx={{ fontWeight: 600, mt: 8 }}>
            Health Center Registration
          </Typography>
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
              <Divider sx={{ mt: 12, mb: 12 }} />
              {/*
            <Grid item xs={12}>
              <AddressInformationForm onSubmit={registerHealthCenter} setAddress={setAddress} />
            </Grid> */}
              <Typography variant='h5' sx={{ fontWeight: 600, mt: 8 }}>
                Health Center's Admin Registration
              </Typography>
              <Card sx={{ my: 4, backgroundColor: 'white' }}>
                <form onSubmit={e => e.preventDefault()}>
                  <CardContent sx={{ px: 0 }}>
                    <Grid sx={{ px: 4 }} container spacing={5}>
                      <Grid item xs={12}>
                        <Typography variant='body2' sx={{ fontWeight: 600, mt: 2, mb: 3 }}>
                          Personal Information
                        </Typography>
                      </Grid>
                      <Grid sx={{ mb: 1, pr: 2 }} item xs={12} sm={6}>
                        <TextField
                          size='small'
                          value={empName}
                          onChange={handleEmpNameChange}
                          error={Boolean(empNameErrors?.empName)}
                          fullWidth
                          helperText={empNameErrors?.empName}
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
                          value={empEmail}
                          onChange={handleEmpEmailChange}
                          error={Boolean(empEmailErrors?.empEmail)}
                          helperText={empEmailErrors?.empEmail}
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
                          value={empPhone}
                          onChange={handleEmpPhoneChange}
                          error={Boolean(empPhoneErrors?.empPhone)}
                          helperText={empPhoneErrors?.empPhone}
                          placeholder='+251 987654321'
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
                            inputFormat='MM/dd/yyyy'
                            value={value}
                            onChange={handleDateChange}
                            renderInput={params => <TextField size='small' fullWidth {...params} />}
                          />
                        </LocalizationProvider>
                      </Grid>
                      <Grid sx={{ mb: 1, pr: 2 }} item xs={12} sm={6}>
                        <FormControl>
                          <FormLabel id='demo-row-radio-buttons-group-label'>Gender</FormLabel>
                          <RadioGroup
                            row
                            aria-labelledby='demo-row-radio-buttons-group-label'
                            name='row-radio-buttons-group'
                            value={empGender}
                            onChange={e => {
                              setEmpGender(e.target.value)
                            }}
                          >
                            <FormControlLabel value='female' control={<Radio />} label='Female' />
                            <FormControlLabel value='male' control={<Radio />} label='Male' />
                          </RadioGroup>
                        </FormControl>
                      </Grid>
                      <Grid sx={{ mb: 1, pr: 2 }} item xs={12} sm={6}></Grid>

                      <Grid item xs={12}>
                        <Typography variant='body2' sx={{ fontWeight: 600, my: 3 }}>
                          Emergency Contacts
                        </Typography>
                      </Grid>
                      <Grid sx={{ mb: 1, pr: 2 }} item xs={12} sm={6}>
                        <TextField
                          size='small'
                          fullWidth
                          label='Full Name'
                          value={emEmpName}
                          placeholder='Rediet Demisse'
                          onChange={handleEmEmpNameChange}
                          error={Boolean(emEmpNameErrors?.emEmpName)}
                          helperText={emEmpNameErrors?.emEmpName}
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
                          label='Phone'
                          value={emEmpPhone}
                          onChange={handleEmEmpPhoneChange}
                          error={Boolean(emEmpPhoneErrors?.emEmpPhone)}
                          helperText={emEmpPhoneErrors?.emEmpPhone}
                          placeholder='+251 987654321'
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position='start'>
                                <Phone />
                              </InputAdornment>
                            )
                          }}
                        />
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
                            onChange={handleEmpCityChange}
                            error={Boolean(empCityErrors?.empCity)}
                            helperText={empCityErrors?.empCity}
                            value={empCity}
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
                            value={empWoreda}
                            onChange={handleEmpWoredaChange}
                            error={Boolean(empWoredaErrors?.empWoreda)}
                            helperText={empWoredaErrors?.empWoreda}
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
                            value={empSubCity}
                            onChange={handleEmpSubCityChange}
                            error={Boolean(empSubCityErrors?.empSubCity)}
                            helperText={empSubCityErrors?.empSubCity}
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
                            value={empKebelle}
                            onChange={handleEmpKebelleChange}
                            error={Boolean(empKebelleErrors?.empKebelle)}
                            helperText={empKebelleErrors?.empKebelle}
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
                            value={empStreet}
                            onChange={handleEmpStreetChange}
                            error={Boolean(empStreetErrors?.empStreet)}
                            helperText={empStreetErrors?.empStreet}
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
                            value={empHouseNo}
                            onChange={handleEmpHouseNoChange}
                            error={Boolean(empHouseNoErrors?.empHouseNo)}
                            helperText={empHouseNoErrors?.empHouseNo}
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
                            value={empZone}
                            onChange={handleEmpZoneChange}
                            error={Boolean(empZoneErrors?.empZone)}
                            helperText={empZoneErrors?.empZone}
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
                    </Grid>
                  </CardContent>
                </form>
              </Card>
              <CardActions>
                <Button
                  disabled={disableButton ? true : false}
                  size='large'
                  type='submit'
                  variant='contained'
                  onClick={registerHealthCenter}
                >
                  submit
                </Button>
              </CardActions>
            </CardContent>
          </form>
        </Card>
      </Grid>
    </Card>
  )
}
