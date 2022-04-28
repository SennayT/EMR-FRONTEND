
import { CardContent } from '@mui/material'
import Card from '@mui/material/Card'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

import DoctorLayout from 'src/views/doctor/DoctorLayout'
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
