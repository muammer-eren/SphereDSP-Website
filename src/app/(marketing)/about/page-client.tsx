'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Kicker } from '@/components/kicker'
import { TeamGrid } from '@/components/team-grid'
import { JourneyTimeline } from '@/components/journey-timeline'
import { teamContent } from '@/content/team'
import { fadeInUp, staggerContainer } from '@/lib/motion'

export default function AboutPageClient() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 md:pt-32">
        <Container>
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Kicker className="mb-6">{teamContent.hero.kicker}</Kicker>
            </motion.div>

            <motion.h1
              className="mb-6 text-4xl font-bold tracking-tight md:text-6xl"
              variants={fadeInUp}
            >
              {teamContent.hero.title}
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground md:text-xl"
              variants={fadeInUp}
            >
              {teamContent.hero.subtitle}
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Our Journey Section */}
      <Section>
        <Container>
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
            >
              <motion.h2
                className="mb-12 text-center text-3xl font-bold md:text-4xl"
                variants={fadeInUp}
              >
                Our Journey
              </motion.h2>

              <JourneyTimeline items={teamContent.journey} />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section id="team">
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.h2
              className="mb-12 text-center text-3xl font-bold md:text-4xl"
              variants={fadeInUp}
            >
              Meet the Team
            </motion.h2>

            <TeamGrid members={teamContent.members} />
          </motion.div>
        </Container>
      </Section>

      {/* Mission Section */}
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
              <h2 className="mb-6 text-3xl font-bold">{teamContent.mission.title}</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {teamContent.mission.description}
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section>
        <Container>
          <motion.div
            className="mx-auto max-w-5xl"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.h2
              className="mb-12 text-center text-3xl font-bold md:text-4xl"
              variants={fadeInUp}
            >
              Our Values
            </motion.h2>

            <motion.div className="grid gap-8 md:grid-cols-3" variants={staggerContainer}>
              {teamContent.values.map((value) => (
                <motion.div key={value.title} variants={fadeInUp}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="mb-3 text-xl font-bold">{value.title}</h3>
                      <p className="leading-relaxed text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section>
        <Container>
          <motion.div
            className="glass-strong mx-auto max-w-2xl rounded-3xl p-12 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="mb-4 text-3xl font-bold">{teamContent.finalCta.title}</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              {teamContent.finalCta.description}
            </p>
            <Button asChild size="xl" variant="success">
              <Link href={teamContent.finalCta.buttonHref}>
                {teamContent.finalCta.buttonText}
              </Link>
            </Button>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}

