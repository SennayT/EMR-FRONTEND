import React, { useState, Component, useEffect } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

import axios from 'axios';
import { useTheme } from '@emotion/react';



export default function ChartNine() {
    const [data, setData] = useState();
    useEffect(() => {
        axios.post('http://localhost:4000/researcher/healthcenter', {
            healthCenter: "platforms"
        })
            .then(function (response) {
                //   console.log(response.data);
                setData(response.data)

            })

    }, []);

  if (!data) return <div>Loading...</div>
    const h = data['user_count'];

const theme = useTheme();

  const chartDataOne = {
    chart: {
      type: "line",
      id: ""
    },
    xaxis: {
        categories: ["recep", "radio", "doc", "nur", "s_admin", "h_admin", "lab", "res"],
      },
      colors: ['#FF1654'],
    title: {
      text: 'Users Record By Role in Specified Healthcenter',
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
      id: ""
    },
    xaxis: {
      categories: ["male", "female"]
        },
    title: {
      text: 'Users Record By Gender in Specified Healthcenter',
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
        <ReactApexChart options={chartDataOne} series={chartDataOne.series} width='700px' />
        <ReactApexChart options={chartDataTwo} series={chartDataTwo.series} width='700px' />

      </div>
)


};
