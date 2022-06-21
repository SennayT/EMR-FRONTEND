import React, { useState, Component, useEffect } from 'react';
import { Theme, useTheme } from '@emotion/react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

import useSWR from 'swr'
import requests from 'src/utils/repository';
import { useSession } from 'next-auth/react';
import { Grid } from '@mui/material';

const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json())


export default function ChartTwo() {
  const [data, setData] = useState();
 const { data: session } = useSession()
useEffect(() => {
    requests.get(`/researcher/userRecord`, session ? session.accessToken.toString() : '').then(response => {
      setData(response.data)
    })
  },[])

 
  // if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>


  const theme = useTheme();

  const chartDataOne = {
    chart: {
      type: "line",
      id: "",
      },
    xaxis: {
      categories: ["receptionists", "radiologists", "doctors", "nurses", "systesm admins", "hosptial admins",
        "lab expersts", "resarchers"],
    },
    colors: ['#FF1654'],
    title: {
      text: 'Users Record By Role',
      floating: true,
      align: 'center',
      style: {
        // color: '#444'
      }
    },
    fill: {

      type: "gradient",
      gradient: {
        shade: "light",

        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 100]
        // colorStops: []
      }
    },
    legend: {
      // position: '',
      width: 400
      // position: 'top',
    },
    series: [
      {
        name: "User Record By Role",
        type: "column",
        data: [data['receptionist'], data['radiologist'], data['doctor'],
        data['nurse'], data['system_admin'], data['hospital_admin'], data['lab_technican'],
        data['researcher']]
      }
    ]
  };


  const chartDataTwo = {
    chart: {
      type: "line",
      id: "",
    },
    xaxis: {
      categories: ["male", "female"]
    },
    title: {
      text: 'Users Record By Gender',
      floating: true,
      align: 'center',
      style: {
        color: '#444'
      }
    },
    colors: ['#247BA0'],
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 100]
        // colorStops: []
      }
    },
    legend: {
      // position: '',
      width: 400
      // position: 'top',
    },
    series: [
      {
        name: "User Record By Gender",
        type: "column",
        data: [data['male'], data['female']]
      }
    ]
  };



  return (

    <div>
      <Grid container spacing={2} > 
        <Grid item  xs={12} md={6} sm={12} >
          <ReactApexChart options={chartDataOne} series={chartDataOne.series} type="bar" width='500px' />
        </Grid>
        <Grid item  xs={12} md={6} sm={12} >
          <ReactApexChart options={chartDataTwo} series={chartDataTwo.series} type="bar" width='500px' />
        </Grid>
      </Grid>
    </div>
  )
};
