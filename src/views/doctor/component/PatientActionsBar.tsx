
// ** MUI Imports
import {Grid, Button} from '@mui/material'

const PatientActionsBar = () => {
  // ** State


  const actions = [
    {name: 'Issue Investigation',
    handler: ""
  },
  {name: 'other',
    handler: ""
  }
  ]

  return (
    <Grid className="container-grid" container alignItems='flex-end'>
       { actions.map(function (action) {

        return (

      <Grid item key={action.name} >
      <Button
          variant="outlined"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          >
          {action.name}
        </Button>
      </Grid>
      );
        }
       )
      }
      </Grid>
  )
}

export default PatientActionsBar;
