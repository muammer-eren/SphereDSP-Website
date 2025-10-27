import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  variant?: 'default' | 'gradient' | 'success'
  className?: string
}

export function Badge({
  children,
  variant = 'default',
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        {
          'bg-white/10 text-white backdrop-blur-sm': variant === 'default',
          'bg-gradient-to-r from-[#9AE6FF] to-[#B8A2FF] text-black':
            variant === 'gradient',
          'bg-success/20 text-success': variant === 'success',
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

