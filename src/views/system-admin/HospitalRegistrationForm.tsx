import Grid from '@mui/material/Grid'
import { Card, Typography, CardContent, Button, CardActions } from '@mui/material'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

import Phone from 'mdi-material-ui/Phone'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import CalendarMonthIcon from 'mdi-material-ui/CalendarMonth'
import CityIcon from 'mdi-material-ui/City'
import HouseIcon from 'mdi-material-ui/Home'
import StreetIcon from 'mdi-material-ui/RoadVariant'

import SubcityIcon from 'mdi-material-ui/TownHall'

// import LocationCityIcon from 'mdi-material-ui/LocationCity'

// import LocationCityIcon from '@mui/icons-material/LocationCity'

export default function HospitalRegistrationForm() {
  return (
    <Grid container spacing={6}>
      <Grid sx={{ mx: 12, my: 4 }} item xs={12}>
        <Typography variant='h5'>Hospital Registration</Typography>
      </Grid>
      <Card sx={{ width: 5 / 6, mx: 18, my: 4, backgroundColor: 'white' }}>
        <form onSubmit={e => e.preventDefault()}>
          <CardContent sx={{ px: 4 }}>
            <Grid sx={{ px: 4 }} container spacing={5}>
              <Grid item xs={12}>
                <Typography variant='body2' sx={{ fontWeight: 600, mt: 2, mb: 3 }}>
                  Personal Information
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size='small'
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
              <Grid item xs={12} sm={6}>
                <TextField
                  size='small'
                  fullWidth
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
              <Grid item xs={12} sm={6}>
                <TextField
                  size='small'
                  fullWidth
                  label='Phone Number'
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
              <Grid item xs={12} sm={6}>
                <TextField
                  size='small'
                  fullWidth
                  label='Date of Birth'
                  placeholder='01/01/2000'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <CalendarMonthIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size='small'
                  fullWidth
                  label='Gender'
                  placeholder='Female'
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
                {/* <Divider sx={{ marginBottom: 0 }} /> */}
              </Grid>
              <Grid item xs={12}>
                <Typography variant='body2' sx={{ fontWeight: 600, mb: 3 }}>
                  Emergency Contacts
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size='small'
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
              <Grid item xs={12} sm={6}>
                <TextField
                  size='small'
                  fullWidth
                  label='Phone'
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
              <Grid item xs={12}></Grid>
              <Grid item xs={12}>
                <Typography variant='body2' sx={{ fontWeight: 600, mb: 3 }}>
                  Address Information
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size='small'
                  fullWidth
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
              <Grid item xs={12} sm={6}>
                <TextField
                  size='small'
                  fullWidth
                  label='Woreda'
                  placeholder='04'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <HouseIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size='small'
                  fullWidth
                  label='Sub City'
                  placeholder='Bole'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <SubcityIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size='small'
                  fullWidth
                  label='Kebele'
                  placeholder='32'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <CityIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item sx={{ mb: 8 }} xs={12} sm={6}>
                <TextField
                  size='small'
                  fullWidth
                  label='Street'
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
              <Grid item sx={{ mb: 8 }} xs={12} sm={6}>
                <TextField
                  size='small'
                  fullWidth
                  label='House Number'
                  placeholder='432'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <HouseIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
          {/* <Divider sx={{ margin: 0 }} /> */}
          <CardActions sx={{ mx: 80 }}>
            <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
              Register
            </Button>
            {/* <Button size='large' color='secondary' variant='outlined'>
            Cancel
          </Button> */}
          </CardActions>
        </form>
      </Card>
    </Grid>
  )
}
