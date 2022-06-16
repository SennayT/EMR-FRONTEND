import React, { useState, Component, useEffect } from 'react';
import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { mutate } from 'swr';
import useSWR from 'swr';
import axios from 'axios';

export default function ChartEight(props) {
    const [data, setData] = useState();
    useEffect(() => {
        axios.post('http://localhost:4000/researcher/medication', {
            healthCenter: "All",
            medication: props.data.medication,
            startAgeGroup: props.data.startAgeGroup,
            endAgeGroup: props.data.endAgeGroup,
            gender: props.data.gender
        })
            .then(function (response) {
                //   console.log(response.data);
                setData(response.data)
      
            })

    }, []);
    
  if (!data) return <div>Loading...</div>
    const h = data['total_prescriptions'];

const option_medication = { labels: ["Total Prescription", "Prescriptions with the specified medication"] };
const series_medication = [data['total_prescriptions'], data['medicatedPatientCount']];

const option_age = {labels:["Prescriptions with the specified medication", "Patients with in the age group"]}
const series_age = [data['medicatedPatientCount'], data['by_age']];

const option_gender = {labels:['Prescriptions with the specified medication and with in the age group', 'Patients with the specified gender']}
const series_gender = [data['by_age'], data['by_gender']];
    return (

        <div>
        <ReactApexChart options={option_medication}  series={series_medication} type='pie' width='500px' />
        <ReactApexChart options={option_age} series={series_age} type='pie' width='500px' />
        <ReactApexChart options={option_gender} series={series_gender} type='pie' width='640px' />
       </div>
    )
};