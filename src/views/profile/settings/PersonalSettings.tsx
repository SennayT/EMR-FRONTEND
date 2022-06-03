import { CardContent, Box, Typography, Button, Grid } from "@mui/material";
import { useState } from 'react'
import { styled } from '@mui/material/styles'


const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const PersonalSettings = () => {
  const [imgSrc] = useState<string>('/images/avatars/1.png')

  return (
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <ImgStyled src={imgSrc} alt='Profile Pic' />
        <Box sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column' }}>
          <Button component="label"
            variant="contained"> Upload New Photo <input
              type="file"
              hidden
            /></Button>
          <Typography sx={{ m: 2 }} variant="caption" >Allowed PNG or JPEG. Max size of 800K.</Typography>
        </Box>
      </Box>
      <Grid container>
        <Grid item>

        </Grid>
        <Grid item>

        </Grid>

      </Grid>

    </CardContent>
  )
}

export default PersonalSettings;
