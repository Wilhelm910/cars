import type { Metadata } from 'next'
import './globals.css'
import { Container } from '@mui/material'
import { Footer, Navbar } from '@/components'
import ThemeClient from './ThemeClient'

export const metadata: Metadata = {
  title: 'Car hub',
  description: 'Discover the best cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ display: "flex", justifyContent: "center" }}>
        <ThemeClient>
          <Container sx={{
            marginRight: "120px",
            marginLeft: "120px",
          }}>
            <Navbar />
            {children}
            <Footer />
          </Container>
        </ThemeClient>
      </body>
    </html>
  )
}
