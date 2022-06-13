// ** MUI Imports
import Box from '@mui/material/Box'

// ** Third Party Imports
import ResearcherRegistrationForm from 'src/views/system-admin/ResearcherRegistrationForm'

const DialogBox = (props: any) => {
  return (
    <Box>
      <ResearcherRegistrationForm closeHandler={props.closeHandler} edit={props.edit} researcher={props.researcher}/>
    </Box>
  )
}

export default DialogBox
