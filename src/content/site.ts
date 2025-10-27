export const siteContent = {
  nav: {
    links: [
      { label: 'Products', href: '/products' },
      { label: 'Suite', href: '/suite' },
      { label: 'Technology', href: '/technology' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    cta: {
      label: 'Join the Beta',
      href: '#beta',
    },
  },
  footer: {
    columns: [
      {
        title: 'Products',
        links: [
          { label: 'All Products', href: '/products' },
          { label: 'Sphere EQ', href: '/products/equalizer' },
          { label: 'Sphere Comp', href: '/products/compressor' },
          { label: 'Sphere Suite', href: '/suite' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Technology', href: '/technology' },
          { label: 'Contact', href: '/contact' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'Documentation', href: '#' },
          { label: 'Support', href: '#' },
          { label: 'Community', href: '#' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy Policy', href: '/legal/privacy' },
          { label: 'Terms of Service', href: '/legal/terms' },
        ],
      },
    ],
    social: [
      { name: 'Twitter', href: 'https://twitter.com/spheredsp', icon: 'Twitter' },
      { name: 'GitHub', href: 'https://github.com/spheredsp', icon: 'Github' },
      { name: 'YouTube', href: 'https://youtube.com/@spheredsp', icon: 'Youtube' },
    ],
    copyright: `© ${new Date().getFullYear()} Sphere DSP. All rights reserved.`,
  },
  home: {
    hero: {
      kicker: 'Audio Intelligence, Human Taste.',
      title: 'Precision DSP with an AI Copilot.',
      subtitle:
        'Sphere DSP builds studio-grade plugins with modern signal processing and an optional AI assistant that listens, learns, and helps you mix faster-without losing your sound.',
      cta: {
        primary: { label: 'Join the Beta', href: '#beta' },
        secondary: { label: 'See the Tech', href: '/technology' },
      },
    },
    features: [
      {
        title: 'Smart Resonance Tracking',
        subtitle: 'EQ',
        description:
          'Tames harshness in context, not in isolation. Identify and control resonances that actually matter in the mix.',
        icon: 'AudioLines',
      },
      {
        title: 'Analog Warmth Engine',
        subtitle: 'Compressor',
        description:
          'Smooth dynamics with musical harmonics inspired by beloved hardware-without the noise.',
        icon: 'CircleDot',
      },
      {
        title: 'Modular Suite',
        subtitle: 'Host',
        description:
          'Combine plugins in one host with global macros, recallable chains, and lightning-fast A/B.',
        icon: 'Boxes',
      },
    ],
    copilot: {
      title: 'AI that augments, not automates',
      description:
        'Ask for brighter vocals or tighter low-end. Sphere Copilot suggests surgical tweaks, explains the "why," and never overwrites your taste.',
      chips: ['Source-aware', 'Non-destructive', 'Explainable', 'Realtime'],
    },
    dsp: {
      title: 'Low-latency DSP',
      description:
        'Built for tracking and live performance-micro-optimized kernels, vectorized filters, and GPU-friendly analysis.',
    },
    team: {
      title: 'Built by a small team of engineers and producers.',
      cta: { label: 'Meet the team', href: '/about#team' },
    },
    finalCta: {
      title: 'Be an early ear.',
      description: 'Sign up for beta access and shape the future of Sphere DSP.',
    },
  },
}

