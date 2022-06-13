import HospitalAdminDashboard from 'src/views/dashboard/hospital-admin-dashboard/HospitalAdminDashboard'

const SystemAdmin = () => {
  return <HospitalAdminDashboard />
}
export async function getStaticProps() {
  return {
    props: {
      protected: true,
      userTypes: ["Hospital Admin"],
    },
  }
}
export default SystemAdmin
