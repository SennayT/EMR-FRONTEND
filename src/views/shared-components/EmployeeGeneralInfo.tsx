// ** MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider';

import Card from '@mui/material/Card'
import { ReactChild, ReactFragment, ReactPortal } from 'react'


const EmployeeGeneralInfo = (props: any) => {


  return (
    <Card sx = {{backgroundColor: 'white'}}>
      <CardContent  sx={{marginLeft: '-20px'}}>
        <Grid
          item
          xs={12}
          md={12}

        >
          <CardContent>

          <Typography variant='h5'  sx={{ fontWeight: 'bold', marginBottom: 5 }}>
              Employee Information
            </Typography>

            <Typography  variant='body2' sx={{ fontWeight: 500, marginBottom: 3 }}>
              Name: {' '}
              <Box component='span' sx={{ fontWeight: '400' }}>
              {props.healthCenter.name}
              </Box>
            </Typography>

            <Typography  variant='body2' sx={{ fontWeight: 500, marginBottom: 3 }}>
              Email: {' '}
              <Box component='span' sx={{ fontWeight: '400' }}>
              {props.healthCenter.email}
              </Box>
            </Typography>

            <Typography  variant='body2' sx={{ fontWeight: 500, marginBottom: 3 }}>
              Type: {' '}
              <Box component='span' sx={{ fontWeight: '400' }}>
              {props.healthCenter.type}
              </Box>
            </Typography>
            <Divider />
            <Typography  sx={{ fontWeight: 'bold', marginBottom: 5 }}>
              Address Information
            </Typography>
            <Typography  variant='body2' sx={{ fontWeight: 500, marginBottom: 3 }}>
              Sub-city: {' '}
              <Box component='span' sx={{ fontWeight: '400' }}>
              {props.healthCenter.address.subCity}
              </Box>
            </Typography>
            <Typography  variant='body2' sx={{ fontWeight: 500, marginBottom: 3 }}>
              Wereda: {' '}
              <Box component='span' sx={{ fontWeight: '400' }}>
              {props.healthCenter.address.wereda}
              </Box>
            </Typography>
            <Typography  variant='body2' sx={{ fontWeight: 500, marginBottom: 3 }}>
              Kebele : {' '}
              <Box component='span' sx={{ fontWeight: '400' }}>
              {props.healthCenter.address.kebele}
              </Box>
            </Typography>
            <Divider/>
            <Typography sx={{ fontWeight: 'bold', marginBottom: 5}}>
              Specialization
            </Typography>

            <Typography  variant='body2' sx={{ fontWeight: 500, marginBottom: 3 }}>
              Name : {' '}
              <Box component='span' sx={{ fontWeight: '400' }}>
              Lorem Ipsumit
              </Box>
            </Typography>
            <Typography  variant='body2' sx={{ fontWeight: 500, marginBottom: 3 }}>
              Date : {' '}
              <Box component='span' sx={{ fontWeight: '400' }}>
              12/12/21 - 12/12/22
              </Box>
            </Typography>

          </CardContent>
          <CardActions className='card-action-dense'>

          </CardActions>
        </Grid>
        </CardContent>
        </Card>
  )
}

export default EmployeeGeneralInfo
