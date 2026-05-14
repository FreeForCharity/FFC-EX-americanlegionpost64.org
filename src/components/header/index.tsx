'use client'

import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'
import { motion, AnimatePresence } from 'framer-motion'

interface MenuItem {
  label: string
  path: string
  external?: boolean
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const menuItems: MenuItem[] = useMemo(
    () => [
      { label: 'Home', path: '/' },
      { label: 'About', path: '/about' },
      { label: 'Leadership', path: '/leadership' },
      { label: 'History', path: '/history' },
      { label: 'News', path: '/news' },
      { label: 'Donate', path: '/donate' },
    ],
    []
  )

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => setIsMobileMenuOpen(false)

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  return (
    <header
      id="header"
      className={`w-full bg-[#0a2647] text-white shadow-md fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300 ${
        isScrolled ? 'h-[60px]' : 'h-[88px]'
      }`}
    >
      <div className="w-full">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex items-center px-4 transition-all duration-300">
            {/* Logo / Wordmark */}
            <Link
              href="/"
              onClick={handleLinkClick}
              className="block flex-shrink-0"
              aria-label="American Legion Post 64 — Home"
            >
              <div
                className={`flex items-center gap-3 transition-all duration-300 ${
                  isScrolled ? 'h-10' : 'h-14'
                }`}
              >
                <span
                  className={`inline-flex items-center justify-center rounded-full bg-[#c8a04a] text-[#0a2647] font-[700] transition-all duration-300 ${
                    isScrolled ? 'w-9 h-9 text-sm' : 'w-12 h-12 text-base'
                  }`}
                  aria-hidden="true"
                >
                  64
                </span>
                <span className="flex flex-col leading-tight">
                  <span
                    className={`font-[700] uppercase tracking-wide transition-all duration-300 ${
                      isScrolled ? 'text-[13px]' : 'text-[15px]'
                    }`}
                    id="cinzel"
                  >
                    American Legion
                  </span>
                  <span
                    className={`text-[#c8a04a] transition-all duration-300 ${
                      isScrolled ? 'text-[11px]' : 'text-[13px]'
                    }`}
                    id="aria-font"
                  >
                    Post 64 · Ahwatukee
                  </span>
                </span>
              </div>
            </Link>

            <div className="flex items-center justify-end ml-auto w-full">
              {/* Desktop Menu */}
              <nav
                className="hidden lg:block transition-all duration-300"
                aria-label="Primary navigation"
              >
                <ul className="flex items-center space-x-1 font-[600]">
                  {menuItems.map((item) => (
                    <li key={item.label} className="relative">
                      {item.external ? (
                        <a
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-3 py-2 text-[14px] text-white hover:text-[#c8a04a] transition-colors"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          href={item.path}
                          onClick={handleLinkClick}
                          aria-current={isActive(item.path) ? 'page' : undefined}
                          className={`flex items-center px-3 py-2 text-[14px] transition-colors ${
                            isActive(item.path)
                              ? 'text-[#c8a04a] border-b-2 border-[#c8a04a]'
                              : 'text-white hover:text-[#c8a04a]'
                          }`}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                  <li className="ml-2">
                    <Link
                      href="/donate"
                      onClick={handleLinkClick}
                      className="inline-flex items-center px-5 py-2 rounded-full bg-[#b71c1c] hover:bg-[#9b1414] text-white text-[14px] font-[700] uppercase tracking-wide transition-colors"
                    >
                      Support Our Veterans
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:text-[#c8a04a]"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
              >
                {isMobileMenuOpen ? (
                  <RxCross2 className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className={`lg:hidden absolute left-0 w-full overflow-hidden z-40 ${
              isScrolled ? 'top-[58px]' : 'top-[86px]'
            }`}
          >
            <div className="mx-auto px-6 py-4 bg-[#0a2647] border-t-2 border-[#c8a04a] shadow-lg max-h-[80vh] overflow-auto">
              <ul className="space-y-1">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    {item.external ? (
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleLinkClick}
                        className="block px-4 py-2 rounded text-sm font-[600] text-white hover:bg-[#0e3a6f]"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.path}
                        onClick={handleLinkClick}
                        className={`block px-4 py-2 rounded text-sm font-[600] ${
                          isActive(item.path)
                            ? 'bg-[#0e3a6f] text-[#c8a04a]'
                            : 'text-white hover:bg-[#0e3a6f]'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
                <li>
                  <Link
                    href="/donate"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 mt-2 rounded bg-[#b71c1c] hover:bg-[#9b1414] text-white text-sm font-[700] uppercase tracking-wide text-center"
                  >
                    Support Our Veterans
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
