// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import { Button, Card, CardContent, CardActions, FormControl, InputLabel, Select, MenuItem, Snackbar, Alert } from '@mui/material'
import TextField from '@mui/material/TextField'
import requests from 'src/utils/repository'
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const ExaminationAndSymptomsForm = (props: any) => {
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

  const router = useRouter();
  const [examination, setExamination] = useState('')
  const [symptoms, setSymptoms] = useState('')
  const [vitals, setVitals] = useState([{ id: 0, requestedDate: '' }])
  const [vital, setVital] = useState<number>()
  const { data: session } = useSession()

  const [errOpen, setErrOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const handleClose = () => setErrOpen(false)
  const handleClickClose = (origin: boolean, severity: string) => {
    if (origin) {
      console.log(severity)
      setErrOpen(true)
    } else {
      // console.log('here')
      setErrOpen(false)
    }
  }

  useEffect(() => {
    console.log('props', props)
    requests.get(`/vitals/patient/${props.patientId}`, session ? session.accessToken.toString() : '').then(response => {
      console.log(props, response.data)
      setVitals(response.data)
    })
  }, [])

  const registerExamination = () => {
    const data = {
      physical_examination: examination,
      symptom: symptoms,
      vitalId: vital
    }
    console.log(data)
    requests.post(`/examination`, data, session ? session.accessToken.toString() : '').then(response => {
      console.log(response.data)
      router.back()
    }).catch(e => setErrOpen(true))
  }


  return (
    <Grid container>
       <Snackbar open={errOpen} autoHideDuration={600} onClose={() => setOpen(false)}>
          <Alert onClose={handleClose} severity={'error'} sx={{ width: '100%' }}>
            {'There has been an error, please try again or check vitals'}!
          </Alert>
        </Snackbar>
      <Card sx={{ marginTop: 2, paddingRight: 2, backgroundColor: 'white' }}>
        <form onSubmit={e => e.preventDefault()}>
          <CardContent>
            <Grid item xs={12}>
              <FormControl fullWidth sx={{ mx: 2 }}>
                <InputLabel required id='test-select-label'>
                  Vital
                </InputLabel>
                <Select
                  sx={{ my: 2 }}
                  required
                  labelId='test-select-label'
                  label='Vital'
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
                      {new Date(name.requestedDate).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                sx={{ margin: 2 }}
                fullWidth
                required
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
                required
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
function setOpen(arg0: boolean): void {
  throw new Error('Function not implemented.')
}

