import { Fragment, useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';
import InvestigativeRequestResultFrom from './form-components/InvestigativeRequestResultForm';

import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'

// import Magnify from 'mdi-material-ui/Magnify'
// import InputAdornment from '@mui/material/InputAdornment'



const rows = [
  { id: 1, patientName: 'Snow', note: 'Lorem ipsum sth sth they always write on the templates', date: '12/12/2022' },
  { id: 2, patientName: 'Snow', note: 'Lorem ipsum sth sth they always write on the templates', date: '12/12/2022' },
  { id: 3, patientName: 'Snow', note: 'Lorem ipsum sth sth they always write on the templates', date: '12/12/2022' },
  { id: 4, patientName: 'Snow', note: 'Lorem ipsum sth sth they always write on the templates', date: '12/12/2022' },
  { id: 5, patientName: 'Snow', note: 'Lorem ipsum sth sth they always write on the templates', date: '12/12/2022' },
  { id: 6, patientName: 'Snow', note: 'Lorem ipsum sth sth they always write on the templates', date: '12/12/2022' },
  { id: 7, patientName: 'Snow', note: 'Lorem ipsum sth sth they always write on the templates', date: '12/12/2022' },
];


const InvestigativeRequestTable = () => {

  const [open, setOpen] = useState<boolean>(false)

const handleClickOpen = () => setOpen(true)
const handleClickClose = () => setOpen(false)


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'patientName',
    headerName: 'Patient Name',
    width: 150,
    editable: false,
  },
  {
    field: 'date',
    headerName: 'Date',
    type: 'number',
    width: 150,
    editable: false,
  },
  {
    field: 'note',
    headerName: 'Note',
    width: 400,
    editable: false,
  },
  {
    field: 'action',
    headerName: 'Action',
    description: '',
    sortable: false,
    width: 110,
    renderCell: () => (

      <strong>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={handleClickOpen}
        >
          Report
        </Button>
      </strong>
    ),

  },
];

  return (
        <div>
<Typography variant='h5' sx={{marginLeft: 2, marginBottom: 4}}>Investigative Requests</Typography>
        <div style={{ height: 400, width: '100%', backgroundColor:'white' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            />
        </div>
        <Fragment>
      <Dialog
        open={open}
        maxWidth='md'
        onClose={handleClickClose}
        aria-labelledby='max-width-dialog-title'
      >
        <DialogTitle id='max-width-dialog-title'>Lab Result Form </DialogTitle>
        <DialogContent>
         <InvestigativeRequestResultFrom/>
        </DialogContent>
        <DialogActions className='dialog-actions-dense'>
        </DialogActions>
      </Dialog>
    </Fragment>
    </div>
      );

}

export default InvestigativeRequestTable;
