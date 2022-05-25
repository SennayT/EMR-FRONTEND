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

import user from '../data/userData'
import DoctorDashboard from './doctor'
import SystemAdminDashboard from '../views/dashboard/system-admin-dashboard/SystemAdminDashboard'
import LabExpertDashboard from './lab-expert'
import NurseDashboard from './nurse'
import ReceptionDashboard from '../views/dashboard/reception-dashboard/ReceptionDashboard'
import RadiologistDashboard from './radiologist'

import type { NextPage } from 'next'
import {signIn, signOut, useSession} from "next-auth/react";
import {useEffect} from "react";
import LoginPage from './pages/login'


// import SystemAdminDashboard from '../views/dashboard/system-admin-dashboard/SystemAdminDashboard'

const Dashboard = () => {
  const {data:session} = useSession()

  if(session){
    console.log("session", session)
    const role = session.role;
  switch (role) {
    case 'Doctor':
      return <DoctorDashboard />
    case 'SystemAdmin':
      return <SystemAdminDashboard />
    case 'LabExpert':
      return <LabExpertDashboard />
    case 'Nurse':
      return <NurseDashboard />
    case 'Receptionist':
      return <ReceptionDashboard />
    case 'Radiologist':
      return <RadiologistDashboard />
    default:
      return <p>add 404 here</p>
  }}else{
    console.log("not")
    return signIn()
  }

  // <ApexChartWrapper>
  //   <Grid container spacing={6}>
  //     <Grid item xs={12} md={4}>
  //       <Trophy />
  //     </Grid>
  //     <Grid item xs={12} md={8}>
  //       <StatisticsCard />
  //     </Grid>
  //     <Grid item xs={12} md={6} lg={4}>
  //       <WeeklyOverview />
  //     </Grid>
  //     <Grid item xs={12} md={6} lg={4}>
  //       <TotalEarning />
  //     </Grid>
  //     <Grid item xs={12} md={6} lg={4}>
  //       <Grid container spacing={6}>
  //         <Grid item xs={6}>
  //           <CardStatisticsVerticalComponent
  //             stats='$25.6k'
  //             icon={<Poll />}
  //             color='success'
  //             trendNumber='+42%'
  //             title='Total Profit'
  //             subtitle='Weekly Profit'
  //           />
  //         </Grid>
  //         <Grid item xs={6}>
  //           <CardStatisticsVerticalComponent
  //             stats='$78'
  //             title='Refunds'
  //             trend='negative'
  //             color='secondary'
  //             trendNumber='-15%'
  //             subtitle='Past Month'
  //             icon={<CurrencyUsd />}
  //           />
  //         </Grid>
  //         <Grid item xs={6}>
  //           <CardStatisticsVerticalComponent
  //             stats='862'
  //             trend='negative'
  //             trendNumber='-18%'
  //             title='New Project'
  //             subtitle='Yearly Project'
  //             icon={<BriefcaseVariantOutline />}
  //           />
  //         </Grid>
  //         <Grid item xs={6}>
  //           <CardStatisticsVerticalComponent
  //             stats='15'
  //             color='warning'
  //             trend='negative'
  //             trendNumber='-18%'
  //             subtitle='Last Week'
  //             title='Sales Queries'
  //             icon={<HelpCircleOutline />}
  //           />
  //         </Grid>
  //       </Grid>
  //     </Grid>
  //     <Grid item xs={12} md={6} lg={4}>
  //       <SalesByCountries />
  //     </Grid>
  //     <Grid item xs={12} md={12} lg={8}>
  //       <DepositWithdraw />
  //     </Grid>
  //     <Grid item xs={12}>
  //       <Table />
  //     </Grid>
  //   </Grid>
  // </ApexChartWrapper>
}

export default Dashboard
