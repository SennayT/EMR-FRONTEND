// ** React Imports
import { useRouter } from 'next/router'

import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import BackIcon from '@mui/icons-material/ArrowBack'
import IconButton from '@mui/material/IconButton'

const DetailsPage = (props: any) => {
  const BackButton = () => {
    const router = useRouter()
    router.push(props.url)
  }

  return (
    <Card>
      <IconButton aria-label='back' onClick={BackButton}>
        <BackIcon />
      </IconButton>
      <Grid width={5 / 6} sx={{ backgroundColor: 'white', ml: 20, py: 2, px: 8 }}>
        <CardContent sx={{ my: 4 }}>
          <Typography variant='h4'>Details Title{props.title}</Typography>
        </CardContent>
        <CardContent sx={{ my: 4 }}>
          <Typography variant='body1' sx={{ wordSpacing: 4 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper ipsum sit amet elit vestibulum,
            in tincidunt lectus faucibus. Pellentesque ut ligula mattis, sodales risus vel, ornare nibh. Pellentesque
            mauris nisi, rhoncus in enim nec, vestibulum pellentesque nulla. Donec pretium leo et condimentum viverra.
            Nulla mollis purus in sem sagittis rutrum. Sed posuere orci ac eleifend blandit. Vestibulum fermentum odio
            tortor, in interdum sapien tristique ac. Curabitur metus turpis, luctus nec pharetra nec, interdum eget
            massa. Sed finibus, nibh placerat aliquet tempor, metus nulla aliquet ante, eu vulputate velit quam non leo.
            Sed ut tristique libero, in iaculis sem.{props.description}
          </Typography>
        </CardContent>
      </Grid>
    </Card>
  )
}

export default DetailsPage
