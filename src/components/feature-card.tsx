'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { fadeInUp } from '@/lib/motion'

interface FeatureCardProps {
  title: string
  subtitle?: string
  description: string
  icon: LucideIcon
}

export function FeatureCard({ title, subtitle, description, icon: Icon }: FeatureCardProps) {
  return (
    <motion.div variants={fadeInUp}>
      <Card className="group h-full transition-all hover:border-white/20 hover:shadow-lg hover:shadow-[#9AE6FF]/5">
        <CardHeader>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#9AE6FF]/20 to-[#B8A2FF]/20 backdrop-blur-sm">
            <Icon className="h-6 w-6 text-[#9AE6FF]" />
          </div>
          {subtitle && (
            <p className="text-xs font-medium uppercase tracking-wider text-[#9AE6FF]">
              {subtitle}
            </p>
          )}
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="leading-relaxed">{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}

