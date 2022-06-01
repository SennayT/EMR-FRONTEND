
import { Card, CardContent, Typography } from '@mui/material'

import { useEffect, useState } from 'react'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import UserGeneralInfo from '../shared-components/UserGeneralInfo'

// import { LockOpenOutline } from 'mdi-material-ui'



import user from 'src/data/userData'


const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))



const ProfileDetail = (props: any) => {
  // ** State

  const [imgSrc] = useState<string>('/images/avatars/1.png')


  return (
    <Card sx={{ backgroundColor: 'white' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ImgStyled src={imgSrc} alt='Profile Pic' />
          <Box sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h5'>{user.name}</Typography>
          </Box>
        </Box>

      </CardContent>

      <UserGeneralInfo user={props.user} />

    </Card>
  )
}

export default ProfileDetail
