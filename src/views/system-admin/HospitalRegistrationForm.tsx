import { useState } from 'react'
import Grid from '@mui/material/Grid'
import { Card, Typography, CardContent } from '@mui/material'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

import Phone from 'mdi-material-ui/Phone'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import HospitalIcon from 'mdi-material-ui/HospitalBox'
import AddressInformationForm from '../shared-components/form-components/AddressInformationForm'


import axios from 'axios'

export default function HospitalRegistrationForm() {

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const registerHealthCenter = () => {
    // const healthCenter = new HealthCenter({name: name, type: type, email: email, phone: phone, address: address} );

    console.log({ name: name, type: type, phone: phone, email: email, address: address });
    const body = {
      name: name, type: type, email: email,  phone: phone, address: address
    }

    axios.post(`https://capstone-backend-0957-11-v2.herokuapp.com/health-center`, body).then(response => {
      console.log(response.data)
    })
  };


  return (
    <Grid container spacing={6} sx={{ backgroundColor: 'white' }}>
      <Card sx={{ width: 5 / 6, mx: 18, my: 4, backgroundColor: 'white' }}>
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
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  fullWidth
                  label='Health Center Name'
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
                  onChange={(e) => {
                    setEmail(e.target.value);
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
                  label='Type'
                  value={type}
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
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
                  label='Phone'
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
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
            </Grid>


            <Grid item xs={12}>
              <AddressInformationForm onSubmit={registerHealthCenter} setAddress={setAddress} />
            </Grid>
          </CardContent>
        </form>
      </Card>
    </Grid>
  )


}
