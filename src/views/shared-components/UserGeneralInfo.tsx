// ** MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider';

import Card from '@mui/material/Card'
import { User } from 'src/data/models/UserModel'


const UserGeneralInfo = (props) => {


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
              Basic Information
            </Typography>

            <Typography  variant='body2' sx={{ fontWeight: 500, marginBottom: 3 }}>
              Email: {' '}
              <Box component='span' sx={{ fontWeight: '400' }}>
              {props.user.email}
              </Box>
            </Typography>

            <Typography  variant='body2' sx={{ fontWeight: 500, marginBottom: 3 }}>
              Phone: {' '}
              <Box component='span' sx={{ fontWeight: '400' }}>
              {props.user.phone}
              </Box>
            </Typography>
            <Typography  variant='body2' sx={{ fontWeight: 500, marginBottom: 3 }}>
              Gender: {' '}
              <Box component='span' sx={{ fontWeight: '400' }}>
              {props.user.gender}
              </Box>
            </Typography>
            <Divider />
            <Typography  sx={{ fontWeight: 'bold', marginBottom: 5 }}>
              Address Information
            </Typography>
            <Typography  variant='body2' sx={{ fontWeight: 500, marginBottom: 3 }}>
              Sub-city: {' '}
              <Box component='span' sx={{ fontWeight: '400' }}>
              {props.user.address.subCity}
              </Box>
            </Typography>
            <Typography  variant='body2' sx={{ fontWeight: 500, marginBottom: 3 }}>
              Wereda: {' '}
              <Box component='span' sx={{ fontWeight: '400' }}>
              {props.user.address.wereda}
              </Box>
            </Typography>
            <Typography  variant='body2' sx={{ fontWeight: 500, marginBottom: 3 }}>
              Kebele : {' '}
              <Box component='span' sx={{ fontWeight: '400' }}>
              {props.user.address.kebele}
              </Box>
            </Typography>
            <Divider/>
            <Typography sx={{ fontWeight: 'bold', marginBottom: 5}}>
              Emergency Contact
            </Typography>

            <Typography  variant='body2' sx={{ fontWeight: 500, marginBottom: 3 }}>
              Name : {' '}
              <Box component='span' sx={{ fontWeight: '400' }}>
              Lorem Ipsumit
              </Box>
            </Typography>
            <Typography  variant='body2' sx={{ fontWeight: 500, marginBottom: 3 }}>
              Phone : {' '}
              <Box component='span' sx={{ fontWeight: '400' }}>
              +2345677654345
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

export default UserGeneralInfo
