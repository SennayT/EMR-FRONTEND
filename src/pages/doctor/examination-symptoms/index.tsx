
import { CardContent, Typography } from '@mui/material'
import Card from '@mui/material/Card'


// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import ExaminationAndSymptomsForm from 'src/views/shared-components/form-components/ExaminationAndSymptomsForm'


const ExaminationAndSymptoms = () => {
  // ** State


  return (
    <Card>
      <CardContent>
        <Typography variant='h6'>Symptoms and Physical examinations</Typography>
        <ExaminationAndSymptomsForm/>
      </CardContent>
    </Card>
  )
}

export default ExaminationAndSymptoms
