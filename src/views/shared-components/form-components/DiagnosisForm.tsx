// ** React Imports

// ** MUI Imports
import {useState} from 'react'
import Grid from '@mui/material/Grid'
import { Button, Card, CardContent, CardActions, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import TextField from '@mui/material/TextField'

const DiagnosisForm = () => {
  // ** States
  const [personName, setPersonName] = useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    setPersonName(event.target.value as string[])
  }

  const names = [
    'blood test',
    'urine test',
    'blood test',
    'urine test',
    'blood test',
    'urine test',
    'blood test',
    'urine test',
    'blood test',
    'urine test',
  ]

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

  return (
    <Grid container >
      <Card sx={{  marginTop: 2, paddingRight: 2, backgroundColor: 'white' }}>
        <form onSubmit={e => e.preventDefault()}>
          <CardContent>
              <Grid item xs={12}  >
              <Grid item xs={12} sm={6}>
              <Select

            label='Vitals'
            value={personName}
            MenuProps={MenuProps}
            onChange={handleChange}
            fullWidth
            size='small'
          >
            {names.map(name => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
              </Grid>
              <Grid item xs={12}>

               <TextField
                sx={{marginTop: 2}}
                fullWidth
                rows={8}
                multiline
                label='Comment'
                placeholder='description on the diagnosis'
                />
              </Grid>
                </Grid>

          </CardContent>
          <CardActions sx={{ mx: 80 }}>
            <Button size='large' type='submit' variant='contained' sx={{padding:2}}>
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

export default DiagnosisForm
