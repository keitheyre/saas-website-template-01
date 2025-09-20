import { Navigation } from '../../components/ui/navigation'
import { Footer } from '../../components/ui/footer'

export const metadata = {
  title: 'Blog - SaaS Template',
  description: 'Stay updated with the latest insights, tutorials, and news from the SaaS Template team.',
}

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: '10 Ways to Boost Your SaaS Conversion Rates',
      excerpt: 'Learn proven strategies to increase user sign-ups and reduce churn in your SaaS application.',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'Marketing'
    },
    {
      id: 2,
      title: 'Building Scalable APIs with Next.js 15',
      excerpt: 'Discover how to create robust, scalable APIs using the latest features in Next.js 15.',
      date: '2025-01-10',
      readTime: '8 min read',
      category: 'Development'
    },
    {
      id: 3,
      title: 'The Future of SaaS: Trends to Watch in 2025',
      excerpt: 'Explore the emerging trends that will shape the SaaS industry in the coming year.',
      date: '2025-01-05',
      readTime: '6 min read',
      category: 'Industry'
    },
    {
      id: 4,
      title: 'Optimizing Database Performance for SaaS Applications',
      excerpt: 'Best practices for maintaining high performance as your user base grows.',
      date: '2024-12-28',
      readTime: '7 min read',
      category: 'Technical'
    },
    {
      id: 5,
      title: 'Customer Success Stories: How Companies Transformed Their Workflow',
      excerpt: 'Real stories from businesses that successfully implemented our SaaS solution.',
      date: '2024-12-20',
      readTime: '4 min read',
      category: 'Case Studies'
    },
    {
      id: 6,
      title: 'Security Best Practices for SaaS Providers',
      excerpt: 'Essential security measures every SaaS company should implement.',
      date: '2024-12-15',
      readTime: '9 min read',
      category: 'Security'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative z-[110]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Insights, tutorials, and industry trends to help you build better SaaS products and grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 relative z-[110]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="glass dark:glass-dark p-6 rounded-2xl hover:shadow-2xl transition-shadow duration-300 group">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-muted/50 relative z-[110]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Stay Updated</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Subscribe to our newsletter for the latest insights and updates.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/50 dark:bg-white/10 border border-white/30 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-medium hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}