'use client'

import { motion } from 'framer-motion'
import { FEATURES } from '../../data/sampleData'
import { STRINGS } from '../../config/strings'
import * as Icons from 'lucide-react'

export function Features() {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {STRINGS.features.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {STRINGS.features.subtitle}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => {
            const IconComponent = Icons[feature.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>
            const colors = [
              'from-blue-500 via-purple-600 to-blue-600',
              'from-green-500 via-teal-600 to-green-600',
              'from-orange-500 via-red-600 to-orange-600',
              'from-purple-500 via-pink-600 to-purple-600',
              'from-indigo-500 via-blue-600 to-indigo-600',
              'from-pink-500 via-rose-600 to-pink-600'
            ]
            const bgColors = [
              'bg-blue-50 dark:bg-blue-950/20',
              'bg-green-50 dark:bg-green-950/20',
              'bg-orange-50 dark:bg-orange-950/20',
              'bg-purple-50 dark:bg-purple-950/20',
              'bg-indigo-50 dark:bg-indigo-950/20',
              'bg-pink-50 dark:bg-pink-950/20'
            ]
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`${bgColors[index % bgColors.length]} glass dark:glass-dark p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-white/20 hover:border-white/30 group`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors[index % colors.length]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}