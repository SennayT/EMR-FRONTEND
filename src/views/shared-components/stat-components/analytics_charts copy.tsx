import React, { useState, Component, useEffect } from 'react';
import { Theme, useTheme } from '@emotion/react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

import useSWR from 'swr'
import { ApexOptions } from 'apexcharts';
import requests from 'src/utils/repository';
import { useSession } from 'next-auth/react';
import { Grid } from '@mui/material';

const fetcher = (...args) => fetch(...args).then((res) => res.json())


export default function ChartThree() {

  const [data, setData] = useState();
 const { data: session } = useSession()
 useEffect(() => {
    requests.get(`/researcher/recordCounts`, session ? session.accessToken.toString() : '').then(response => {
      setData(response.data)
    })
  },[])



  // if (error) return <div>Failed to load</div>
  if (!data) return <div> </div>


  const theme = useTheme();

  const chartDataOne: ApexOptions = {
    chart: {
      type: "bar",
      id: "",
      // foreColor: theme.palette.primary.main
    },
    xaxis: {
      categories: ["patient", "prescription", "diagnosis", "disease", "investigation", "examination", "vitals"]
      },
      colors: ['#9C27B0'],
    title: {
      text: 'Analytics of Database Record',
      floating: true,
      align: 'center',
      style: {
        color: '#444'
      }
    },
    fill: {
      type: "solid",

    },
    legend: {
      // position: '',
      width: 400
      // position: 'top',
    },
    series: [
      {
        name: "Analytics of Database Record",
        type: "column",
            data: [data['patient'], data['prescription'], data['diagnosis'],
                data['disease'], data['investigation'], data['examination'], data['vital']]
      }
    ]
  };


    const chartDataTwo: ApexOptions = {
    chart: {
      type: "bar",
      id: "",
      // foreColor: theme.palette.primary.main
    },
    xaxis: {
      categories: ["healthcenter", "users"]
        },
        colors: ['#F44336'],
     title: {
      text: 'Healthcenter Vs  Users',
      floating: true,
      align: 'center',
      style: {
        color: '#444'
      }
    },
    fill: {
      type: "solid",

        },

    legend: {
      // position: '',
      width: 400,
      position: 'top',
      title:'Healthcenter Vs  Users'
    },
    series: [
      {
        name: "Healthcenter Vs  Users",
        type: "column",
        data: [data['health_center'], data['user']]
      }
    ]
  };



    return (

      <div>
        <Grid container spacing={2}>
          <Grid item xs = {12} md ={6} sm = {12}>
            <ReactApexChart options={chartDataOne} series={chartDataOne.series} type="bar" width='500px' />
          </Grid>
          <Grid item xs = {12} md ={6} sm = {12}>
            <ReactApexChart options={chartDataTwo} series={chartDataTwo.series} type="bar" width='500px' />
          </Grid>
        </Grid>
       </div>
    )
}
