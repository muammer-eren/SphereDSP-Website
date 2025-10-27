'use client'

import { motion } from 'framer-motion'
import { CircleDot, Check } from 'lucide-react'
import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/badge'
import { productsContent } from '@/content/products'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import Link from 'next/link'

const product = productsContent.products[1] // Compressor

export default function CompressorPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 md:pt-32">
        <Container>
          <motion.div
            className="mx-auto max-w-4xl"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#9AE6FF]/20 to-[#B8A2FF]/20">
                <CircleDot className="h-8 w-8 text-[#B8A2FF]" />
              </div>
              <div>
                <Badge variant="success">Beta</Badge>
                <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
                  {product.name}
                </h1>
              </div>
            </motion.div>

            <motion.p
              className="mb-8 text-xl text-muted-foreground"
              variants={fadeInUp}
            >
              {product.tagline}
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Button asChild size="xl" variant="success">
                <Link href="/#beta">Join the Beta</Link>
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Overview Section */}
      <Section>
        <Container>
          <motion.div
            className="mx-auto max-w-4xl"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div className="glass-strong rounded-3xl p-8 md:p-12" variants={fadeInUp}>
              <h2 className="mb-6 text-3xl font-bold">Overview</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {product.details.overview}
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section>
        <Container>
          <motion.div
            className="mx-auto max-w-4xl"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.h2 className="mb-8 text-3xl font-bold" variants={fadeInUp}>
              Key Features
            </motion.h2>

            <motion.div className="grid gap-4 md:grid-cols-2" variants={staggerContainer}>
              {product.features.map((feature) => (
                <motion.div key={feature} variants={fadeInUp}>
                  <Card>
                    <CardContent className="flex items-start gap-3 p-6">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/20">
                        <Check className="h-3 w-3 text-success" />
                      </div>
                      <p className="leading-relaxed">{feature}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Use Cases Section */}
      <Section>
        <Container>
          <motion.div
            className="mx-auto max-w-4xl"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.h2 className="mb-8 text-3xl font-bold" variants={fadeInUp}>
              Perfect For
            </motion.h2>

            <motion.div className="space-y-4" variants={staggerContainer}>
              {product.details.useCases.map((useCase) => (
                <motion.div key={useCase} variants={fadeInUp}>
                  <Card>
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="h-2 w-2 rounded-full bg-[#B8A2FF]" />
                      <p className="text-lg">{useCase}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Specs Section */}
      <Section>
        <Container>
          <motion.div
            className="mx-auto max-w-4xl"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.h2 className="mb-8 text-3xl font-bold" variants={fadeInUp}>
              Technical Specs
            </motion.h2>

            <motion.div className="glass-strong rounded-3xl p-8" variants={fadeInUp}>
              <dl className="grid gap-6 md:grid-cols-2">
                {Object.entries(product.details.specs).map(([key, value]) => (
                  <div key={key}>
                    <dt className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                      {key}
                    </dt>
                    <dd className="text-lg">{value}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section>
        <Container>
          <motion.div
            className="glass-strong mx-auto max-w-2xl rounded-3xl p-12 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="mb-4 text-3xl font-bold">Try Sphere Comp</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Join the beta and experience musical dynamics control.
            </p>
            <Button asChild size="xl" variant="success">
              <Link href="/#beta">Join the Beta</Link>
            </Button>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}

