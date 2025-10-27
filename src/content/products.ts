export const productsContent = {
  overview: {
    title: 'Tools that stay out of the way.',
    description:
      'From a smarter EQ to a kinder compressor, each tool is designed to remove friction and reveal decisions.',
  },
  products: [
    {
      id: 'equalizer',
      name: 'Sphere EQ',
      tagline: 'Smart Resonance Tracking',
      shortDescription: 'Context-aware EQ that identifies and controls resonances that matter.',
      href: '/products/equalizer',
      icon: 'AudioLines',
      features: [
        'Context-aware resonance detection',
        'Musical curves with proportional Q',
        'Auto-gain compensation',
        'Delta listen mode',
        'Split-band dynamics',
        'Zero & Linear-phase modes',
      ],
      details: {
        overview:
          'Sphere EQ goes beyond traditional parametric EQs by analyzing your mix in context. Its Smart Resonance Tracking identifies harsh frequencies that clash with other elements, not just isolated peaks.',
        useCases: [
          'Tame vocal sibilance without dulling presence',
          'Control guitar resonances that only appear in dense mixes',
          'Surgical fixes with musical results',
          'Mastering-grade transparency',
        ],
        specs: {
          bands: 'Up to 12 bands',
          filters: 'Bell, Shelf, Notch, High/Low Pass',
          analysis: 'Real-time FFT with mix-aware detection',
          latency: '<1ms (Zero-phase) / Variable (Linear-phase)',
        },
      },
    },
    {
      id: 'compressor',
      name: 'Sphere Comp',
      tagline: 'Analog Warmth, Modern Control',
      shortDescription: 'Musical dynamics with program-dependent detection and harmonic color.',
      href: '/products/compressor',
      icon: 'CircleDot',
      features: [
        'Program-dependent detection (ARC)',
        'Drive & Tone for harmonic color',
        'Lookahead up to 10ms',
        'Parallel blend control',
        'Sidechain EQ with presets',
        'Gain-matched A/B comparison',
      ],
      details: {
        overview:
          'Sphere Comp combines the musical character of classic analog compressors with modern flexibility. The Analog Warmth Engine adds harmonics that glue mixes without muddiness.',
        useCases: [
          'Vocal compression with presence and body',
          'Bus compression that adds cohesion',
          'Drum room glue without pumping',
          'Mastering-grade peak control',
        ],
        specs: {
          ratio: '1:1 to ∞:1 (Limiter mode)',
          attack: '0.1ms to 100ms',
          release: '10ms to 2s (Auto available)',
          latency: '<0.5ms (Standard) / Up to 10ms (Lookahead)',
        },
      },
    },
    {
      id: 'suite',
      name: 'Sphere Suite',
      tagline: 'One place for your chain',
      shortDescription: 'Modular host for Sphere plugins with macros, scenes, and instant A/B/X.',
      href: '/suite',
      icon: 'Boxes',
      features: [
        'Drag-and-drop plugin chains',
        'Global macros across multiple plugins',
        'Scene management (A/B/X/Y)',
        'Gain-matched comparison',
        'Preset export & sharing',
        'Future: AI Assistant integration',
      ],
      details: {
        overview:
          'Sphere Suite is a lightweight host that runs all your Sphere plugins together. Create reusable chains, map macros across multiple processors, and compare settings instantly.',
        useCases: [
          'Build channel strips for vocals, drums, bass',
          'Recall entire mastering chains',
          'A/B/X test different approaches in real-time',
          'Share templates with collaborators',
        ],
        specs: {
          plugins: 'All current & future Sphere plugins',
          scenes: 'Up to 8 simultaneous snapshots',
          macros: '16 global controls',
          latency: 'Sum of active plugins',
        },
      },
    },
  ],
}

