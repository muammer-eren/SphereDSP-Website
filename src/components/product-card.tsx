'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, LucideIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { fadeInUp } from '@/lib/motion'

interface ProductCardProps {
  name: string
  tagline: string
  description: string
  href: string
  icon: LucideIcon
}

export function ProductCard({ name, tagline, description, href, icon: Icon }: ProductCardProps) {
  return (
    <motion.div variants={fadeInUp}>
      <Link href={href} className="block h-full">
        <Card className="group h-full transition-all hover:border-white/20 hover:shadow-xl hover:shadow-[#9AE6FF]/10">
          <CardHeader>
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#9AE6FF]/20 to-[#B8A2FF]/20 backdrop-blur-sm transition-transform group-hover:scale-110">
              <Icon className="h-8 w-8 text-[#9AE6FF]" />
            </div>
            <CardTitle className="text-2xl">{name}</CardTitle>
            <p className="text-sm font-medium text-[#B8A2FF]">{tagline}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <CardDescription className="leading-relaxed">{description}</CardDescription>
            <Button
              variant="ghost"
              className="group/btn gap-1 p-0 text-primary hover:bg-transparent"
            >
              Learn more
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

