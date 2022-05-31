import user from '../data/userData'
import DoctorDashboard from './doctor'
import SystemAdminDashboard from '../views/dashboard/system-admin-dashboard/SystemAdminDashboard'
import LabExpertDashboard from './lab-expert'

// import NurseDashboard from './nurse'
// import ReceptionDashboard from '../views/dashboard/reception-dashboard/ReceptionDashboard'
import RadiologistDashboard from './radiologist'
import HospitalAdminDashboard from 'src/views/dashboard/hospital-admin-dashboard/HospitalAdminDashboard'

const Dashboard = () => {
  switch (user.role) {
    case 'Doctor':
      return <DoctorDashboard />
    case 'System Admin':
      return <SystemAdminDashboard />
    case 'LabExpert':
      return <LabExpertDashboard />
    case 'Nurse':
      return <DoctorDashboard />
    case 'Receptionist':
      return <DoctorDashboard />
    case 'Radiologist':
      return <RadiologistDashboard />
    case 'Hospital Admin':
      return <HospitalAdminDashboard />
    default:
      return <p>add 404 here</p>
  }
}

export default Dashboard
