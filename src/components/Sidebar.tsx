'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fish, MessageCircle, Users, User, Settings, Home } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Fish Matcher', href: '/matchmaker', icon: Fish },
  { name: 'Problem Solver', href: '/diagnose', icon: MessageCircle },
  { name: 'AquaSwap', href: '/trade', icon: Users },
]

const account = [
  { name: 'Profile', href: '/profile', icon: User },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen bg-white border-r border-gray-200">
      <div className="flex flex-col w-64">
        {/* Logo */}
        <div className="flex items-center px-6 py-4 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
              <Fish className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">AquaHub</span>
            <span className="ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
              Beta
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Navigation
          </div>
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                  isActive
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-500'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                )}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            )
          })}

          <div className="pt-8">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
              Account
            </div>
            {account.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                    isActive
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-500'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  )}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              )
            })}
          </div>
        </nav>

        {/* User Profile */}
        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" />
            </div>
            <div className="ml-3">
              <div className="text-sm font-medium text-gray-900">AquaUser</div>
              <div className="text-xs text-gray-500">user@example.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
