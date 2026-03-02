# Elite Chess Ventures - Project Setup & Implementation Guide

## Quick Start Guide

### Prerequisites

Ensure you have the following installed:
- **Node.js** 18.17 or later
- **npm** or **yarn** or **pnpm**
- **Git**
- Code editor (VS Code recommended)

---

## Initial Setup

### 1. Create Next.js Project

```bash
# Create new Next.js app with TypeScript and Tailwind CSS
npx create-next-app@latest elite-chess-website --typescript --tailwind --app --eslint

cd elite-chess-website
```

During setup, choose:
- ✅ TypeScript
- ✅ ESLint
- ✅ Tailwind CSS
- ✅ `src/` directory
- ✅ App Router
- ❌ import alias (use default @/*)

### 2. Install Dependencies

```bash
# Core dependencies
npm install framer-motion lucide-react
npm install react-hook-form @hookform/resolvers zod
npm install date-fns clsx tailwind-merge

# Dev dependencies
npm install -D @types/node @types/react @types/react-dom
npm install -D @tailwindcss/forms @tailwindcss/typography
npm install -D prettier prettier-plugin-tailwindcss
```

### 3. Project Structure Setup

```bash
# Create directory structure
mkdir -p src/components/{common,layout,sections,forms,features}
mkdir -p src/components/common/{Button,Card,Input,Badge,Modal}
mkdir -p src/components/layout/{Header,Footer,Container}
mkdir -p src/components/sections/{Hero,Programs,WhyChess,HowItWorks,SuccessStories,Tournaments,FAQ,FinalCTA}
mkdir -p src/components/forms/{ContactForm,BookingForm,SchoolDemoForm,NewsletterForm}
mkdir -p src/lib src/hooks src/context src/types src/data
mkdir -p public/images/{hero,programs,testimonials,tournaments,team}
mkdir -p public/icons
```

---

## Configuration Files

### 1. Tailwind Configuration

Replace `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': {
          DEFAULT: '#DC2626',
          dark: '#991B1B',
          light: '#FCA5A5',
          subtle: '#FEE2E2',
        },
        'primary-black': {
          DEFAULT: '#0F172A',
          secondary: '#1E293B',
          tertiary: '#334155',
        },
        'primary-gold': {
          DEFAULT: '#D97706',
          light: '#FCD34D',
          dark: '#92400E',
          subtle: '#FEF3C7',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        accent: ['var(--font-accent)', 'sans-serif'],
      },
      boxShadow: {
        'red': '0 4px 14px rgba(220, 38, 38, 0.25)',
        'red-hover': '0 8px 20px rgba(220, 38, 38, 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};

export default config;
```

### 2. TypeScript Configuration

Update `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### 3. ESLint Configuration

Create `.eslintrc.json`:

```json
{
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "react/no-unescaped-entities": "off"
  }
}
```

### 4. Prettier Configuration

Create `.prettierrc`:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### 5. Environment Variables

Create `.env.local`:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Elite Chess Ventures

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=info@elitechess.co.ke
NEXT_PUBLIC_CONTACT_PHONE=+254XXXXXXXXX
NEXT_PUBLIC_WHATSAPP_NUMBER=+254XXXXXXXXX

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Email Service (e.g., SendGrid, Mailgun, Resend)
EMAIL_API_KEY=your_api_key_here
EMAIL_FROM=noreply@elitechess.co.ke

# Database (if needed)
DATABASE_URL=your_database_url

# Optional: CRM Integration
HUBSPOT_API_KEY=your_hubspot_key
```

### 6. Next.js Configuration

Update `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'], // Add your image domains
    formats: ['image/webp', 'image/avif'],
  },
  async redirects() {
    return [
      // Add redirects if needed
    ];
  },
};

module.exports = nextConfig;
```

---

## Utility Functions

### Create Utils File

```typescript
// src/lib/utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind CSS classes with proper precedence
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format currency in KES
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    minimumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format phone number
 */
export function formatPhoneNumber(phone: string): string {
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Format as +254 XXX XXX XXX
  if (cleaned.startsWith('254')) {
    return `+${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 9)} ${cleaned.slice(9)}`;
  }
  
  return phone;
}

/**
 * Truncate text
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}

/**
 * Delay function for testing
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
```

### Create Constants File

```typescript
// src/lib/constants.ts
export const SITE_CONFIG = {
  name: 'Elite Chess Ventures',
  description: 'Professional chess coaching for schools and students across Kenya',
  tagline: "Building Kenya's Strategic Thinkers",
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://elitechess.co.ke',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@elitechess.co.ke',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+254XXXXXXXXX',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+254XXXXXXXXX',
  address: 'Nairobi, Kenya',
  social: {
    facebook: 'https://facebook.com/elitechessventures',
    instagram: 'https://instagram.com/elitechessventures',
    twitter: 'https://twitter.com/elitechesskenya',
    linkedin: 'https://linkedin.com/company/elite-chess-ventures',
  },
};

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { 
    name: 'Programs', 
    href: '/programs',
    submenu: [
      { name: 'School Chess', href: '/programs/school-chess' },
      { name: 'Private Coaching', href: '/programs/private-coaching' },
      { name: 'Mentorship', href: '/programs/mentorship' },
      { name: 'Corporate', href: '/programs/corporate' },
    ]
  },
  { name: 'Tournaments', href: '/tournaments' },
  { name: 'Success Stories', href: '/success-stories' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const STATS = [
  { value: '50+', label: 'Schools Partnered' },
  { value: '2,000+', label: 'Students Trained' },
  { value: '100+', label: 'Tournaments Organized' },
  { value: '15+', label: 'Years Experience' },
];
```

---

## Font Setup

```typescript
// src/app/layout.tsx
import { Playfair_Display, Inter, Montserrat } from 'next/font/google';
import './globals.css';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-accent',
  display: 'swap',
});

export const metadata = {
  title: 'Elite Chess Ventures | Professional Chess Coaching in Kenya',
  description: 'Building Kenya\'s next generation of strategic thinkers through professional chess coaching programs for schools and students.',
  keywords: 'chess coaching Kenya, chess lessons Nairobi, school chess programs, chess tournaments Kenya',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable} ${montserrat.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
```

---

## Global Styles

```css
/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Colors from design system */
    --color-primary-red: 220 38 38;
    --color-primary-red-dark: 153 27 27;
    --color-primary-black: 15 23 42;
    --color-primary-gold: 217 119 6;
  }

  * {
    @apply border-gray-200;
  }

  html {
    @apply scroll-smooth;
  }

  body {
    @apply bg-white text-slate-800 antialiased;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-heading font-bold text-slate-900;
  }
}

