import { useState, useEffect, ChangeEvent } from 'react'
import Grid from '@mui/material/Grid'
import {
  Card,
  Typography,
  CardContent,
  Button,
  CardActions,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormControlLabel,
  Checkbox,
  InputLabel,
  FormControl
} from '@mui/material'
import TextField from '@mui/material/TextField'
import requests from 'src/utils/repository'
import { LabTest } from 'src/data/models/LabTestModel'
import { InvestigationRequest } from 'src/data/models/InvestigationRequestModel'
import { useSession } from 'next-auth/react'

// import LocationCityIcon from 'mdi-material-ui/LocationCity'

// import LocationCityIcon from '@mui/icons-material/LocationCity'

export default function InvestigativeRequestForm() {
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    setCurrentCategory(event.target.value.toString())
  }

  const handleChangeVitals = (event: SelectChangeEvent<string[]>) => {
    setCurrentCategory(event.target.value.toString())
  }

  const [tests, setTests] = useState<LabTest[]>([])
  const [currentCategory, setCurrentCategory] = useState<string>()
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

  const { data: session } = useSession()

  useEffect(() => {
    requests.get(`/lab-test`, session ? session.accessToken.toString() : '').then(response => {
      setTests(response.data)
    })
  })

  const testCategories = [...new Set(tests.map(item => item.testCategory))]

  const [invReq, setInvReq] = useState<InvestigationRequest>({
    note: '',
    labTests: [],
    registeredById: 2,
    vitalId: 1
  })

  const [testErrors, setTestErrors] = useState<number>(1)

  const handleTestChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event

    console.log(value, ...invReq.labTests)
    setTestErrors(0)
    setInvReq({ ...invReq, labTests: [...invReq.labTests, Number(value)] })

    if ([...invReq.labTests].length > 1) {
      setTestErrors(0)
    }
    console.log(testErrors)
  }

  const registerInvestigationRequest = () => {
    console.log(invReq)
    requests.post('/investigation-request', invReq)
  }

  return (
    <Grid container spacing={6}>
      <Grid sx={{ mx: 12, my: 4 }} item xs={12}>
        <Typography variant='h5'>Issue Investigation</Typography>
      </Grid>
      <Card sx={{ width: 5 / 6, mx: 18, my: 4, backgroundColor: 'white' }}>
        <form onSubmit={e => e.preventDefault()}>
          <CardContent sx={{ p: 10 }}>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <TextField
                  rows={5}
                  type='text'
                  required
                  multiline
                  fullWidth
                  value={invReq.note}
                  onChange={e => {
                    setInvReq({ ...invReq, note: e.target.value })
                  }}
                  label='Comment'
                  defaultValue='no comment'
                  id='textarea-outlined-static'
                />
              </Grid>

              <Grid container spacing={5} sx={{ px: 4, mt: 2 }}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth sx={{ mx: 2 }}>
                    <InputLabel id='test-select-label'>Chemistry</InputLabel>
                    <Select
                      required
                      value={[currentCategory]}
                      label='Chemistry'
                      MenuProps={MenuProps}
                      onChange={handleChangeVitals}
                      fullWidth
                      size='small'
                    >
                      {testCategories.map(name => (
                        <MenuItem key={name} value={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth sx={{ mx: 2 }}>
                    <InputLabel id='test-select-label'>Chemistry</InputLabel>
                    <Select
                      required
                      value={[currentCategory]}
                      label='Chemistry'
                      onChange={handleChange}
                      fullWidth
                      size='small'
                    >
                      {testCategories.map(test => (
                        <MenuItem key={test} value={test}>
                          {test}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Typography variant='body2' sx={{ fontWeight: 600, mb: 3 }}>
                  Available tests
                </Typography>
                {tests
                  .filter(test => test.testCategory == currentCategory)
                  .map(function (test) {
                    return (
                      <FormControlLabel
                        key={test.id}
                        sx={{ marginRight: 10, marginBottom: 3 }}
                        label={test.name}
                        value={test.id}
                        control={<Checkbox onChange={handleTestChange} name='basic-checked' />}
                      />
                    )
                  })}
              </Grid>
            </Grid>
          </CardContent>
          {/* <Divider sx={{ margin: 0 }} /> */}
          <CardActions sx={{ mx: 80 }}>
            <Button
              onClick={registerInvestigationRequest}
              size='large'
              disabled={testErrors == 1}
              type='submit'
              sx={{ mr: 2 }}
              variant='contained'
            >
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