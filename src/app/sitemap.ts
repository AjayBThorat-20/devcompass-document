import { MetadataRoute } from 'next'
import { navLinks } from '@/constants/nav'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://devcompass.ajaythorat.com'
  const abs = (path: string) => `${baseUrl}${path}`

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...navLinks.map((link) => ({
      url: abs(link.href),
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    {
      url: abs('/architecture'),
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
  ]
}
