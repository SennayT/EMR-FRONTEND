
import { CardContent } from '@mui/material'
import Card from '@mui/material/Card'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import LabExpertLayout from 'src/views/lab-expert/LabExpertLayout'


const LabExpertDashboard = () => {
  // ** State


  return (
    <Card>
      <CardContent>
        <LabExpertLayout />
      </CardContent>
    </Card>
  )
}

export default LabExpertDashboard;
