import React,{useState} from 'react'
import {
  
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
  Button
} from '@material-ui/core'
import ChartSeven from './disease';
import {Backdrop} from '@material-ui/core';
import {Box} from '@material-ui/core';
import {Modal} from '@material-ui/core';
import {Fade} from '@material-ui/core';
import {Typography} from '@material-ui/core';
function SearchDiseaseRecord() {

const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

const [data, setData] = useState({
    healthCenter: "All",
    disease: "",
    startAgeGroup: "",
    endAgeGroup: "",
    gender: ""
});
  const clear = () => {
    setData({
    healthCenter: "All",
    disease: "",
    startAgeGroup: "",
    endAgeGroup: "",
    gender: ""
  });
}; 

  const handleSubmit = () => {
    if (data.disease == '') {
      alert('enter disease')
      return;
    }
    
    if (data.startAgeGroup === "") {
      data.startAgeGroup = 0;
    }
    
    if (data.endAgeGroup === "") {
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

      if (data.startAgeGroup > 150 | data.startAgeGroup < 0 ) {
        alert("Min age must be between 0 and 150");
        return;
    }

    if (data.endAgeGroup > 150 | data.endAgeGroup < 1  ) {
      alert("Max age must be between 1 and 150");
      return;
    }

      
    data.startAgeGroup = parseInt(data.startAgeGroup);
    data.endAgeGroup = parseInt(data.endAgeGroup);
   
    
    handleOpen();
   }
  



  return (
    <div >
       <main >
        <img src="https://media.istockphoto.com/photos/coronavirus-or-flu-virus-concept-picture-id1208475449?k=20&m=1208475449&s=612x612&w=0&h=ZgxDwMyxNel__M4gRzB2kcNlPleeJvQ57rpmqwKVY4U=" alt="" />
        <div className='d-flex' >
          <TextField style={{margin:'30px'}} label='Disease Name'  name="disease" variant='outlined'
            value = {data.disease} onChange = {(e)=> setData({ ...data, disease: e.target.value})}/>
          <TextField style={{ margin: '30px' }} label='Gender'  name="gender" variant='outlined'
            value = {data.gender} onChange = {(e)=> setData({ ...data, gender: e.target.value})}/>
                </div>
        <div className='d-flex'>

          <TextField style={{ margin: '30px' }} label='Min Age' name="startAgeGroup" variant='outlined'
            value = {data.startAgeGroup} onChange = {(e)=> setData({ ...data, startAgeGroup: e.target.value})} />
          
          <TextField style={{ margin: '30px' }} label='Max Age'  name="endAgeGroup" variant='outlined'
            value = {data.endAgeGroup} onChange = {(e)=> setData({ ...data, endAgeGroup: e.target.value})} />
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
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} style={{backgroundColor: 'white', width:'700px', marginLeft:'500px', marginTop:'20px' }}>
          <Box >
            <Typography id="transition-modal-title" variant="h6" component="h2" align='center'>
              Disease Analytics Charts
            </Typography>
            <ChartSeven data={data}/>
          </Box>
        </Fade>
      </Modal>
    </div>
      
    </div>
  )
}

export default SearchDiseaseRecord