import { Metadata } from 'next'
import AboutPageClient from './page-client'
import { generateMetadata as generateSiteMetadata } from '@/lib/seo'

export const metadata: Metadata = generateSiteMetadata({
  title: 'About',
  description:
    'Sphere DSP was founded in September 2025 at TED University by three Computer Engineering students—Emre Murat, Damla Şentürk, and Muammer Eren—to craft studio-grade DSP tools.',
})

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sphere DSP',
  url: 'https://spheredsp.com',
  logo: 'https://spheredsp.com/assets/logo.png',
  description:
    'Sphere DSP builds studio-grade audio plugins with modern signal processing and an optional AI assistant.',
  foundingDate: '2025-09',
  founders: [
    {
      '@type': 'Person',
      name: 'Emre Murat',
      jobTitle: 'Co-founder, AI & DSP Engineer',
    },
    {
      '@type': 'Person',
      name: 'Damla Şentürk',
      jobTitle: 'Co-founder, AI & DSP Engineer',
    },
    {
      '@type': 'Person',
      name: 'Muammer Eren',
      jobTitle: 'Co-founder, AI & DSP Engineer',
    },
  ],
  sameAs: ['https://twitter.com/spheredsp', 'https://github.com/spheredsp'],
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <AboutPageClient />
    </>
  )
}
