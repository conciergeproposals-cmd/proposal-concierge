import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://theproposalconcierge.ca',
      lastModified: new Date('2026-01-01'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
