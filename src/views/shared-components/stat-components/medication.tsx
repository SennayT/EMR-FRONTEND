import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

import axios from 'axios';
import requests from 'src/utils/repository';
import { useSession } from 'next-auth/react';

export default function ChartEight(props: any) {
    const [data, setData] = useState();
     const { data: session } = useSession()
    useEffect(() => {
        const body = {
             healthCenter: "All",
            medication: props.data.medication,
            startAgeGroup: props.data.startAgeGroup,
            endAgeGroup: props.data.endAgeGroup,
            gender: props.data.gender
        }

        requests.post('researcher/medication',body,session ? session.accessToken.toString() : '')
            .then(function (response) {
                //   console.log(response.data);
                setData(response.data)

            })

    }, []);

  if (!data) return <div> </div>
    const h = data['total_prescriptions'];

const option_medication = { labels: ["Total prescriptions", "Prescriptions with the specified medication"] };
const series_medication = [data['total_prescriptions'], data['medicated_patient_count']];
//
const option_age = {labels:["Prescriptions with the specified medication", "Patients with in the age group"]}
const series_age = [data['medicated_patient_count'], data['by_age']];

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
