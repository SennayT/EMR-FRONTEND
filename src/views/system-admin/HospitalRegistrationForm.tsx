import Grid from '@mui/material/Grid'
import { Card, Typography, CardContent, Button, CardActions } from '@mui/material'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

import Phone from 'mdi-material-ui/Phone'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import HospitalIcon from 'mdi-material-ui/HospitalBox'
import AddressInformationForm from '../shared-components/form-components/AddressInformationForm'

export default function HospitalRegistrationForm() {
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
