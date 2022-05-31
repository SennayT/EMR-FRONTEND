import { green } from '@material-ui/core/colors';
import React from 'react'
import dynamic from 'next/dynamic';  
import Link from 'next/link';
import { Button } from '@material-ui/core';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
function basicCharts() {
  
    const gSeries = [{
        data: [210, 220]
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
        data: [10, 20, 40, 8, 70, 30,16]
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
        data: [20, 100, 40, 180, 30, 30,6]
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
                ["Lab Technican"], ["Radiologist"], ["Admin"]
                
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
    

  return (
      <div>
          <div>
              <Link href='/searching/disease'>
                  <Button color='primary' variant='contained' style={{margin:'10px'}}>
                      Search Disease Stat
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
          <div className='d-flex'>
              <Chart style={{float:'left', margin:'40px'}} options={yOptions} series={ySeries} type='line' height={450} width={600} />
              <Chart style={{float:'left', margin:'40px'}} options={aOptions} series={aSeries} type='bar' height={450} width={600} />
              <Chart style={{float:'left', margin:'40px'}} options={gOptions} series={gSeries} type='bar' height={250} width={400} />
              <Chart style={{float:'left', margin:'40px'}} options={rOptions} series={rSeries} type='bar' height={450} width={600}/>
          </div>
    </div>
  )
}

export default basicCharts