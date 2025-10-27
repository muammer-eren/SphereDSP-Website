'use client'

import { cn } from '@/lib/utils'

interface GradientHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: React.ReactNode
  className?: string
}

export function GradientHeading({
  as: Component = 'h2',
  children,
  className,
  ...props
}: GradientHeadingProps) {
  return (
    <Component
      className={cn('gradient-text font-bold tracking-tight', className)}
      {...props}
    >
      {children}
    </Component>
  )
}

