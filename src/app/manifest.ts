import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sphere DSP',
    short_name: 'Sphere DSP',
    description: 'Precision DSP with an AI Copilot. Studio-grade audio plugins.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B0B0F',
    theme_color: '#9AE6FF',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

