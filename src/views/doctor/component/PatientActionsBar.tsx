
// ** MUI Imports
import {Grid, Button, Link} from '@mui/material'

const PatientActionsBar = () => {
  // ** State


  const actions = [
    {name: 'Issue Investigation',
    handler: ""
  },
  {name: 'other',
    path: '/doctor/issue-investigation/'
  }
  ]

  return (
    <Grid className="container-grid" container alignItems='flex-end'>
       { actions.map(function (action) {

        return (

      <Grid item key={action.name} >
      <Link  href={action.path === undefined ? '/' : `${action.path}`}>

      <Button
          variant="outlined"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          >
          {action.name}
        </Button>
        </Link>
      </Grid>
      );
        }
       )
      }
      </Grid>
  )
}

export default PatientActionsBar;
