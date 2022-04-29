import Grid from '@mui/material/Grid'
import { Card, Typography, CardContent, Button, CardActions } from '@mui/material'
import TextField from '@mui/material/TextField'

export default function PatientRegistrationForm() {
  return (
    <Grid container spacing={6}>
      <Grid sx={{ mx: 12, my: 4 }} item xs={12}>
        <Typography variant='h5'>Patient Registration</Typography>
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
                <TextField size='small' fullWidth label='Full Name' placeholder='carterLeonard' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField size='small' fullWidth type='email' label='Email' placeholder='carterleonard@gmail.com' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField size='small' fullWidth label='Phone Number' placeholder='+251 987654321' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField size='small' fullWidth label='Date of Birth' placeholder='01/01/2000' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField size='small' fullWidth label='Gender' placeholder='Female' />
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
                <TextField size='small' fullWidth label='Full Name' placeholder='Leonard' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField size='small' type='email' fullWidth label='Phone' placeholder='+251 987654321' />
              </Grid>
              <Grid item xs={12}>
                {/* <Divider sx={{ marginBottom: 0 }} /> */}
              </Grid>
              <Grid item xs={12}>
                <Typography variant='body2' sx={{ fontWeight: 600, mb: 3 }}>
                  Address Information
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField size='small' fullWidth label='City' placeholder='Leonard' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField size='small' fullWidth label='Woreda' placeholder='Carter' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField size='small' fullWidth label='Sub City' placeholder='Leonard' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField size='small' fullWidth label='Kebele' placeholder='Carter' />
              </Grid>
              <Grid item sx={{ mb: 8 }} xs={12} sm={6}>
                <TextField size='small' fullWidth label='Street' placeholder='Leonard' />
              </Grid>
              <Grid item sx={{ mb: 8 }} xs={12} sm={6}>
                <TextField size='small' fullWidth label='House Number' placeholder='Carter' />
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
