import Navbar from './components/Navbar'
import './globals.css'
import { EB_Garamond } from "@next/font/google"

const ebGaramond = EB_Garamond({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: '--font-ebGaramond',
})

export const metadata = {
  title: 'Steve Dylan Photo',
  description: 'Photography portfolio by Steve Simkins',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ebGaramond.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
