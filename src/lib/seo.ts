import { Metadata } from 'next'

export const siteConfig = {
  name: 'Sphere DSP',
  description:
    'Precision DSP with an AI Copilot. Studio-grade plugins with modern signal processing and an optional AI assistant.',
  url: 'https://spheredsp.com',
  ogImage: 'https://spheredsp.com/og-image.png',
  links: {
    twitter: 'https://twitter.com/spheredsp',
    github: 'https://github.com/spheredsp',
  },
}

export function generateMetadata({
  title,
  description,
  image,
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
}): Metadata {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const metaDescription = description || siteConfig.description
  const metaImage = image || siteConfig.ogImage

  return {
    title: metaTitle,
    description: metaDescription,
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteConfig.url,
      title: metaTitle,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: '@spheredsp',
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
  }
}

export const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sphere DSP',
  url: 'https://spheredsp.com',
  logo: 'https://spheredsp.com/assets/logo.png',
  description: siteConfig.description,
  sameAs: [siteConfig.links.twitter, siteConfig.links.github],
}

export function generateProductJsonLd(product: {
  name: string
  description: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    description: product.description,
    url: product.url,
    applicationCategory: 'AudioApplication',
    operatingSystem: 'macOS, Windows',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/PreOrder',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sphere DSP',
    },
  }
}

