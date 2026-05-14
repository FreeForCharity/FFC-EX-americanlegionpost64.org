import type { MetadataRoute } from 'next'
import { newsPosts } from '@/data/news'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://staging.americanlegionpost64.org'
  const now = new Date()
  const staticRoutes = [
    '/',
    '/about',
    '/leadership',
    '/history',
    '/news',
    '/donate',
    '/ada-compliance',
    '/privacy-policy',
    '/sitemap',
  ]
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1 : 0.7,
  }))

  const newsEntries: MetadataRoute.Sitemap = newsPosts.map((post) => ({
    url: `${baseUrl}/news/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [...staticEntries, ...newsEntries]
}
