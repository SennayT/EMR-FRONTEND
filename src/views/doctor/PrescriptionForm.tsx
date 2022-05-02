import { Button, Card, CardActions, CardContent, Grid, TextField, Typography } from '@mui/material'
import { FormEvent, useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

type Prescription = {
  name: string
  dosage: string
  instructions: string
}

const samplePrescriptions: Prescription[] = [
  {
    name: 'Panadol',
    dosage: '25mg',
    instructions: 'Take one pill after every meal'
  },
  {
    name: 'Oxycodone',
    dosage: '15mg',
    instructions: 'Take 1 pill every 8 hours'
  },
  {
    name: 'Benzodiazepine',
    dosage: '25mg',
    instructions: 'Take when pain is present'
  }
]

export default function PrescriptionForm() {
  const [prescriptions, setPrescriptions] = useState<Prescription[]>([...samplePrescriptions])
  const [prescription, setPrescription] = useState<Prescription>({ name: '', dosage: '', instructions: '' })
  const addButtonDisabled = prescription.name === '' || prescription.dosage === ''
  const submitDisabled = prescriptions.length === 0
  const submitHandler = (e: FormEvent) => {
    e.preventDefault()
  }

  const addItemHandler = (e: FormEvent) => {
    e.preventDefault()
    setPrescriptions([...prescriptions, prescription])
  }

  return (
    <Grid container spacing={6}>
      <Grid sx={{ mx: 12, my: 4 }} item xs={12}>
        <Typography variant='h5'>Create Prescription</Typography>
      </Grid>
      <Card sx={{ width: 5 / 6, mx: 18, my: 4, backgroundColor: 'white' }}>
        <form onSubmit={submitHandler}>
          <CardContent sx={{ px: 4 }}>
            <Grid sx={{ px: 4 }} container spacing={5}>
              <Grid item xs={12}>
                <Typography variant='body2' sx={{ fontWeight: 600, mt: 2, mb: 3 }}>
                  Prescription
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size='small'
                  fullWidth
                  label='Medication Name'
                  placeholder='Drug Name'
                  value={prescription.name}
                  onChange={e => setPrescription({ ...prescription, name: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size='small'
                  fullWidth
                  label='Drug Dosage'
                  placeholder='Dosage'
                  value={prescription.dosage}
                  onChange={e => setPrescription({ ...prescription, dosage: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  multiline
                  size='small'
                  label='Instructions'
                  placeholder='Usage'
                  fullWidth
                  value={prescription.instructions}
                  onChange={e => setPrescription({ ...prescription, instructions: e.target.value })}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Grid sx={{ px: 4 }} container spacing={5}>
              <Grid item xs={4}>
                <Button disabled={addButtonDisabled} variant='contained' size='large' onClick={addItemHandler} sx={{}}>
                  Add
                </Button>
              </Grid>
            </Grid>
          </CardActions>

          <Grid item xs={12} sx={{ mx: 8, my: 4 }}>
            <PrescriptionTable prescriptions={prescriptions} />
          </Grid>
          <Grid item>
            <Button disabled={submitDisabled} variant='contained' size='large' type='submit' sx={{ mx: 8, my: 4 }}>
              Submit
            </Button>
          </Grid>
        </form>
      </Card>
    </Grid>
  )
}

type PrescriptionTableProps = {
  prescriptions: Prescription[]
}

function PrescriptionTable({ prescriptions }: PrescriptionTableProps) {
  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'No',
      width: 30
    },
    {
      field: 'name',
      headerName: 'Medication Name',
      width: 130
    },
    {
      field: 'dosage',
      headerName: 'Dosage',
      width: 130
    },
    {
      field: 'instructions',
      headerName: 'Instructions',
      width: 250
    }
  ]

  const rows = prescriptions.map((p, index) => ({ ...p, id: index + 1 }))

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid columns={columns} rows={rows} pageSize={10} rowsPerPageOptions={[10]} />
    </div>
  )
}
