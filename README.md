# 🚀 SaaS Website Template

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.16-0055FF?style=for-the-badge&logo=framer)

[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)

*A modern, responsive SaaS website template built with Next.js 15, featuring glass morphism design, smooth animations, and dark/light theme support.*

[🌐 Live Demo](https://your-demo-url.com) • [📖 Documentation](https://your-docs-url.com) • [🎨 Figma Design](https://your-figma-url.com)

![SaaS Template Preview](./public/preview.png)

</div>

---

## ✨ Features

- 🎨 **Modern Design**: Glass morphism effects with beautiful gradients
- 🌙 **Dark/Light Theme**: Seamless theme switching with next-themes
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- ⚡ **Fast Performance**: Built with Next.js 15 and Turbopack
- 🎭 **Smooth Animations**: Powered by Framer Motion
- 🔧 **TypeScript**: Full type safety throughout the application
- 🎯 **SEO Optimized**: Built-in SEO best practices
- 📧 **Contact Forms**: Integrated form handling with validation
- 💳 **Pricing Tables**: Beautiful pricing sections with CTAs
- 🏗️ **Modular Architecture**: Clean, maintainable component structure

## 🛠️ Tech Stack

### Core Framework
- **Next.js** `15.5.3` - React framework with App Router
- **React** `19.1.0` - UI library
- **TypeScript** `5.0` - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS** `4.0` - Utility-first CSS framework
- **Framer Motion** `12.23.16` - Animation library
- **Lucide React** `0.544.0` - Beautiful icons

### Forms & Validation
- **React Hook Form** `7.63.0` - Performant forms
- **Zod** `4.1.11` - TypeScript-first schema validation
- **@hookform/resolvers** `5.2.2` - Form validation resolvers

### Theme & Utilities
- **next-themes** `0.4.6` - Theme switching for Next.js

### Development Tools
- **ESLint** `9.0` - Code linting
- **TypeScript** `5.0` - Type checking
- **Turbopack** - Fast bundler (via Next.js)

## 📦 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** `18.17.0` or later
- **npm**, **yarn**, **pnpm**, or **bun** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/saas-website-template.git
   cd saas-website-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see your SaaS website!

## 🏗️ Project Structure

```
saas-website-template/
├── 📁 public/                 # Static assets
│   ├── favicon.ico
│   └── ...
├── 📁 src/
│   ├── 📁 app/               # Next.js App Router
│   │   ├── 📁 about/         # About page
│   │   ├── 📁 api/           # API routes
│   │   ├── 📁 blog/          # Blog page
│   │   ├── 📁 careers/       # Careers page
│   │   ├── 📁 docs/          # Documentation page
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   ├── 📁 components/        # Reusable components
│   │   ├── 📁 sections/      # Page sections
│   │   │   ├── contact.tsx   # Contact section
│   │   │   ├── features.tsx  # Features section
│   │   │   ├── hero.tsx      # Hero section
│   │   │   ├── pricing.tsx   # Pricing section
│   │   │   ├── reasons.tsx   # Reasons section
│   │   │   └── testimonials.tsx # Testimonials
│   │   └── 📁 ui/            # UI components
│   │       ├── footer.tsx    # Site footer
│   │       ├── navigation.tsx # Navigation bar
│   │       ├── providers.tsx # Context providers
│   │       └── theme-toggle.tsx # Theme switcher
│   ├── 📁 config/            # Configuration files
│   │   └── strings.ts        # Text content
│   ├── 📁 data/              # Static data
│   │   └── sampleData.ts     # Sample content
│   ├── 📁 lib/               # Utility libraries
│   │   ├── theme-provider.tsx # Theme provider
│   │   └── types.ts          # TypeScript types
│   └── 📁 utils/             # Utility functions
├── 📄 package.json           # Dependencies & scripts
├── 📄 tailwind.config.js     # Tailwind configuration
├── 📄 tsconfig.json          # TypeScript configuration
├── 📄 next.config.ts         # Next.js configuration
├── 📄 eslint.config.mjs      # ESLint configuration
└── 📄 README.md              # This file
```

## 🎨 Customization Guide

### 🚀 Essential Files to Edit

#### 1. **Text Content** (`src/config/strings.ts`)
Update all text content, titles, and descriptions:
```typescript
export const STRINGS = {
  hero: {
    title: "Your Amazing SaaS Product",
    subtitle: "Your compelling value proposition here...",
    // ... more content
  },
  // ... customize all sections
}
```

#### 2. **Features & Content** (`src/data/sampleData.ts`)
Customize features, pricing, testimonials, and other data:
```typescript
export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Your Feature Name",
    description: "Feature description...",
    icon: "YourIconName"
  },
  // ... add your features
]
```

#### 3. **Pricing Tiers** (`src/data/sampleData.ts`)
Update pricing plans, features, and CTAs:
```typescript
export const PRICING_TIERS: PricingTier[] = [
  {
    id: 1,
    name: "Your Plan Name",
    price: 29,
    period: "month",
    // ... customize pricing
  }
]
```

#### 4. **Colors & Branding** (`src/app/globals.css`)
Modify CSS custom properties for your brand:
```css
:root {
  --primary: 262.1 83.3% 57.8%; /* Your brand color */
  --background: 0 0% 100%;
  /* ... customize theme colors */
}
```

#### 5. **Page Content** (`src/app/page.tsx`)
Customize the main landing page structure and sections.

### 🎯 Quick Customization Checklist

- [ ] Update company name and tagline
- [ ] Replace hero images and graphics
- [ ] Customize color scheme
- [ ] Update pricing plans and features
- [ ] Add your testimonials and case studies
- [ ] Update contact information
- [ ] Add your logo and branding
- [ ] Customize social media links
- [ ] Update footer content and links

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Additional commands
npm run type-check   # Run TypeScript type checking
npm run format       # Format code with Prettier
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms
- **Netlify**: Connect your GitHub repo and deploy
- **Railway**: Deploy with Docker or Node.js
- **Render**: Deploy from GitHub with automatic builds

### Environment Variables
Create a `.env.local` file for environment variables:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
# Add your environment variables
```

## 🔧 Development

### Code Style
- **TypeScript**: Strict type checking enabled
- **ESLint**: Configured for Next.js and TypeScript
- **Prettier**: Code formatting (if configured)

### Component Guidelines
- Use functional components with hooks
- Implement proper TypeScript interfaces
- Follow component composition patterns
- Use semantic HTML elements

### Performance Optimization
- Images are optimized automatically
- CSS is minified in production
- JavaScript is code-split automatically
- Static assets are cached efficiently

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests (if available)
npm test

# Build for production
npm run build
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Vercel** for hosting and deployment platform

## 📞 Support

Need help? Here are some options:

- 📧 **Email**: support@yourcompany.com
- 💬 **Discord**: [Join our community](https://discord.gg/yourserver)
- 🐛 **Issues**: [GitHub Issues](https://github.com/yourusername/saas-website-template/issues)
- 📚 **Documentation**: [Read the docs](https://your-docs-url.com)

---

<div align="center">

**Made with ❤️ by [Your Name]**

⭐ Star this repo if you found it helpful!

[⬆️ Back to Top](#-saas-website-template)

</div>
