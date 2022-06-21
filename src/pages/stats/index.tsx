import ChartThree from "src/views/shared-components/stat-components/analytics_charts"
import ChartNine from "src/views/shared-components/stat-components/healthcenter"
import ChartOne from "src/views/shared-components/stat-components/patient_charts"
import ChartTwo from "src/views/shared-components/stat-components/user_charts"

const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json())


export default function Stat() {


  return (
    <div>
      <ChartOne />
      <ChartTwo />
    </div>
  )
}

