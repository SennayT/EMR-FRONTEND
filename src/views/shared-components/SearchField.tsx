import Box from '@mui/material/Box'

// import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'

// import Magnify from 'mdi-material-ui/Magnify'

// import InputAdornment from '@mui/material/InputAdornment'

const SearchField = () => {
  return (
    <Box
      noValidate
      component='form'
      autoComplete='off'
      sx={{ borderRadius: 6, display: 'flex', flexWrap: 'wrap', marginLeft: 30, marginRight: 30 }}
    >
      {/* <IconButton sx={{ p: '10px' }} aria-label='menu'>
        <Magnify />
      </IconButton> */}
      <TextField
        fullWidth
        placeholder='Search Patient'
        id='outlined-full-width'
        sx={{ backgroundColor: 'white', mt: 45 }}
      />
    </Box>
  )
}

export default SearchField
