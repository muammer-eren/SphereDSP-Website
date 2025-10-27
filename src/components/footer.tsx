'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Twitter, Github, Youtube } from 'lucide-react'
import { Container } from '@/components/container'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { siteContent } from '@/content/site'
import { useState } from 'react'

const iconMap = {
  Twitter,
  Github,
  Youtube,
}

export function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus('success')
        setEmail('')
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 3000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <footer className="border-t border-white/10 bg-background/50 backdrop-blur-xl">
      <Container>
        {/* Main Footer Content */}
        <div className="grid gap-12 py-16 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/assets/logo.png"
                alt="Sphere DSP"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-lg font-semibold">Sphere DSP</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Precision DSP with an AI Copilot. Building the future of studio-grade audio tools.
            </p>
            <div className="mt-6 flex gap-4">
              {siteContent.footer.social.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap]
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Link Columns */}
          {siteContent.footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-sm font-semibold">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Column */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold">Stay Updated</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Get the latest updates on new products and beta releases.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === 'loading' || status === 'success'}
              />
              <Button
                type="submit"
                variant="gradient"
                className="w-full"
                disabled={status === 'loading' || status === 'success'}
              >
                {status === 'loading'
                  ? 'Subscribing...'
                  : status === 'success'
                    ? 'Subscribed!'
                    : 'Subscribe'}
              </Button>
              {status === 'error' && (
                <p className="text-xs text-destructive">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <p>{siteContent.footer.copyright}</p>
            <div className="flex gap-6">
              <Link href="/legal/privacy" className="transition-colors hover:text-foreground">
                Privacy
              </Link>
              <Link href="/legal/terms" className="transition-colors hover:text-foreground">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

