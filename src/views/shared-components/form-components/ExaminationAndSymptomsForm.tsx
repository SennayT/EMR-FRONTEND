// ** React Imports

// ** MUI Imports
import Grid from '@mui/material/Grid'
import { Button, Card, CardContent, CardActions } from '@mui/material'
import TextField from '@mui/material/TextField'

const ExaminationAndSymptomsForm = () => {
  // ** States

  return (
    <Grid container >
      <Card sx={{  marginTop: 2, paddingRight: 2, backgroundColor: 'white' }}>
        <form onSubmit={e => e.preventDefault()}>
          <CardContent>
              <Grid item xs={12}  >
                <TextField
                sx={{margin: 2}}
                  fullWidth
                  multiline
                  rows={8}
                  label='symptoms'
                  placeholder='patient feels'

                />
               <TextField
                sx={{margin: 2}}
                  fullWidth
                  rows={8}
                  multiline
                  label='physical examination'
                  placeholder='physically shown indications'

                />
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

export default ExaminationAndSymptomsForm
