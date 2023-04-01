import './globals.css'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
