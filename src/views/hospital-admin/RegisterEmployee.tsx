import * as React from 'react'
import { useState, ChangeEvent } from 'react'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import InputLabel from '@mui/material/InputLabel'

import Grid from '@mui/material/Grid'
import { Card, Typography, CardContent, Select, MenuItem, SelectChangeEvent } from '@mui/material'
import { TextField, Button, CardActions } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'

import Phone from 'mdi-material-ui/Phone'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import CityIcon from 'mdi-material-ui/City'
import HouseIcon from 'mdi-material-ui/Home'
import StreetIcon from 'mdi-material-ui/RoadVariant'
import SubcityIcon from 'mdi-material-ui/TownHall'

// import AddressInformationForm from '../shared-components/form-components/AddressInformationForm'

import axios from 'axios'

import user from '../../data/userData'

export default function EmRegistrationForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [role, setRole] = useState<string[]>(['Receptionist'])
  const [gender, setGender] = React.useState('female')
  const [age, setAge] = useState(23)
  const [isAdmin, setIsAdmin] = useState(false)
  const [emName, setEmName] = useState('')
  const [emPhone, setEmPhone] = useState('')
  const [city, setCity] = useState('')
  const [subCity, setSubCity] = useState('')
  const [woreda, setWoreda] = useState('')
  const [kebelle, setKebelle] = useState('')
  const [zone, setZone] = useState('')
  const [street, setStreet] = useState('')
  const [houseNo, setHouseNo] = useState('')

  const [nameErrors, setNameErrors] = useState<{ name: string }>()
  const [emailErrors, setEmailErrors] = useState<{ email: string }>()
  const [phoneErrors, setPhoneErrors] = useState<{ phone: string }>()
  const [cityErrors, setCityErrors] = useState<{ city: string }>()

  const disableButton = nameErrors?.name || emailErrors?.email || phoneErrors?.phone || cityErrors?.city ? true : false

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
  const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setCityErrors({ city: '' })
    setCity(value)
    const regName = new RegExp(/^[a-zA-Z\s]{3,30}$/).test(value)

    if (!regName) {
      setCityErrors({ city: 'Invalid City' })
    }

    if (value == '') {
      setCityErrors({ city: 'City field cannot be empty' })
    }
  }

  const registerEmployee = () => {
    // const healthCenter = new HealthCenter({name: name, type: type, email: email, phone: phone, address: address} );

    console.log({
      name: name,
      phone: phone,
      email: email,
      age: age,
      address: {
        city: city,
        subCity: subCity,
        woreda: woreda,
        zone: zone,
        street: street,
        kebelle: kebelle,
        houseNo: houseNo
      },
      isAdmin: isAdmin,
      healthCenterId: user.healthCeterId,
      role: role,
      gender: gender
    })
    const body = {
      name: name,
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
      gender: gender,
      age: age,
      role: role,
      isAdmin: isAdmin,
      healthCenterId: user.healthCeterId
    }

    axios.post(`https://capstone-backend-0957-11-v2.herokuapp.com/employee`, body).then(response => {
      console.log(response.data)
    })
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

  const switchHandler = (event: any) => {
    setIsAdmin(event.target.checked)
  }

  const handleRoleChange = (event: SelectChangeEvent<string[]>) => {
    setRole(event.target.value as string[])
  }

  const roles = ['Doctor', 'Receptionist', 'Nurse', 'Lab Technician', 'Radiologist']

  const ITEM_HEIGHT = 48
  const ITEM_PADDING_TOP = 8
  const MenuProps = {
    PaperProps: {
      style: {
        width: 250,
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
      }
    }
  }

  return (
    <Grid container spacing={6}>
      <Typography variant='h5' sx={{ fontWeight: 600, mt: 2 }}>
        Employee Registration
      </Typography>
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
                    value={gender}
                    onChange={e => {
                      setGender(e.target.value)
                    }}
                  >
                    <FormControlLabel value='female' control={<Radio />} label='Female' />
                    <FormControlLabel value='male' control={<Radio />} label='Male' />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid sx={{ mb: 1, pr: 2 }} item xs={12} sm={6}></Grid>
              <Grid sx={{ mb: 1, pr: 2, mt: 1 }} item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-label'>Role</InputLabel>
                  <Select
                    label='Role'
                    value={role}
                    MenuProps={MenuProps}
                    onChange={handleRoleChange}
                    placeholder='Doctor'
                    fullWidth
                    size='small'
                  >
                    {roles.map(role => (
                      <MenuItem key={role} value={role}>
                        {role}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid sx={{ mb: 1, pr: 2 }} item xs={12} sm={6}>
                <FormControlLabel
                  checked={isAdmin}
                  control={<Switch color='primary' />}
                  label='Is Administrator'
                  labelPlacement='start'
                  onChange={switchHandler}
                />
              </Grid>
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
                  value={emName}
                  placeholder='Rediet Demisse'
                  onChange={e => {
                    setEmName(e.target.value)
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
                  value={emPhone}
                  onChange={e => {
                    setEmPhone(e.target.value)
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
              <CardActions>
                <Button
                  disabled={disableButton}
                  size='large'
                  type='submit'
                  variant='contained'
                  onClick={registerEmployee}
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
