// ** React Imports
// import { ChangeEvent, forwardRef, MouseEvent, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

// import Divider from '@mui/material/Divider'

// import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'

// import CardHeader from '@mui/material/CardHeader'

// import InputLabel from '@mui/material/InputLabel'
// import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

// import FormControl from '@mui/material/FormControl'
// import OutlinedInput from '@mui/material/OutlinedInput'
// import InputAdornment from '@mui/material/InputAdornment'
// import Select, { SelectChangeEvent } from '@mui/material/Select'

// ** Third Party Imports
// import DatePicker from 'react-datepicker'

// ** Icons Imports
// import EyeOutline from 'mdi-material-ui/EyeOutline'
// import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// interface State {
//   password: string
//   password2: string
//   showPassword: boolean
//   showPassword2: boolean
// }

// const CustomInput = forwardRef((props, ref) => {
//   return <TextField size='small' fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
// })

const RegisterPatient = () => {
  // ** States
  // const [language, setLanguage] = useState<string[]>([])
  // const [date, setDate] = useState<Date | null | undefined>(null)
  // const [values, setValues] = useState<State>({
  //   password: '',
  //   password2: '',
  //   showPassword: false,
  //   showPassword2: false
  // })

  // Handle Password
  // const handlePasswordChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
  //   setValues({ ...values, [prop]: event.target.value })
  // }
  // const handleClickShowPassword = () => {
  //   setValues({ ...values, showPassword: !values.showPassword })
  // }
  // const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault()
  // }

  // // Handle Confirm Password
  // const handleConfirmChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
  //   setValues({ ...values, [prop]: event.target.value })
  // }
  // const handleClickShowConfirmPassword = () => {
  //   setValues({ ...values, showPassword2: !values.showPassword2 })
  // }
  // const handleMouseDownConfirmPassword = (event: MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault()
  // }

  // Handle Select
  // const handleSelectChange = (event: SelectChangeEvent<string[]>) => {
  //   setLanguage(event.target.value as string[])
  // }

  return (
    <Grid container spacing={6}>
      <Grid sx={{ mx: 12, my: 4 }} item xs={12}>
        <Typography variant='h5'>Patient Registration</Typography>
      </Grid>
      <Card sx={{ width: 5 / 6, mx: 18, my: 4, backgroundColor: 'white' }}>
        {/* <CardHeader sx={{ px: 4 }} titleTypographyProps={{ variant: 'h6' }} /> */}
        {/* <Divider sx={{ margin: 0 }} /> */}
        <form onSubmit={e => e.preventDefault()}>
          <CardContent sx={{ px: 4 }}>
            <Grid sx={{ px: 4 }} container spacing={5}>
              <Grid item xs={12}>
                <Typography variant='body2' sx={{ fontWeight: 600, mt: 2, mb: 3 }}>
                  Personal Information
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField size='small' fullWidth label='Full Name' placeholder='carterLeonard' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField size='small' fullWidth type='email' label='Email' placeholder='carterleonard@gmail.com' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField size='small' fullWidth label='Phone Number' placeholder='+251 987654321' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField size='small' fullWidth label='Date of Birth' placeholder='01/01/2000' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField size='small' fullWidth label='Gender' placeholder='Female' />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
               <FormControl fullWidth>
                <InputLabel htmlFor='form-layouts-separator-password'>Password</InputLabel>
                <OutlinedInput
                  label='Password'
                  value={values.password}
                  id='form-layouts-separator-password'
                  onChange={handlePasswordChange('password')}
                  type={values.showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        aria-label='toggle password visibility'
                      >
                        {values.showPassword ? <EyeOutline /> : <EyeOffOutline />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor='form-layouts-separator-password-2'>Confirm Password</InputLabel>
                <OutlinedInput
                  value={values.password2}
                  label='Confirm Password'
                  id='form-layouts-separator-password-2'
                  onChange={handleConfirmChange('password2')}
                  type={values.showPassword2 ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        aria-label='toggle password visibility'
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownConfirmPassword}
                      >
                        {values.showPassword2 ? <EyeOutline /> : <EyeOffOutline />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid> */}
              <Grid item xs={12}>
                {/* <Divider sx={{ marginBottom: 0 }} /> */}
              </Grid>
              <Grid item xs={12}>
                <Typography variant='body2' sx={{ fontWeight: 600, mb: 3 }}>
                  Emergency Contacts
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField size='small' fullWidth label='Full Name' placeholder='Leonard' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField size='small' type='email' fullWidth label='Phone' placeholder='+251 987654321' />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Country</InputLabel>
                <Select
                  label='Country'
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  <MenuItem value='UK'>UK</MenuItem>
                  <MenuItem value='USA'>USA</MenuItem>
                  <MenuItem value='Australia'>Australia</MenuItem>
                  <MenuItem value='Germany'>Germany</MenuItem>
                </Select>
              </FormControl>
            </Grid> */}
              {/* <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-multiple-select-label'>Language</InputLabel>
                <Select
                  multiple
                  value={language}
                  onChange={handleSelectChange}
                  id='form-layouts-separator-multiple-select'
                  labelId='form-layouts-separator-multiple-select-label'
                  input={<OutlinedInput label='Language' id='select-multiple-language' />}
                >
                  <MenuItem value='English'>English</MenuItem>
                  <MenuItem value='French'>French</MenuItem>
                  <MenuItem value='Spanish'>Spanish</MenuItem>
                  <MenuItem value='Portuguese'>Portuguese</MenuItem>
                  <MenuItem value='Italian'>Italian</MenuItem>
                  <MenuItem value='German'>German</MenuItem>
                  <MenuItem value='Arabic'>Arabic</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker
                selected={date}
                showYearDropdown
                showMonthDropdown
                placeholderText='MM-DD-YYYY'
                customInput={<CustomInput />}
                id='form-layouts-separator-date'
                onChange={(date: Date) => setDate(date)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField size='small' fullWidth label='Phone No.' placeholder='+1-123-456-8790' />
            </Grid> */}
              <Grid item xs={12}>
                {/* <Divider sx={{ marginBottom: 0 }} /> */}
              </Grid>
              <Grid item xs={12}>
                <Typography variant='body2' sx={{ fontWeight: 600, mb: 3 }}>
                  Address Information
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField size='small' fullWidth label='City' placeholder='Leonard' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField size='small' fullWidth label='Woreda' placeholder='Carter' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField size='small' fullWidth label='Sub City' placeholder='Leonard' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField size='small' fullWidth label='Kebele' placeholder='Carter' />
              </Grid>
              <Grid item sx={{ mb: 8 }} xs={12} sm={6}>
                <TextField size='small' fullWidth label='Street' placeholder='Leonard' />
              </Grid>
              <Grid item sx={{ mb: 8 }} xs={12} sm={6}>
                <TextField size='small' fullWidth label='House Number' placeholder='Carter' />
              </Grid>
            </Grid>
          </CardContent>
          {/* <Divider sx={{ margin: 0 }} /> */}
          <CardActions sx={{ mx: 80 }}>
            <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
              Register
            </Button>
            {/* <Button size='large' color='secondary' variant='outlined'>
            Cancel
          </Button> */}
          </CardActions>
        </form>
      </Card>
    </Grid>
  )
}

export default RegisterPatient
