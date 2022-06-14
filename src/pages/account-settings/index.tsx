// ** React Imports
import { SyntheticEvent, useState, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab, { TabProps } from '@mui/material/Tab'

// ** Icons Imports
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import InformationOutline from 'mdi-material-ui/InformationOutline'

// ** Demo Tabs Imports
import TabInfo from 'src/views/account-settings/TabInfo'
import TabAccount from 'src/views/account-settings/TabAccount'
import TabSecurity from 'src/views/account-settings/TabSecurity'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import { useSession } from 'next-auth/react'
import requests from 'src/utils/repository'

const Tab = styled(MuiTab)<TabProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const AccountSettings = () => {
  // ** State
  const [value, setValue] = useState<string>('account')
  const [user, setUser] = useState({
    name: '',
    phone: '',
    age: 0,
    email: '',
    image: null,
    gender: null,
    isActive: true,
    isResearcher: false,
    isAdmin: false,
    address: {
      id: 6,
      city: '',
      subCity: '',
      zone: '',
      woreda: '',
      kebelle: '',
      street: '',
      houseNo: ''
    },
    role: {
      id: 0,
      name: ' '
    },
    healthCenter: {
      id: 0,
      name: '',
      email: '',
      phone: '',
      type: ''
    }
  })

  const { data: session } = useSession()

  // requests.post(`/user/4`, user, session ? session.accessToken.toString() : '').then(response => {
  //   console.log(response.data)
  // })

  useEffect(() => {
    requests.get(`/user/4`, session ? session.accessToken.toString() : '').then(response => {
      setUser(response.data)
    })
  }, [])

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='account-settings tabs'
          sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
        >
          <Tab
            value={'account'}
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountOutline />
                <TabName>Account</TabName>
              </Box>
            }
          />
          <Tab
            value='security'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LockOpenOutline />
                <TabName>Security</TabName>
              </Box>
            }
          />
          <Tab
            value='info'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <InformationOutline />
                <TabName>Info</TabName>
              </Box>
            }
          />
        </TabList>

        <TabPanel sx={{ p: 0 }} value='account'>
          <TabAccount user={user} />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='security'>
          <TabSecurity user={user} />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='info'>
          <TabInfo user={user} />
        </TabPanel>
      </TabContext>
      <Grid item xs={12} sx={{ my: 4 }}>
        <Button variant='contained' sx={{ marginRight: 3.5 }} onClick={AccountSettings}>
          Save Changes
        </Button>
        <Button type='reset' variant='outlined' color='secondary'>
          Reset
        </Button>
      </Grid>
    </Card>
  )
}

export default AccountSettings
