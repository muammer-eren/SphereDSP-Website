'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { fadeInUp } from '@/lib/motion'

interface FounderCardProps {
  name: string
  role: string
  bio: string
  image: string
  alt: string
  links?: {
    linkedin?: string
  }
}

export function FounderCard({ name, role, bio, image, alt, links }: FounderCardProps) {
  return (
    <motion.div variants={fadeInUp}>
      <Card className="group h-full transition-all hover:border-white/20 hover:shadow-xl hover:shadow-[#9AE6FF]/10">
        <CardContent className="p-6">
          <div className="mb-4 aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-[#9AE6FF]/10 to-[#B8A2FF]/10">
            <Image
              src={image}
              alt={alt}
              width={400}
              height={400}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <h3 className="mb-1 text-xl font-bold">{name}</h3>
          <p className="mb-3 text-sm text-[#9AE6FF]">{role}</p>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{bio}</p>
          {links?.linkedin && (
            <Link
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              aria-label={`${name} on LinkedIn`}
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </Link>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

