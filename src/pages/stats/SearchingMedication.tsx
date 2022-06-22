import Link from 'next/link';
import { Backdrop, Box, Button, Fade, Modal, TextField, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import requests from 'src/utils/repository';
import React, { useState } from 'react';
import ChartSeven from 'src/views/shared-components/stat-components/disease';
import ChartEight from 'src/views/shared-components/stat-components/medication';

function medication() {

  const {data:session} = useSession();

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
      data.startAgeGroup = 0;
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

    if (data.endAgeGroup > 150 || data.endAgeGroup < 1  ) {
      alert("Max age must be between 1 and 150");
      return;
    }


    data.startAgeGroup = Number(data.startAgeGroup);
    data.endAgeGroup = Number(data.endAgeGroup);


    handleOpen();
   }


  return (
    <div>
      <main >
        <h1 style={{fontSize:'40px', color:'limegreen'}}>Medication Search Record</h1>
         <div className='d-flex' >
          <TextField style={{margin:'30px'}} label='medication Name'  name="medication" variant='outlined'
            value = {data.medication} onChange = {(e)=> setData({ ...data, medication: e.target.value})}/>
          <TextField style={{ margin: '30px' }} label='Gender'  name="gender" variant='outlined'
            value = {data.gender} onChange = {(e)=> setData({ ...data, gender: e.target.value})}/>
                </div>
        <div className='d-flex'>

          <TextField style={{ margin: '30px' }} label='Min Age' name="startAgeGroup" variant='outlined'
            value = {data.startAgeGroup} onChange = {(e)=> setData({ ...data, startAgeGroup: Number(e.target.value)})} />

          <TextField style={{ margin: '30px' }} label='Max Age'  name="endAgeGroup" variant='outlined'
            value = {data.endAgeGroup} onChange = {(e)=> setData({ ...data, endAgeGroup: Number(e.target.value)})} />
        </div>
        <Button style={{ margin: '30px' }} onClick={handleSubmit} variant='contained' color ='primary'>Search</Button>
      </main>
     <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        // BackdropComponent={Backdrop}
        // BackdropProps={{
        //   timeout: 500,
        // }}
      >
        <Fade in={open} style={{ backgroundColor: 'white',width:'700px', marginLeft:'500px', marginTop:'20px' }}>
          <Box>
            <Typography id="transition-modal-title" variant="h6" component="h2" align='center'>
              Medication Analytics Charts
            </Typography>
              <ChartEight data={data}  />
          </Box>
        </Fade>
      </Modal>
    </div>

    </div>
  )
}

export default medication
