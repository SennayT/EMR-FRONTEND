// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
// import Poll from 'mdi-material-ui/Poll'

// import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HospitalIcon from 'mdi-material-ui/HospitalBuilding'
import PatientIcon from 'mdi-material-ui/AccountMultiple'
import ResearcherIcon from 'mdi-material-ui/AccountOutline'
import MoHIcon from 'mdi-material-ui/AccountSupervisor'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import { useEffect, useState } from 'react'
import requests from 'src/utils/repository'
import { useSession } from 'next-auth/react'
import ChartNine from 'src/views/shared-components/stat-components/healthcenter'

export default function HospitalAdminDashboard() {
  const [patientNum, setPatientNum] = useState(0)
  const [labReports, setLabReports] = useState(0)
  const [radiology, setRadiology] = useState(0)
  const [employeeNum, setEmployeeNum] = useState(0)
  const [prescriptions, setPrescription] = useState(0)
  const [diagnosis, setDiagnosis] = useState(0)

  const { data: session } = useSession()

  useEffect(() => {
    requests.get('/health-center/number', session ? session.accessToken.toString() : '').then(response => {
      setLabReports(response.data)
    })
    requests.get(`/patient`, session ? session.accessToken.toString() : '').then(response => {
      setPatientNum(response.data.length)
    })
    requests.get(`/radiology`, session ? session.accessToken.toString() : '').then(response => {
      setRadiology(response.data.length)
    })
    requests.get(`/employee`, session ? session.accessToken.toString() : '').then(response => {
      setEmployeeNum(response.data.length)
    })
    requests.get(`/lab-result`, session ? session.accessToken.toString() : '').then(response => {
      setLabReports(response.data.length)
    })
    requests.get(`/prescription`, session ? session.accessToken.toString() : '').then(response => {
      setPrescription(response.data.length)
    })
    requests.get(`/diagnosis`, session ? session.accessToken.toString() : '').then(response => {
      setDiagnosis(response.data.length)
    })
  }, [])

  return (
    
    <ApexChartWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={12}>
            <Grid item xs={12} sm={6} md={4}>
              <CardStatisticsVerticalComponent
                stats={patientNum.toString()}
                icon={<HospitalIcon />}
                color='success'
                trendNumber='+42%'
                title='Patients'
                subtitle='Past Month'
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CardStatisticsVerticalComponent
                stats={employeeNum.toString()}
                title='Staff'
                trend='positive'
                color='secondary'
                trendNumber='+15%'
                subtitle='Past Month'
                icon={<PatientIcon />}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CardStatisticsVerticalComponent
                stats={labReports.toString()}
                trend='negative'
                trendNumber='-18%'
                title='Lab Reports'
                subtitle='Past Month'
                icon={<ResearcherIcon />}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CardStatisticsVerticalComponent
                stats={radiology.toString()}
                color='warning'
                trend='negative'
                trendNumber='+8%'
                subtitle='Past Month'
                title='Radiology'
                icon={<MoHIcon />}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CardStatisticsVerticalComponent
                stats={prescriptions.toString()}
                color='warning'
                trend='negative'
                trendNumber='+8%'
                subtitle='Past Month'
                title='Prescriptions'
                icon={<MoHIcon />}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CardStatisticsVerticalComponent
                stats={diagnosis.toString()}
                color='warning'
                trend='negative'
                trendNumber='+8%'
                subtitle='Past Month'
                title='Diagnosis'
                icon={<MoHIcon />}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid sx={{ my: 8, mx: 12 }} item xs={12}>
          <WeeklyOverview />
        </Grid>
        
        <ChartNine email={session?.user?.email} />
      </Grid>
    </ApexChartWrapper>
  )
}
