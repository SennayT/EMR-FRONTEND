// ** MUI Imports
// import Grid from '@mui/material/Grid'

// ** Icons Imports
// import Poll from 'mdi-material-ui/Poll'
// import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
// import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
// import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
// import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
// import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
// import Table from 'src/views/dashboard/Table'
// import Trophy from 'src/views/dashboard/Trophy'
// import TotalEarning from 'src/views/dashboard/TotalEarning'
// import StatisticsCard from 'src/views/dashboard/StatisticsCard'
// import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
// import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
// import SalesByCountries from 'src/views/dashboard/SalesByCountries'

import DoctorDashboard from './doctor'
import SystemAdminDashboard from '../views/dashboard/system-admin-dashboard/SystemAdminDashboard'
import LabExpertDashboard from './lab-expert'
import NurseDashboard from './nurse'
import HospitalAdminDashboard from 'src/views/dashboard/hospital-admin-dashboard/HospitalAdminDashboard'
import RadiologistDashboard from './radiologist'

import {useSession} from "next-auth/react";


// import SystemAdminDashboard from '../views/dashboard/system-admin-dashboard/SystemAdminDashboard'

const Dashboard = () => {
  const {data:session} = useSession()
console.log(session)

    console.log("session", session)
    const role = session ? session.role : "NoNE";
  switch (role) {
    case 'Doctor':
      return <DoctorDashboard />
    case 'System Admin':
      return <SystemAdminDashboard />
    case 'HospitalAdmin':
      return <HospitalAdminDashboard />
    case 'LabExpert':
      return <LabExpertDashboard />
    case 'Nurse':
      return <DoctorDashboard />
    case 'Receptionist':
      return <DoctorDashboard />
    case 'Radiologist':
      return <RadiologistDashboard />
    case 'Hospital Admin':
      return <HospitalAdminDashboard />
    default:
      return <p>add 404 here</p>
  }
}

export default Dashboard
