// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'

// import 'styles/global.css'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

const WeeklyOverview = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 9,
        distributed: true,
        columnWidth: '40%',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    stroke: {
      width: 2,
      colors: [theme.palette.background.paper]
    },
    legend: { show: false },
    grid: {
      strokeDashArray: 7,
      padding: {
        top: -1,
        right: 0,
        left: -12,
        bottom: 5
      }
    },
    dataLabels: { enabled: false },
    colors: [
      theme.palette.background.default,
      theme.palette.background.default,
      theme.palette.background.default,
      theme.palette.primary.main,
      theme.palette.background.default,
      theme.palette.background.default
    ],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      tickPlacement: 'on',
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: {
      show: true,
      tickAmount: 4,
      labels: {
        offsetX: -17,
        formatter: value => `${value > 999 ? `${(value / 1000).toFixed(0)}` : value}k`
      }
    }
  }

  return (
    <Grid container spacing={12}>
      <Grid item xs={4} md={8} lg={8}>
        <Card>
          <CardHeader
            className='card-white'
            title='Weekly Overview'
            titleTypographyProps={{
              sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
            }}
            action={
              <IconButton
                size='small'
                aria-label='settings'
                className='card-more-options'
                sx={{ color: 'text.secondary' }}
              >
                <DotsVertical />
              </IconButton>
            }
          />
          <CardContent className='card-white' sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
            <ReactApexcharts
              type='bar'
              height={205}
              options={options}
              series={[{ data: [37, 57, 45, 75, 57, 40, 65] }]}
            />
            <Box sx={{ mb: 7, display: 'flex', alignItems: 'center' }}>
              <Typography variant='h5' sx={{ mr: 4 }}>
                45%
              </Typography>
              <Typography variant='body2'>Your sales performance is 45% 😎 better compared to last month</Typography>
            </Box>
            <Button fullWidth variant='contained'>
              Details
            </Button>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={4} md={4} lg={4}>
        <CardStatisticsVerticalComponent
          stats='15'
          color='warning'
          trend='negative'
          trendNumber='-18%'
          subtitle='Last Week'
          title='Sales Queries'
          icon={<HelpCircleOutline />}
        />
      </Grid>
    </Grid>
  )
}

export default WeeklyOverview
