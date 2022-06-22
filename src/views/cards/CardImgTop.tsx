// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardImgTop = (props: any) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: '14.5625rem' }}
        image={
          props.result.image
            ? props.result.image
            : 'http://craftsnippets.com/articles_images/placeholder/placeholder.jpg'
        }
      />
      <CardContent>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Lab Test: {props.result.name}
        </Typography>
        <Typography variant='body2'>Comment: {props.result.comment}</Typography>
      </CardContent>
    </Card>
  )
}

export default CardImgTop