@layer components {
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    @apply w-2;
  }

  ::-webkit-scrollbar-track {
    @apply bg-gray-100;
  }

  ::-webkit-scrollbar-thumb {
    @apply bg-red-600 rounded-full hover:bg-red-700;
  }

  /* Container */
  .container {
    @apply mx-auto px-6 md:px-8 lg:px-12 max-w-7xl;
  }

  /* Section padding */
  .section-padding {
    @apply py-16 md:py-24 lg:py-32;
  }

  /* Text gradient */
  .text-gradient {
    @apply bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent;
  }
}

@layer utilities {
  /* Custom utilities */
  .text-balance {
    text-wrap: balance;
  }
}
```

---

## Implementation Roadmap

### Phase 1: Foundation (Week 1-2)

**Week 1: Setup & Components**
- [ ] Initial project setup
- [ ] Configure Tailwind with design system
- [ ] Create common components (Button, Card, Input, Badge)
- [ ] Build Layout components (Header, Footer, Container)
- [ ] Setup fonts and global styles

**Week 2: Core Pages**
- [ ] Homepage structure
- [ ] Hero section
- [ ] Programs section
- [ ] Success stories section
- [ ] Basic form components

### Phase 2: Content & Features (Week 3-4)

**Week 3: Additional Pages**
- [ ] About page
- [ ] Programs detail pages (4)
- [ ] Contact page with forms
- [ ] Success stories page
- [ ] Tournament page

**Week 4: Interactive Features**
- [ ] Form validation and submission
- [ ] API routes for forms
- [ ] Email integration
- [ ] Testimonial slider
- [ ] Image gallery
- [ ] FAQ accordions

### Phase 3: Optimization & Polish (Week 5-6)

**Week 5: Performance**
- [ ] Image optimization
- [ ] Code splitting
- [ ] SEO optimization
- [ ] Meta tags for all pages
- [ ] sitemap.xml and robots.txt
- [ ] Analytics integration

**Week 6: Testing & Launch**
- [ ] Cross-browser testing
- [ ] Mobile responsiveness testing
- [ ] Accessibility audit
- [ ] Performance testing (Lighthouse)
- [ ] Bug fixes
- [ ] Production deployment
- [ ] DNS configuration
- [ ] SSL setup

### Phase 4: Post-Launch (Week 7-8)

**Week 7: Monitoring & Optimization**
- [ ] Monitor analytics
- [ ] Track conversion rates
- [ ] A/B testing setup
- [ ] User feedback collection
- [ ] Performance monitoring

**Week 8: Content & Marketing**
- [ ] Blog setup (optional)
- [ ] Content creation
- [ ] Social media integration
- [ ] Email marketing setup
- [ ] SEO improvements

---

## Development Workflow

### Daily Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

### Building for Production

```bash
# Create production build
npm run build

# Test production build locally
npm start

# Run linting
npm run lint

# Format code
npx prettier --write .
```

### Git Workflow

```bash
# Initialize git (if not done)
git init
git add .
git commit -m "Initial commit"

# Create feature branch
git checkout -b feature/homepage-hero

# Make changes, then:
git add .
git commit -m "Add hero section"

