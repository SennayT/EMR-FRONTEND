import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import { Divider } from '@mui/material'
import PatientDiagnosis from './PatientDiagnosis'
import DiagnosisHistory from './DiagnosisHistory'
import UserGeneralInfo from '../shared-components/UserGeneralInfo'
import PatientActionsBar from '../doctor/component/PatientActionsBar'

import requests from 'src/utils/repository'
import { Patient } from 'src/data/models/PatientModel'
import { Address } from 'src/data/models/AddressModel'

const PatientDetail = () => {
  // ** State
  const [address, setAddress] = useState<Address>({
    id: 0,
    city: "",
    subCity: "",
    woreda: "",
    zone: "",
    kebelle: "",
    street: "",
    houseNumber: "",
  });
  const [patient, setPatient] = useState<Patient>(
    {
      id: 0,
      emergencyContactName: "",
      emergencyContactPhone: "",
      registeredBy: 0,
      user: {
        id: 0,
        name: "name",
        age: 32,
        gender: "female",
        email: "email",
        role: "patient",
        phone: "",
        address: address,
        isActive: false,
        isResearcher: false,
        isAdmin: false,
        healthCeterId: 0,
      }
    }
  );

  const router = useRouter();

  useEffect(() => {
    requests.get(`/patient/${router.query.pid}`).then(response => {
      setPatient(response.data)
    })
    requests.get(`/prescription/export/pdf/2`).then(response => {
      console.log("res", response.data)
    })
  });


  return (

    <Grid className="container-grid" spacing={5} container item>
      <Grid item xs={12}>
        <PatientActionsBar />
      </Grid>
      <Grid item xs={4}>
        <UserGeneralInfo user={patient.user} emergencyContactName={patient?.emergencyContactName} emergencyContactPhone={patient?.emergencyContactPhone} />
      </Grid>
      <Divider />
      <Grid item xs={8} >
        <PatientDiagnosis user={patient.user} />
        <DiagnosisHistory />

      </Grid>
    </Grid>
  )
}

export default PatientDetail;
