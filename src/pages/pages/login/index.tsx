// ** React Imports
import { ChangeEvent, MouseEvent, ReactNode, useEffect, useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

// import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography, { TypographyProps } from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled } from '@mui/material/styles'
import MuiCard, { CardProps } from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustration'
import { getSession, signIn } from 'next-auth/react'
import { Alert, Snackbar } from '@mui/material'
import { useRouter } from 'next/router'

const HeaderTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  lineHeight: 'normal',
  textTransform: 'uppercase',
  color: theme.palette.text.primary,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
}))
interface State {
  password: string
  showPassword: boolean
}

// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const LoginPage = () => {
  // ** State
  const [values, setValues] = useState<State>({
    password: '',
    showPassword: false
  })

  const [email, setEmail] = useState('')
  const [emailErrors, setEmailErrors] = useState<{ email: string }>()

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event
    setEmailErrors({ email: '' })
    setEmail(value)
    const reg = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(value)

    if (!reg) {
      setEmailErrors({ email: 'Invalid email' })
    }

    if (value == '') {
      setEmailErrors({ email: 'Email field cannot be empty' })
    }
  }

  // ** Hook
  // const theme = useTheme()

  // const theme = useTheme()
  // const router = useRouter()

  const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const [err, setErr] = useState(true)
  const [open, setOpen] = useState(false)

  const loginHandler = () => {
    const credentials = {
      email: email,
      password: values.password
    }

    console.log(credentials)
    console.log('here')

    signIn('credentials', { email: email, password: values.password, redirect: false }).then(res => setErr(true))
  }

  const handleClose = () => {
    setErr(false)
  }

  const router = useRouter()

  useEffect(() => {
    if (router.query.callbackUrl === undefined) {
      setErr(false)
    }
  }, [])

  return (
    <Box>
      <Card sx={{ zIndex: 1, mx: '35%' }}>
        <CardContent
          sx={{ padding: theme => `${theme.spacing(12, 9, 7)} !important`, backgroundColor: 'white', my: 8 }}
        >
          <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src='/images/logo.png' alt='heart rate' height={100} />
            <HeaderTitle variant='h4' sx={{ ml: 3, fontFamily: '"Segoe UI Symbol"' }}>
              {themeConfig.templateName}
            </HeaderTitle>
          </Box>
          <Box sx={{ mb: 6 }}>
            <Typography color={err ? 'red' : 'green'} variant='body2'>
              {err ? 'Please enter valid credentials' : 'Please sign-in to your account'}
            </Typography>
          </Box>
          <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
            <TextField
              autoFocus
              fullWidth
              id='email'
              required
              label='Email'
              value={email}
              onChange={handleEmailChange}
              error={Boolean(emailErrors?.email)}
              helperText={emailErrors?.email}
              sx={{ marginBottom: 4 }}
            />
            <FormControl fullWidth>
              <InputLabel htmlFor='auth-login-password'>Password</InputLabel>
              <OutlinedInput
                label='Password'
                value={values.password}
                id='auth-login-password'
                required
                onChange={handleChange('password')}
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
            <Box
              sx={{
                mb: 8,
                mt: 4,
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                justifyContent: 'space-between'
              }}
            >
              <Link passHref href='/forgot-password'>
                <LinkStyled>Forgot Password?</LinkStyled>
              </Link>
            </Box>
            <Button
              disabled={emailErrors?.email || values.password == '' ? true : false}
              fullWidth
              size='large'
              variant='contained'
              sx={{ marginBottom: 7 }}
              onClick={loginHandler}
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
      {/* <FooterIllustrationsV1 /> */}
    </Box>
  )
}

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export async function getServerSideProps(context) {
  const { req } = context
  const session = await getSession({ req })

  if (session) {
    return {
      redirect: { destination: '/' }
    }
  }

  return {
    props: {}
  }
}

export default LoginPage
