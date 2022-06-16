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

  const [empName, setEmpName] = useState('')
  const [empEmail, setEmpEmail] = useState('')
  const [empPhone, setEmpPhone] = useState('')
  const [empGender, setEmpGender] = React.useState('')
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

  const { data: session } = useSession()
  const router = useRouter()

  const disableButton = nameErrors?.name || emailErrors?.email || typeErrors?.type || phoneErrors?.phone ? true : false

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
                          onChange={e => {
                            setEmEmpName(e.target.value)
                          }}
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
                          onChange={e => {
                            setEmEmpPhone(e.target.value)
                          }}
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
                            onChange={e => {
                              setEmpWoreda(e.target.value)
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
                            value={empSubCity}
                            onChange={e => {
                              setEmpSubCity(e.target.value)
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
                            value={empKebelle}
                            onChange={e => {
                              setEmpKebelle(e.target.value)
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
                            value={empStreet}
                            onChange={e => {
                              setEmpStreet(e.target.value)
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
                            value={empHouseNo}
                            onChange={e => {
                              setEmpHouseNo(e.target.value)
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
                            value={empZone}
                            onChange={e => {
                              setEmpZone(e.target.value)
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
