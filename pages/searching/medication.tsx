import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Chart from 'react-apexcharts';
import Link from 'next/link';
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import axios from 'axios'

function medication() {
   const handleSubmit = (event) => {
    
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
  
     axios.post(`http://localhost:4000/researcher/diseaseRecord`, body).then(response => {
    console.log(response.data)
  })
   
  }
  return (
      <div>
          <Link href='../basicCharts/basicCharts'>
                  <Button color='primary' variant='contained' style={{margin:'10px'}}>
                      Home
                  </Button>
              </Link>
              <Link href='/searching/disease'>
                  <Button color='primary' variant='contained' style={{margin:'10px'}}>
                    Search Disease Stat
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
          <div className={styles.container}>
              <main className={styles.main}>
                  <img style={{width:'300px'}} src="data:image/jpeg;base64,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" alt="" />
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
        
      <footer className={styles.footer}>
      </footer>
    </div>
    </div>
  )
}

export default medication