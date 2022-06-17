import { CardContent, Typography } from '@mui/material'
import Card from '@mui/material/Card'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import ExaminationAndSymptomsForm from 'src/views/shared-components/form-components/ExaminationAndSymptomsForm'
import { useRouter } from 'next/router'

const ExaminationAndSymptoms = () => {
  // ** State
  const router = useRouter()

  return (
    <Card>
      <CardContent>
        <Typography variant='h6'>Symptoms and Physical examinations</Typography>
        <ExaminationAndSymptomsForm patientId={router.query.pid} />
      </CardContent>
    </Card>
  )
}

export default ExaminationAndSymptoms
