// ** Next Imports
import Head from 'next/head'
import { Router } from 'next/router'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

// ** Loader Import
import NProgress from 'nprogress'

// ** Emotion Imports
import { CacheProvider } from '@emotion/react'
import type { EmotionCache } from '@emotion/cache'

// ** Config Imports
import themeConfig from 'src/configs/themeConfig'

// ** Component Imports
import UserLayout from 'src/layouts/UserLayout'
import ThemeComponent from 'src/@core/theme/ThemeComponent'

// ** Contexts
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'

// ** Utils Imports
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache'

import { useSession } from 'next-auth/react'


// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'

// ** Global css styles
import '../../styles/globals.css'

import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";


// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage
  session: Session
}

const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

// ** Configure JSS & ClassName
const App = (props: ExtendedAppProps) => {
  const { Component, pageProps } = props
  // Variables
  const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)
  return (
        <SessionProvider  session={props.session}>
    {/* <CacheProvider value={emotionCache}> */}
      <Head>
        <title>{themeConfig.templateName}</title>
        <meta
          name='description'
          content={themeConfig.templateName}
        />
        <meta name='keywords' content='Material Design, MUI, Admin Template, React Admin Template' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>

      <SettingsProvider>
        <SettingsConsumer>

          {({ settings }) => {
            return <ThemeComponent settings={settings}>{getLayout(
                <Component {...pageProps} />
            )}</ThemeComponent>

          }}
        </SettingsConsumer>
      </SettingsProvider>
    {/* </CacheProvider> */}
    </SessionProvider>
  )
}

// export async function getServerSideProps() {
//   const res = await fetch(`https:/lo/data`)
//   const data = await res.json()
//   // const session = await useSession();


//   // Pass data to the page via props
//   return { props: { data } }

// }

export default App
