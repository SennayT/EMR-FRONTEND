// ** React Imports
import { SyntheticEvent, useImperativeHandle, useRef, useState } from 'react'

import FormData from 'form-data'


// ** MUI Imports
import { Button, Grid, Card, CardContent, CardActions, FormControl, Select, InputLabel, MenuItem, Snackbar, Alert, Box, Link } from '@mui/material'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

import EmailOutline from 'mdi-material-ui/EmailOutline'
import FileUploaderSingle from './FileUploaderSingle'

import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'

import requests from 'src/utils/repository'

import { useSession } from 'next-auth/react'

import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'

// ** Third Party Imports
import { useDropzone } from 'react-dropzone'
import React from 'react'

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



const LabResultForm = (props: any) => {
  const [open, setOpen] = useState(false)

  // const [file, setFile] = useState()
  const imageRef = useRef();

  const { data: session } = useSession();



  const [files, setFiles] = useState<File[]>([])

  const registerResult = () => {
    // const image = imageRef.current.getFiles();


    const data: any = {
      name: currentLabTest.name,
      type: currentLabTest.testCategory,
      result: 'some result',
      isAbnormal: true,
      comment: comment,
      image: "",
      labTestId: currentLabTest.id,
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
        requests.post(`/lab-result`, data, session ? session.accessToken : "").then(res => props.closeHandler(true, 'success'))
        .catch(props.closeHandler(true, 'error'))
      })
      .catch(props.closeHandler(true, 'error'))

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

  const [currentLabTest, setCurrentLabTest] = useState({
    id: 0,
    name: '',
    normalRange: '',
    measuredIn: '',
    testCategory: ''
  })

  const [comment, setComment] = useState('')

  // useImperativeHandle(
  //   ref,
  //   () => ({
  //     getFiles: () => {
  //       return files
  //     }
  //   }),
  //   [files]
  // )

  // ** Hook
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
            <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
              <Alert severity="error" sx={{ width: '100%' }}>
                This is an error message!
              </Alert>
            </Snackbar>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id='labTest-select-label'>Lab Tests</InputLabel>
                  <Select
                    labelId='labTest-select-label'
                    label='Lab Tests'
                    value={currentLabTest}
                    defaultValue={{
                      id: 0,
                      name: '',
                      normalRange: '',
                      measuredIn: '',
                      testCategory: ''
                    }}
                    MenuProps={MenuProps}
                    onChange={e => {
                      const val = e.target.value;
                      setCurrentLabTest(val)
                    }}
                    fullWidth
                    size='small'
                  >
                    {props.labTests.map((item: any) => (
                      <MenuItem key={item.id} value={item}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size='small'
                  fullWidth
                  value={currentLabTest.normalRange}
                  label='Normal Range'
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
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label='Normal range? '
                  value='start'
                  labelPlacement='start'
                  sx={{ marginRight: 4 }}
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

export default LabResultForm
