'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { fadeInUp, staggerContainer } from '@/lib/motion'

interface RoadmapQuarter {
  period: string
  title: string
  items: string[]
}

interface RoadmapTimelineProps {
  quarters: RoadmapQuarter[]
}

export function RoadmapTimeline({ quarters }: RoadmapTimelineProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className="relative grid gap-8 md:grid-cols-3"
    >
      {quarters.map((quarter, index) => (
        <motion.div key={quarter.period} variants={fadeInUp}>
          <Card className="group h-full transition-all hover:border-white/20 hover:shadow-xl hover:shadow-[#9AE6FF]/10">
            <CardContent className="p-6">
              {/* Quarter Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#9AE6FF]/20 to-[#B8A2FF]/20 px-4 py-1.5 backdrop-blur-sm">
                <span className="text-sm font-bold text-[#9AE6FF]">{quarter.period}</span>
              </div>

              {/* Title */}
              <h3 className="mb-4 text-2xl font-bold">{quarter.title}</h3>

              {/* Items List */}
              <ul className="space-y-3">
                {quarter.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#9AE6FF]" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Progress Indicator */}
              {index === 0 && (
                <div className="mt-6 rounded-lg bg-gradient-to-r from-[#9AE6FF]/10 to-[#B8A2FF]/10 p-3">
                  <p className="text-xs font-medium text-[#9AE6FF]">🚀 In Progress</p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}

