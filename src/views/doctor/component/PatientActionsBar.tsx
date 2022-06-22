// ** MUI Imports
import { Grid, Button, Dialog, DialogTitle, DialogActions, DialogContent, Snackbar, Alert } from '@mui/material'
import { Fragment, useState } from 'react'
import DiagnosisForm from 'src/views/shared-components/form-components/DiagnosisForm'
import Link from 'next/link'
import { useRouter } from 'next/router'
const PatientActionsBar = (props: any) => {
  // ** State

  const actions = [
    { name: 'Issue Investigation', path: '/doctor/issue-investigation/', query: {}, dialog: false },
    { name: 'Examine', path: `/doctor/examination-symptoms`, query: { pid: props.patientId }, dialog: false }
  ]

  const [open, setOpen] = useState<boolean>(false)

  const [errOpen, setErrOpen] = useState(false)
  const [severity, setSeverity] = useState('success')

  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setErrOpen(false)
  const handleClickClose = (origin: boolean, severity: string) => {
    if (origin) {
      console.log(severity)
      setSeverity(severity)
      setErrOpen(true)
      setOpen(false)
    } else {
      // console.log('here')
      setErrOpen(false)
      setSeverity(severity)
      setOpen(false)
    }
  }
  const router = useRouter()

  return (
    <div>
      <Snackbar open={errOpen} autoHideDuration={600} onClose={() => setOpen(false)}>
          <Alert onClose={handleClose} severity={severity == 'success' ? 'success' : 'error'} sx={{ width: '100%' }}>
            {severity == 'success' ? 'Changes Made successfully' : 'There has been an error, please try again'}!
          </Alert>
        </Snackbar>
      <Grid className='container-grid' container alignItems='flex-end'>
        {actions.map(function (action) {
          return (
            <Grid item key={action.name}>
              <Link href={{ pathname: `${action.path}`, query: { pid: router.query.pid } }}>
                <Button variant='outlined' color='primary' size='small' style={{ marginLeft: 16 }}>
                  {action.name}
                </Button>
              </Link>
            </Grid>
          )
        })}
        <Grid item>
          <Button variant='outlined' color='primary' size='small' style={{ marginLeft: 16 }} onClick={handleClickOpen}>
            Diagnose
          </Button>
        </Grid>
      </Grid>
      <Fragment>
        <Dialog open={open} maxWidth='md' onClose={handleClickClose} aria-labelledby='max-width-dialog-title'>
          <DialogTitle id='max-width-dialog-title'>Diagnosis Form </DialogTitle>
          <DialogContent>
            <DiagnosisForm closeHandler={handleClickClose}  />
          </DialogContent>
          <DialogActions className='dialog-actions-dense'></DialogActions>
        </Dialog>
      </Fragment>
    </div>
  )
}

export default PatientActionsBar
