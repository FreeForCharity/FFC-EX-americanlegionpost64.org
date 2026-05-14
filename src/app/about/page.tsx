import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader, PageBody } from '@/components/ui/page-shell'
import { postInfo } from '@/lib/post-info'

export const metadata: Metadata = {
  title: 'About Post 64',
  description:
    'American Legion Post 64 is Ahwatukee’s only local veterans’ organization — built on a century of service. Learn about our mission, who we serve, and how we meet.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who We Are"
        title="About American Legion Post 64"
        intro={`${postInfo.tagline}. Serving veterans, service members, and the Ahwatukee community.`}
      />
      <PageBody>
        <section aria-labelledby="mission">
          <h2 id="mission" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            Our Mission
          </h2>
          <p className="text-lg italic border-l-4 border-[#c8a04a] pl-4">
            &ldquo;{postInfo.mission}&rdquo;
          </p>
        </section>

        <section aria-labelledby="who-we-serve">
          <h2 id="who-we-serve" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            Who We Serve
          </h2>
          <p>
            Post 64 is a welcoming home for veterans of every era. Our membership spans three
            generations of service — Vietnam Era, Desert Storm Era, and OIF/OEF Era veterans — and
            we work to ensure every veteran in Ahwatukee has access to support, resources, and
            camaraderie earned through service.
          </p>
          <p>
            We are committed to suicide prevention through the American Legion&apos;s{' '}
            <a
              href={postInfo.externalLinks.beTheOne}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b71c1c] font-semibold underline"
            >
              Be the One
            </a>{' '}
            campaign — encouraging every member of our community to be the one who saves a
            veteran&apos;s life.
          </p>
        </section>

        <section aria-labelledby="four-pillars">
          <h2 id="four-pillars" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            The Four Pillars
          </h2>
          <p>
            Our work — local and national — rests on the four enduring pillars of The American
            Legion:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0">
            {[
              {
                t: 'Veterans Affairs & Rehabilitation',
                d: 'Helping veterans navigate VA benefits, healthcare, and earned services.',
              },
              {
                t: 'National Security',
                d: 'Supporting a strong national defense and the men and women who serve.',
              },
              {
                t: 'Americanism',
                d: 'Promoting patriotism, civic responsibility, and reverence for our nation.',
              },
              {
                t: 'Children & Youth',
                d: 'Mentoring young people through Boys/Girls State, scholarships, and Junior Shooting Sports.',
              },
            ].map((p) => (
              <li key={p.t} className="bg-[#f7f3e7] border-l-4 border-[#c8a04a] p-4 rounded-r">
                <p className="font-bold text-[#0a2647]">{p.t}</p>
                <p className="text-sm text-gray-700 mt-1">{p.d}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="meet-with-us">
          <h2 id="meet-with-us" className="text-2xl md:text-3xl font-bold text-[#0a2647]">
            Where & When We Meet
          </h2>
          <p>
            <strong>Address:</strong> {postInfo.address.full}
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{postInfo.meetings.business}</li>
            <li>{postInfo.meetings.executive}</li>
          </ul>
          <p className="pt-2">
            <Link
              href="/leadership"
              className="inline-flex items-center text-[#b71c1c] font-bold uppercase tracking-wide hover:underline"
            >
              Meet our Leadership →
            </Link>
          </p>
        </section>
      </PageBody>
    </>
  )
}
