export const technologyContent = {
  hero: {
    title: 'Built on obsessive optimization',
    description:
      'Every millisecond matters when you are tracking vocals or mixing live. Sphere DSP combines hand-tuned algorithms with modern ML - without compromise.',
  },
  sections: [
    {
      id: 'dsp-engine',
      title: 'DSP Engine',
      description:
        'Low-latency, high-precision signal processing built from the ground up for modern CPUs.',
      features: [
        {
          title: 'Vectorized Processing',
          description:
            'SIMD-optimized kernels (SSE, AVX2, AVX-512, ARM NEON) for maximum throughput.',
        },
        {
          title: 'Zero-Copy Architecture',
          description:
            'Lock-free buffers and cache-friendly memory layouts minimize overhead.',
        },
        {
          title: 'Adaptive Oversampling',
          description: 'Intelligent upsampling only where aliasing matters, saving CPU.',
        },
        {
          title: 'GPU Acceleration',
          description:
            'FFT analysis and spectral processing offloaded to GPU on supported systems.',
        },
      ],
    },
    {
      id: 'ai-copilot',
      title: 'AI Copilot',
      description:
        'Machine learning that listens to your mix and suggests changes-but never applies them automatically.',
      features: [
        {
          title: 'Context-Aware Analysis',
          description:
            'Trained on 10,000+ professional mixes to understand genre, balance, and intent.',
        },
        {
          title: 'Explainable Suggestions',
          description:
            'Every recommendation includes a reason: "This frequency masks the vocal" or "Low-end buildup at 80Hz."',
        },
        {
          title: 'Non-Destructive',
          description:
            'Copilot never touches your settings. You review, adjust, or dismiss each suggestion.',
        },
        {
          title: 'On-Device Inference',
          description:
            'Models run locally (CoreML / ONNX Runtime). Your audio never leaves your machine.',
        },
      ],
    },
    {
      id: 'performance',
      title: 'Latency & Performance',
      description: 'Obsessively optimized for real-time use. Track with confidence.',
      stats: [
        {
          label: 'Processing Latency',
          value: '<1ms',
          description: 'Zero-phase EQ, standard compressor',
        },
        {
          label: 'CPU Usage',
          value: '~3%',
          description: 'Full chain (EQ + Comp) at 48kHz on M1',
        },
        {
          label: 'Memory Footprint',
          value: '<50MB',
          description: 'Per plugin instance',
        },
        {
          label: 'Startup Time',
          value: '<100ms',
          description: 'Instant plugin load in DAW',
        },
      ],
    },
    {
      id: 'formats',
      title: 'Formats & Compatibility',
      description: 'Works in your favorite DAW, on your platform of choice.',
      formats: [
        {
          name: 'VST3',
          status: 'Beta',
          platforms: ['macOS', 'Windows'],
        },
        {
          name: 'Audio Unit (AU)',
          status: 'Beta',
          platforms: ['macOS'],
        },
        {
          name: 'AAX',
          status: 'Planned Q2 2025',
          platforms: ['macOS', 'Windows'],
        },
      ],
      requirements: {
        macOS: 'macOS 11+ (Intel & Apple Silicon native)',
        windows: 'Windows 10+ (x64)',
        daw: 'Any VST3/AU-compatible DAW',
      },
    },
    {
      id: 'roadmap',
      title: 'Roadmap',
      description:
        'We ship often and listen closely. Here is what is coming next.',
      items: [
        {
          quarter: 'Q1 2025',
          title: 'Public Beta Launch',
          description: 'Sphere EQ, Comp, and Suite available for beta testers.',
          status: 'current',
        },
        {
          quarter: 'Q2 2025',
          title: 'AAX Support',
          description: 'Pro Tools compatibility for Sphere plugins.',
          status: 'planned',
        },
        {
          quarter: 'Q3 2025',
          title: 'AI Copilot Integration',
          description: 'In-plugin assistant with real-time mix analysis.',
          status: 'planned',
        },
        {
          quarter: 'Q4 2025',
          title: 'New Processors',
          description: 'Saturation, Reverb, and Delay modules (community-driven).',
          status: 'planned',
        },
      ],
    },
  ],
}

