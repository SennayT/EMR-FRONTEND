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

  const disableButton = values.newPassword !== values.confirmNewPassword || !values.newPassword

  // Handle New Password
  const handleNewPasswordChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
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
              <FormControl fullWidth>
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
              </FormControl>
            </Grid>
            <Grid item xs={12} sx={{}}>
              <FormControl fullWidth>
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
              </FormControl>
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
