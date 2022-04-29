// ** React Imports
// import { ChangeEvent, forwardRef, MouseEvent, useState } from 'react'

// ** MUI Imports
import PatientRegistrationForm from 'src/views/reception/registration-form'

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

  return <PatientRegistrationForm />
}

export default RegisterPatient
