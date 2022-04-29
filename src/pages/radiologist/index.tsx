
import { CardContent } from '@mui/material'
import Card from '@mui/material/Card'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import RadiologistLayout from 'src/views/radiologist/RadiologistLayout'


const RadiologistDashboard = () => {
  // ** State


  return (
    <Card>
      <CardContent>
        <RadiologistLayout />
      </CardContent>
    </Card>
  )
}

export default RadiologistDashboard;
