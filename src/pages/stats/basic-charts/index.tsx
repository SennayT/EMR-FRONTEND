import React, {
    useState, useEffect
} from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {  CountsRecord,  PatientRecord,  UserRecord } from '../dataTypes';
import { Button } from '@mui/material';
import requests from 'src/utils/repository';
import { useSession } from 'next-auth/react';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
function BasicCharts() {
    var counts: CountsRecord = {
        patient: 0,
        prescription: 0,
        user: 0,
        diagnosis: 0,
        disease: 0,
        investigation: 0,
        examination: 0,
        vital: 0,
        helth_center: 0
    };
    var userRecord: UserRecord = {
        receptionist: 0,
        radiologist: 0,
        doctor: 0,
        nurse: 0,
        system_admin: 0,
        hospital_admin: 0,
        lab_technican: 0,
        male: 0,
        female: 0,
        researcher: 0
    }
    var patientRecord: PatientRecord= {
        infants: 0,
        toddler: 0,
        child: 0,
        teen: 0,
        adult: 0,
        middle_age_adult: 0,
        senior_adult: 0,
        male: 0,
        female: 0
    };

    const {data:session} = useSession();


    useEffect(() => {
         requests.get(`/researcher/recordCounts`, session ? session.accessToken : "").then(response => {
        counts = response.data;
    })
    },[counts])

    useEffect(() => {
        requests.get(`/researcher/userRecord`, session ? session.accessToken : "").then(response => {
        userRecord = response.data;

    })
    },[userRecord])

  useEffect( () => {
        requests.get(`/researcher/patientRecord` , session ? session.accessToken : "").then(response => {
            patientRecord = response.data;
            console.log(patientRecord.adult);
        })
        console.log(patientRecord);
    }, [patientRecord])




    const gSeries = [{
        data: [patientRecord.male, patientRecord.female]
    }];
    const gOptions = {
        chart: {
            type: 'bar',
            events: {
                click: function (chart: any, w: any, e: any) {
                    console.log(chart, w, e)
                }
            }
        },
        plotOptions: {
            bar: {
                columnWidth: '35%',
                distributed: true,
            }
        },
        dataLabels: {
            enabled: true
        },
        legend: {
            show: true
        },
        title: {
                  text: 'Number of Patients Grouped by Gender',
              },
        xaxis: {
            categories: [
                ['Male'],
                ['Female'],
            ]
        }

    }

    const aSeries = [{
        data: [
            patientRecord.infants, patientRecord.toddler, patientRecord.child
            , patientRecord.teen, patientRecord.adult, patientRecord.middle_age_adult,
            patientRecord.senior_adult]
    }];
    const aOptions = {
        chart: {
            type: 'bar',
            events: {
                click: function (chart: any, w: any, e: any) {
                    console.log(chart, w, e)
                }
            }
        },
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true,
            }
        },
        dataLabels: {
            enabled: true
        },
        legend: {
            show: true
        },
        title: {
                  text: 'Number of Patients Grouped by Age',
              },
        xaxis: {
            categories: [
                ["Infants (0 - 1)"], ["Toddlers (2 - 4)"], ["Child (5 - 12)"],
                ["Teen (13 - 19)"], ["Adult (20 - 39)"], ["Middle Age Adult (40-59)"],
                ["Senior Audlt (60+)"]

            ]
        }

    }

 const rSeries = [{
        data: [userRecord.hospital_admin, userRecord.doctor, userRecord.receptionist, userRecord.nurse,
                userRecord.lab_technican, userRecord.radiologist, userRecord.system_admin, userRecord.researcher]
    }];
    const rOptions = {
        chart: {
            type: 'bar',
            events: {
                click: function (chart: any, w: any, e: any) {
                    console.log(chart, w, e)
                }
            }
        },
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true,
            }
        },
        dataLabels: {
            enabled: true
        },
        legend: {
            show: true
        },
        title: {
                  text: "Number of Employee's Grouped by Role",
              },
        xaxis: {
            categories: [
                ["Health-Center Admin"], ["Doctor"], ["Receptionsit"],['Nurse'],
                ["Lab Technican"], ["Radiologist"], ["System Admin"],["Researcher"]

            ]
        }

    }

     const ySeries = [{
        data: [2000, 3000, 1500, 2700, 4100, 700,1000,2000,3000]
    }];
    const yOptions = {
        chart: {
            type: 'line',
            events: {
                click: function (chart: any, w: any, e: any) {
                    console.log(chart, w, e)
                }
            }
        },
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true,
            }
        },
        dataLabels: {
            enabled: true
        },
        legend: {
            show: true
        },
        title: {
                  text: "Number of Patient's Admiteed in the past 10 years",
              },
        xaxis: {
            categories: [
                ["2012"], ["2013"], ["2014"],['2015'],
                ["2016"], ["2017"], ["2018"], ["2019"],
                ["2020"],["2021"]

            ]
        }

    }

    if (!counts) return <div> </div>
    else {

   return (
            <div>
                <div>
                    <Link href='/stats/SearchingDisease'>
                        <Button color='primary' variant='contained' style={{ margin: '10px' }}>
                            Search Disease Stat
                        </Button>
                    </Link>
                    <Link href='/stats/SearchingMedication'>
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
                <div className='d-flex'>
                    <Chart style={{float:'left', margin:'40px'}} options={yOptions} series={ySeries} type='line' height={450} width={600} />
                    <Chart style={{float:'left', margin:'40px'}} options={aOptions} series={aSeries} type='bar' height={450} width={600} />
                    <Chart style={{float:'left', margin:'40px'}} options={gOptions} series={gSeries} type='bar' height={250} width={400} />
                    <Chart style={{float:'left', margin:'40px'}} options={rOptions} series={rSeries} type='bar' height={450} width={600}/>
                </div>
          </div>
        )
    }
}

export default BasicCharts
