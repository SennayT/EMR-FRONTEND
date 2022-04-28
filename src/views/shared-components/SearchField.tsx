import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

// import Magnify from 'mdi-material-ui/Magnify'
// import InputAdornment from '@mui/material/InputAdornment'

const SearchField = () => {
  return (
    <Box noValidate component='form' autoComplete='off' sx={{ display: 'flex', flexWrap: 'wrap', marginLeft: 30, marginRight: 30 }}>
      <TextField  fullWidth label='Full width' id='outlined-full-width' sx={{ marginBottom: 4, marginTop: 70 }} />
      </Box>
  )
}

export default SearchField;
