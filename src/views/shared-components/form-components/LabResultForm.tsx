// ** React Imports

// ** MUI Imports
import Grid from '@mui/material/Grid'
import { Button, Card, CardContent, CardActions } from '@mui/material'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

import EmailOutline from 'mdi-material-ui/EmailOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import FileUploaderSingle from './FileUploaderSingle'

import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'

const LabResultForm = () => {
  // ** States

  return (
    <Grid container >
      <Card sx={{  my: 4, backgroundColor: 'white' }}>
        <form onSubmit={e => e.preventDefault()}>
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField
                  size='small'
                  fullWidth
                  label='Name'
                  placeholder='Blood test'
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
                  label='Type'
                  placeholder='type of test'
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
                <FileUploaderSingle />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  rows={5}
                  multiline
                  fullWidth
                  label='Comment'
                  defaultValue='no comment'
                  id='textarea-outlined-static'
                />
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label='Normal range? '
                  value='start'
                  labelPlacement='start'
                  sx={{ marginRight: 4 }}
                />
              </Grid>
                  </Grid>
          </CardContent>
          <CardActions sx={{ mx: 80 }}>
            <Button size='large' type='submit' variant='contained' sx={{padding:2}}>
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

export default LabResultForm
