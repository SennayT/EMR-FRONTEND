// ** MUI Imports
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'

// ** Icons Imports
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'

// Styled Box component
const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

const PatientVitals = () => {
  return (
    <div>

      <Typography variant='h6' sx={{ marginBottom: 3.5 , marginTop: 5}}>
        Recent Vitals
      </Typography>

      <Divider sx={{ marginBottom: 6.75 }} />
      <Grid container spacing={7}>
        <Grid item xs={12} sm={5}>
          <StyledBox>
            <Box sx={{ mb: 6.75, display: 'flex', alignItems: 'center' }}>
              <LockOpenOutline sx={{ color: 'primary.main', marginRight: 2.75 }} fontSize='small' />
              <Typography variant='subtitle2'>
                Full Access
                <Typography variant='h3'>10</Typography>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LockOpenOutline sx={{ color: 'primary.main', marginRight: 2.75 }} fontSize='small' />
              <Typography variant='subtitle2'>
                Full Access
                <Typography variant='h3'>10</Typography>
              </Typography>
            </Box>
          </StyledBox>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Box sx={{ mb: 6.75, display: 'flex', alignItems: 'center' }}>
            <LockOpenOutline sx={{ color: 'primary.main', marginRight: 2.75 }} fontSize='small' />
            <Typography variant='subtitle2'>
              Full Access
              <Typography variant='h3'>10</Typography>
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LockOpenOutline sx={{ color: 'primary.main', marginRight: 2.75 }} fontSize='small' />
            <Typography variant='subtitle2'>
              Full Access
              <Typography variant='h3'>10</Typography>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default PatientVitals