# Push to repository
git push origin feature/homepage-hero
```

---

## Deployment Options

### Option 1: Vercel (Recommended)

**Pros:**
- Optimized for Next.js
- Automatic deployments from Git
- Free tier available
- Built-in analytics
- Serverless functions

**Steps:**
1. Push code to GitHub
2. Import project on Vercel
3. Configure environment variables
4. Deploy

```bash
# Install Vercel CLI (optional)
npm install -g vercel

# Deploy
vercel
```

### Option 2: Netlify

**Pros:**
- Easy deployment
- Form handling included
- Free tier
- Good CDN

**Steps:**
1. Connect GitHub repository
2. Configure build settings
3. Add environment variables
4. Deploy

### Option 3: DigitalOcean App Platform

**Pros:**
- More control
- Good for scaling
- African data centers (Cape Town)

**Steps:**
1. Create new app
2. Connect repository
3. Configure build command: `npm run build`
4. Start command: `npm start`
5. Deploy

---

## Performance Checklist

### Image Optimization
- [ ] Use Next.js `<Image>` component
- [ ] Compress all images (TinyPNG, Squoosh)
- [ ] Use WebP format with fallbacks
- [ ] Lazy load images below fold
- [ ] Add `priority` to hero images
- [ ] Proper alt text for accessibility

### Code Optimization
- [ ] Remove console.logs
- [ ] Use dynamic imports for heavy components
- [ ] Minimize bundle size
- [ ] Tree-shake unused code
- [ ] Use production build

### SEO Optimization
- [ ] Unique meta titles for each page
- [ ] Meta descriptions (150-160 chars)
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Structured data (JSON-LD)
- [ ] XML sitemap
- [ ] robots.txt

### Analytics Setup
- [ ] Google Analytics 4
- [ ] Facebook Pixel (for ads)
- [ ] Google Tag Manager (optional)
- [ ] Hotjar or similar (heatmaps)
- [ ] Search Console verification

---

## Testing Checklist

### Functionality Testing
- [ ] All links work
- [ ] Forms submit correctly
- [ ] Form validation works
- [ ] Email notifications sent
- [ ] Auto-responders working
- [ ] Navigation menu (desktop & mobile)
- [ ] All CTAs functional

### Responsive Testing
- [ ] iPhone SE (375px)
- [ ] iPhone 12/13 (390px)
- [ ] Android phones (360px-414px)
- [ ] iPad (768px)
- [ ] Desktop (1024px, 1440px, 1920px)

### Browser Testing
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Accessibility Testing
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Color contrast (WCAG AA)
- [ ] Focus indicators visible
- [ ] Alternative text for images
- [ ] Form labels proper
- [ ] ARIA labels where needed

### Performance Testing
- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Mobile performance optimized

---

## Maintenance & Updates

### Regular Tasks

**Weekly:**
- Monitor analytics
- Check form submissions
- Review error logs
- Respond to inquiries within 24 hours

**Monthly:**
- Update content (new testimonials, tournament results)
- Review SEO performance
- Update blog (if applicable)
- Check broken links
- Review conversion rates

**Quarterly:**
- Dependency updates
- Security audit
- Performance review
- A/B testing results analysis
- User feedback review
- Content refresh

**Annually:**
- Major redesign consideration
- Technology stack review
- Competitor analysis
- Comprehensive SEO audit

---

## Troubleshooting

### Common Issues

**Issue: Build fails**
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

**Issue: Images not loading**
- Check image paths
- Verify Next.js Image configuration
- Check public folder structure

**Issue: Styles not applying**
- Restart development server
- Check Tailwind configuration
- Verify class names

**Issue: Forms not submitting**
- Check API route
- Verify environment variables
- Check network tab for errors
- Test email service

---

## Resources & Documentation

### Official Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

### Learning Resources
- [Next.js Tutorial](https://nextjs.org/learn)
- [Tailwind UI Examples](https://tailwindui.com/components)
- [React Hook Form](https://react-hook-form.com/)
- [Framer Motion](https://www.framer.com/motion/)

### Tools
- [Can I Use](https://caniuse.com/) - Browser compatibility
- [WebPageTest](https://www.webpagetest.org/) - Performance testing
- [Wave](https://wave.webaim.org/) - Accessibility testing
- [GTmetrix](https://gtmetrix.com/) - Site speed testing

---

## Support & Contact

For questions or issues during development:

**Email:** your-email@example.com  
**Documentation:** This repository  
**Issues:** GitHub Issues (if applicable)

---

**Setup Guide Version:** 1.0  
**Last Updated:** February 27, 2026  
**Status:** Ready for Implementation

---

## Quick Commands Reference

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm start               # Start production server
npm run lint            # Run ESLint
npx prettier --write .  # Format code

# Deployment
vercel                  # Deploy to Vercel
vercel --prod          # Deploy to production

# Utilities
npm run type-check     # Check TypeScript
npm run analyze        # Analyze bundle (if configured)
```

**Happy Building! 🚀**
