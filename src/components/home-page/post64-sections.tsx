import React from 'react'
import Link from 'next/link'
import { Heart, Shield } from 'lucide-react'
import { postInfo } from '@/lib/post-info'

export const MissionPreview: React.FC = () => (
  <section
    id="mission"
    className="bg-white py-16 md:py-24 border-b border-gray-100"
    aria-labelledby="mission-heading"
  >
    <div className="mx-auto max-w-[1100px] px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="md:col-span-1">
        <p className="uppercase text-[#b71c1c] tracking-[0.2em] text-xs font-bold mb-2 aria-font">
          About Post 64
        </p>
        <h2
          id="mission-heading"
          className="text-3xl md:text-4xl font-bold text-[#0a2647]"
          // intentionally inherits cinzel through global rule via class? Use inline style instead
        >
          The Four Pillars
        </h2>
      </div>
      <div className="md:col-span-2 space-y-6 text-gray-800 leading-relaxed">
        <p className="text-lg">
          Since The American Legion&apos;s founding in 1919, our work has rested on four enduring
          pillars. Post 64 carries them forward locally, in Ahwatukee.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'Veterans Affairs & Rehabilitation',
            'National Security',
            'Americanism',
            'Children & Youth',
          ].map((pillar) => (
            <li
              key={pillar}
              className="flex items-start gap-3 bg-[#f7f3e7] border-l-4 border-[#c8a04a] p-4 rounded-r"
            >
              <Shield className="w-5 h-5 text-[#b71c1c] shrink-0 mt-1" aria-hidden="true" />
              <span className="font-semibold text-[#0a2647]">{pillar}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/about"
          className="inline-flex items-center text-[#b71c1c] font-bold uppercase tracking-wide hover:underline"
        >
          Learn more about Post 64 →
        </Link>
      </div>
    </div>
  </section>
)

export const LeadershipPreview: React.FC = () => (
  <section
    id="leadership"
    className="bg-[#f7f3e7] py-16 md:py-24"
    aria-labelledby="leadership-preview-heading"
  >
    <div className="mx-auto max-w-[1100px] px-6">
      <div className="text-center mb-12">
        <p className="uppercase text-[#b71c1c] tracking-[0.2em] text-xs font-bold mb-2 aria-font">
          Post Leadership
        </p>
        <h2
          id="leadership-preview-heading"
          className="text-3xl md:text-4xl font-bold text-[#0a2647]"
        >
          Get in touch directly
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {postInfo.leadership.map((p) => {
          const initials = p.name
            .split(' ')
            .map((n) => n[0])
            .slice(0, 2)
            .join('')
          return (
            <div
              key={p.name}
              className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-[#b71c1c] hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0a2647] via-[#0e3a6f] to-[#102a4c] text-white flex items-center justify-center text-[17px] font-bold flex-shrink-0"
                  aria-hidden="true"
                >
                  {initials}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#b71c1c] font-bold aria-font">
                    {p.title}
                  </p>
                  <p className="text-xl font-bold text-[#0a2647] mt-0.5">{p.name}</p>
                </div>
              </div>
              <a
                href={`tel:${p.tel}`}
                className="inline-flex items-center gap-2 text-[#0a2647] hover:text-[#b71c1c] font-semibold text-sm"
              >
                {p.phone}
              </a>
            </div>
          )
        })}
      </div>
      <div className="text-center mt-10">
        <Link
          href="/leadership"
          className="inline-flex items-center px-6 py-2 rounded-full border-2 border-[#0a2647] text-[#0a2647] hover:bg-[#0a2647] hover:text-white font-bold uppercase tracking-wide transition-colors"
        >
          Full Leadership Roster
        </Link>
      </div>
    </div>
  </section>
)

export const DonateCTA: React.FC = () => (
  <section
    id="donate"
    className="relative bg-[#0a2647] py-16 md:py-24 text-white overflow-hidden"
    aria-labelledby="donate-cta-heading"
  >
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-10 [background-image:repeating-linear-gradient(45deg,#c8a04a_0_2px,transparent_2px_24px)]"
    />
    <div className="relative mx-auto max-w-[900px] px-6 text-center">
      <Heart className="w-12 h-12 mx-auto text-[#b71c1c] mb-4" aria-hidden="true" />
      <h2 id="donate-cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
        Stand with the Veterans of Post 64
      </h2>
      <p className="text-lg text-gray-200 mb-8 leading-relaxed">
        Every contribution — cash, check, items for our raffle, or a planned gift — directly
        supports veterans, their families, and youth programs in our community.
      </p>
      <Link
        href="/donate"
        className="inline-flex items-center px-8 py-3 rounded-full bg-[#b71c1c] hover:bg-[#9b1414] text-white font-bold uppercase tracking-wide transition-colors"
      >
        Ways to Give
      </Link>
    </div>
  </section>
)
