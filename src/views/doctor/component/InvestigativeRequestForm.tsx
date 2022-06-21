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
import { useRouter } from 'next/router'
import { log } from 'util'

// import LocationCityIcon from 'mdi-material-ui/LocationCity'

// import LocationCityIcon from '@mui/icons-material/LocationCity'

export default function InvestigativeRequestForm() {
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    setCurrentCategory(event.target.value.toString())
  }

  const router = useRouter()

  const [currVital, setCurrVital] = useState<number>()

  const [tests, setTests] = useState<LabTest[]>([])
  const [vitals, setVitals] = useState([])
  const [currentCategory, setCurrentCategory] = useState<string>()

  const [invReq, setInvReq] = useState<InvestigationRequest>({
    note: '',
    labTests: [],
    registeredById: 2,
    vitalId: -1
  })

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
    requests
      .get(`/vitals/patient/${router.query.pid}`, session ? session.accessToken.toString() : '')
      .then(response => {
        console.log('vitals', response.data)
        setVitals(response.data)
      })
  }, [])

  const testCategories = [...new Set(tests.map(item => item.testCategory))]

  const [testErrors, setTestErrors] = useState<number>(1)

  const handleTestChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('Value', event.target.value)
    const {
      target: { value }
    } = event

    setTestErrors(0)
    if (event.target.checked) {
      setInvReq({ ...invReq, labTests: [...invReq.labTests, Number(value)] })
    } else {
      setInvReq({ ...invReq, labTests: invReq.labTests.filter(item => item !== Number(value)) })
    }

    if ([...invReq.labTests].length > 1) {
      setTestErrors(0)
    }
  }

  const registerInvestigationRequest = () => {
    requests
      .post('/investigation-request', { ...invReq, vitalId: currVital }, session ? session.accessToken.toString() : '')
      .then(res => {
        console.log(res)
        router.push({
          pathname: "/patient-details",
          query: {
            pid: router.query.pid
          }

        })
      })
      .catch(err => console.log(err))
  }

  const isItemSelected = (id: number) => {
    return invReq.labTests.find(item => item === id) !== undefined
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
                    <InputLabel id='test-select-label'>Vital</InputLabel>
                    <Select
                      required
                      value={currVital}
                      label='Vital'
                      MenuProps={MenuProps}
                      onChange={e => {
                        const id = Number(e.target.value)
                        setCurrVital(id)
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
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth sx={{ mx: 2 }}>
                    <InputLabel id='test-select-label'>Test Category</InputLabel>
                    <Select
                      required
                      value={[currentCategory]}
                      label='Test Category'
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
                        checked={isItemSelected(test.id)}
                        control={<Checkbox onChange={handleTestChange} name='basic-checked' />}
                      />
                    )
                  })}
              </Grid>
            </Grid>
          </CardContent>
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
          </CardActions>
        </form>
      </Card>
    </Grid>
  )
}
