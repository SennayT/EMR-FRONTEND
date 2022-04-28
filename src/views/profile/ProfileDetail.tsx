
import { Card, CardContent, Typography, Divider} from '@mui/material'

import { useState } from 'react'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
// import { LockOpenOutline } from 'mdi-material-ui'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))



const ProfileDetail = () => {
  // ** State

  const [imgSrc] = useState<string>('/images/avatars/1.png')

  return (
    <Card sx={{backgroundColor: 'white'}}>
      <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ImgStyled src={imgSrc} alt='Profile Pic' />
              <Box sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h5'>Robert Meyer</Typography>
            </Box>
            </Box>

      </CardContent>

      <CardContent>
      {/* <Typography variant='h6'  sx={{ fontWeight: '500' }}>
              Details
            </Typography> */}
            <Divider  sx={{ marginBottom: 2 }} />

            <Typography  variant='body2' sx={{ fontWeight: 500, marginBottom: 3 }}>
              Email: {' '}
              <Box component='span' sx={{ fontWeight: '400' }}>
              example@mail.com
              </Box>
            </Typography>

            <Typography  variant='body2' sx={{ fontWeight: 500, marginBottom: 3 }}>
              Phone: {' '}
              <Box component='span' sx={{ fontWeight: '400' }}>
              +8765434567
              </Box>
            </Typography>
            <Typography  variant='body2' sx={{ fontWeight: 500, marginBottom: 3 }}>
              Gender: {' '}
              <Box component='span' sx={{ fontWeight: '400' }}>
              Fluid
              </Box>
            </Typography>

      </CardContent>
    </Card>
  )
}

export default ProfileDetail
