import { cn } from '@/lib/utils'

interface KickerProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
  className?: string
}

export function Kicker({ children, className, ...props }: KickerProps) {
  return (
    <p
      className={cn(
        'text-sm font-medium uppercase tracking-wider text-muted-foreground',
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}

