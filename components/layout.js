import Navbar from './navbar'
import Footer from './footer'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="profile" href="https://gmpg.org/xfn/11" />
        <title>Green Evolution Initiative | Home</title>
        <meta name="description" content="Native Promoters brings “GREEN EVOLUTION INITIATIVE - EV EXPO 2022” at Orion mall  to promote the eco-friendly Electric Vehicles (EV) . The GEI EV EXPO -2022 create opportunity to showcase, see and understand the latest in EV’s .NATIVE PROMOTER aspiring to get major EV companies together to exhibit their various latest models to right set of customers under one roof. GEI EV Expo to draws huge footfall over a period of 3 days" />
        <meta name="keywords" content="ev expo orionmall bangalore 2022 evexpo 2022 electric vehicle companies in bangalore electric vehicles in bangalore ev manufacturers in bangalore exhibition in bangalore electric events green vehicle expo green car green cars green vehicle auto ev expo 2022 ev expo bangalore 2022 green evolution initiative Ev expo bangalore 2022 GEI Ev expo 2022 native promoters pvt ltd  the fan street  orion mall  orion event  electric vehicle expo electric vehicle trade show electric vehicle expo electric car expo tata naxon  mg hector ev  tata nexon EV tata nexon EV  ola ev bike  ather bike  ev car  ev auto  ev industry" />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="canonical" href="https://greenevolutioninitiative.com/" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "EV Expo 2022",
              "description": "Leading EV businesses to exhibit the next-gen electrification technology, innovative products & solutions to an enthused audience. Help consumers in choosing the right vehicle as per their needs.",
              "startDate": "2022-06-24",
              "endDate": "2022-06-26",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
              "location": {
                "@type": "VirtualLocation",
                "url": "https://greenevolutioninitiative.com/"
              }
            })
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-230151227-1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments)}
            gtag('js', new Date());
  
            gtag('config', 'UA-230151227-1');` 
          }}
        />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}