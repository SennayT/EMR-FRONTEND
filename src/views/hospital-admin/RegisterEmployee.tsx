import Grid from '@mui/material/Grid'
import { Card, Typography, CardContent, Button, CardActions } from '@mui/material'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

import Phone from 'mdi-material-ui/Phone'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import CalendarMonthIcon from 'mdi-material-ui/CalendarMonth'
import AddressInformationForm from '../shared-components/AddressInformationForm'

export default function EmRegistrationForm() {
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
              <Grid sx={{ mb: 1, pr: 2 }} item xs={12} sm={6}>
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
              <Grid sx={{ mb: 1, pr: 2 }} item xs={12} sm={6}>
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
              <Grid sx={{ mb: 1, pr: 2 }} item xs={12} sm={6}>
                <TextField
                  size='small'
                  fullWidth
                  label='Role'
                  placeholder='Doctor'
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
              <AddressInformationForm />
            </Grid>
          </CardContent>
          <CardActions sx={{ mx: 70 }}>
            <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
              Register
            </Button>
          </CardActions>
        </form>
      </Card>
    </Grid>
  )
}
