'use client'

import { motion } from 'framer-motion'
import { AudioLines, CircleDot, Boxes } from 'lucide-react'
import { Container } from '@/components/container'
import { Section } from '@/components/section'
import { ProductCard } from '@/components/product-card'
import { productsContent } from '@/content/products'
import { fadeInUp, staggerContainer } from '@/lib/motion'

const iconMap = {
  AudioLines,
  CircleDot,
  Boxes,
}

export default function ProductsPage() {
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
              {productsContent.overview.title}
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground md:text-xl"
              variants={fadeInUp}
            >
              {productsContent.overview.description}
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* Products Grid */}
      <Section>
        <Container>
          <motion.div
            className="grid gap-8 md:grid-cols-3"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
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
          </motion.div>
        </Container>
      </Section>
    </>
  )
}

