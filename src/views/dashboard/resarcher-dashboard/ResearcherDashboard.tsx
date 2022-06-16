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
import { useSession } from 'next-auth/react'
import BasicCharts from 'src/pages/stats/basic-charts'


export default function ResearcherDashboard() {
  const [healthCenterNum, setHealthCenterNum] = useState(0)
  const [patientNum, setPatientNum] = useState(0)
  const [researcherNum, setResearcherNum] = useState(0)
  const [mohEmployeeNum, setMohEmployeeNum] = useState(0)

  const { data: session } = useSession();

  useEffect(() => {
    requests.get("/health-center/number", session ? session.accessToken.toString() : "").then((response) => {
      setHealthCenterNum(response.data)
    });
    requests.get(`/patient`, session ? session.accessToken.toString() : "").then((response) => {
      setPatientNum(response.data.length)
    });
    requests.get(`/researcher/number`, session ? session.accessToken.toString() : "").then((response) => {
      setResearcherNum(response.data)
    })
    requests.get(`moh-employee`, session ? session.accessToken.toString() : "").then((response) => {
      setMohEmployeeNum(response.data.length)
    })
  },[])

  return (
    <BasicCharts/>
  )
}
