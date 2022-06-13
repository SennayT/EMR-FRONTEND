// import styles from '../../styles/Home.module.css'
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import Link from 'next/link';
import { Button } from '@mui/material';

function SearchingDisease() {
  var diseaseQuery = { disease_name: '', health_center: '', minAge: '', maxAge: '' };
  var medicationQuery = { medication_name: '', health_center: '', minAge: '', maxAge: '' };
  var diseaseRecord = {};
  var medicationRecord = {};


  const gOptions = { labels: ["Male", "Female"] };
  const gSeries = [20, 80];

  const aGOptions = { labels: ["Infants (0 - 1)", "Toddlers (2 - 4)", "Child (5 - 12)", "Teen (13 - 19)", "Adult (20 - 39)", "Middle Age Adult (40-59)", "Senior Audlt (60+)"] };
  const aGSeries = [4, 15, 30, 10, 35, 1, 60];

  const dGOptions = { labels: ["5/20/2020 - 5/20/2022", "All"] };
  const dGSeries = [30, 70];

  const fromTotalOptions = { labels: ["Affected by disease", "Total Patients"] };
  const fromTotalSeries = [20, 70];
  return (


    <div>
      <div>
        <div className='d-flex'>

          <Link href='/stats/basic-charts'>
            <Button color='primary' variant='contained' style={{ margin: '10px' }}>
              Home
            </Button>
          </Link>
          <Link href='/stats/SearchingMedication'>
            <Button color='primary' variant='contained' style={{ margin: '10px' }}>
              Search Medication Stat
            </Button>
          </Link>
          <Link href='/stats/SearchingDisease'>
            <Button color='primary' variant='contained' style={{ margin: '10px' }}>
              Search Disease Stat
            </Button>
          </Link>
          {/* <Link href='../'>
                  <Button color='primary' variant='contained' style={{margin:'10px'}}>
                      Searched Medication
                  </Button>
              </Link> */}
        </div>
        <h1>
          Disease Name
        </h1>
        <p>
          Disease Description
        </p>

        <div>
          <div>
            <h2>Age Record </h2>
            <p>From total of 100, 30 are in between the age 20 and 50</p>
          </div>

          <div >
            <h2>Date Record</h2>
            <p>From total of 100, 30 are in between the age 20 and 50</p>
          </div>

          <div>
            <h2>Gender Record </h2>
            <p>From total of 100, 30 are in between the age 20 and 50</p>
          </div>

          <div>
            <h2>Health Center</h2>
            <p>All </p>
          </div>
        </div>
      </div>
      <div  >
        <h3>Record From  Total Patients</h3>
        <Chart options={fromTotalOptions} series={fromTotalSeries} type='pie' width="500px" />

      </div>
      <div>
        <h3>Record By Gender</h3>
        <Chart options={gOptions} series={gSeries} type='pie' width="500px" />
      </div>
      <div >
        <h3>Record By Age</h3>
        <Chart options={aGOptions} series={aGSeries} type='pie' width="600px" />
      </div>
      <div >
        <h3>Record By Date</h3>
        <Chart options={dGOptions} series={dGSeries} type='pie' width="600px" />

      </div>
      <footer>
      </footer>
    </div>
  )
}

export default SearchingDisease;
