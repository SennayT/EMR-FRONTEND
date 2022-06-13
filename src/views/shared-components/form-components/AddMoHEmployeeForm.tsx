// ** MUI Imports
import Box from '@mui/material/Box'

// ** Third Party Imports
import MoHEmployeeRegistrationForm from 'src/views/system-admin/MoHEmployeeRegistrationForm'

const DialogBox = (props:any) => {
  return (
    <Box>
      <MoHEmployeeRegistrationForm closeHandler={props.closeHandler} edit={props.edit} employee={props.employee} />
    </Box>
  )
}

export default DialogBox
