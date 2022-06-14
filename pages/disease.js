// import React, { useState, Component } from 'react';
// import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
// import dynamic from 'next/dynamic';
// const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
// import { mutate } from 'swr';
// import useSWR from 'swr';

// const records = {
  
//     healthCenter:"All",
//     disease:"deserunt deserunt ipsa corporis voluptates dolore aut dolores assumenda unde",
//     startAgeGroup: 90,
//     endAgeGroup:100,
//     gender:"Male to Female"
// }

// // const fetcher = (...args) => fetch('http://localhost:4000/researcher/disease', { method: 'POST', body: records }).then((res) => res.json())


// export default function ChartSeven() {
//     await sendPost('http://localhost:4000/researcher/disease', newData);
//     const data = mutate('http://localhost:4000/researcher/disease', records, sendPost);
    
// // const { data, error } = useSWR('http://localhost:4000/researcher/disease', fetcher)

//   if (error) return <div>Failed to load</div>
//   if (!data) return <div>Loading...</div>

//     return (

//         <div>
//             <h1>{data['total_diagnosis']}</h1>
//         {/* <ReactApexChart options={chartDataOne} series={chartDataOne.series} width='500px' />;
//         <ReactApexChart options={chartDataTwo} series={chartDataTwo.series} width='500px' />;      */}
//        </div>
//     )
// };