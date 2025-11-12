export const metadata = {
  title: 'trans-log',
  description: 'Leading provider of industrial and rugged technology solutions for logistics, warehousing, and field operations.',
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
