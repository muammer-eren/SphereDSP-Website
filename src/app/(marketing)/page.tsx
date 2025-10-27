'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  AudioLines,
  CircleDot,
  Boxes,
  ArrowRight,
  Sparkles,
  Zap,
} from 'lucide-react'
import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/badge'
import { Kicker } from '@/components/kicker'
import { GradientHeading } from '@/components/gradient-heading'
import { FeatureCard } from '@/components/feature-card'
import { ProductCard } from '@/components/product-card'
import { siteContent } from '@/content/site'
import { productsContent } from '@/content/products'
import { teamContent } from '@/content/team'
import { roadmapContent } from '@/content/roadmap'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { RoadmapTimeline } from '@/components/roadmap-timeline'

const iconMap = {
  AudioLines,
  CircleDot,
  Boxes,
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="relative overflow-hidden pt-24 md:pt-32 lg:pt-40">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="animate-gradient absolute inset-0 bg-gradient-radial from-[#9AE6FF]/10 via-[#B8A2FF]/5 to-transparent opacity-50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#9AE6FF]/5 via-transparent to-transparent" />
        </div>

        <Container>
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Kicker className="mb-6">{siteContent.home.hero.kicker}</Kicker>
            </motion.div>

            <motion.h1
              className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
              variants={fadeInUp}
            >
              {siteContent.home.hero.title}
            </motion.h1>

            <motion.p
              className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground md:text-xl"
              variants={fadeInUp}
            >
              {siteContent.home.hero.subtitle}
            </motion.p>

            <motion.div
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
              variants={fadeInUp}
            >
              <Button asChild size="xl" variant="success">
                <Link href={siteContent.home.hero.cta.primary.href}>
                  {siteContent.home.hero.cta.primary.label}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline">
                <Link href={siteContent.home.hero.cta.secondary.href}>
                  {siteContent.home.hero.cta.secondary.label}
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section>
        <Container>
          <motion.div
            className="grid gap-8 md:grid-cols-3"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            {siteContent.home.features.map((feature) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap]
              return (
                <FeatureCard
                  key={feature.title}
                  title={feature.title}
                  subtitle={feature.subtitle}
                  description={feature.description}
                  icon={Icon}
                />
              )
            })}
          </motion.div>
        </Container>
      </Section>

      {/* AI Copilot Section */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#B8A2FF]/5 to-transparent" />
        <Container>
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <Sparkles className="mx-auto mb-4 h-12 w-12 text-[#B8A2FF]" />
              <GradientHeading as="h2" className="mb-4 text-3xl md:text-5xl">
                {siteContent.home.copilot.title}
              </GradientHeading>
            </motion.div>

            <motion.p
              className="mb-8 text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              {siteContent.home.copilot.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-3"
              variants={fadeInUp}
            >
              {siteContent.home.copilot.chips.map((chip) => (
                <Badge key={chip} variant="gradient">
                  {chip}
                </Badge>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* DSP Performance Section */}
      <Section>
        <Container>
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <Zap className="mx-auto mb-4 h-12 w-12 text-[#9AE6FF]" />
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
                {siteContent.home.dsp.title}
              </h2>
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              {siteContent.home.dsp.description}
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Products Section */}
      <Section>
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div className="mb-12 text-center" variants={fadeInUp}>
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
                Meet the plugins
              </h2>
              <p className="text-lg text-muted-foreground">
                Precision tools for modern production
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3">
              {productsContent.products.map((product) => {
                const Icon = iconMap[product.icon as keyof typeof iconMap]
                return (
                  <ProductCard
                    key={product.id}
                    name={product.name}
                    tagline={product.tagline}
                    description={product.shortDescription}
                    href={product.href}
                    icon={Icon}
                  />
                )
              })}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Team Teaser Section */}
      <Section>
        <Container>
          <motion.div
            className="glass-strong rounded-3xl p-12 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              {siteContent.home.team.title}
            </h2>
            
            <p className="mb-8 text-muted-foreground">
              Emre Murat, Damla Şentürk, and Muammer Eren
            </p>

            <div className="mb-8 flex justify-center gap-4">
              {teamContent.members.slice(0, 3).map((member) => (
                <div
                  key={member.name}
                  className="group relative h-20 w-20 overflow-hidden rounded-full border-2 border-white/20 transition-all hover:border-[#9AE6FF]/50 hover:scale-105"
                  title={member.name}
                >
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <Button asChild variant="outline" size="lg">
              <Link href={siteContent.home.team.cta.href}>
                {siteContent.home.team.cta.label}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </Container>
      </Section>

      {/* Roadmap Section */}
      <Section>
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div className="mb-12 text-center" variants={fadeInUp}>
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
                {roadmapContent.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {roadmapContent.subtitle}
              </p>
            </motion.div>

            <RoadmapTimeline quarters={roadmapContent.quarters} />
          </motion.div>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section id="beta">
        <Container>
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.h2
              className="mb-4 text-3xl font-bold tracking-tight md:text-5xl"
              variants={fadeInUp}
            >
              {siteContent.home.finalCta.title}
            </motion.h2>

            <motion.p
              className="mb-8 text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              {siteContent.home.finalCta.description}
            </motion.p>

            <motion.div variants={fadeInUp}>
              <BetaSignupForm />
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}

function BetaSignupForm() {
  const [email, setEmail] = React.useState('')
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'beta' }),
      })

      if (response.ok) {
        setStatus('success')
        setEmail('')
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
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-md gap-2">
      <input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={status === 'loading' || status === 'success'}
        className="flex h-12 flex-1 rounded-lg border border-input bg-background/50 px-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
      />
      <Button
        type="submit"
        variant="success"
        size="lg"
        disabled={status === 'loading' || status === 'success'}
      >
        {status === 'loading'
          ? 'Joining...'
          : status === 'success'
            ? 'Joined!'
            : 'Join Beta'}
      </Button>
    </form>
  )
}

