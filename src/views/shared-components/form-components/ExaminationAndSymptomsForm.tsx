// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import { Button, Card, CardContent, CardActions } from '@mui/material'
import TextField from '@mui/material/TextField'
import axios from 'axios';

const ExaminationAndSymptomsForm = () => {

  const [examination, setExamination] = useState("");
  const [symptoms, setSymptoms] = useState("");

  const registerExamination = () => {
    const data = {
      physical_examination: examination,
      symptom: symptoms
    }
    console.log(data)
    axios.post(`http://localhost:4000/examination`, data).then(response => {
      console.log(response.data)
    })
  };

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
                  value={symptoms}
                  label='symptoms'
                  onChange={e => {
                    setSymptoms(e.target.value)
                  }}
                  placeholder='patient feels'

                />
               <TextField
                sx={{margin: 2}}
                  fullWidth
                  rows={8}
                  multiline
                  value={examination}
                  onChange={e => {
                    setExamination(e.target.value)
                  }}
                  label='physical examination'
                  placeholder='physically shown indications'

                />
              </Grid>

          </CardContent>
          <CardActions sx={{ mx: 80 }}>
            <Button size='large' type='submit' onClick={registerExamination} variant='contained' sx={{padding:2}}>
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
