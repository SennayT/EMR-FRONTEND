import React, { Fragment, useState } from 'react';

import ChartSeven from './disease';

import {
  Avatar, Select,
  FormControl,
  InputLabel,
  Grid,
  MenuItem,
  OutlinedInput,
  TextField,
  Button, Fade, Typography, DialogTitle, Modal, IconButton, Box, Backdrop, Card, CardContent, DialogContent, Dialog, DialogActions,
} from '@mui/material';

function SearchDiseaseRecord() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [data, setData] = useState({
    healthCenter: "All",
    disease: "",
    startAgeGroup: 0,
    endAgeGroup: 0,
    gender: ""
  });
  const clear = () => {
    setData({
      healthCenter: "All",
      disease: "",
      startAgeGroup: 0,
      endAgeGroup: 0,
      gender: ""
    });
  };

  const handleSubmit = () => {
    if (data.disease == '') {
      alert('enter disease')
      return;
    }

    if (data.startAgeGroup === 0) {
      data.startAgeGroup = 0;
    }

    if (data.endAgeGroup === 0) {
      data.endAgeGroup = 150;
    }

    if (data.gender === "") {
      data.gender = "male"
    }

    if (isNaN(data.startAgeGroup)) {
      alert("Min age inputs must be a number")
      return;
    }

    if (isNaN(data.endAgeGroup)) {
      alert("Max age inputs must be a number")
      return;
    }

    if (data.startAgeGroup > 150 || data.startAgeGroup < 0) {
      alert("Min age must be between 0 and 150");
      return;
    }

    if (data.endAgeGroup > 150 || data.endAgeGroup < 1) {
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
        <Typography variant="h6"> Disease Statistics</Typography>
        <Grid item xs={12}>
          <TextField style={{margin:'30px'}} label='Disease Name'  name="disease" variant='outlined'
            value = {data.disease} onChange = {(e: { target: { value: any; }; })=> setData({ ...data, disease: e.target.value})}/>
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
            <ChartSeven data={data}/>
          </DialogContent>
          <DialogActions className='dialog-actions-dense'></DialogActions>
        </Dialog>
      </Fragment>
    </Box>

  )
}

export default SearchDiseaseRecord
