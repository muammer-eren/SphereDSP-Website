'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { fadeInUp } from '@/lib/motion'

interface TestimonialProps {
  quote: string
  author: string
  role: string
  company?: string
}

export function Testimonial({ quote, author, role, company }: TestimonialProps) {
  return (
    <motion.div variants={fadeInUp}>
      <Card className="h-full">
        <CardContent className="space-y-4 p-6">
          <p className="text-lg leading-relaxed text-foreground/90">"{quote}"</p>
          <div className="border-t border-white/10 pt-4">
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-muted-foreground">
              {role}
              {company && ` at ${company}`}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

