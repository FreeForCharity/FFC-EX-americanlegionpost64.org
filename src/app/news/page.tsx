import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHeader } from '@/components/ui/page-shell'
import { newsPosts } from '@/data/news'
import { formatPostDate } from '@/lib/format-date'

export const metadata: Metadata = {
  title: 'Newsroom',
  description:
    'News, event recaps, and reflections from the members of American Legion Post 64 in Ahwatukee, Phoenix.',
  alternates: { canonical: '/news' },
  openGraph: {
    title: 'Newsroom — American Legion Post 64',
    description:
      'News, event recaps, and reflections from the members of American Legion Post 64 in Ahwatukee, Phoenix.',
    type: 'website',
  },
}

export default function NewsArchivePage() {
  return (
    <>
      <PageHeader
        eyebrow="Newsroom"
        title="Post 64 News & Stories"
        intro="Event recaps, member reflections, and updates from the work we do for Ahwatukee veterans. Newest posts first."
      />
      <main className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1100px] px-6">
          {newsPosts.length === 0 ? (
            <p className="text-gray-700">No posts yet. Check back soon.</p>
          ) : (
            <ul
              className="grid grid-cols-1 md:grid-cols-2 gap-8 list-none p-0"
              aria-label="News posts"
            >
              {newsPosts.map((post) => (
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
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div
                      aria-hidden="true"
                      className="w-full h-48 bg-gradient-to-br from-[#0a2647] via-[#0e3a6f] to-[#b71c1c]"
                    />
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <p
                      className="uppercase text-[#b71c1c] tracking-[0.2em] text-xs font-bold mb-2"
                      id="aria-font"
                    >
                      <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                    </p>
                    <h2 className="text-xl md:text-2xl font-bold text-[#0a2647] mb-3 leading-snug">
                      <Link
                        href={`/news/${post.slug}`}
                        className="hover:underline hover:text-[#b71c1c] transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/news/${post.slug}`}
                      className="text-sm font-bold text-[#b71c1c] uppercase tracking-wide hover:underline self-start"
                      aria-label={`Read full post: ${post.title}`}
                    >
                      Read the full story →
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </>
  )
}
