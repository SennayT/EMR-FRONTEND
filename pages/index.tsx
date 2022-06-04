import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic';  
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import React from 'react';
import Link from 'next/link';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core'
import axios from 'axios';
import Disease from './searching/disease'
const Home: NextPage = () => {

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
     <div className={styles.container}>
              <main className={styles.main}>
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
      </main>
    
      </div>
    </div>
)
  
}

export default Home
