import { Variants } from 'framer-motion'

// Respect user's motion preferences
export const shouldReduceMotion = 
  typeof window !== 'undefined' && 
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Default animation variants
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: shouldReduceMotion ? 0 : 24,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: shouldReduceMotion ? 0.01 : 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const fadeIn: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: shouldReduceMotion ? 0.01 : 0.5,
      ease: 'easeOut',
    },
  },
}

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: shouldReduceMotion ? 0 : 0.12,
      delayChildren: shouldReduceMotion ? 0 : 0.1,
    },
  },
}

export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: shouldReduceMotion ? 1 : 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: shouldReduceMotion ? 0.01 : 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const slideInLeft: Variants = {
  initial: {
    opacity: 0,
    x: shouldReduceMotion ? 0 : -40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: shouldReduceMotion ? 0.01 : 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const slideInRight: Variants = {
  initial: {
    opacity: 0,
    x: shouldReduceMotion ? 0 : 40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: shouldReduceMotion ? 0.01 : 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

