import { Navigation } from '../../components/ui/navigation'
import { Footer } from '../../components/ui/footer'

export const metadata = {
  title: 'Documentation - SaaS Template',
  description: 'Comprehensive documentation and guides for using SaaS Template platform.',
}

export default function DocsPage() {
  const guides = [
    {
      title: 'Getting Started',
      description: 'Quick start guide to set up your account and first project',
      icon: '🚀',
      difficulty: 'Beginner',
      time: '10 min'
    },
    {
      title: 'User Management',
      description: 'Learn how to manage users, roles, and permissions',
      icon: '👥',
      difficulty: 'Intermediate',
      time: '15 min'
    },
    {
      title: 'API Integration',
      description: 'Connect your applications with our REST API',
      icon: '🔌',
      difficulty: 'Advanced',
      time: '25 min'
    },
    {
      title: 'Dashboard Customization',
      description: 'Customize your dashboard to fit your workflow',
      icon: '📊',
      difficulty: 'Beginner',
      time: '8 min'
    },
    {
      title: 'Security Best Practices',
      description: 'Keep your account and data secure',
      icon: '🔒',
      difficulty: 'Intermediate',
      time: '12 min'
    },
    {
      title: 'Troubleshooting',
      description: 'Common issues and how to resolve them',
      icon: '🔧',
      difficulty: 'All Levels',
      time: '20 min'
    }
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'from-green-500 to-emerald-600'
      case 'Intermediate': return 'from-yellow-500 to-orange-600'
      case 'Advanced': return 'from-red-500 to-rose-600'
      default: return 'from-blue-500 to-indigo-600'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10 relative z-10">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Documentation{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Center
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about using SaaS Template effectively. From setup to advanced features.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Quick Start Guide</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Get up and running in minutes with our comprehensive quick start guide.
                We'll walk you through account setup, your first project, and basic features.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <span className="text-foreground">Create your account</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <span className="text-foreground">Set up your first project</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <span className="text-foreground">Invite your team</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <span className="text-foreground">Start building!</span>
                </div>
              </div>
            </div>
            <div className="glass dark:glass-dark p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">Popular Topics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <span className="text-foreground">Account Setup</span>
                  <span className="text-sm text-muted-foreground">2.1k views</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <span className="text-foreground">API Authentication</span>
                  <span className="text-sm text-muted-foreground">1.8k views</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <span className="text-foreground">Dashboard Customization</span>
                  <span className="text-sm text-muted-foreground">1.5k views</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <span className="text-foreground">User Management</span>
                  <span className="text-sm text-muted-foreground">1.2k views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Guides & Tutorials</h2>
            <p className="text-xl text-muted-foreground">Step-by-step guides to help you master every feature</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <div key={index} className="glass dark:glass-dark p-8 rounded-2xl hover:shadow-2xl transition-shadow duration-300 group">
                <div className="text-4xl mb-4">{guide.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {guide.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {guide.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 bg-gradient-to-r ${getDifficultyColor(guide.difficulty)} text-white text-sm font-medium rounded-full`}>
                    {guide.difficulty}
                  </span>
                  <span className="text-sm text-muted-foreground">{guide.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Need More Help?</h2>
            <p className="text-xl text-muted-foreground">Our community and support team are here to help</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass dark:glass-dark p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Community Forum</h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of developers discussing best practices and sharing solutions.
              </p>
              <button className="w-full py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-medium hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300">
                Join Discussion
              </button>
            </div>

            <div className="glass dark:glass-dark p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Live Support</h3>
              <p className="text-muted-foreground mb-6">
                Get instant help from our support team during business hours.
              </p>
              <button className="w-full py-3 glass dark:glass-dark border-2 border-white/30 text-foreground rounded-xl font-medium hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300">
                Contact Support
              </button>
            </div>

            <div className="glass dark:glass-dark p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Video Tutorials</h3>
              <p className="text-muted-foreground mb-6">
                Watch step-by-step video guides covering advanced features and use cases.
              </p>
              <button className="w-full py-3 glass dark:glass-dark border-2 border-white/30 text-foreground rounded-xl font-medium hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300">
                Watch Videos
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}