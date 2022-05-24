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

export default function HospitalAdminDashboard() {
  return (
    <ApexChartWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <Grid container spacing={12}>
            <Grid item xs={6} md={4} lg={4}>
              <CardStatisticsVerticalComponent
                stats='1,476'
                icon={<HospitalIcon />}
                color='success'
                trendNumber='+42%'
                title='Patients'
                subtitle='Past Month'
              />
            </Grid>
            <Grid item xs={6} md={4} lg={4}>
              <CardStatisticsVerticalComponent
                stats='201K'
                title='Staff'
                trend='positive'
                color='secondary'
                trendNumber='+15%'
                subtitle='Past Month'
                icon={<PatientIcon />}
              />
            </Grid>
            <Grid item xs={6} md={4} lg={4}>
              <CardStatisticsVerticalComponent
                stats='862'
                trend='negative'
                trendNumber='-18%'
                title='Lab Reports'
                subtitle='Past Month'
                icon={<ResearcherIcon />}
              />
            </Grid>
            <Grid item xs={6} md={4} lg={4}>
              <CardStatisticsVerticalComponent
                stats='153'
                color='warning'
                trend='negative'
                trendNumber='+8%'
                subtitle='Past Month'
                title='Radiology'
                icon={<MoHIcon />}
              />
            </Grid>
            <Grid item xs={6} md={4} lg={4}>
              <CardStatisticsVerticalComponent
                stats='153'
                color='warning'
                trend='negative'
                trendNumber='+8%'
                subtitle='Past Month'
                title='Prescriptions'
                icon={<MoHIcon />}
              />
            </Grid>
            <Grid item xs={6} md={4} lg={4}>
              <CardStatisticsVerticalComponent
                stats='153'
                color='warning'
                trend='negative'
                trendNumber='+8%'
                subtitle='Past Month'
                title='Admins'
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
