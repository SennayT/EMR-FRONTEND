


import { Button, Card, CardActions, CardContent, Grid, TextField } from '@mui/material'
import { useState } from 'react'
import { Vitals } from 'src/data/models/VitalsModel'
import user from 'src/data/userData'
import axios from 'axios'

const AddVitalsForm = () => {
  const [vitals, setVitals] = useState<Vitals>({
    temperature: 0,
    pulse: 0,
    respiratoryRate: 0,
    bloodPressure: 0,
    weight: 0,
    spo2Level: 0,
    patientId: 3,
    requestedById: user.id
  })

  const handleVitalsSubmit = () => {


    axios.post(`https://capstone-backend-0957-11-v2.herokuapp.com/vitals`, vitals).then(response => {
      console.log(response.data)
    })
  };


  return (
    <Grid container spacing={6}>
      <Card sx={{ width: 5 / 6, mx: 18, my: 4, backgroundColor: 'white' }}>
        <form onSubmit={e => e.preventDefault()}>
          <CardContent sx={{ px: 4 }}>
            <Grid sx={{ pc: 4 }} container spacing={5}>
              <VitalItem
                label='Temperature'
                placeholder='Temperature in celsius'
                value={vitals.temperature}
                onChange={value => {
                  setVitals({ ...vitals, temperature: value })
                }}
              />
              <VitalItem
                label='Pulse'
                placeholder='Pulse'
                value={vitals.pulse}
                onChange={value => {
                  setVitals({ ...vitals, pulse: value })
                }}
              />
              <VitalItem
                label='Respiratory Rate'
                placeholder='Respiratory Rate'
                value={vitals.respiratoryRate}
                onChange={value => {
                  setVitals({ ...vitals, respiratoryRate: value })
                }}
              />

              <VitalItem
                label='bloodPressure'
                placeholder='Diastolic Blood Pressure'
                value={vitals.bloodPressure}
                onChange={value => {
                  setVitals({ ...vitals, bloodPressure: value })
                }}
              />
              <VitalItem
                label='Weight'
                placeholder='Weight in Kilograms'
                value={vitals.weight}
                onChange={value => {
                  setVitals({ ...vitals, weight: value })
                }}
              />
              <VitalItem
                label='spo2Level Level'
                placeholder='spo2Level Level'
                value={vitals.spo2Level}
                onChange={value => {
                  setVitals({ ...vitals, spo2Level: value })
                }}
              />
            </Grid>
          </CardContent>
          <CardActions>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <Button onClick={handleVitalsSubmit} variant='contained' size='large' sx={{}}>
                  Register
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        </form>
      </Card>
    </Grid>
  )
}



type VitalItemProps = {
  label: string
  placeholder: string
  value: number
  onChange: (value: number) => void
}

function VitalItem({ value, onChange, label, placeholder }: VitalItemProps) {
  return (
    <Grid item xs={12} sm={4}>
      <TextField
        size='small'
        fullWidth
        label={label}
        placeholder={placeholder}
        type='text'
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        onKeyPress={event => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault()
          }
        }}
      />
    </Grid>
  )
}

export default AddVitalsForm
