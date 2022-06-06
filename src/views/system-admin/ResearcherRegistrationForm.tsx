import * as React from 'react'
import { useState, ChangeEvent } from 'react'
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

import user from '../../data/userData'
import requests from 'src/utils/repository'

import { useSession } from 'next-auth/react'



export default function ResearcherRegistrationForm(props: any) {
  const [name, setName] = useState(props.researcher ? props.researcher.name : "" )
  const [email, setEmail] = useState(props.researcher ? props.researcher.email : "")
  const [phone, setPhone] = useState(props.researcher ? props.researcher.phone : "")
  const [gender, setGender] = useState(props.researcher ? props.researcher.gender : "")
  const [age, setAge] = useState(props.researcher ? props.researcher.age : 0)
  const [city, setCity] = useState(props.researcher.address ? props.researcher.address.city : "")
  const [subCity, setSubCity] = useState(props.researcher.address ? props.researcher.address.subCity : "")
  const [woreda, setWoreda] = useState(props.researcher.address ? props.researcher.address.woreda : "")
  const [kebelle, setKebelle] = useState(props.researcher.address ? props.researcher.address.kebelle : "")
  const [zone, setZone] = useState(props.researcher.address ? props.researcher.address.zone : "")
  const [street, setStreet] = useState(props.researcher.address ? props.researcher.name.street : "")
  const [houseNo, setHouseNo] = useState(props.researcher.address ? props.researcher.name.houseNo : "")


  const [nameErrors, setNameErrors] = useState<{ name: string }>()
  const [emailErrors, setEmailErrors] = useState<{ email: string }>()
  const [phoneErrors, setPhoneErrors] = useState<{ phone: string }>()

  const [currResearcher, setCurrResearcher] = useState(-1)

  const { data: session } = useSession();



  const disableButton = nameErrors?.name || emailErrors?.email || phoneErrors?.phone ? true : false

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

  const registerResearcher = () => {
    console.log({ name: name, phone: phone, email: email, age: age, gender: gender, city: city, subCity: subCity })
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
      healthCenterId: user.healthCeterId
    }
    if(!props.edit){
      requests.post(`/researcher`, body,  session ? session.accessToken.toString() : "").then(response => {
        console.log(response.data)
      })
    }else{
      requests.put(`/researcher/${props.researcher.id}`, body,  session ? session.accessToken.toString() : "").then(response => {
        console.log(response.data)
      })
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
