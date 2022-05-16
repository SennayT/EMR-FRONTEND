
// ** MUI Imports
import {Grid, Button, Dialog, DialogTitle, DialogActions,  DialogContent} from '@mui/material'
import {Fragment, useState }from 'react'
import AddVitalsForm from 'src/views/shared-components/form-components/AddVitalsFrom'

const PatientNurseBar = () => {
  // ** State


  const actions = [
    {name: 'Add Vitals',
    path:'/doctor/issue-investigation/',
    dialog: true
  }
  ]


  const [open, setOpen] = useState<boolean>(false)

const handleClickOpen = () => setOpen(true)
const handleClickClose = () => setOpen(false)


  return (
<div>
    <Grid className="container-grid" container alignItems='flex-end'>
       { actions.map(function (action) {

        return (
      <Grid item key={action.name} >
      <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={handleClickOpen}
          style={{ marginLeft: 16 }}
          >
          {action.name}
        </Button>

      </Grid>
      );
        }
       )
      }

      </Grid>
      <Fragment>
      <Dialog
        open={open}
        maxWidth='md'
        onClose={handleClickClose}
        aria-labelledby='max-width-dialog-title'
      >
        <DialogTitle id='max-width-dialog-title'>Vitals Form </DialogTitle>
        <DialogContent>
         <AddVitalsForm/>
        </DialogContent>
        <DialogActions className='dialog-actions-dense'>
        </DialogActions>
      </Dialog>
    </Fragment>
    </div>
  )
}

export default PatientNurseBar;
