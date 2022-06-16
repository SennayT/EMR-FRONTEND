import { useState } from 'react'
import { useRouter } from 'next/router'

import Box from '@mui/material/Box'

// import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'

// import Magnify from 'mdi-material-ui/Magnify'

// import InputAdornment from '@mui/material/InputAdornment'
import requests from 'src/utils/repository'
import { useSession } from 'next-auth/react'


const SearchField = (props: any) => {

  const [refId, setRefId] = useState("")
  const router = useRouter()
  const { data: session } = useSession();


  const searchByRefId = () =>{
    requests.get(`/patient/refId/${refId}`,  session ? session.accessToken.toString() : "").then((response) => {
      console.log(response.data)
      router.push({pathname: "/patient-details", query: {pid: response.data.id}})
    }).catch(e => props.errHandler())
  }

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
        placeholder='Search Patient by Reference Code'
        id='outlined-full-width'
        onChange={(e) => {
          setRefId(e.target.value)
        }}
        onKeyPress={(ev) => {
          if (ev.key === 'Enter') {
            // Do code here
            searchByRefId();
            ev.preventDefault();
          }
        }}
        sx={{ backgroundColor: 'white', mt: 45 }}
      />
    </Box>
  )
}

export default SearchField
