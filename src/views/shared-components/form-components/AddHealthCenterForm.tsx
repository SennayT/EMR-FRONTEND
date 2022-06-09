// ** MUI Imports
import Box from '@mui/material/Box'

// ** Third Party Imports
import HospitalRegistrationForm from 'src/views/system-admin/HospitalRegistrationForm'

const DialogBox = (props: any) => {
  return (
    <Box>
      <HospitalRegistrationForm closeHandler={props.closeHandler} edit={props.edit} healthCenter={props.healthCenter}/>
    </Box>
  )
}

export default DialogBox
