"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Navbar/>
        {children}
        <Footer/>
        </ChakraProvider>
        </body>
    </html>
  )
}
