import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://spheredsp.com'
  const now = new Date()

  const routes = [
    '',
    '/products',
    '/products/equalizer',
    '/products/compressor',
    '/suite',
    '/technology',
    '/about',
    '/contact',
    '/legal/privacy',
    '/legal/terms',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/products') ? 0.9 : 0.8,
  })) as MetadataRoute.Sitemap
}

