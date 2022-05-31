import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Chart from 'react-apexcharts';
import Link from 'next/link';
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'

function disease() {
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
                <div className='d-flex' >
                  <TextField style={{margin:'30px'}} placeholder='Disease Name' />
                      <TextField style={{ margin: '30px' }} placeholder='Health-Center Name' />
                </div>
                <div className='d-flex'>
                  <TextField style={{margin:'30px'}} placeholder='Min Age' />
                  <TextField style={{margin:'30px'}} placeholder='Max Age' />
               </div>
                  <Button style={{ margin: '30px' }}  variant='contained' color ='primary'>Search</Button>
      </main>
        
      <footer className={styles.footer}>
      </footer>
    </div>
    </div>
  )
}

export default disease;