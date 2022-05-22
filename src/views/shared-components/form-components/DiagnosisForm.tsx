// ** React Imports

// ** MUI Imports
import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import { Button, Card, CardContent, CardActions, MenuItem, Select, InputLabel, FormControl } from '@mui/material'
import TextField from '@mui/material/TextField'

import axios from 'axios'
import Disease from 'src/data/models/DiseaseModel'

import user from 'src/data/userData'

const DiagnosisForm = () => {
  // ** States
  const [investigationReq, setInvestigationReq] = useState([{note: "", id: 0}])
  const [diseases, setDiseases] = useState<Disease[]>([])
  const [comment, setComment] = useState<string>("")
  const [currInvReq, setCurrInvReq] = useState<number>(0)
  const [currDisease, setCurrDisease] = useState<number[]>([])


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

  useEffect(() => {
    axios.get('https://capstone-backend-0957-11-v2.herokuapp.com/disease').then((respose) => {
      setDiseases(respose.data)
    })
    axios.get('https://capstone-backend-0957-11-v2.herokuapp.com/investigation-request').then((respose) => {
      setInvestigationReq(respose.data)
    })
  });

  const registerDiagnosis = () => {
    const data = {
      comment: comment,
      filledById: user.id,
      investigationRequestId: currInvReq,
      diseases: currDisease
    }
    console.log(data)
    axios.post('https://capstone-backend-0957-11-v2.herokuapp.com/diagnosis', data)
  }

  return (
    <Grid container>
      <Card sx={{ marginTop: 2, paddingRight: 2, backgroundColor: 'white' }}>
        <form onSubmit={e => e.preventDefault()}>
          <CardContent>
            <Grid container>
              <Grid item sx={{ mr: 5 }} xs={5}>
                <FormControl fullWidth>
                  <InputLabel id='test-select-label'>Investigative Request</InputLabel>
                  <Select
                    labelId='test-select-label'
                    label=''
                    value={currInvReq}
                    MenuProps={MenuProps}
                    onChange={e => {
                      const id = Number(e.target.value);
                      setCurrInvReq(id)
                    }}
                    fullWidth
                    size='small'
                  >
                    {investigationReq.map(name => (
                      <MenuItem key={name.id} value={name.id}>
                        {name.note}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={5}>
                <FormControl fullWidth>
                  <InputLabel id='disease-select-label'>Disease</InputLabel>
                  <Select
                    labelId='disease-select-label'
                    value={currDisease}
                    multiple
                    onChange={e => {
                      const id = Number(e.target.value);
                      setCurrDisease([...currDisease, id])
                    }}
                    MenuProps={MenuProps}
                    fullWidth
                    size='small'
                  >
                    {diseases.map(disease => (
                      <MenuItem key={disease.id} value={disease.id}>
                        {disease.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ marginTop: 2 }}
                fullWidth
                rows={8}
                value={comment}
                multiline
                onChange={e => {
                  setComment(e.target.value)
                }}
                label='Comment'
                placeholder='description on the diagnosis'
              />
            </Grid>
          </CardContent>
          <CardActions sx={{ mx: 80 }}>
            <Button size='large' onClick={registerDiagnosis} type='submit' variant='contained' sx={{ padding: 2 }}>
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

export default DiagnosisForm
