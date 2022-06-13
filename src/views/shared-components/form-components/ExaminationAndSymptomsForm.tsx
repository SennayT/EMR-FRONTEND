// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import { Button, Card, CardContent, CardActions, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import TextField from '@mui/material/TextField'
import requests from 'src/utils/repository'
import { useEffect } from 'react';
import { useSession } from 'next-auth/react'


const ExaminationAndSymptomsForm = () => {
  const ITEM_HEIGHT = 48
  const ITEM_PADDING_TOP = 8
  const MenuProps = {
    PaperProps: {
      style: {
        width: 250,
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
      }
    }
  }

  const [examination, setExamination] = useState('')
  const [symptoms, setSymptoms] = useState('')
  const [vitals, setVitals] = useState([{ id: 0, requestedDate: '' }])
  const [vital, setVital] = useState(0)
  const { data: session } = useSession();


  useEffect(() => {
    requests.get(`/vitals`,  session ? session.accessToken.toString() : "").then((response) => {
      setVitals(response.data)
    })
  },[])

  const registerExamination = () => {
    const data = {
      physical_examination: examination,
      symptom: symptoms,
      vitalId: vital
    }
    console.log(data)
    requests.post(`/examination`, data,  session ? session.accessToken.toString() : "").then(response => {
      console.log(response.data)
    })
  }

  return (
    <Grid container>
      <Card sx={{ marginTop: 2, paddingRight: 2, backgroundColor: 'white' }}>
        <form onSubmit={e => e.preventDefault()}>
          <CardContent>
            <Grid item xs={12}>
              <FormControl fullWidth sx={{ mx: 2 }}>
                <InputLabel id='test-select-label'>Investigative Request</InputLabel>
                <Select
                  labelId='test-select-label'
                  label='Investigative Request'
                  value={vital}
                  MenuProps={MenuProps}
                  onChange={e => {
                    const id = Number(e.target.value)
                    setVital(id)
                  }}
                  fullWidth
                  size='small'
                >
                  {vitals.map(name => (
                    <MenuItem key={name.id} value={name.id}>
                      {new Date(name.requestedDate).toLocaleDateString("en-US" ,  { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                sx={{ margin: 2 }}
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
                sx={{ margin: 2 }}
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
            <Button size='large' type='submit' onClick={registerExamination} variant='contained' sx={{ padding: 2 }}>
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
