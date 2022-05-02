// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountDetails from 'mdi-material-ui/AccountDetailsOutline'
import Account from 'mdi-material-ui/Account'
import EmployeeIcon from 'mdi-material-ui/AccountMultiple'
import ResearcherIcon from 'mdi-material-ui/AccountMultipleOutline'

// import AccountOutline from 'mdi-material-ui/AccountOutline'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'
import AccountEditOutline from 'mdi-material-ui/AccountEditOutline'
import HospitalIcon from 'mdi-material-ui/HospitalBoxOutline'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'System Admin Dashboard',
      icon: HomeOutline,
      path: '/system-admin'
    },
    {
      title: 'Hospital Admin Dashboard',
      icon: HomeOutline,
      path: '/hospital-admin'
    },
    {
      title: 'Doctor Dashboard',
      icon: HomeOutline,
      path: '/doctor'
    },
    {
      title: 'Lab Expert Dashboard',
      icon: HomeOutline,
      path: '/lab-expert'
    },
    {
      title: 'Patient Dashboard',
      icon: HomeOutline,
      path: '/patient'
    },
    {
      sectionTitle: 'Pages'
    },
    {
      title: 'Patient Details',
      icon: AccountDetails,
      path: '/patient-details'
    },
    {
      title: 'Register Patient',
      icon: AccountEditOutline,
      path: '/reception/register-patient'
    },
    {
      title: 'Health Centers',
      icon: HospitalIcon,
      path: '/system-admin/health-centers'
    },
    {
      title: 'Employees',
      icon: EmployeeIcon,
      path: '/hospital-admin/employees'
    },
    {
      title: 'Researchers',
      icon: ResearcherIcon,
      path: '/system-admin/researchers'
    },
    {
      title: 'MoH Employees',
      icon: EmployeeIcon,
      path: '/system-admin/moh-employees'
    },
    {
      sectionTitle: 'Account'
    },
    {
      title: 'Profile',
      icon: Account,
      path: '/profile'
    }

    // {
    //   sectionTitle: 'Pages'
    // },
    // {
    //   title: 'Login',
    //   icon: Login,
    //   path: '/pages/login',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Register',
    //   icon: AccountPlusOutline,
    //   path: '/pages/register',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Error',
    //   icon: AlertCircleOutline,
    //   path: '/pages/error',
    //   openInNewTab: true
    // },
    // {
    //   sectionTitle: 'User Interface'
    // },
    // {
    //   title: 'Typography',
    //   icon: FormatLetterCase,
    //   path: '/typography'
    // },
    // {
    //   title: 'Icons',
    //   path: '/icons',
    //   icon: GoogleCirclesExtended
    // },
    // {
    //   title: 'Cards',
    //   icon: CreditCardOutline,
    //   path: '/cards'
    // },
    // {
    //   title: 'Tables',
    //   icon: Table,
    //   path: '/tables'
    // },
    // {
    //   icon: CubeOutline,
    //   title: 'Form Layouts',
    //   path: '/form-layouts'
    // }
  ]
}

export default navigation
