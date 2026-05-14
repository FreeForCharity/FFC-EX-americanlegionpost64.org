import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader, PageBody } from '@/components/ui/page-shell'
import { postInfo } from '@/lib/post-info'

export const metadata: Metadata = {
  title: 'Sitemap',
  description: 'Human-readable sitemap for the American Legion Post 64 website.',
  alternates: { canonical: '/sitemap' },
}

interface LinkItem {
  label: string
  href: string
  description?: string
  external?: boolean
  note?: string
}

const groups: { title: string; items: LinkItem[] }[] = [
  {
    title: 'Main Pages',
    items: [
      { label: 'Home', href: '/', description: 'Welcome and quick links.' },
      {
        label: 'About Post 64',
        href: '/about',
        description: 'Our mission, the Four Pillars, and where we meet.',
      },
      {
        label: 'Leadership',
        href: '/leadership',
        description: 'Commander, VSO, and post officers.',
      },
      {
        label: 'History',
        href: '/history',
        description: 'The American Legion since 1919, and Post 64 in Ahwatukee.',
      },
      {
        label: 'Newsroom',
        href: '/news',
        description: 'Event recaps, member reflections, and Post updates.',
      },
      {
        label: 'Events Calendar',
        href: '/calendar',
        description: 'Upcoming meetings, social mixers, ceremonies, and service days.',
      },
      {
        label: 'Newsletter Sign-Up',
        href: '/newsletter',
        description: 'Subscribe to the Post 64 monthly newsletter.',
      },
      {
        label: 'Contact',
        href: '/contact',
        description: 'Email or call Post 64 leadership directly.',
      },
      {
        label: 'Donate & Support',
        href: '/donate',
        description: 'Mail-in, online, in-kind, and planned giving.',
      },
    ],
  },
  {
    title: 'Legal & Accessibility',
    items: [
      { label: 'ADA Compliance', href: '/ada-compliance' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Sitemap (this page)', href: '/sitemap' },
    ],
  },
  {
    title: 'Coming Soon (links to current site)',
    items: [
      {
        label: 'Membership / Member Login',
        href: postInfo.externalLinks.membership,
        external: true,
        note: 'Phase 5 — replacement plan in progress.',
      },
    ],
  },
  {
    title: 'External Resources',
    items: [
      {
        label: 'The American Legion (national)',
        href: postInfo.externalLinks.nationalLegion,
        external: true,
      },
      {
        label: 'Be the One Suicide-Prevention Campaign',
        href: postInfo.externalLinks.beTheOne,
        external: true,
      },
    ],
  },
]

export default function SitemapPage() {
  return (
    <>
      <PageHeader
        eyebrow="Find Your Way"
        title="Sitemap"
        intro="Every page on this site, in one place. If you can’t find what you’re looking for, please contact us."
      />
      <PageBody>
        {groups.map((g) => (
          <section key={g.title} aria-labelledby={`group-${g.title.replace(/\s+/g, '-')}`}>
            <h2
              id={`group-${g.title.replace(/\s+/g, '-')}`}
              className="text-2xl md:text-3xl font-bold text-[#0a2647]"
            >
              {g.title}
            </h2>
            <ul className="list-none p-0 space-y-3">
              {g.items.map((item) => (
                <li key={item.label} className="border-l-4 border-[#c8a04a] pl-4 py-1">
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#b71c1c] font-bold hover:underline"
                    >
                      {item.label} ↗
                    </a>
                  ) : (
                    <Link href={item.href} className="text-[#b71c1c] font-bold hover:underline">
                      {item.label}
                    </Link>
                  )}
                  {item.description ? (
                    <p className="text-sm text-gray-700 mt-1">{item.description}</p>
                  ) : null}
                  {item.note ? (
                    <p className="text-xs text-gray-500 italic mt-1">{item.note}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </PageBody>
    </>
  )
}
