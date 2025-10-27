'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageSquare, Send } from 'lucide-react'
import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { fadeInUp, staggerContainer } from '@/lib/motion'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    newsletter: false,
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '', newsletter: false })
        setTimeout(() => setStatus('idle'), 5000)
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
    <>
      {/* Hero Section */}
      <Section className="pt-24 md:pt-32">
        <Container>
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1
              className="mb-6 text-4xl font-bold tracking-tight md:text-6xl"
              variants={fadeInUp}
            >
              Get in Touch
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground md:text-xl"
              variants={fadeInUp}
            >
              Have questions about Sphere DSP? Want to join the beta? We'd love to hear from you.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Contact Form Section */}
      <Section>
        <Container>
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
            {/* Contact Info Cards */}
            <motion.div
              className="space-y-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardContent className="p-6">
                    <Mail className="mb-3 h-8 w-8 text-[#9AE6FF]" />
                    <h3 className="mb-2 font-semibold">Email Us</h3>
                    <a
                      href="mailto:hello@spheredsp.com"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      hello@spheredsp.com
                    </a>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card>
                  <CardContent className="p-6">
                    <MessageSquare className="mb-3 h-8 w-8 text-[#B8A2FF]" />
                    <h3 className="mb-2 font-semibold">Support</h3>
                    <a
                      href="mailto:support@spheredsp.com"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      support@spheredsp.com
                    </a>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card>
                  <CardContent className="p-6">
                    <Send className="mb-3 h-8 w-8 text-[#9AE6FF]" />
                    <h3 className="mb-2 font-semibold">Response Time</h3>
                    <p className="text-sm text-muted-foreground">
                      We typically respond within 24 hours during business days.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
            >
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        disabled={status === 'loading' || status === 'success'}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        disabled={status === 'loading' || status === 'success'}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                        disabled={status === 'loading' || status === 'success'}
                        className="mt-2"
                        rows={6}
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        id="newsletter"
                        type="checkbox"
                        checked={formData.newsletter}
                        onChange={(e) =>
                          setFormData({ ...formData, newsletter: e.target.checked })
                        }
                        disabled={status === 'loading' || status === 'success'}
                        className="h-4 w-4 rounded border-input bg-background"
                      />
                      <Label htmlFor="newsletter" className="cursor-pointer font-normal">
                        Subscribe to our newsletter for updates and releases
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      variant="success"
                      className="w-full"
                      disabled={status === 'loading' || status === 'success'}
                    >
                      {status === 'loading'
                        ? 'Sending...'
                        : status === 'success'
                          ? 'Message Sent!'
                          : 'Send Message'}
                    </Button>

                    {status === 'error' && (
                      <p className="text-center text-sm text-destructive">
                        Something went wrong. Please try again or email us directly.
                      </p>
                    )}

                    {status === 'success' && (
                      <p className="text-center text-sm text-success">
                        Thanks for reaching out! We'll get back to you soon.
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  )
}

