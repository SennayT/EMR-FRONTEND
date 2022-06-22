import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography
} from '@mui/material'
import { signIn, useSession } from 'next-auth/react'
import requests from 'src/utils/repository'
import { ChangeEvent, MouseEvent, useState } from 'react'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'

// import KeyOutline from 'mdi-material-ui/KeyOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import { useRouter } from 'next/router'

interface State {
  newPassword: string
  currentPassword: string
  showNewPassword: boolean
  confirmNewPassword: string
  showCurrentPassword: boolean
  showConfirmNewPassword: boolean
}

const First = () => {
  const [values, setValues] = useState<State>({
    newPassword: '',
    currentPassword: '12345678',
    showNewPassword: false,
    confirmNewPassword: '',
    showCurrentPassword: false,
    showConfirmNewPassword: false
  })

  // Handle New Password
  // const handleNewPasswordChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
  //   setValues({ ...values, [prop]: event.target.value })
  // }

  const [newError, setNewError] = useState<{ newPassword: string }>()

  const handleNewPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setNewError({ newPassword: '' })
    setValues({ ...values, newPassword: value })
    const regName = new RegExp(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/).test(value)

    if (value == '') {
      setNewError({ newPassword: 'Password field cannot be empty' })
    } else if (!regName) {
      setNewError({ newPassword: 'Not a strong password' })
    }
  }

  const handleClickShowNewPassword = () => {
    setValues({ ...values, showNewPassword: !values.showNewPassword })
  }
  const handleMouseDownNewPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  // Handle Confirm New Password
  const handleConfirmNewPasswordChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleClickShowConfirmNewPassword = () => {
    setValues({ ...values, showConfirmNewPassword: !values.showConfirmNewPassword })
  }
  const handleMouseDownConfirmNewPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const disableButton = values.newPassword !== values.confirmNewPassword || !values.newPassword || newError?.newPassword

  const { data: session } = useSession()
  const [err, setErr] = useState('')
  const router = useRouter()
  const changePassword = () => {
    if (values.newPassword === values.confirmNewPassword) {
      const body = {
        oldPassword: values.currentPassword,
        newPassword: values.confirmNewPassword
      }
      requests
        .post('/user/password/update', body, session ? session.accessToken : '')
        .then(res => {
          console.log(res)

          // session.isPasswordReset = true
          signIn('credentials', { email: session.email, password: values.confirmNewPassword }).then(res => {
            router.push('/')
          })
        })
        .catch(e => {
          setErr('server')
        })
    } else {
      setErr('match')
    }
  }

  return (
    <Box>
      <Card sx={{ zIndex: 1, mx: '35%', my: '2%' }}>
        <CardContent sx={{ backgroundColor: 'white' }}>
          <Grid container xs={12} spacing={5}>
            <Card sx={{ mx: 'auto' }}>
              <p>
                {err
                  ? err === 'match'
                    ? 'Please enter matching passwords'
                    : 'Please try again there has been an error'
                  : ''}{' '}
              </p>
            </Card>

            <Typography variant='body1' sx={{ mx: '15%', my: '4%' }}>
              Please change your password{' '}
            </Typography>
            <Grid item xs={12}>
              <TextField
                value={values.newPassword}
                onChange={handleNewPasswordChange}
                fullWidth
                id='account-settings-new-password'
                type={values.showNewPassword ? 'text' : 'password'}
                required
                error={Boolean(newError?.newPassword)}
                helperText={newError?.newPassword}
                label='New Password'
                placeholder=''
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        aria-label='toggle password visibility'
                        onClick={handleClickShowNewPassword}
                        onMouseDown={handleMouseDownNewPassword}
                      >
                        {values.showNewPassword ? <EyeOutline /> : <EyeOffOutline />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              {/* <FormControl fullWidth>
                <InputLabel htmlFor='account-settings-confirm-new-password'>Confirm New Password</InputLabel>
                <OutlinedInput
                  label='Confirm New Password'
                  value={values.confirmNewPassword}
                  id='account-settings-confirm-new-password'
                  type={values.showConfirmNewPassword ? 'text' : 'password'}
                  onChange={handleConfirmNewPasswordChange('confirmNewPassword')}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        aria-label='toggle password visibility'
                        onClick={handleClickShowConfirmNewPassword}
                        onMouseDown={handleMouseDownConfirmNewPassword}
                      >
                        {values.showConfirmNewPassword ? <EyeOutline /> : <EyeOffOutline />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl> */}
            </Grid>
            <Grid item xs={12} sx={{}}>
              <TextField
                value={values.confirmNewPassword}
                onChange={handleConfirmNewPasswordChange('confirmNewPassword')}
                fullWidth
                id='account-settings-confirm-new-password'
                type={values.showConfirmNewPassword ? 'text' : 'password'}
                required
                label='Confirm New Password'
                error={Boolean(values.newPassword !== values.confirmNewPassword)}
                helperText={
                  values.newPassword !== values.confirmNewPassword ? 'New password doesnt match confirm password' : ''
                }
                placeholder=''
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        aria-label='toggle password visibility'
                        onClick={handleClickShowConfirmNewPassword}
                        onMouseDown={handleMouseDownConfirmNewPassword}
                      >
                        {values.showConfirmNewPassword ? <EyeOutline /> : <EyeOffOutline />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              {/* <FormControl fullWidth>
                <InputLabel htmlFor='account-settings-new-password'>New Password</InputLabel>
                <OutlinedInput
                  label='New Password'
                  value={values.newPassword}
                  id='account-settings-new-password'
                  onChange={handleNewPasswordChange('newPassword')}
                  type={values.showNewPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowNewPassword}
                        aria-label='toggle password visibility'
                        onMouseDown={handleMouseDownNewPassword}
                      >
                        {values.showNewPassword ? <EyeOutline /> : <EyeOffOutline />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl> */}
            </Grid>
            <Grid xs={10}></Grid>
            <Button
              disabled={disableButton}
              variant='contained'
              size='small'
              sx={{ margin: 3.5 }}
              onClick={changePassword}
            >
              Save Changes
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  )
}
export default First
