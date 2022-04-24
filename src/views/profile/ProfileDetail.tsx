
import { Card, CardContent, Grid, Typography} from '@mui/material'

import { useState } from 'react'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import { LockOpenOutline } from 'mdi-material-ui'

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
      <Grid>
        <Grid>
        <Box>
          <Box>
          <LockOpenOutline sx={{ color: 'primary.main', marginRight: 2.75 }} fontSize='small' />
          <Box>
            <Typography variant='h6'>
              Some Some
            </Typography>
            <p>ewsdf</p>
          </Box>
          </Box>
        </Box>
        </Grid>
        <Grid>
        <Box>
          <Box>
          <LockOpenOutline sx={{ color: 'primary.main', marginRight: 2.75 }} fontSize='small' />
          <Box>
            <Typography variant='h6'>
              Some Some
            </Typography>
            <p>ewsdf</p>
          </Box>
          </Box>
        </Box>
        </Grid>
      </Grid>
      </CardContent>
    </Card>
  )
}

export default ProfileDetail
