import { Navigation } from '../../components/ui/navigation'
import { Footer } from '../../components/ui/footer'

export const metadata = {
  title: 'Careers - SaaS Template',
  description: 'Join our team and help build the future of SaaS solutions.',
}

export default function CareersPage() {
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build beautiful, responsive user interfaces using React, Next.js, and modern web technologies.'
    },
    {
      id: 2,
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      description: 'Drive product strategy and work closely with engineering teams to deliver exceptional user experiences.'
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Maintain and improve our cloud infrastructure, CI/CD pipelines, and deployment processes.'
    },
    {
      id: 4,
      title: 'UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create intuitive and beautiful user experiences that delight our customers.'
    },
    {
      id: 5,
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote',
      type: 'Full-time',
      description: 'Help our customers achieve their goals and ensure they have a great experience with our platform.'
    },
    {
      id: 6,
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      description: 'Develop and execute marketing campaigns to grow our user base and brand awareness.'
    }
  ]

  const benefits = [
    {
      icon: '🏠',
      title: 'Remote First',
      description: 'Work from anywhere in the world with our fully remote culture.'
    },
    {
      icon: '⏰',
      title: 'Flexible Hours',
      description: 'Set your own schedule and maintain a healthy work-life balance.'
    },
    {
      icon: '📚',
      title: 'Learning Budget',
      description: 'Annual budget for courses, conferences, and professional development.'
    },
    {
      icon: '🏥',
      title: 'Health Coverage',
      description: 'Comprehensive health, dental, and vision insurance for you and your family.'
    },
    {
      icon: '✈️',
      title: 'Paid Time Off',
      description: 'Generous PTO policy plus company holidays and mental health days.'
    },
    {
      icon: '💻',
      title: 'Latest Tech',
      description: 'Work with cutting-edge technologies and top-tier equipment.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Join Our{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Help us build the future of SaaS solutions. We're looking for passionate individuals who want to make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/50 relative z-[110]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Join Us?</h2>
            <p className="text-xl text-muted-foreground">We offer competitive benefits and a great work environment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass dark:glass-dark p-6 rounded-2xl text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 relative z-[110]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Open Positions</h2>
            <p className="text-xl text-muted-foreground">Find your next opportunity with us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobOpenings.map((job) => (
              <div key={job.id} className="glass dark:glass-dark p-8 rounded-2xl hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{job.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full">{job.department}</span>
                      <span>{job.location}</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{job.description}</p>
                <button className="w-full py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-medium hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-muted/50 relative z-[110]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Culture</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We believe in fostering a culture of innovation, collaboration, and continuous learning.
                Our team is distributed across the globe, bringing diverse perspectives and ideas to everything we do.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're not just building software; we're building a community of passionate individuals who are
                committed to making a positive impact on businesses and users worldwide.
              </p>
            </div>
            <div className="glass dark:glass-dark p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">🚀</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Innovation Driven</h4>
                    <p className="text-sm text-muted-foreground">We encourage creative problem-solving</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">🤝</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Collaborative</h4>
                    <p className="text-sm text-muted-foreground">Teamwork makes the dream work</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">📈</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Growth Focused</h4>
                    <p className="text-sm text-muted-foreground">Continuous learning and development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}