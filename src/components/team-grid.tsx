'use client'

import { motion } from 'framer-motion'
import { FounderCard } from '@/components/founder-card'
import { staggerContainer } from '@/lib/motion'

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  alt: string
  links?: {
    linkedin?: string
  }
}

interface TeamGridProps {
  members: TeamMember[]
}

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <motion.div
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
    >
      {members.map((member) => (
        <FounderCard
          key={member.name}
          name={member.name}
          role={member.role}
          bio={member.bio}
          image={member.image}
          alt={member.alt}
          links={member.links}
        />
      ))}
    </motion.div>
  )
}

