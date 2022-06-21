// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'

// import AccountDetails from 'mdi-material-ui/AccountDetailsOutline'
import SearchIcon from 'mdi-material-ui/ClipboardTextSearchOutline'
import SIcon from '@mui/icons-material/ManageSearch'
import Account from 'mdi-material-ui/Account'
import AccountOutline from 'mdi-material-ui/AccountOutline'

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
  const pagesSection: VerticalNavItemsType = []
  if (session.role === 'Receptionist') {
    pagesSection.push({
      sectionTitle: 'pages'
    })
    pagesSection.push({
      title: 'Register Patient',
      icon: AccountEditOutline,
      path: '/reception/register-patient'
    })
  }

  if (session.role === 'Researcher' || session.role === 'MohEmployee') {
    pagesSection.push({
      sectionTitle: 'pages'
    })
    pagesSection.push({
      title: 'General Statistics',
      icon: SearchIcon,
      path: '/stats/'
    }),
      
    pagesSection.push({
      title: 'Searched Disease',
      icon: SIcon,
      path: '/stats/SearchingDisease/'
    }),
      pagesSection.push({
        title: 'Searched Medication',
        icon: SIcon,
        path: '/stats/SearchingMedication/'
      })
  }

  if (session.role === 'System Admin') {
    pagesSection.push(
      {
        sectionTitle: 'pages'
      },
      {
        title: 'Health Centers',
        icon: HospitalIcon,
        path: '/system-admin/hospitals'
      }
    )
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
    pagesSection.push({
      title: 'General Statistics',
      icon: SearchIcon,
      path: '/stats/'
    }),
      
    pagesSection.push({
      title: 'Searched Disease',
      icon: SIcon,
      path: '/stats/SearchingDisease/'
    }),
      pagesSection.push({
        title: 'Searched Medication',
        icon: SIcon,
        path: '/stats/SearchingMedication/'
      })
  }

  if (session.role === 'Hospital Admin') {
    pagesSection.push(
      {
        sectionTitle: 'pages'
      },
      {
        title: 'Employees',
        icon: AccountOutline,
        path: '/hospital-admin/employees'
      }
    ),
      pagesSection.push({
      title: 'General Statistics',
      icon: SearchIcon,
      path: '/stats/'
    })
  }

  if (session.role === 'Doctor') {

    pagesSection.push(
      {
        sectionTitle: 'pages'
      },
      {
        title: 'Results',
        icon: HospitalIcon,
        path: 'patient/view/results'
      }
    )
  }

  // if (session.role === 'Nurse') {
  //   pagesSection.push(
  //     {
  //       sectionTitle: 'pages'
  //     }
  //   )
  // }

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
