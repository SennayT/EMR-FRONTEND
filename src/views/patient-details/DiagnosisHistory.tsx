import { useEffect, useState } from 'react'

// ** MUI Import
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import MuiTimeline, { TimelineProps } from '@mui/lab/Timeline'
import {Card, CardContent} from '@mui/material'

// ** Icons Imports
import ArrowRight from 'mdi-material-ui/ArrowRight'
import MessageOutline from 'mdi-material-ui/MessageOutline'
import PhoneDialOutline from 'mdi-material-ui/PhoneDialOutline'

import axios from 'axios'

// Styled Timeline component
const Timeline = styled(MuiTimeline)<TimelineProps>({
  paddingLeft: 0,
  paddingRight: 0,
  '& .MuiTimelineItem-root': {
    width: '100%',
    '&:before': {
      display: 'none'
    }
  }
})

// Styled component for the image of a shoe
const ImgShoe = styled('img')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius
}))




const DiagnosisHistory = () => {


  const [ diagnosis, setDiagnosis ] = useState([{
    id: 1,
    comment: '',
    createdAt: '',
    diseases: [
      {
        id: 0,
        name: '',
        description: ''
      }
    ]
  }])

  useEffect(() => {
    axios.get(`https://capstone-backend-0957-11-v2.herokuapp.com/diagnosis`).then((response) => {
      setDiagnosis(response.data)

      console.log(diagnosis)
    })
  })


  return (
    <Card sx={{marginTop: 5}}>
      <CardContent sx={{backgroundColor: 'white'}}>
        <Typography variant='h6'>
          Diagnosis History
        </Typography>
    <Timeline >
      {diagnosis.map((singleDiagnosis) => {
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='error' variant='outlined' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant='body2' sx={{ mr: 2, fontWeight: 600, color: 'text.primary' }}>
              {singleDiagnosis.comment}
            </Typography>
            <Typography variant='caption'>{singleDiagnosis.createdAt}</Typography>
          </Box>
          <Typography variant='body2' sx={{ color: 'text.primary' }}>
            <span>Charles de Gaulle Airport, Paris</span>{' '}
            <ArrowRight fontSize='small' sx={{ verticalAlign: 'bottom', mx: 4 }} />{' '}
            <span>Heathrow Airport, London</span>
          </Typography>
          <Typography variant='caption'>6:30 AM</Typography>
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
            <img width={28} height={28} alt='invoice.pdf' src='/materio-mui-react-nextjs-admin-template/demo-1/images/icons/file-icons/pdf.png' />
            <Typography variant='subtitle2' sx={{ ml: 2, fontWeight: 600 }}>
              bookingCard.pdf
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
      })}

    </Timeline>
    </CardContent>
    </Card>
  )
}

export default DiagnosisHistory
