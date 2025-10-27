'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/container'
import { siteContent } from '@/content/site'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname?.startsWith(href)
  }

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/logo.png"
              alt="Sphere DSP"
              width={32}
              height={32}
              className="h-8 w-auto"
              priority
            />
            <span className="text-lg font-semibold">Sphere DSP</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {siteContent.nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative text-sm font-medium transition-colors hover:text-foreground',
                  isActive(link.href)
                    ? 'text-foreground after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-[#9AE6FF] after:to-[#B8A2FF]'
                    : 'text-muted-foreground'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild variant="success" size="sm">
              <Link href={siteContent.nav.cta.href}>{siteContent.nav.cta.label}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-white/10 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {siteContent.nav.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors',
                    isActive(link.href) ? 'text-foreground' : 'text-muted-foreground'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild variant="success" className="w-full">
                <Link href={siteContent.nav.cta.href} onClick={() => setIsMobileMenuOpen(false)}>
                  {siteContent.nav.cta.label}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}

