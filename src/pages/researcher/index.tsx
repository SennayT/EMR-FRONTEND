import type { NextPage } from 'next'
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import React from 'react';
import Link from 'next/link';
// import axios from 'axios';
// import SearchingDisease from './stats/SearchingDisease'
import requests from 'src/utils/repository';
import { useSession } from 'next-auth/react';
import { Button, TextField } from '@mui/material';

const Home: NextPage = () => {

  const {data:session} = useSession();
   function handleSubmit(event: any) {

    event.preventDefault();
    const body = {
      disease: event.target.disease_name.value,
      healthCenter: event.target.health_center_name.value,
      startAgeGroup: event.target.min_age.value,
      endAgeGroup: event.target.max_age.value,
      medication: '',
      startDate: '',
      endDate: '',
      gender: 'male and female'
    };

    requests.post(`researcher/diseaseRecord`, body, session ? session.accessToken : "").then(response => {
      console.log(response.data);
    });

  }


  return (
  <div>
      <div>
              <Link href='../basicCharts/basicCharts'>
                  <Button color='primary' variant='contained' style={{margin:'10px'}}>
                      Home
                  </Button>
              </Link>
              <Link href='/searching/medication'>
                  <Button color='primary' variant='contained' style={{margin:'10px'}}>
                    Search Medication Stat
                  </Button>
             </Link>
              <Link href='../'>
                  <Button color='primary' variant='contained' style={{margin:'10px'}}>
                    Searched Disease
                  </Button>
              </Link>
              <Link href='../'>
                  <Button color='primary' variant='contained' style={{margin:'10px'}}>
                      Searched Medication
                  </Button>
              </Link>
          </div>
     <div >
              <div>
                  <img src="https://media.istockphoto.com/photos/coronavirus-or-flu-virus-concept-picture-id1208475449?k=20&m=1208475449&s=612x612&w=0&h=ZgxDwMyxNel__M4gRzB2kcNlPleeJvQ57rpmqwKVY4U=" alt="" />
          <form onSubmit={handleSubmit}>

                <div className='d-flex' >
                  <TextField style={{margin:'30px'}} placeholder='Disease Name' id='disease_name' name='disease_name' />
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
      </div>

      </div>
    </div>
)

}

export default Home
