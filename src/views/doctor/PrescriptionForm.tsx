import { Button, Card, Box, CardActions, CardContent, Grid, TextField, Typography } from '@mui/material'
import { FormEvent, useEffect, useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import requests from 'src/utils/repository'
import { useSession } from 'next-auth/react'
import { Document } from '@react-pdf/renderer'
type Medication = {
  name: string
  dosage: string
  instructions: string
}

const sampleMedications: Medication[] = []

export default function PrescriptionForm() {
  const [medications, setMedications] = useState<Medication[]>([...sampleMedications])
  const [medication, setMedication] = useState<Medication>({ name: '', dosage: '', instructions: '' })
  const { data: session } = useSession();


  const [prescriptions, setPrescriptions] = useState([
    {
      id: 0,
      createdAt: "",
      medications: [
        {
          id: 0,
          name: "",
          dosage: "",
          instructions: "",
          prescription: ""
        }
      ],
    }])

    // const [prescription, setPrescription] = useState(
    //   {
    //     id: 0,
    //     createdAt: "",
    //     medications: [
    //       {
    //         id: 0,
    //         name: "",
    //         dosage: "",
    //         instructions: "",
    //         prescription: ""
    //       }
    //     ],
    //   })

    useEffect(() => {
      requests.get(`/prescription`, session ? session.accessToken.toString() : "" ).then(response => {
        setPrescriptions(response.data)
      })
    },[])


  const addButtonDisabled = medication.name === '' || medication.dosage === ''
  const submitDisabled = medications.length === 0
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const res = await requests.post('/prescription', {
        diagnosisId: 1,
        medications
      }, session ? session.accessToken.toString() : "")
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const addItemHandler = (e: FormEvent) => {
    e.preventDefault()
    setMedications([...medications, medication])
  }

  const exportPdf = (id: string) => {
    const pdfUrl = `http://capstone-backend-0957-11-v2.herokuapp.com/prescription/export/pdf/${id}`
    const link = document.createElement('a');
    link.href = pdfUrl;
    // link.setAttribute('download', 'report.pdf');
    document.body.appendChild(link);
    link.click();
  }

  return (
    <Grid container spacing={6}>
      <Grid sx={{ mx: 12, my: 4 }} item xs={12}>
        <Typography variant='h5'> Prescription Options</Typography>
      </Grid>
      <Grid container>
        <Grid item xs={8}>
          <Card sx={{ width: 5 / 6, mx: 18, my: 4, backgroundColor: 'white' }}>
            <form onSubmit={submitHandler}>
              <CardContent sx={{ px: 4 }}>
                <Grid sx={{ px: 4 }} container spacing={5}>
                  <Grid item xs={12}>
                    <Typography variant='subtitle1' >
                      Prescription Add
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      size='small'
                      fullWidth
                      label='Medication Name'
                      placeholder='Drug Name'
                      value={medication.name}
                      onChange={e => setMedication({ ...medication, name: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      size='small'
                      fullWidth
                      label='Drug Dosage'
                      placeholder='Dosage'
                      value={medication.dosage}
                      onChange={e => setMedication({ ...medication, dosage: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      multiline
                      size='small'
                      label='Instructions'
                      placeholder='Usage'
                      fullWidth
                      value={medication.instructions}
                      onChange={e => setMedication({ ...medication, instructions: e.target.value })}
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
                <PrescriptionTable prescriptions={medications} />
              </Grid>
              <Grid item>
                <Button disabled={submitDisabled} variant='contained' size='large' type='submit' sx={{ mx: 8, my: 4 }}>
                  Submit
                </Button>
              </Grid>
            </form>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ my: 4, backgroundColor: 'white' }}>
            <CardContent>
              <Box>
                <Typography variant="subtitle1">Previous Prescriptions</Typography>
              </Box>
                {prescriptions.map((prescription) => {
                  return (
              <Box sx={{ display: 'flex', alignItems: 'center', my: 4, justifyContent: 'space-between' }}>
                    <Box  >
                      <Typography variant="subtitle1">
                        {prescription.createdAt}
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        {prescription.medications.map((medication) => {
                          return (<Typography variant='caption'>
                            {medication.name}
                          </Typography>)
                        })
                        }


                      </Box>
                    </Box>

                <Box>
                  <Button variant="outlined" sx={{ float: 'right' }} size='small' onClick={() => exportPdf(prescription.id.toString())}>Export</Button>
                </Box>
              </Box>
                  )})}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}

type PrescriptionTableProps = {
  prescriptions: Medication[]
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
