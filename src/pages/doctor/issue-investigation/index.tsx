
import { CardContent } from '@mui/material'
import Card from '@mui/material/Card'


// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import InvestigativeRequestForm from 'src/views/doctor/component/InvestigativeRequestForm'


const IssueInvestigation = () => {
  // ** State


  return (
    <Card>
      <CardContent>
        <InvestigativeRequestForm/>
      </CardContent>
    </Card>
  )
}

export default IssueInvestigation
