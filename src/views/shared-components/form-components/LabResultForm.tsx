// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import { Button, Card, CardContent, CardActions, FormControl, Select, InputLabel, MenuItem } from '@mui/material'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

import EmailOutline from 'mdi-material-ui/EmailOutline'
import FileUploaderSingle from './FileUploaderSingle'

import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'

import axios from 'axios'
import user from 'src/data/userData'

const LabResultForm = props => {
  const registerResult = () => {
    console.log(currentLabTest)
    const data = {
      name: currentLabTest.name,
      type: currentLabTest.testCategory,
      result: 'some result',
      isAbnormal: true,
      comment: comment,
      filledById: user.id,
      investigationRequestId: props.invReqId
    }

    axios.post(`https://capstone-backend-0957-11-v2.herokuapp.com/lab-result`, data).then(response => {
      console.log(response)
    })
  }

  // ** States

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

  const [currentLabTest, setCurrentLabTest] = useState({
    id: 0,
    name: '',
    normalRange: '',
    measuredIn: '',
    testCategory: ''
  })

  const [comment, setComment] = useState('')

  return (
    <Grid container>
      <Card sx={{ my: 4, backgroundColor: 'white' }}>
        <form onSubmit={e => e.preventDefault()}>
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id='labTest-select-label'>Investigative Request</InputLabel>
                  <Select
                    labelId='labTest-select-label'
                    label='Investigative Request'
                    value={currentLabTest}
                    MenuProps={MenuProps}
                    onChange={e => {
                      // const id = Number(e.target.value)
                      setCurrentLabTest(e.target.value)
                    }}
                    fullWidth
                    size='small'
                  >
                    {props.labTests.map(name => (
                      <MenuItem key={name.id} value={name}>
                        {name.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size='small'
                  fullWidth
                  value={currentLabTest.normalRange}
                  label='Normal Range'
                  InputProps={{
                    readOnly: true,
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
                  value={comment}
                  onChange={e => {
                    setComment(e.target.value)
                  }}
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
            <Button size='large' type='submit' variant='contained' onClick={registerResult} sx={{ padding: 2 }}>
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
