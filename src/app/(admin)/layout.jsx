import './globals.css'
import { Toaster } from 'react-hot-toast'
import { Roboto } from 'next/font/google'
import 'moment/locale/tr'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Ozan Alper YALÇIN - Dashboard',
  description: 'Ozan Alper YALÇIN - Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={roboto.className}>
        <Toaster position="top-right" reverseOrder={true} />
        {children}
      </body>
    </html>
  )
}
