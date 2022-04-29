import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';


// import Magnify from 'mdi-material-ui/Magnify'
// import InputAdornment from '@mui/material/InputAdornment'


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
        >
          Report
        </Button>
      </strong>
    ),

  },
];

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
            </div>
      );

}

export default InvestigativeRequestTable;
