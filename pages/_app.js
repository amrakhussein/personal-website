import Head from 'next/head';
import { IsMobileProvider } from '../providers/IsMobile.provider';
import { BottomNavProvider } from '../providers/ShouldDisplayBottomNav.provider';
import { ThemeProvider } from '../providers/ThemingMode.provider';
import '../styles/globals.css';
// import { config } from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-svg-core/styles.css'
// config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>amrakhussein | Let&apos;s connect!</title>

        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />

        <meta name='author' content='Amr Abdelkamel Hussein' />

        <meta
          name='description'
          property='og:description'
          content="Passionate about web development. Here, I share a bit about me. Let's get connected!"
          key='description'
        />

        {/* <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; font-src 'self' https://fonts.gstatic.com/; style-src 'self' https://fonts.googleapis.com/ 'unsafe-inline';" /> */}

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>

      <IsMobileProvider>
        <ThemeProvider>
          <BottomNavProvider>
            <Component {...pageProps} />
          </BottomNavProvider>
        </ThemeProvider>
      </IsMobileProvider>
    </>
  );
}

export default MyApp;
