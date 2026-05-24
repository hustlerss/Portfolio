'use client'

import { ReactNode } from 'react'
import Navbar, { Footer, ScrollProgress } from './Common'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-text">
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        {children}
      </main>
      <Footer />
    </div>
  )
}
