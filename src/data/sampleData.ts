import { Feature, Reason, Testimonial, PricingTier } from '../lib/types';

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Advanced Analytics",
    description: "Gain deep insights with our comprehensive analytics dashboard.",
    icon: "BarChart3"
  },
  {
    id: 2,
    title: "Seamless Integration",
    description: "Connect with your favorite tools effortlessly.",
    icon: "Zap"
  },
  {
    id: 3,
    title: "Real-time Collaboration",
    description: "Work together in real-time from anywhere.",
    icon: "Users"
  },
  {
    id: 4,
    title: "AI-Powered Insights",
    description: "Leverage AI to uncover hidden patterns and opportunities.",
    icon: "Brain"
  },
  {
    id: 5,
    title: "Enterprise Security",
    description: "Bank-level security to protect your data.",
    icon: "Shield"
  },
  {
    id: 6,
    title: "24/7 Support",
    description: "Get help whenever you need it.",
    icon: "Headphones"
  }
];

export const REASONS: Reason[] = [
  {
    id: 1,
    title: "Scalable",
    description: "Grows with your business needs.",
    icon: "TrendingUp"
  },
  {
    id: 2,
    title: "Secure",
    description: "Enterprise-grade security.",
    icon: "Lock"
  },
  {
    id: 3,
    title: "Reliable",
    description: "99.9% uptime guarantee.",
    icon: "CheckCircle"
  },
  {
    id: 4,
    title: "User-Friendly",
    description: "Intuitive interface for all users.",
    icon: "Smile"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Product Manager",
    company: "TechCorp",
    avatar: "/avatars/alice.jpg",
    quote: "This SaaS has revolutionized how we manage our projects. The intuitive interface and powerful features have increased our team's productivity by 40%."
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "CTO",
    company: "InnovateInc",
    avatar: "/avatars/bob.jpg",
    quote: "The analytics capabilities are unmatched. We've gained insights that were previously impossible to obtain."
  },
  {
    id: 3,
    name: "Carol Davis",
    role: "CEO",
    company: "StartupXYZ",
    avatar: "/avatars/carol.jpg",
    quote: "From day one, the support team has been exceptional. They helped us integrate seamlessly into our workflow."
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Operations Director",
    company: "EnterpriseCo",
    avatar: "/avatars/david.jpg",
    quote: "The scalability of this platform has allowed us to expand without any hiccups. Highly recommended."
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 1,
    name: "Starter",
    price: 9,
    period: "month",
    description: "Perfect for small teams",
    features: [
      "Up to 5 users",
      "Basic analytics",
      "Email support",
      "1GB storage"
    ],
    cta: "Start Free Trial",
    popular: false
  },
  {
    id: 2,
    name: "Pro",
    price: 29,
    period: "month",
    description: "Ideal for growing businesses",
    features: [
      "Up to 50 users",
      "Advanced analytics",
      "Priority support",
      "10GB storage",
      "API access"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    id: 3,
    name: "Enterprise",
    price: 99,
    period: "month",
    description: "For large organizations",
    features: [
      "Unlimited users",
      "Custom analytics",
      "Dedicated support",
      "Unlimited storage",
      "Advanced integrations",
      "Custom training"
    ],
    cta: "Contact Sales",
    popular: false
  }
];