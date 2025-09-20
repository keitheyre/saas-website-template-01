import { Navigation } from '../../components/ui/navigation'
import { Footer } from '../../components/ui/footer'

export const metadata = {
  title: 'API Documentation - SaaS Template',
  description: 'Comprehensive API documentation for integrating with SaaS Template platform.',
}

export default function ApiPage() {
  const endpoints = [
    {
      method: 'GET',
      path: '/api/users',
      description: 'Retrieve a list of users',
      parameters: ['limit', 'offset', 'search'],
      example: 'GET /api/users?limit=10&offset=0'
    },
    {
      method: 'POST',
      path: '/api/users',
      description: 'Create a new user',
      parameters: ['name', 'email', 'role'],
      example: 'POST /api/users'
    },
    {
      method: 'GET',
      path: '/api/users/{id}',
      description: 'Get user details by ID',
      parameters: ['id'],
      example: 'GET /api/users/123'
    },
    {
      method: 'PUT',
      path: '/api/users/{id}',
      description: 'Update user information',
      parameters: ['id', 'name', 'email', 'role'],
      example: 'PUT /api/users/123'
    },
    {
      method: 'DELETE',
      path: '/api/users/{id}',
      description: 'Delete a user',
      parameters: ['id'],
      example: 'DELETE /api/users/123'
    },
    {
      method: 'GET',
      path: '/api/analytics',
      description: 'Get platform analytics data',
      parameters: ['start_date', 'end_date', 'metrics'],
      example: 'GET /api/analytics?start_date=2025-01-01&end_date=2025-01-31'
    }
  ]

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'from-green-500 to-emerald-600'
      case 'POST': return 'from-blue-500 to-indigo-600'
      case 'PUT': return 'from-orange-500 to-amber-600'
      case 'DELETE': return 'from-red-500 to-rose-600'
      default: return 'from-gray-500 to-gray-600'
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
              API{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Documentation
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Integrate with our platform using our comprehensive REST API. Build powerful applications and automate workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Getting Started</h2>
              <div className="space-y-6">
                <div className="glass dark:glass-dark p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-foreground mb-3">Authentication</h3>
                  <p className="text-muted-foreground mb-4">
                    All API requests require authentication using Bearer tokens.
                  </p>
                  <div className="bg-black/50 p-4 rounded-lg font-mono text-sm text-green-400">
                    Authorization: Bearer your_api_key_here
                  </div>
                </div>

                <div className="glass dark:glass-dark p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-foreground mb-3">Base URL</h3>
                  <p className="text-muted-foreground mb-4">
                    All API endpoints are relative to the base URL.
                  </p>
                  <div className="bg-black/50 p-4 rounded-lg font-mono text-sm text-blue-400">
                    https://api.saastemplate.com/v1
                  </div>
                </div>

                <div className="glass dark:glass-dark p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-foreground mb-3">Rate Limits</h3>
                  <p className="text-muted-foreground">
                    1000 requests per hour for free tier, 10000 for premium plans.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">SDKs & Libraries</h2>
              <div className="space-y-4">
                <div className="glass dark:glass-dark p-6 rounded-2xl">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-sm">JS</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">JavaScript SDK</h4>
                      <p className="text-sm text-muted-foreground">npm install saas-template-sdk</p>
                    </div>
                  </div>
                </div>

                <div className="glass dark:glass-dark p-6 rounded-2xl">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-sm">PY</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Python SDK</h4>
                      <p className="text-sm text-muted-foreground">pip install saas-template-python</p>
                    </div>
                  </div>
                </div>

                <div className="glass dark:glass-dark p-6 rounded-2xl">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-sm">GO</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Go SDK</h4>
                      <p className="text-sm text-muted-foreground">go get github.com/saas-template/go-sdk</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">API Endpoints</h2>
            <p className="text-xl text-muted-foreground">Complete reference for all available endpoints</p>
          </div>

          <div className="space-y-6">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="glass dark:glass-dark p-8 rounded-2xl">
                <div className="flex items-start gap-6">
                  <div className={`px-3 py-1 rounded-lg bg-gradient-to-r ${getMethodColor(endpoint.method)} text-white font-bold text-sm min-w-[60px] text-center`}>
                    {endpoint.method}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{endpoint.path}</h3>
                    <p className="text-muted-foreground mb-4">{endpoint.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">Parameters:</h4>
                      <div className="flex flex-wrap gap-2">
                        {endpoint.parameters.map((param, i) => (
                          <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-sm rounded">
                            {param}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Example:</h4>
                      <div className="bg-black/50 p-4 rounded-lg font-mono text-sm text-green-400">
                        {endpoint.example}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Need Help?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our developer community and support team are here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105">
              Join Developer Community
            </button>
            <button className="px-8 py-4 glass dark:glass-dark border-2 border-white/30 text-foreground rounded-2xl font-bold text-lg hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}