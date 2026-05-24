import type { Metadata } from 'next'
import './globals.css'
import { PageLoader, CustomCursor } from '@/components/Common'

export const metadata: Metadata = {
  title: 'Rohan Kirdak - Premium Developer Portfolio',
  description: 'World-class personal portfolio of Rohan Kirdak, a MERN and Next.js full-stack developer with beautiful modern interfaces.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth bg-[#030014]" suppressHydrationWarning>
      <body className="antialiased bg-[#030014]" suppressHydrationWarning>
        <PageLoader />
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
