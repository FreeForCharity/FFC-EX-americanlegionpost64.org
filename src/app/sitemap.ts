import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://staging.americanlegionpost64.org'
  const now = new Date()
  const routes = [
    '/',
    '/about',
    '/leadership',
    '/history',
    '/donate',
    '/ada-compliance',
    '/privacy-policy',
    '/sitemap',
  ]
  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '/' ? 1 : 0.7,
  }))
}
