// ** React Imports
import { useRouter } from 'next/router'

import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import BackIcon from '@mui/icons-material/ArrowBack'
import IconButton from '@mui/material/IconButton'
import { useEffect, useState } from 'react'

const DetailsPage = (props: any) => {
  const router = useRouter()
  const [title, setTitle] = useState();
  const [desc , setDesc] = useState();
  useEffect(() => {
    setTitle(router.query.dName),
    setDesc(router.query.dDesc)
  },[])

  return (
    <Card>
      <IconButton aria-label='back' onClick={() => router.back()}>
        <BackIcon />
      </IconButton>
      <Grid sx={{ backgroundColor: 'white', ml: 10, py: 2, px: 8 }}>
        <CardContent sx={{ my: 4 }}>
          <Typography variant='h4'>{new Date(title).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</Typography>
        </CardContent>
        <CardContent sx={{ my: 4 }}>
          <Typography variant='body1' sx={{ wordSpacing: 4 }}>
            {desc}
            </Typography>
        </CardContent>
      </Grid>
    </Card>
  )
}

export default DetailsPage
