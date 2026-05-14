import React from 'react'
import Link from 'next/link'
import { getLatestNews } from '@/data/news'
import { formatPostDate } from '@/lib/format-date'

/**
 * LatestNews — homepage preview block.
 *
 * Renders the three newest news posts as cards and links to the
 * full /news archive. Replaces the Phase 1 "Coming Soon" placeholder.
 */
export const LatestNews: React.FC = () => {
  const posts = getLatestNews(3)
  if (posts.length === 0) return null

  return (
    <section
      id="latest-news"
      className="bg-white py-16 md:py-24"
      aria-labelledby="latest-news-heading"
    >
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="text-center mb-12">
          <p
            className="uppercase text-[#b71c1c] tracking-[0.2em] text-xs font-bold mb-2"
            id="aria-font"
          >
            From the Newsroom
          </p>
          <h2 id="latest-news-heading" className="text-3xl md:text-4xl font-bold text-[#0a2647]">
            Latest News & Stories
          </h2>
          <p className="text-gray-700 mt-3 max-w-2xl mx-auto">
            Event recaps, member reflections, and updates from the work we do for Ahwatukee
            veterans.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none p-0">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#c8a04a] hover:shadow-md transition-all flex flex-col"
            >
              {post.coverImage ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={post.coverImage}
                  alt={post.coverAlt ?? ''}
                  loading="lazy"
                  className="w-full h-44 object-cover"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="w-full h-44 bg-gradient-to-br from-[#0a2647] via-[#0e3a6f] to-[#b71c1c]"
                />
              )}
              <div className="p-5 flex flex-col flex-1">
                <p
                  className="uppercase text-[#b71c1c] tracking-[0.2em] text-[11px] font-bold mb-2"
                  id="aria-font"
                >
                  <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                </p>
                <h3 className="font-bold text-[#0a2647] mb-2 leading-snug">
                  <Link
                    href={`/news/${post.slug}`}
                    className="hover:underline hover:text-[#b71c1c] transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                <Link
                  href={`/news/${post.slug}`}
                  className="text-sm font-bold text-[#b71c1c] uppercase tracking-wide hover:underline self-start"
                  aria-label={`Read full post: ${post.title}`}
                >
                  Read more →
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <div className="text-center mt-10">
          <Link
            href="/news"
            className="inline-flex items-center px-6 py-2 rounded-full border-2 border-[#0a2647] text-[#0a2647] hover:bg-[#0a2647] hover:text-white font-bold uppercase tracking-wide transition-colors"
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LatestNews
