'use client'

import { motion } from 'framer-motion'
import { PRICING_TIERS } from '../../data/sampleData'
import { STRINGS } from '../../config/strings'

export function Pricing() {
  const handlePricingCTA = (tier: typeof PRICING_TIERS[0]) => {
    if (tier.cta === 'Contact Sales') {
      const element = document.getElementById('contact')
      if (element) {
        const navHeight = 80 // Approximate height of fixed nav bar
        const elementPosition = element.offsetTop - navHeight
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    } else {
      // TODO: Implement trial signup logic
      console.log('Starting free trial for', tier.name)
    }
  }

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {STRINGS.pricing.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {STRINGS.pricing.subtitle}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_TIERS.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative glass dark:glass-dark p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border flex flex-col h-full ${
                tier.popular
                  ? 'border-primary/60 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 scale-105'
                  : 'border-white/20 hover:border-white/30'
              } group`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                    ⭐ Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {tier.name}
                </h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-primary">€{tier.price}</span>
                  <span className="text-muted-foreground ml-2">/{tier.period}</span>
                </div>
                <p className="text-muted-foreground mt-2">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-muted-foreground">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <button
                  onClick={() => handlePricingCTA(tier)}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                    tier.popular
                      ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:from-blue-500 hover:via-purple-500 hover:to-pink-500'
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 text-white hover:from-blue-500 hover:to-blue-600 dark:hover:from-gray-700 dark:hover:via-gray-600 dark:hover:to-gray-500'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}