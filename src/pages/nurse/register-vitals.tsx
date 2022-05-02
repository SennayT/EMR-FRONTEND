import { Button, Card, CardActions, CardContent, Grid, TextField, Typography } from '@mui/material'
import { useState } from 'react'

type VitalSigns = {
  temperature: number
  pulse: number
  respiratoryRate: number
  systolic: number
  diastolic: number
  weight: number
  spo2: number
}

const RegisterVitals = () => {
  const [vitals, setVitals] = useState<VitalSigns>({
    temperature: 0,
    pulse: 0,
    respiratoryRate: 0,
    systolic: 0,
    diastolic: 0,
    weight: 0,
    spo2: 0
  })

  return (
    <Grid container spacing={6}>
      <Grid sx={{ mx: 12, my: 4 }} item xs={12}>
        <Typography variant='h5'>Register Vitals</Typography>
      </Grid>
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
                label='Systolic'
                placeholder='Systolic Blood Pressure'
                value={vitals.systolic}
                onChange={value => {
                  setVitals({ ...vitals, systolic: value })
                }}
              />
              <VitalItem
                label='Diastolic'
                placeholder='Diastolic Blood Pressure'
                value={vitals.diastolic}
                onChange={value => {
                  setVitals({ ...vitals, diastolic: value })
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
                label='SPo2 Level'
                placeholder='SPo2 Level'
                value={vitals.spo2}
                onChange={value => {
                  setVitals({ ...vitals, spo2: value })
                }}
              />
            </Grid>
          </CardContent>
          <CardActions>
            <Grid container spacing={5}>
              <Grid item xs={4}>
                <Button variant='contained' size='large' sx={{}}>
                  Add
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

export default RegisterVitals
