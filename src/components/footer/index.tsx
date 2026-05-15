'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { FaFacebookF } from 'react-icons/fa'
import { postInfo } from '@/lib/post-info'

const Footer: React.FC = () => {
  const currentYear = React.useMemo(() => new Date().getFullYear(), [])

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Post 64', href: '/about' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'History', href: '/history' },
    { name: 'News', href: '/news' },
    { name: 'Calendar', href: '/calendar' },
    { name: 'Newsletter', href: '/newsletter' },
    { name: 'Contact', href: '/contact' },
    { name: 'Members', href: '/members' },
    { name: 'Donate', href: '/donate' },
    { name: 'Sitemap', href: '/sitemap' },
  ]

  const legalLinks = [
    { name: 'ADA Compliance', href: '/ada-compliance' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
  ]

  const externalLinks = [
    { name: 'The American Legion (national)', href: postInfo.externalLinks.nationalLegion },
    { name: 'Be the One Campaign', href: postInfo.externalLinks.beTheOne },
    { name: 'myLegion Member Portal', href: 'https://www.legion.org/myLegion' },
  ]

  return (
    <footer className="bg-[#0a2647] text-white border-t-4 border-[#c8a04a]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 px-6">
        {/* Column 1: Identity */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#c8a04a] text-[#0a2647] font-[700]"
              aria-hidden="true"
            >
              64
            </span>
            <div>
              <p className="font-[700] uppercase tracking-wide cinzel">American Legion</p>
              <p className="text-[#c8a04a] text-sm">Post 64 · Ahwatukee</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-200">
            {postInfo.tagline}. Serving Ahwatukee veterans, service members, and their families
            since the American Legion&apos;s founding in 1919.
          </p>
          <div className="flex gap-3 pt-2">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-[#c8a04a] p-2 rounded-full hover:bg-[#b88e36] transition-colors"
            >
              <FaFacebookF className="w-4 h-4 text-[#0a2647]" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h3 className="text-[18px] uppercase tracking-wide text-[#c8a04a] cinzel">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-[#c8a04a] transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="text-[18px] uppercase tracking-wide text-[#c8a04a] pt-2 cinzel">Legal</h3>
          <ul className="space-y-2 text-sm">
            {legalLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-[#c8a04a] transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: External / In progress */}
        <div className="space-y-4">
          <h3 className="text-[18px] uppercase tracking-wide text-[#c8a04a] cinzel">More</h3>
          <ul className="space-y-2 text-sm">
            {externalLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c8a04a] transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="space-y-4">
          <h3 className="text-[18px] uppercase tracking-wide text-[#c8a04a] cinzel">Contact</h3>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              postInfo.address.full
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 hover:text-[#c8a04a] transition-colors"
          >
            <MapPin className="w-5 h-5 text-[#c8a04a] flex-shrink-0 mt-0.5" />
            <span className="text-sm leading-relaxed">
              {postInfo.address.line1}
              <br />
              {postInfo.address.line2}
            </span>
          </a>
          {postInfo.leadership.map((p) => (
            <a
              key={p.name}
              href={`tel:${p.tel}`}
              className="flex items-start gap-3 hover:text-[#c8a04a] transition-colors"
            >
              <Phone className="w-5 h-5 text-[#c8a04a] flex-shrink-0 mt-0.5" />
              <span className="text-sm">
                <span className="block font-[600]">{p.title}</span>
                <span className="block">
                  {p.name} · {p.phone}
                </span>
              </span>
            </a>
          ))}
          <a
            href={`mailto:${postInfo.email}`}
            className="flex items-start gap-3 hover:text-[#c8a04a] transition-colors break-all"
          >
            <Mail className="w-5 h-5 text-[#c8a04a] flex-shrink-0 mt-0.5" />
            <span className="text-sm">{postInfo.email}</span>
          </a>
        </div>
      </div>

      <div className="border-t border-[#1a3a6f] py-6 px-6 text-center text-sm">
        <p>
          © {currentYear} American Legion Post 64, Ahwatukee. All rights reserved. Website
          gratefully provided by{' '}
          <Link
            href="https://freeforcharity.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#c8a04a] hover:text-white transition-colors"
          >
            Free For Charity
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}

export default Footer
