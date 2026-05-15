import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageHeader } from '@/components/ui/page-shell'
import NewsBody from '@/components/news/NewsBody'
import { newsPosts, getNewsPostBySlug } from '@/data/news'
import { formatPostDate } from '@/lib/format-date'

interface NewsPostPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: NewsPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getNewsPostBySlug(slug)
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested news post was not found.',
    }
  }
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/news/${post.slug}` },
    openGraph: {
      title: `${post.title} — American Legion Post 64`,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      images: post.coverImage
        ? [{ url: post.coverImage, alt: post.coverAlt ?? post.title }]
        : undefined,
    },
  }
}

export default async function NewsPostPage({ params }: NewsPostPageProps) {
  const { slug } = await params
  const post = getNewsPostBySlug(slug)
  if (!post) {
    notFound()
  }

  return (
    <>
      <PageHeader
        eyebrow={`Posted ${formatPostDate(post.date)}`}
        title={post.title}
        intro={post.author ? `By ${post.author}` : undefined}
      />
      <main className="bg-white py-12 md:py-16">
        <article className="mx-auto max-w-3xl px-6">
          {post.coverImage ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={post.coverImage}
              alt={post.coverAlt ?? post.title}
              loading="lazy"
              className="w-full h-auto rounded-lg shadow-sm mb-8"
            />
          ) : null}

          <div className="space-y-5 text-gray-800 leading-relaxed">
            <p className="text-lg italic text-[#0a2647]">{post.excerpt}</p>
            <NewsBody blocks={post.body} />
          </div>

          {post.sourceUrl ? (
            <p className="text-xs text-gray-500 mt-10 border-t border-gray-200 pt-4">
              This article is a faithful retelling of the original post on our previous WordPress
              site.{' '}
              <a
                href={post.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b71c1c] underline hover:no-underline"
              >
                View the archived original
              </a>
              .
            </p>
          ) : null}

          <div className="mt-10 border-t border-gray-200 pt-6 flex flex-wrap gap-4 justify-between items-center">
            <Link
              href="/news"
              className="text-sm font-bold text-[#b71c1c] uppercase tracking-wide hover:underline"
            >
              ← Back to all news
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center px-5 py-2 rounded-full bg-[#b71c1c] hover:bg-[#9b1414] text-white text-sm font-bold uppercase tracking-wide transition-colors"
            >
              Support Our Veterans
            </Link>
          </div>
        </article>
      </main>
    </>
  )
}
