import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'
import ChartOne from './patient_charts'
import ChartTwo from './user_charts'
import ChartThree from './analytics_charts'
import ChartSeven from './disease'
import ChartEight from './medication'
import ChartNine from './healthcenter'
import SearchDiseaseRecord from './searchDiseaseRecord'
import SearchMedicationRecord from './searchMedicationRecord'
const fetcher = (...args) => fetch(...args).then((res) => res.json())


export default function Home() {


  return (
    <div>
      {/* <SearchDiseaseRecord /> */}
      <SearchMedicationRecord/>
      {/* <ChartOne />
      <ChartTwo />
      <ChartThree/>
      <ChartNine/>  */}
    </div>
  )
}

