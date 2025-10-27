'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { fadeInUp, staggerContainer } from '@/lib/motion'

interface TimelineItem {
  period: string
  title: string
  description: string
}

interface JourneyTimelineProps {
  items: TimelineItem[]
}

export function JourneyTimeline({ items }: JourneyTimelineProps) {
  return (
    <motion.div
      className="relative space-y-8"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
    >
      {/* Vertical line */}
      <div className="absolute left-[15px] top-8 bottom-8 w-px bg-gradient-to-b from-[#9AE6FF] via-[#B8A2FF] to-transparent md:left-[19px]" />

      {items.map((item, index) => (
        <motion.div key={item.period} className="relative" variants={fadeInUp}>
          <div className="flex items-start gap-6 md:gap-8">
            {/* Bullet point */}
            <div className="relative z-10 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#9AE6FF] to-[#B8A2FF] shadow-lg shadow-[#9AE6FF]/30 md:h-10 md:w-10">
              <div className="h-3 w-3 rounded-full bg-background md:h-4 md:w-4" />
            </div>

            {/* Content */}
            <div className="flex-1 pt-0.5">
              <Card className="transition-all hover:border-white/20">
                <CardContent className="p-6">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[#9AE6FF]">
                    {item.period}
                  </p>
                  <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

