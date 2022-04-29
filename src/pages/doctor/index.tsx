
import { CardContent } from '@mui/material'
import Card from '@mui/material/Card'
import DoctorLayout from 'src/views/doctor/DoctorLayout'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'


const DoctorDashboard = () => {
  // ** State


  return (
    <Card>
      <CardContent>
        <DoctorLayout />
      </CardContent>
    </Card>
  )
}

export default DoctorDashboard
