import type { Metadata } from 'next'
import { ShieldCheck, ExternalLink, Mail, UserPlus } from 'lucide-react'
import { PageHeader, PageBody } from '@/components/ui/page-shell'
import { postInfo } from '@/lib/post-info'

export const metadata: Metadata = {
  title: 'Members',
  description:
    'Member resources for American Legion Post 64. Sign in to your membership through the national myLegion portal, or renew and join through the national American Legion.',
  alternates: { canonical: '/members' },
}

const myLegionUrl = 'https://www.legion.org/myLegion'
const joinUrl = 'https://www.legion.org/join'
const renewUrl = 'https://www.legion.org/renew'

export default function MembersPage() {
  return (
    <>
      <PageHeader
        eyebrow="For Members"
        title="Member Resources"
        intro="Member sign-in, dues renewal, and the national membership portal are all handled through The American Legion at legion.org. Post 64 does not maintain a separate login."
      />
      <PageBody>
        <section aria-labelledby="mylegion-section">
          <h2 id="mylegion-section" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            Sign In to myLegion
          </h2>
          <p>
            <strong>myLegion.org</strong> is the official national member portal. From there you can
            manage your membership card, update your address, view your dues status, and access
            exclusive member content.
          </p>
          <p>
            <a
              href={myLegionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-[#b71c1c] hover:bg-[#9b1414] text-white font-bold uppercase tracking-wide transition-colors"
            >
              <ShieldCheck className="w-4 h-4 mr-2" aria-hidden="true" /> Open myLegion
              <ExternalLink className="w-3 h-3 ml-1.5" aria-hidden="true" />
            </a>
          </p>
        </section>

        <section aria-labelledby="renew-section">
          <h2 id="renew-section" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            Renew Your Membership
          </h2>
          <p>
            Annual dues renewals are processed through The American Legion. Renewing online credits
            your membership to Post 64 automatically when you select us as your home post.
          </p>
          <p>
            <a
              href={renewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2 rounded-full border-2 border-[#0a2647] text-[#0a2647] hover:bg-[#0a2647] hover:text-white font-bold uppercase tracking-wide transition-colors"
            >
              Renew Online
              <ExternalLink className="w-3 h-3 ml-1.5" aria-hidden="true" />
            </a>
          </p>
        </section>

        <section aria-labelledby="join-section">
          <h2 id="join-section" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            Not a Member Yet?
          </h2>
          <p>
            If you have served honorably in the United States Armed Forces during a designated
            wartime era — which today includes anyone who has served since December 7, 1941 — you
            are eligible to join. Select <strong>Post 64, Ahwatukee</strong> as your home post when
            you sign up.
          </p>
          <p>
            <a
              href={joinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-[#b71c1c] hover:bg-[#9b1414] text-white font-bold uppercase tracking-wide transition-colors"
            >
              <UserPlus className="w-4 h-4 mr-2" aria-hidden="true" /> Join the American Legion
              <ExternalLink className="w-3 h-3 ml-1.5" aria-hidden="true" />
            </a>
          </p>
        </section>

        <section aria-labelledby="local-help">
          <h2 id="local-help" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            Need Help With Your Membership?
          </h2>
          <p>
            If you have trouble signing in, cannot find your member number, or are unsure whether
            your dues are current, reach out to the Post directly and we will help you sort it out:
          </p>
          <ul className="list-none p-0 space-y-2">
            {postInfo.leadership.map((p) => (
              <li key={p.name}>
                <strong>{p.title}:</strong> {p.name} —{' '}
                <a href={`tel:${p.tel}`} className="text-[#b71c1c] font-semibold">
                  {p.phone}
                </a>
              </li>
            ))}
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 text-[#c8a04a] flex-shrink-0 mt-1" aria-hidden="true" />
              <span>
                <strong>Email:</strong>{' '}
                <a
                  href={`mailto:${postInfo.email}`}
                  className="text-[#b71c1c] font-semibold break-all"
                >
                  {postInfo.email}
                </a>
              </span>
            </li>
          </ul>
        </section>

        <p className="text-xs text-gray-500 border-t border-gray-200 pt-4">
          For privacy and security, Post 64 does not store or process member logins on this website.
          All member authentication is handled by The American Legion at legion.org.
        </p>
      </PageBody>
    </>
  )
}
