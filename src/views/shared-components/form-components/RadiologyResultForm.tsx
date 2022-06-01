// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import { Button, Card, CardContent, CardActions, FormControl, Select, InputLabel, MenuItem } from '@mui/material'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

import EmailOutline from 'mdi-material-ui/EmailOutline'
import FileUploaderSingle from './FileUploaderSingle'

import requests from 'src/utils/repository'
import user from 'src/data/userData'

const RadiologyResultForm = (props: any) => {
  const registerResult = () => {
    console.log(currentLabTest)
    const data = {
      name: currentLabTest.name,
      focalArea: "stomach",
      report: 'some result',
      images: ["/url"],
      comment: comment,
      requestedById: 18,
      investigationRequestId: props.invReqId
    }
    console.log(data)
    requests.post(`/radiology`, data).then(response => {
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
    testCategory: '',
    images: [""]
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
                    label=''
                    value={currentLabTest}
                    MenuProps={MenuProps}
                    onChange={e => {
                      const val = JSON.parse(e.target.value.toString())
                      setCurrentLabTest(val)
                    }}
                    fullWidth
                    size='small'
                  >
                    {props.labTests.map((name: any) => (
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
                  label='Focal Area'
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

export default RadiologyResultForm
