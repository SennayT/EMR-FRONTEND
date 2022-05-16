import * as React from 'react'
import { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

import Grid from '@mui/material/Grid'
import { Card, Typography, CardContent, Select, MenuItem, SelectChangeEvent } from '@mui/material'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

import Phone from 'mdi-material-ui/Phone'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import AddressInformationForm from '../shared-components/form-components/AddressInformationForm'

import axios from 'axios'

export default function EmRegistrationForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  // const [role, setRole] = useState('')
  // const [isAdmin, setIsAdmin] = useState('')
  const [emName, setEmName] = useState('')
  const [emPhone, setEmPhone] = useState('')
  const [address, setAddress] = useState({})

  const registerEmployee = () => {
    // const healthCenter = new HealthCenter({name: name, type: type, email: email, phone: phone, address: address} );

    console.log({ name: name, phone: phone, email: email, address: address })
    const body = {
      name: name,
      email: email,
      phone: phone,
      address: address
    }

    axios.post(`https://capstone-backend-0957-11-v2.herokuapp.com/employee`, body).then(response => {
      console.log(response.data)
    })
  }

  const [value, setValue] = React.useState<Date | null>(new Date('2014-08-18T21:11:54'))

  const handleDateChange = (newValue: Date | null) => {
    setValue(newValue)
  }

  const [roleType, setPersonName] = useState<string[]>([])

  const handleRoleChange = (event: SelectChangeEvent<string[]>) => {
    setPersonName(event.target.value as string[])
  }

  const roles = ['Doctor', 'Reception', 'Nurse', 'Lab Technician', 'Radiologist']

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
                  onChange={e => {
                    setName(e.target.value)
                  }}
                  fullWidth
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
                  onChange={e => {
                    setEmail(e.target.value)
                  }}
                  type='email'
                  label='Email'
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
                  label='Phone'
                  value={phone}
                  onChange={e => {
                    setPhone(e.target.value)
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
                  <RadioGroup row aria-labelledby='demo-row-radio-buttons-group-label' name='row-radio-buttons-group'>
                    <FormControlLabel value='female' control={<Radio />} label='Female' />
                    <FormControlLabel value='male' control={<Radio />} label='Male' />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid sx={{ mb: 1, pr: 2 }} item xs={12} sm={6}></Grid>
              <Grid sx={{ mb: 1, pr: 2, mt: 1 }} item xs={12} sm={6}>
                <Select
                  label='Role'
                  value={roleType}
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
              </Grid>
              <Grid sx={{ mb: 1, pr: 2 }} item xs={12} sm={6}>
                <FormControlLabel
                  value='start'
                  control={<Switch color='primary' />}
                  label='Is Administrator'
                  labelPlacement='start'
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
              <AddressInformationForm onSubmit={registerEmployee} setAddress={setAddress} />
            </Grid>
          </CardContent>
        </form>
      </Card>
    </Grid>
  )
}
