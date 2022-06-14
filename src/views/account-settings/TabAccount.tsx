// ** React Imports
import { useState, ElementType, ChangeEvent } from 'react'

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
  // ** State
  // const [openAlert, setOpenAlert] = useState<boolean>(true)
  const [imgSrc, setImgSrc] = useState<string>('/images/avatars/1.png')

  const onChange = (file: ChangeEvent) => {
    const reader = new FileReader()
    const { files } = file.target as HTMLInputElement
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result as string)

      reader.readAsDataURL(files[0])
    }
  }

  const [value, setValue] = useState<Date | null>(new Date('2014-08-18T21:11:54'))

  const handleDateChange = (newValue: Date | null) => {
    setValue(newValue)
  }

  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ImgStyled src={imgSrc} alt='Profile Pic' />
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
                <ResetButtonStyled color='error' variant='outlined' onClick={() => setImgSrc('/images/avatars/1.png')}>
                  Reset
                </ResetButtonStyled>
                <Typography variant='body2' sx={{ marginTop: 5 }}>
                  Max size of 800K.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField value={props.user.name} fullWidth label='Name' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth type='email' label='Email' value={props.user.email} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Phone Number'
              value={props.user.phone}
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
              <RadioGroup row value={props.user.gender} aria-label='gender' name='account-settings-info-radio'>
                <FormControlLabel value='male' label='Male' control={<Radio />} />
                <FormControlLabel value='female' label='Female' control={<Radio />} />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabAccount
