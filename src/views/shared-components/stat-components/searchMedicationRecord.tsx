import React,{Fragment, useState} from 'react'
import {
    TextField,
  Button,
  Backdrop,
  Box,
  Modal,
  Fade,
   Typography,
   CardContent,
   Grid,
   Dialog,
   DialogTitle,
   DialogContent,
   DialogActions
} from '@mui/material';

import ChartEight from './medication';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




function SearchMedicationRecord() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

const [data, setData] = useState({
    healthCenter: "All",
    medication: "",
    startAgeGroup: 0,
    endAgeGroup: 0,
    gender: ""
});
  const clear = () => {
    setData({
    healthCenter: "All",
    medication: "",
    startAgeGroup: 0,
    endAgeGroup: 0,
    gender: ""
  });
};

  const handleSubmit = () => {
    if (data.medication == '') {
      alert('enter medication')
      return;
    }

    if (data.startAgeGroup === 0) {
      data.startAgeGroup = 1;
    }

    if (data.endAgeGroup === 0) {
      data.endAgeGroup = 150;
    }

    if (data.gender === "") {
      data.gender = "male"
    }

    if (isNaN(data.startAgeGroup)){
       alert("Min age inputs must be a number")
      return;
    }

    if (isNaN(data.endAgeGroup)){
       alert("Max age inputs must be a number")
      return;
      }

    if (data.startAgeGroup > 150 || data.startAgeGroup < 0 ) {
           alert("Min age must be between 0 and 150");
           return;
    }

    if (data.endAgeGroup > 150 || data.endAgeGroup < 1 ) {
        alert("Max age must be between 1 and 150");
        return;
    }

    
    data.startAgeGroup = Number(data.startAgeGroup);
    data.endAgeGroup = Number(data.endAgeGroup);

   }


  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClickClose = () => {
    setOpen(false)
  }


  return (
        <Box>
       <CardContent sx={{backgroundColor: 'white'}} >
        <Typography variant="h6"> Medication Statistics</Typography>
        <Grid item xs={12}>
          <TextField style={{margin:'30px'}} label='Medication Name'  name="medication" variant='outlined'
            value = {data.medication} onChange = {(e: { target: { value: any; }; })=> setData({ ...data, medication: e.target.value})}/>
         
          <TextField style={{ margin: '30px' }} label='Gender'  name="gender" variant='outlined'
            value = {data.gender} onChange = {(e: { target: { value: any; }; })=> setData({ ...data, gender: e.target.value})}/>
        </Grid>
        <Grid>

          <TextField style={{ margin: '30px' }} label='Min Age' name="startAgeGroup" variant='outlined'
            value = {data.startAgeGroup} onChange = {(e: { target: { value: any; }; })=> setData({ ...data, startAgeGroup: Number(e.target.value)})} />

          <TextField style={{ margin: '30px' }} label='Max Age'  name="endAgeGroup" variant='outlined'
            value = {data.endAgeGroup} onChange = {(e: { target: { value: any; }; })=> setData({ ...data, endAgeGroup: Number(e.target.value)})} />
        </Grid>
        <Button style={{ margin: '30px' }} onClick={handleSubmit} variant='contained' color ='primary'>Search</Button>
      </CardContent>
      <Fragment>
        <Dialog
          open={open}
          maxWidth='md'
          onClose={handleClickClose}
          aria-labelledby='max-width-dialog-title'
        >
          <DialogTitle id='max-width-dialog-title'>Health Center Registration Form </DialogTitle>
          <DialogContent>
             <Typography id="transition-modal-title" variant="h6" component="h2" align='center'>
              Medication Analytics Charts
            </Typography>
            <ChartEight data={data}/>
          </DialogContent>
          <DialogActions className='dialog-actions-dense'></DialogActions>
        </Dialog>
      </Fragment>
    </Box>
  )
}

export default SearchMedicationRecord
