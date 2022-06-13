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



            <Typography  variant='body2' sx={{ fontWeight: 500, marginBottom: 3 }}>
              Role : {' '}
              <Box component='span' sx={{ fontWeight: '400' }}>
              {props.role.name}
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
