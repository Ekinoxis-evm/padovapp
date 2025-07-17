"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Shirt, ScanLine, Calendar, ShoppingBag, User, Menu, X } from "lucide-react"
import { useState } from "react"

const navigationItems = [
  { href: "/profile", label: "Perfil", icon: User },
  { href: "/closet", label: "Closet", icon: Shirt },
  { href: "/scan", label: "Escanear", icon: ScanLine },
  { href: "/events", label: "Eventos", icon: Calendar },
  { href: "/shop", label: "Tienda", icon: ShoppingBag },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Desktop Sidebar Navigation */}
      <nav className="hidden lg:block fixed left-0 top-0 h-full w-64 bg-white shadow-xl border-r border-stone-200 z-40">
        <div className="p-6">
          <Link href="/" className="block mb-8">
            <h1 className="text-2xl font-bold font-playfair text-padova-navy">Padova</h1>
            <p className="text-sm text-stone-500 mt-1">Luxury Fashion</p>
          </Link>
          
          <div className="space-y-2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-padova-olive text-white shadow-md"
                      : "text-stone-600 hover:bg-stone-50 hover:text-padova-navy"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Top Navigation */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-stone-200 z-50">
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="flex items-center space-x-2">
            <h1 className="text-xl font-bold font-playfair text-padova-navy">Padova</h1>
          </Link>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-stone-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-padova-navy" />
            ) : (
              <Menu className="w-6 h-6 text-padova-navy" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-stone-200 shadow-lg">
            <div className="p-4 space-y-2">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href
                const Icon = item.icon
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-padova-olive text-white"
                        : "text-stone-600 hover:bg-stone-50 hover:text-padova-navy"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-stone-200 z-50">
        <div className="flex items-center justify-around py-2">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "text-padova-olive"
                    : "text-stone-500 hover:text-padova-navy"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'scale-110' : ''} transition-transform`} />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Content spacing for desktop */}
      <div className="hidden lg:block w-64"></div>
      
      {/* Content spacing for mobile */}
      <div className="lg:hidden">
        <div className="h-16"></div> {/* Top nav spacing */}
        <div className="h-20"></div> {/* Bottom nav spacing */}
      </div>
    </>
  )
} 