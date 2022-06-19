import SearchDiseaseRecord from "src/views/shared-components/stat-components/searchDiseaseRecord"

const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json())


export default function Stat() {


  return (
    <div>
      <SearchDiseaseRecord />
       {/* <SearchMedicationRecord/> */}
      {/* <ChartOne />
      <ChartTwo />
      <ChartThree/>
      <ChartNine/>  */}
    </div>
  )
}

