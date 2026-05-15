import React from 'react'
import Link from 'next/link'
import { postInfo } from '@/lib/post-info'

const Post64Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden pt-[160px] pb-20 md:pt-[200px] md:pb-28"
      aria-label="Welcome"
    >
      {/* Patriotic backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a2647] via-[#0e3a6f] to-[#102a4c]" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-24 bg-[#b71c1c]"
        style={{ clipPath: 'polygon(0 60%, 100% 0, 100% 100%, 0 100%)' }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-6 bg-[#c8a04a]"
        style={{ clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0 100%)' }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div className="text-white">
          <p className="text-[#c8a04a] uppercase tracking-[0.25em] text-sm font-semibold mb-4 aria-font">
            Ahwatukee · Phoenix · Arizona
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 cinzel">
            Veterans Helping <span className="text-[#c8a04a]">Veterans</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl leading-relaxed">
            American Legion Post 64 is Ahwatukee&apos;s only local veterans&apos; organization —
            built on a century of service, brotherhood, and a simple promise: every veteran has
            someone in their corner.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/donate"
              className="inline-flex items-center px-7 py-3 rounded-full bg-[#b71c1c] hover:bg-[#9b1414] text-white font-bold uppercase tracking-wide transition-colors"
            >
              Support Our Veterans
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-7 py-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-[#0a2647] font-bold uppercase tracking-wide transition-colors"
            >
              Who We Are
            </Link>
          </div>
        </div>

        {/* Mission card */}
        <aside
          className="relative bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-8 border-t-4 border-[#b71c1c]"
          aria-label="Our mission"
        >
          <p className="uppercase text-[#0a2647] tracking-[0.2em] text-xs font-bold mb-3 aria-font">
            Our Mission
          </p>
          <p className="text-[#0a2647] text-xl md:text-2xl leading-snug font-semibold mb-6">
            &ldquo;{postInfo.mission}&rdquo;
          </p>
          <div className="border-t border-gray-200 pt-4 text-sm text-gray-700 space-y-1">
            <p>
              <span className="font-semibold text-[#0a2647]">Meet:</span>{' '}
              {postInfo.meetings.business}
            </p>
            <p>{postInfo.address.full}</p>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Post64Hero
