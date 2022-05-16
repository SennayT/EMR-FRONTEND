import { Box, Typography, BoxProps } from '@mui/material'
import { styled } from '@mui/material/styles'

const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw'
  }
}))

const NoDataView = () => {
  return (
    <Box className='content-center'>
      <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <BoxWrapper>
          <Typography variant='h3'>No Data Yet</Typography>
          <Typography variant='body2' sx={{ mb: 1 }}>
            please add data to view here ⚠️
          </Typography>
        </BoxWrapper>
      </Box>
    </Box>
  )

}

export default NoDataView;
