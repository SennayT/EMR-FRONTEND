// ** React Imports
import { useState, ElementType, ChangeEvent, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'
import Phone from 'mdi-material-ui/Phone'

import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

// import Link from '@mui/material/Link'
// import Alert from '@mui/material/Alert'
// import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'

// import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

// import InputLabel from '@mui/material/InputLabel'
// import AlertTitle from '@mui/material/AlertTitle'
// import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'

import FormControl from '@mui/material/FormControl'
import Radio from '@mui/material/Radio'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

import Button, { ButtonProps } from '@mui/material/Button'
import requests from 'src/utils/repository'
import { useSession } from 'next-auth/react'

// ** Icons Imports
// import Close from 'mdi-material-ui/Close'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)<ButtonProps & { component?: ElementType; htmlFor?: string }>(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const TabAccount = (props: any) => {
  // console.log(props.user);
  // ** State
  // const [openAlert, setOpenAlert] = useState<boolean>(true)
  const [imgSrc, setImgSrc] = useState<string>(props.user.image)
  const [file, setFile] = useState<File>()

  const onChange = (file: ChangeEvent) => {
    const reader = new FileReader()
    const { files } = file.target as HTMLInputElement
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result as string)
      reader.readAsDataURL(files[0])
      setFile(files[0])
      setImageChosen(true)
    }

  }

  const [value, setValue] = useState<Date | null>(new Date('2014-08-18T21:11:54'))
  const [email, setEmail] = useState(props.user.email);
  const [name, setName] = useState(props.user.name);
  const [phone, setPhone] = useState(props.user.phone);
  const [gender, setGender] = useState(props.user.gender);
  const [imageChosen, setImageChosen] = useState(false)
  // useEffect(() => {
  //   setName(props.user.name);
  //   setPhone(props.user.phone);
  //   setGender(props.user.gender);
  //   setEmail(props.user.email);
  //   // setImgSrc(props.user.image)
  // })

  const handleDateChange = (newValue: Date | null) => {
    setValue(newValue)
  }

  const { data: session } = useSession();


  const updateUser = () => {

    const data = {
      name: name,
      phone: phone,
      age: props.user.age,
      email: email,
      gender: gender,
      isResearcher: props.user.isResearcher,
      isAdmin: props.user.isAdmin,
      image: props.user.image ? props.user.image : "",
      address: {
        city: props.user.address.city,
        subCity: props.user.address.subCity,
        zone: props.user.address.zone,
        woreda: props.user.address.wereda,
        kebelle: props.user.address.kebelle,
        street: props.user.address.street,
        houseNo: props.user.address.houseNo
      }

    }

    console.log("val", props.user.image === imgSrc, data)
    if (props.user.image !== imgSrc) {
      const formData = new FormData();

      formData.append('upload_preset', 'profile_pics');
      formData.append('file', file);

      formData.append("cloud_name", "capstoneemr")

      fetch("https://api.cloudinary.com/v1_1/capstoneemr/image/upload", {
        method: "post",
        body: formData
      })
        .then(res => res.json())
        .then(r => {
          console.log(r)
          console.log("done", r)
          data.image = r.secure_url;
          requests.put(`/user/${props.user.id}`, data, session ? session.accessToken.toString() : '').then(response => {
            console.log(response.data)
          })
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      requests.put(`/user/${props.user.id}`, data, session ? session.accessToken.toString() : '').then(response => {
        console.log(response.data)
      })
    }

  }

  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ImgStyled src={imageChosen ? imgSrc : props.user.image} alt='Profile Pic' />
              <Box>
                <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                  Upload New Photo
                  <input
                    hidden
                    type='file'
                    onChange={onChange}
                    accept='image/png, image/jpeg'
                    id='account-settings-upload-image'
                  />
                </ButtonStyled>
                <ResetButtonStyled color='error' variant='outlined' onClick={() => {
                  setImgSrc(props.user.image);
                  setImageChosen(false)
                }}>
                  Reset
                </ResetButtonStyled>
                <Typography variant='body2' sx={{ marginTop: 5 }}>
                  Max size of 800K.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='' placeholder='' value={name} onChange={e => {
              setName(e.target.value)
            }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type='email'
              label='Email'
              placeholder=''
              value={email}
              onChange={e => {
                setEmail(e.target.value)
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Phone Number'
              placeholder=''
              value={phone}
              onChange={e => {
                setPhone(e.target.value)
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Phone />
                    +251
                  </InputAdornment>
                )
              }}
            />{' '}
          </Grid>
          <Grid sx={{ mb: 1, pr: 2 }} item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDatePicker
                label='Date of Birth'
                openTo='year'
                inputFormat='MM/dd/yyyy'
                value={value}
                onChange={handleDateChange}
                renderInput={params => <TextField fullWidth {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel sx={{ fontSize: '0.875rem' }}>Gender</FormLabel>
              <RadioGroup
                row
                value={gender}
                onChange={e => { setGender(e.target.value) }}
                aria-label='gender'
                name='account-settings-info-radio'
              >
                <FormControlLabel value='male' label='Male' control={<Radio />} />
                <FormControlLabel value='female' label='Female' control={<Radio />} />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button onClick={updateUser} variant='contained' sx={{ marginRight: 3.5 }}>
              Save Changes
            </Button>
            <Button type='reset' variant='outlined' color='secondary'>
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabAccount
