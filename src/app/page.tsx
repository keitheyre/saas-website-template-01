import { Navigation } from '../components/ui/navigation'
import { Hero } from '../components/sections/hero'
import { Features } from '../components/sections/features'
import { Reasons } from '../components/sections/reasons'
import { Testimonials } from '../components/sections/testimonials'
import { Pricing } from '../components/sections/pricing'
import { Contact } from '../components/sections/contact'
import { Footer } from '../components/ui/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10 relative z-10">
      <Navigation />
      <Hero />
      <Features />
      <Reasons />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
