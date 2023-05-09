import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './globals.css'
import { EB_Garamond } from "@next/font/google"
import { Analytics } from "@vercel/analytics/react"

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
        <div className="flex">
          <Navbar />
          <Sidebar />
          {children}
          {/*             <Analytics /> */}
        </div>
      </body>
    </html>
  )
}
