// ** React Imports
import { useState, SyntheticEvent, useImperativeHandle, Ref } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
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

const FileUploaderSingle = (props: any, ref: Ref<unknown> | undefined) => {
  // console.log(props)

  // ** State
  const [files, setFiles] = useState<File[]>([])
  useImperativeHandle(
    ref,
    () => ({
      getFiles: () => {
        return files
      }
    }),
    [files]
  )

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

  return files.length ? (
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
  )
}

export default React.forwardRef(FileUploaderSingle)
