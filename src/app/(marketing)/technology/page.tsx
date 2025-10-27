'use client'

import { motion } from 'framer-motion'
import { Cpu, Sparkles, Zap, Package, Calendar } from 'lucide-react'
import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/badge'
import { GradientHeading } from '@/components/gradient-heading'
import { technologyContent } from '@/content/technology'
import { fadeInUp, staggerContainer } from '@/lib/motion'

export default function TechnologyPage() {
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
              {technologyContent.hero.title}
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground md:text-xl"
              variants={fadeInUp}
            >
              {technologyContent.hero.description}
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* DSP Engine Section */}
      <Section>
        <Container>
          <motion.div
            className="mx-auto max-w-5xl"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div className="mb-12 flex items-center gap-4" variants={fadeInUp}>
              <Cpu className="h-10 w-10 text-[#9AE6FF]" />
              <GradientHeading as="h2" className="text-3xl md:text-4xl">
                {technologyContent.sections[0].title}
              </GradientHeading>
            </motion.div>

            <motion.p
              className="mb-8 text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              {technologyContent.sections[0].description}
            </motion.p>

            <motion.div className="grid gap-6 md:grid-cols-2" variants={staggerContainer}>
              {technologyContent.sections[0].features?.map((feature) => (
                <motion.div key={feature.title} variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* AI Copilot Section */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#B8A2FF]/5 to-transparent" />
        <Container>
          <motion.div
            className="mx-auto max-w-5xl"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div className="mb-12 flex items-center gap-4" variants={fadeInUp}>
              <Sparkles className="h-10 w-10 text-[#B8A2FF]" />
              <GradientHeading as="h2" className="text-3xl md:text-4xl">
                {technologyContent.sections[1].title}
              </GradientHeading>
            </motion.div>

            <motion.p
              className="mb-8 text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              {technologyContent.sections[1].description}
            </motion.p>

            <motion.div className="grid gap-6 md:grid-cols-2" variants={staggerContainer}>
              {technologyContent.sections[1].features?.map((feature) => (
                <motion.div key={feature.title} variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Performance Stats Section */}
      <Section>
        <Container>
          <motion.div
            className="mx-auto max-w-5xl"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div className="mb-12 flex items-center gap-4" variants={fadeInUp}>
              <Zap className="h-10 w-10 text-[#9AE6FF]" />
              <GradientHeading as="h2" className="text-3xl md:text-4xl">
                {technologyContent.sections[2].title}
              </GradientHeading>
            </motion.div>

            <motion.p
              className="mb-8 text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              {technologyContent.sections[2].description}
            </motion.p>

            <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" variants={staggerContainer}>
              {technologyContent.sections[2].stats?.map((stat) => (
                <motion.div key={stat.label} variants={fadeInUp}>
                  <Card className="text-center">
                    <CardContent className="p-6">
                      <div className="mb-2 text-4xl font-bold text-[#9AE6FF]">
                        {stat.value}
                      </div>
                      <div className="mb-2 font-semibold">{stat.label}</div>
                      <div className="text-sm text-muted-foreground">
                        {stat.description}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Formats Section */}
      <Section>
        <Container>
          <motion.div
            className="mx-auto max-w-5xl"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div className="mb-12 flex items-center gap-4" variants={fadeInUp}>
              <Package className="h-10 w-10 text-[#9AE6FF]" />
              <h2 className="text-3xl font-bold md:text-4xl">
                {technologyContent.sections[3].title}
              </h2>
            </motion.div>

            <motion.p
              className="mb-8 text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              {technologyContent.sections[3].description}
            </motion.p>

            <motion.div className="mb-8 grid gap-6 md:grid-cols-3" variants={staggerContainer}>
              {technologyContent.sections[3].formats?.map((format) => (
                <motion.div key={format.name} variants={fadeInUp}>
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-3 flex items-center justify-between">
                        <h3 className="text-xl font-semibold">{format.name}</h3>
                        <Badge
                          variant={format.status === 'Beta' ? 'success' : 'default'}
                        >
                          {format.status}
                        </Badge>
                      </div>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        {format.platforms.map((platform) => (
                          <div key={platform}>• {platform}</div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="glass-strong rounded-2xl p-6" variants={fadeInUp}>
              <h3 className="mb-4 font-semibold">System Requirements</h3>
              <dl className="grid gap-4 md:grid-cols-3">
                {Object.entries(technologyContent.sections[3].requirements || {}).map(
                  ([key, value]) => (
                    <div key={key}>
                      <dt className="mb-1 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                        {key}
                      </dt>
                      <dd className="text-sm">{value}</dd>
                    </div>
                  )
                )}
              </dl>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Roadmap Section */}
      <Section>
        <Container>
          <motion.div
            className="mx-auto max-w-4xl"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div className="mb-12 flex items-center gap-4" variants={fadeInUp}>
              <Calendar className="h-10 w-10 text-[#B8A2FF]" />
              <h2 className="text-3xl font-bold md:text-4xl">
                {technologyContent.sections[4].title}
              </h2>
            </motion.div>

            <motion.p
              className="mb-8 text-lg text-muted-foreground"
              variants={fadeInUp}
            >
              {technologyContent.sections[4].description}
            </motion.p>

            <motion.div className="space-y-6" variants={staggerContainer}>
              {technologyContent.sections[4].items?.map((item) => (
                <motion.div key={item.quarter} variants={fadeInUp}>
                  <Card className={item.status === 'current' ? 'border-[#9AE6FF]/50' : ''}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Badge
                          variant={item.status === 'current' ? 'success' : 'default'}
                          className="mt-1"
                        >
                          {item.quarter}
                        </Badge>
                        <div>
                          <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}

