


import { Box, CardContent, Grid, InputAdornment, TextField } from '@mui/material'

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
const ShowRefDialog = (props: any) => {



  return (
    // <Grid container >
      <div>
          <TextField
            fullWidth
            placeholder='Reference Code'
            id='outlined-full-width'
            disabled
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <ContentCopyIcon />
                </InputAdornment>
              )
            }}
            value={props.refId}
            sx={{ backgroundColor: 'white', mx:5 , my:10}}
            onClick={() => { navigator.clipboard.writeText(props.refId); }}
          />
      </div>
    // </Grid>
  )
}




export default ShowRefDialog
