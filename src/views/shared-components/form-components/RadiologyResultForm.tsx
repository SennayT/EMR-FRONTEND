// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import { Button, Card, CardContent, CardActions, FormControl, Select, InputLabel, MenuItem, Box, Typography, Link, TypographyProps } from '@mui/material'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import { styled } from '@mui/material/styles'


import EmailOutline from 'mdi-material-ui/EmailOutline'

import requests from 'src/utils/repository'

import { useSession } from 'next-auth/react'
import { useDropzone } from 'react-dropzone'
interface FileProp {
  name: string
  type: string
  size: number
}

// Styled component for the upload image inside the dropzone area
const Img = styled('img')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    marginRight: theme.spacing(15.75)
  },
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4)
  },
  [theme.breakpoints.down('sm')]: {
    width: 160
  }
}))

// Styled component for the heading inside the dropzone area
const HeadingTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(4)
  }
}))



const RadiologyResultForm = (props: any) => {
  const { data: session } = useSession()


  const [files, setFiles] = useState<File[]>([])


  const registerResult = () => {
    // const image = imageRef.current.getFiles();


    const data = {
      name: currentLabTest.name,
      focalArea: 'stomach',
      report: 'some result',
      images: "",
      comment: comment,
      image: "",
      investigationRequestId: props.invReqId
    }


    const formData = new FormData();

    formData.append('upload_preset', 'lab results');
    formData.append('file', files[0]);

    formData.append("cloud_name", "capstoneemr")

    fetch("https://api.cloudinary.com/v1_1/capstoneemr/image/upload", {
      method: "post",
      body: formData
    })
      .then(res => res.json())
      .then(r => {
        console.log(r)
        console.log("done", r)
        data.image = r.secure_url;
        requests.post(`/radiology`, data, session ? session.accessToken : "").then(response => {
          console.log("done", response.data)
        })
      })
      .catch(err => {
        console.log(err)
      })

  }


  // ** States

  const ITEM_HEIGHT = 48
  const ITEM_PADDING_TOP = 8
  const MenuProps = {
    PaperProps: {
      style: {
        width: 250,
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
      }
    }
  }

  const [comment, setComment] = useState('')
  const [currentLabTest, setCurrentLabTest] = useState({
    id: 0,
    name: '',
    focalArea: 'stomach',
    report: 'some result',
    comment: comment,
    image: "",
    investigationRequestId: props.invReqId
  })

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    multiple: false,
    onDrop: (acceptedFiles: File[]) => {
      setFiles(acceptedFiles.map((file: File) => Object.assign(file)))
    }
  })

  const handleLinkClick = (event: SyntheticEvent) => {
    event.preventDefault()
  }

  const img = files.map((file: FileProp) => (
    <img
      width={400}
      height={200}
      key={file.name}
      alt={file.name}
      className='single-file-image'
      src={URL.createObjectURL(file as any)}
    />
  ))


  return (
    <Grid container>
      <Card sx={{ my: 4, backgroundColor: 'white' }}>
        <form onSubmit={e => e.preventDefault()}>
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id='labTest-select-label'>Investigative Request</InputLabel>
                  <Select
                    labelId='labTest-select-label'
                    label='Investigative Request'
                    value={currentLabTest}
                    MenuProps={MenuProps}
                    onChange={e => {
                      const val = e.target.value
                      setCurrentLabTest(val)
                    }}
                    fullWidth
                    size='small'
                  >
                    {props.labTests.map((name: any) => (
                      <MenuItem key={name.id} value={name}>
                        {name.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size='small'
                  fullWidth
                  value={currentLabTest.focalArea}
                  label='Focal Area'
                  InputProps={{
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position='start'>
                        <EmailOutline />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                {files.length ? (
                  img
                ) : (
                  <Box
                    {...getRootProps({ className: 'dropzone' })}
                    sx={acceptedFiles.length ? { height: 450 } : { backgroundColor: '#f1f2eb' }}
                  >
                    <input {...getInputProps()} />
                    <Box sx={{ display: 'flex', flexDirection: ['column', 'column', 'row'], alignItems: 'center', padding: 2 }}>
                      <Img
                        alt='Upload img'
                        width='100px'
                        src='https://demos.themeselection.com/materio-mui-react-nextjs-admin-template/demo-1/images/misc/upload.png'
                      />
                      <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: ['center', 'center', 'inherit'] }}>
                        <HeadingTypography variant='h5'>Drop result files here or click to upload.</HeadingTypography>
                        <Typography color='textSecondary'>
                          Drop files here or{' '}
                          <Link href='/' onClick={handleLinkClick}>
                            browse
                          </Link>{' '}
                          thorough your machine
                        </Typography>
                      </Box>
                    </Box>
                    {files.length ? img : null}
                  </Box>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  rows={5}
                  multiline
                  fullWidth
                  label='Comment'
                  value={comment}
                  onChange={e => {
                    setComment(e.target.value)
                  }}
                  defaultValue='no comment'
                  id='textarea-outlined-static'
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ mx: 80 }}>
            <Button size='large' type='submit' variant='contained' onClick={registerResult} sx={{ padding: 2 }}>
              Register
            </Button>
            {/* <Button size='large' color='secondary' variant='outlined'>
            Cancel
          </Button> */}
          </CardActions>
        </form>
      </Card>
    </Grid>
  )
}

export default RadiologyResultForm
