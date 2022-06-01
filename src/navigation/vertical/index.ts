// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountDetails from 'mdi-material-ui/AccountDetailsOutline'
import Account from 'mdi-material-ui/Account'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'
import AccountEditOutline from 'mdi-material-ui/AccountEditOutline'
import HospitalIcon from 'mdi-material-ui/HospitalBoxOutline'
import ResearcherIcon from 'mdi-material-ui/AccountMultiple'
import MoHIcon from 'mdi-material-ui/AccountMultipleOutline'
import ReportIcon from '@mui/icons-material/AssessmentOutlined'
import { User } from '../../data/models/UserModel'
import { Session } from 'next-auth'

const navigation = (session: Session): VerticalNavItemsType => {
  const pagesSection: VerticalNavItemsType = [
    {
      sectionTitle: 'pages'
    }
  ]
  if (session.role === 'Receptionist') {
    pagesSection.push({
      title: 'Patient Details',
      icon: AccountDetails,
      path: '/patient-details'
    })
    pagesSection.push({
      title: 'Register Patient',
      icon: AccountEditOutline,
      path: '/reception/register-patient'
    })
  }


  if (session.role === 'System Admin') {
    pagesSection.push({
      title: 'Health Centers',
      icon: HospitalIcon,
      path: '/system-admin/hospitals'
    })
    pagesSection.push({
      title: 'Researchers',
      icon: ResearcherIcon,
      path: '/system-admin/researchers'
    })
    pagesSection.push({
      title: 'MOH',
      icon: MoHIcon,
      path: '/system-admin/MOH'
    })
    pagesSection.push({
      title: 'Report Generation',
      icon: ReportIcon,
      path: '/system-admin/report'
    })
  }

  if (session.role === 'HospitalAdmin') {
    pagesSection.push({
      title: 'Employees',
      icon: Account,
      path: '/hospital-admin/employees'
    })
  }


  if (session.role === 'Doctor') {
    pagesSection.push({
      title: 'Create Prescription',
      icon: Account,
      path: '/doctor/create-prescription'
    })
  }

  if (session.role === 'Nurse') {
    pagesSection.push({
      title: 'Vitals',
      icon: Account,
      path: '/nurse/vitals'
    })
  }

  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },

    // {
    //   title: 'System Admin Dashboard',
    //   icon: HomeOutline,
    //   path: '/system-admin'
    // },
    // {
    //   title: 'Doctor Dashboard',
    //   icon: HomeOutline,
    //   path: '/doctor'
    // },
    // {
    //   title: 'Lab Expert Dashboard',
    //   icon: HomeOutline,
    //   path: '/lab-expert'
    // },
    // {
    //   title: 'Nurse Dashboard',
    //   icon: HomeOutline,
    //   path: '/nurse'
    // },
    ...pagesSection,
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
