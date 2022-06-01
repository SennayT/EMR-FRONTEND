// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import { Button, Card, CardContent, CardActions, FormControl, Select, InputLabel, MenuItem, Snackbar, Alert } from '@mui/material'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

import EmailOutline from 'mdi-material-ui/EmailOutline'
import FileUploaderSingle from './FileUploaderSingle'

import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'

import requests from 'src/utils/repository'
import user from 'src/data/userData'

const LabResultForm = (props: any) => {
  const [open, setOpen] = useState(false)
  const registerResult = () => {
    const data = {
      name: currentLabTest.name,
      type: currentLabTest.testCategory,
      result: 'some result',
      isAbnormal: true,
      comment: comment,
      filledById: user.id,
      investigationRequestId: props.invReqId
    };

    console.log(data)
    requests.post(`/lab-result`, data).then(response => {
      console.log(Number(response.data.statusCode))
      if (response.data.statusCode[0] == 2) {
        console.log("sdfj")
      } else {
        setOpen(true)
      }
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
            <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
              <Alert severity="error" sx={{ width: '100%' }}>
                This is an error message!
              </Alert>
            </Snackbar>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id='labTest-select-label'>Investigative Request</InputLabel>
                  <Select
                    labelId='labTest-select-label'
                    label=''
                    value={currentLabTest || ""}
                    MenuProps={MenuProps}
                    onChange={e => {
                      const val = JSON.parse(e.target.value.toString());
                      setCurrentLabTest(val)
                    }}
                    fullWidth
                    size='small'
                  >
                    {props.labTests.map((item: any) => (
                      <MenuItem key={item.id} value={JSON.stringify({
                        id: 0,
                        name: '',
                        normalRange: '',
                        measuredIn: '',
                        testCategory: ''
                      })}>
                        {item.name}
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
