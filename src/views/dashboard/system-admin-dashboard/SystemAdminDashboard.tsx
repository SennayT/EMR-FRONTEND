import { useState, useEffect } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
// import Poll from 'mdi-material-ui/Poll'

// import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HospitalIcon from 'mdi-material-ui/HospitalBuilding'
import PatientIcon from 'mdi-material-ui/AccountMultiple'
import ResearcherIcon from 'mdi-material-ui/AccountOutline'
import MoHIcon from 'mdi-material-ui/AccountSupervisor'

// import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'

// import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import requests from 'src/utils/repository'


export default function SystemAdminDashboard() {
  const [healthCenterNum, setHealthCenterNum] = useState(0)
  const [patientNum, setPatientNum] = useState(0)
  const [researcherNum, setResearcherNum] = useState(0)
  const [mohEmployeeNum, setMohEmployeeNum] = useState(0)

  useEffect(() => {
    requests.get("/health-center/number").then((response) => {
      setHealthCenterNum(response.data)
    });
    requests.get(`/patient`).then((response) => {
      setPatientNum(response.data.length)
    });
    requests.get(`/researcher/number`).then((response) => {
      setResearcherNum(response.data)
    })
    requests.get(`moh-employee`).then((response) => {
      setMohEmployeeNum(response.data.length)
    })
  })

  return (
    <ApexChartWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <Grid container spacing={12}>
            <Grid item xs={6} md={4} lg={3}>
              <CardStatisticsVerticalComponent
                stats={healthCenterNum.toString()}
                icon={<HospitalIcon />}
                color='success'
                trendNumber='+42%'
                title='Health Centers'
                subtitle='Total'
              />
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <CardStatisticsVerticalComponent
                stats={patientNum.toString()}
                title='Patients'
                trend='positive'
                color='secondary'
                trendNumber='+15%'
                subtitle='Total'
                icon={<PatientIcon />}
              />
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <CardStatisticsVerticalComponent
                stats={researcherNum.toString()}
                trend='negative'
                trendNumber='-18%'
                title='Researchers'
                subtitle='Total'
                icon={<ResearcherIcon />}
              />
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <CardStatisticsVerticalComponent
                stats={mohEmployeeNum.toString()}
                color='warning'
                trend='negative'
                trendNumber='+8%'
                subtitle='Total'
                title='MoH Employees'
                icon={<MoHIcon />}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid sx={{ my: 8, mx: 12 }} item xs={12}>
          <WeeklyOverview />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}
