'use client'

import { motion } from 'framer-motion'
import { REASONS } from '../../data/sampleData'
import { STRINGS } from '../../config/strings'
import * as Icons from 'lucide-react'

export function Reasons() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {STRINGS.reasons.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {STRINGS.reasons.subtitle}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REASONS.map((reason, index) => {
            const IconComponent = Icons[reason.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>
            const colors = [
              'from-emerald-500 to-green-600',
              'from-blue-500 to-indigo-600',
              'from-amber-500 to-orange-600',
              'from-rose-500 to-pink-600'
            ]
            const bgColors = [
              'bg-emerald-50 dark:bg-emerald-950/20',
              'bg-blue-50 dark:bg-blue-950/20',
              'bg-amber-50 dark:bg-amber-950/20',
              'bg-rose-50 dark:bg-rose-950/20'
            ]
            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`${bgColors[index % bgColors.length]} glass dark:glass-dark p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-white/20 hover:border-white/30 group`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors[index % colors.length]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}