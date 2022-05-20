
// ** MUI Imports
import {Grid, Button, Link, Dialog, DialogTitle, DialogActions,  DialogContent} from '@mui/material'
import {Fragment, useState }from 'react'
import DiagnosisForm from 'src/views/shared-components/form-components/DiagnosisForm'

const PatientActionsBar = () => {
  // ** State


  const actions = [
    {name: 'Issue Investigation',
    path:'/doctor/issue-investigation/',
    dialog: false
  },
  {name: 'Examine',
    path: '/doctor/examination-symptoms/',
    dialog: false
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
      <Link  href={action.path === undefined ? '/' : `${action.path}`}>

      <Button
          variant="outlined"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          >
          {action.name}
        </Button>
        </Link>
      </Grid>
      );
        }
       )
      }
       <Grid item>
      <Button
          variant="outlined"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={handleClickOpen}
          >
          Diagnose
        </Button>
      </Grid>
      </Grid>
      <Fragment>
      <Dialog
        open={open}
        maxWidth='md'
        onClose={handleClickClose}
        aria-labelledby='max-width-dialog-title'
      >
        <DialogTitle id='max-width-dialog-title'>Diagnosis Form </DialogTitle>
        <DialogContent>
         <DiagnosisForm/>
        </DialogContent>
        <DialogActions className='dialog-actions-dense'>
        </DialogActions>
      </Dialog>
    </Fragment>
    </div>
  )
}

export default PatientActionsBar;
