import './globals.css'
import Script from 'next/script'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import { fetchUser } from '@/services/users'
import 'moment/locale/tr'

export const metadata = {
  title: 'Ozan Alper YALÇIN - Portfolio / Blog Page',
  description: 'Ozan Alper YALÇIN - Portfolio / Blog Page',
}

export default async function RootLayout({ children }) {
  const { user } = await fetchUser(process.env.OWNER_ID)
  return (
    <html lang="tr">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-BW624J0MB1" />
      <Script>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BW624J0MB1');
          `}
      </Script>
      <body className={`flex flex-col`}>
        <Header user={user} />
        <main>
          {children}
        </main>
        <Footer user={user} />
      </body>
    </html>
  )
}
