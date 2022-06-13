import Link from 'next/link';
import { Button, TextField } from '@mui/material';
import { useSession } from 'next-auth/react';
import requests from 'src/utils/repository';

function medication() {

  const {data:session} = useSession();
   const handleSubmit = (event: any) => {

    event.preventDefault()
    const body = {
      disease: event.target.disease_name.value,
      healthCenter: event.target.health_center_name.value,
      startAgeGroup: event.target.min_age.value,
      endAgeGroup: event.target.max_age.value,
      medication: '',
      startDate: '',
      endDate:'',
      gender:'male and female'
    }

     requests.post(`/researcher/diseaseRecord`, body , session ? session.accessToken : "").then(response => {
    console.log(response.data)
  })

  }
  return (
      <div>
          <Link href='/stats/basic-charts'>
                  <Button color='primary' variant='contained' style={{margin:'10px'}}>
                      Home
                  </Button>
              </Link>
              <Link href='/stats/SearchingDisease'>
                  <Button color='primary' variant='contained' style={{margin:'10px'}}>
                    Search Disease Stat
                  </Button>
             </Link>
              <Link href='/stats/SearchedDisease'>
                  <Button color='primary' variant='contained' style={{margin:'10px'}}>
                    Searched Disease
                  </Button>
              </Link>
              <Link href=''>
                  <Button color='primary' variant='contained' style={{margin:'10px'}}>
                      Searched Medication
                  </Button>
              </Link>
          <div >
              <main >

          <form onSubmit={handleSubmit}>
             <div className='d-flex' >
                  <TextField style={{margin:'30px'}} placeholder='Medication Name' id='medication_name' name='medication_name' />
                  <TextField style={{ margin: '30px' }} placeholder='Health-Center Name' id='health_center_name' name='health_center_name' />
                  <TextField style={{margin:'30px'}} placeholder='Min Age' id='min_age' name='min_age' />
                </div>
                <div className='d-flex'>
                    <TextField style={{ margin: '30px' }} placeholder='Max Age' id='max_age' name='max_age' />
                    <TextField style={{ margin: '30px' }} placeholder='gender' id='gender' name='gender' />
                    <TextField style={{ margin: '30px' }} placeholder='Start Date' id='start_date' name='start_date' />
                    <TextField style={{margin:'30px'}} placeholder='End Date' id='end_date' name='end_date' />
               </div>
                  <Button style={{ margin: '30px' }}  type='submit' variant='contained' color ='primary'>Search</Button>
          </form>
      </main>

      <footer>
      </footer>
    </div>
    </div>
  )
}

export default medication
