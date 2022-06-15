import { useState, ChangeEvent, Fragment } from 'react'
import Grid from '@mui/material/Grid'
import { Card, Typography, CardContent, DialogContent, Dialog, DialogTitle, DialogActions } from '@mui/material'
import { TextField, Button, CardActions } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'

import Phone from 'mdi-material-ui/Phone'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import CalendarMonthIcon from 'mdi-material-ui/CalendarMonth'
import CityIcon from 'mdi-material-ui/City'
import HouseIcon from 'mdi-material-ui/Home'
import StreetIcon from 'mdi-material-ui/RoadVariant'
import SubcityIcon from 'mdi-material-ui/TownHall'

// import AddressInformationForm from '../shared-components/form-components/AddressInformationForm'

import requests from 'src/utils/repository'

import { useSession } from 'next-auth/react'
import { userInfo } from 'os'
import ShowRefDialog from '../shared-components/ShowRefDialog'


export default function PatientRegistrationForm() {
  const [address, setAddress] = useState({
    city: '',
    subCity: '',
    woreda: '',
    zone: '',
    kebelle: '',
    street: '',
    houseNo: ''
  })
  const [currentUser, setUser] = useState({
    name: '',
    age: 32,
    gender: 'female',
    email: '',
    phone: '',
    address: address,
    isAdmin: false,
    healthCenterId: 4
  })
  const [emergencyName, setEmergencyName] = useState('')
  const [emergencyPhone, setEmergencyPhone] = useState('')

  const [cityErrors, setCityErrors] = useState<{ city: string }>()

  const disableButton = cityErrors?.city ? true : false

  const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setCityErrors({ city: '' })
    setAddress({ ...address, city: value })
    const regName = new RegExp(/^[a-zA-Z\s]{3,30}$/).test(value)

    if (!regName) {
      setCityErrors({ city: 'Invalid City' })
    }

    if (value == '') {
      setCityErrors({ city: 'City field cannot be empty' })
    }
  }

  const { data: session } = useSession();
  const [patientRef, setPatientRef] =  useState("");
  const [open, setOpen] = useState(false)


  const registerPatient = () => {
    // const healthCenter = new HealthCenter({name: name, type: type, email: email, phone: phone, address: address} );
    let finalUser = currentUser
    finalUser.address = address
    const body = {
      user: finalUser,
      emergencyContactName: emergencyName,
      emergencyContactPhone: emergencyPhone,
      registeredBy: 1,
      role: "Patient"
    }
    console.log(body)

    requests.post(`/patient`, body,  session ? session.accessToken.toString() : "").then(response => {
      setPatientRef(response.data.refId);
      setOpen(true);
    })
  }


  // const handleClickOpen = () => setOpen(true);
  const handleClickClose = () => setOpen(false);

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
                  onChange={e => {
                    setUser({ ...currentUser, name: e.target.value })
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
                  onChange={e => {
                    setUser({ ...currentUser, email: e.target.value })
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
                  onChange={e => {
                    setUser({ ...currentUser, phone: e.target.value })
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
                  onChange={e => {
                    setUser({ ...currentUser, age: Number(e.target.value) })
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
                  onChange={e => {
                    setUser({ ...currentUser, gender: e.target.value })
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
                  onChange={e => {
                    setEmergencyName(e.target.value)
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
                  onChange={e => {
                    setEmergencyPhone(e.target.value)
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
              {/* <AddressInformationForm onSubmit={registerPatient} setAddress={setAddress} /> */}
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
                    value={address.city}
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
                    value={address.woreda}
                    onChange={e => {
                      setAddress({ ...address, woreda: e.target.value })
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
                    value={address.subCity}
                    onChange={e => {
                      setAddress({ ...address, subCity: e.target.value })
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
                    value={address.kebelle}
                    onChange={e => {
                      setAddress({ ...address, kebelle: e.target.value })
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
                    value={address.street}
                    onChange={e => {
                      setAddress({ ...address, street: e.target.value })
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
                    value={address.houseNo}
                    onChange={e => {
                      setAddress({ ...address, houseNo: e.target.value })
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
                    value={address.zone}
                    onChange={e => {
                      setAddress({ ...address, zone: e.target.value })
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
                  onClick={registerPatient}
                >
                  Register
                </Button>
              </CardActions>
            </Grid>
          </CardContent>
        </div>
      </Card>
      <Fragment>
        <Dialog open={open} maxWidth='md' onClose={handleClickClose} aria-labelledby='max-width-dialog-title'>
          <DialogTitle id='max-width-dialog-title'>Please Make sure to copy the Reference Id below </DialogTitle>
          <DialogContent>
            <ShowRefDialog refId={patientRef}/>
          </DialogContent>
          <DialogActions className='dialog-actions-dense'></DialogActions>
        </Dialog>
      </Fragment>
    </Grid>
  )
}
