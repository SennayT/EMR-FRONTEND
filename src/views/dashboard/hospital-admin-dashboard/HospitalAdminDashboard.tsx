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
        <Grid item xs={12} md={3} lg={12}>
          <Grid container spacing={12}>
            <Grid item xs={3}>
              <CardStatisticsVerticalComponent
                stats='1,476'
                icon={<HospitalIcon />}
                color='success'
                trendNumber='+42%'
                title='Hospitals'
                subtitle='Past Month'
              />
            </Grid>
            <Grid item xs={3}>
              <CardStatisticsVerticalComponent
                stats='201K'
                title='Patients'
                trend='positive'
                color='secondary'
                trendNumber='+15%'
                subtitle='Past Month'
                icon={<PatientIcon />}
              />
            </Grid>
            <Grid item xs={3}>
              <CardStatisticsVerticalComponent
                stats='862'
                trend='negative'
                trendNumber='-18%'
                title='Researchers'
                subtitle='Past Month'
                icon={<ResearcherIcon />}
              />
            </Grid>
            <Grid item xs={3}>
              <CardStatisticsVerticalComponent
                stats='153'
                color='warning'
                trend='negative'
                trendNumber='+8%'
                subtitle='Past Month'
                title='MoH Employees'
                icon={<MoHIcon />}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid sx={{ my: 8, mx: 12 }} item xs={12} md={6} lg={12}>
          <WeeklyOverview />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}
