import { useState } from 'react'
import Grid from '@mui/material/Grid'
import { Card, Typography, CardContent } from '@mui/material'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

import Phone from 'mdi-material-ui/Phone'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import CalendarMonthIcon from 'mdi-material-ui/CalendarMonth'
import AddressInformationForm from '../shared-components/form-components/AddressInformationForm'

import requests from 'src/utils/repository'
import { User } from 'src/data/models/UserModel'
import { Address } from 'src/data/models/AddressModel'

import { useSession } from 'next-auth/react'


export default function PatientRegistrationForm() {

  const [address, setAddress] = useState<Address>({

    city: "",
    subCity: "",
    woreda: "",
    zone: "",
    kebelle: "",
    street: "",
    houseNumber: "",
  });
  const [currentUser, setUser] = useState<User>({
    name: "name",
    age: 32,
    gender: "female",
    email: "email",
    role: "Patient",
    phone: "",
    address: address,
    isAdmin: false,
    healthCeterId: 0,

  });
  const [emergencyName, setEmergencyName] = useState("");
  const [emergencyPhone, setEmergencyPhone] = useState("");

  const { data: session } = useSession();


  const registerPatient = () => {
    // const healthCenter = new HealthCenter({name: name, type: type, email: email, phone: phone, address: address} );

    const body = {
      user: currentUser,
      emergencyContactName: emergencyName,
      emergencyContactPhone: emergencyPhone,
      registeredBy: 1
    }
    console.log(body);

    requests.post(`/patient`, body,  session ? session.accessToken.toString() : "").then(response => {
      console.log(response.data)
    })
  };

  return (
    <Grid container spacing={6}>
      <Grid sx={{ mx: 12, my: 4 }} item xs={12}>
        <Typography variant='h5'>Patient Registration</Typography>
      </Grid>
      <Card sx={{ width: 5 / 6, mx: 18, my: 4, backgroundColor: 'white' }}>
        <div>
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
                  fullWidth
                  label='Full Name'
                  placeholder='Rediet Demisse'
                  value={currentUser.name}
                  onChange={(e) => {
                    setUser({ ...currentUser, name: e.target.value });
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
                  type='email'
                  label='Email'
                  value={currentUser.email}
                  onChange={(e) => {
                    setUser({ ...currentUser, email: e.target.value });
                  }}
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
                  label='Phone Number'
                  placeholder='+251 987654321'
                  value={currentUser.phone}
                  onChange={(e) => {
                    setUser({ ...currentUser, phone: e.target.value });
                  }}
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
                  label='Age'
                  placeholder='34'
                  value={currentUser.age}
                  onChange={(e) => {
                    setUser({ ...currentUser, age: Number(e.target.value) });
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <CalendarMonthIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid sx={{ mb: 1, pr: 2 }} item xs={12} sm={6}>
                <TextField
                  size='small'
                  fullWidth
                  label='Gender'
                  placeholder='Female'
                  value={currentUser.gender}
                  onChange={(e) => {
                    setUser({ ...currentUser, gender: e.target.value });
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
                  value={emergencyName}
                  onChange={(e) => {
                    setEmergencyName(e.target.value);
                  }}
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
                  label='Phone'
                  value={emergencyPhone}
                  onChange={(e) => {
                    setEmergencyPhone(e.target.value);
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
              <AddressInformationForm onSubmit={registerPatient} setAddress={setAddress} />
            </Grid>
          </CardContent>
        </div>
      </Card>
    </Grid>
  )
}
