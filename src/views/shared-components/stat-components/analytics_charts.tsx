import React, { useState, Component } from 'react';
import { Theme, useTheme } from '@emotion/react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

import useSWR from 'swr'
import { ApexOptions } from 'apexcharts';

const fetcher = (...args) => fetch(...args).then((res) => res.json())


export default function ChartThree() {
    

const { data, error } = useSWR('http://localhost:4000/researcher/recordCounts', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>


  const theme = useTheme();

  const chartDataOne: ApexOptions = {
    chart: {
      type: "line",
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
        name: "Analytics of Database Record",
        type: "column",
            data: [data['patient'], data['prescription'], data['diagnosis'],
                data['disease'], data['investigation'], data['examination'], data['vital']]
      }
    ]
  };

    
    const chartDataTwo: ApexOptions = {
    chart: {
      type: "line",
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
        <ReactApexChart options={chartDataOne} series={chartDataOne.series} width='1000px' />
        <ReactApexChart options={chartDataTwo} series={chartDataTwo.series} width='500px' />     
       </div>
    )
};