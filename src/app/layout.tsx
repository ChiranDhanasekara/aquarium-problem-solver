"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Sidebar } from '@/components/Sidebar'
import { usePathname } from 'next/navigation'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideSidebar = pathname.startsWith('/auth/register') || pathname.startsWith('/auth/login');
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="fixed inset-0 flex">
            {!hideSidebar && <Sidebar />}
            <main className="flex-1 overflow-auto">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
