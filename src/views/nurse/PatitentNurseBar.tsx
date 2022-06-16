
// ** MUI Imports
import { Grid, Button, Dialog, DialogTitle, DialogActions, DialogContent, Snackbar, Alert } from '@mui/material'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import AddVitalsForm from 'src/views/shared-components/form-components/AddVitalsFrom'

const PatientNurseBar = (props: any) => {
  // ** State


  const actions = [
    {
      name: 'Add Vitals',
      path: '/doctor/issue-investigation/',
      dialog: true
    }
  ]


  const [open, setOpen] = useState<boolean>(false)
  const handleClickOpen = () => { setOpen(true); }
  const handleClickClose = (origin: boolean) => { if (origin) { setErr(true) } else { setOpen(false) } }

  const [err, setErr] = useState(false)
  const [patientId, setPatientId] = useState<Number>()

  const router = useRouter()
  useEffect(() => {
    setPatientId(Number(router.query.id))
  })
  const handleClose = () => {
    setErr(false);
  }

  return (
    <div>
      <Grid className="container-grid" container alignItems='flex-end'>
        {/* <Snackbar open={err} autoHideDuration={600} onClose={() => setOpen(false)}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            This is an error message!
          </Alert>
        </Snackbar> */}
        {actions.map(function (action) {

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
          onClose={() => handleClickClose(false)}
          aria-labelledby='max-width-dialog-title'
        >
          <DialogTitle id='max-width-dialog-title'>Vitals Form </DialogTitle>
          <DialogContent>
            <AddVitalsForm setErr={setErr} patientId={patientId} />
          </DialogContent>
          <DialogActions className='dialog-actions-dense'>
          </DialogActions>
        </Dialog>
      </Fragment>
    </div>
  )
}

export default PatientNurseBar;
