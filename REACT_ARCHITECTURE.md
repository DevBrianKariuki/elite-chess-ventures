# Elite Chess Ventures - React Component Architecture

## Technology Stack Recommendation

### Core Technologies

```json
{
  "framework": "React 18+",
  "metaFramework": "Next.js 14+ (App Router)",
  "language": "TypeScript",
  "styling": "Tailwind CSS",
  "stateManagement": "React Context API + Custom Hooks",
  "forms": "React Hook Form + Zod",
  "animations": "Framer Motion",
  "icons": "Lucide React",
  "dateHandling": "date-fns",
  "analytics": "Google Analytics 4",
  "seo": "Next.js SEO + react-helmet-async"
}
```

### Why Next.js?

✅ **SEO Optimized:** Server-side rendering for search engines  
✅ **Performance:** Automatic code splitting, image optimization  
✅ **Routing:** File-based routing with App Router  
✅ **API Routes:** Built-in API endpoints for forms  
✅ **Deployment:** Easy deployment to Vercel  
✅ **Developer Experience:** Hot reload, TypeScript support  

### Why Tailwind CSS?

✅ **Rapid Development:** Utility-first approach  
✅ **Consistent Design:** Enforce design system  
✅ **Small Bundle:** Purges unused CSS  
✅ **Responsive:** Mobile-first utilities  
✅ **Customization:** Easy theming  

---

## Project Structure

```
elite-chess-website/
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── programs/
│   │   ├── testimonials/
│   │   └── tournaments/
│   ├── icons/
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── (marketing)/              # Route group
│   │   │   ├── page.tsx              # Homepage
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── programs/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── school-chess/
│   │   │   │   ├── private-coaching/
│   │   │   │   ├── mentorship/
│   │   │   │   └── corporate/
│   │   │   ├── tournaments/
│   │   │   │   └── page.tsx
│   │   │   ├── success-stories/
│   │   │   │   └── page.tsx
│   │   │   ├── resources/
│   │   │   │   └── page.tsx
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   └── get-started/
│   │   │       └── page.tsx
│   │   ├── api/                      # API routes
│   │   │   ├── contact/
│   │   │   │   └── route.ts
│   │   │   ├── booking/
│   │   │   │   └── route.ts
│   │   │   └── subscribe/
│   │   │       └── route.ts
│   │   ├── layout.tsx                # Root layout
│   │   ├── loading.tsx               # Loading UI
│   │   ├── error.tsx                 # Error UI
│   │   └── not-found.tsx             # 404 page
│   │
│   ├── components/
│   │   ├── common/                   # Reusable components
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.types.ts
│   │   │   │   └── index.ts
│   │   │   ├── Card/
│   │   │   ├── Badge/
│   │   │   ├── Input/
│   │   │   ├── Modal/
│   │   │   └── Image/
│   │   │
│   │   ├── layout/                   # Layout components
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Navigation.tsx
│   │   │   │   ├── MobileMenu.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── FooterLinks.tsx
│   │   │   │   ├── Newsletter.tsx
│   │   │   │   └── index.ts
│   │   │   └── Container/
│   │   │
│   │   ├── sections/                 # Homepage sections
│   │   │   ├── Hero/
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── HeroStats.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Programs/
│   │   │   │   ├── Programs.tsx
│   │   │   │   ├── ProgramCard.tsx
│   │   │   │   └── index.ts
│   │   │   ├── WhyChess/
│   │   │   ├── HowItWorks/
│   │   │   ├── SuccessStories/
│   │   │   ├── Tournaments/
│   │   │   ├── FAQ/
│   │   │   └── FinalCTA/
│   │   │
│   │   ├── forms/                    # Form components
│   │   │   ├── ContactForm/
│   │   │   ├── BookingForm/
│   │   │   ├── SchoolDemoForm/
│   │   │   └── NewsletterForm/
│   │   │
│   │   └── features/                 # Feature-specific components
│   │       ├── ProgramSelector/
│   │       ├── TestimonialSlider/
│   │       ├── TournamentGallery/
│   │       └── PricingCalculator/
│   │
│   ├── lib/                          # Utilities & helpers
│   │   ├── utils.ts                  # General utilities
│   │   ├── validations.ts            # Zod schemas
│   │   ├── api.ts                    # API helpers
│   │   └── constants.ts              # App constants
│   │
│   ├── hooks/                        # Custom React hooks
│   │   ├── useScrollPosition.ts
│   │   ├── useMediaQuery.ts
│   │   ├── useForm.ts
│   │   └── useAnalytics.ts
│   │
│   ├── context/                      # React Context providers
│   │   ├── AppContext.tsx
│   │   ├── ThemeContext.tsx
│   │   └── FormContext.tsx
│   │
│   ├── types/                        # TypeScript types
│   │   ├── index.ts
│   │   ├── components.ts
│   │   ├── api.ts
│   │   └── forms.ts
│   │
│   ├── data/                         # Static data
│   │   ├── programs.ts
│   │   ├── testimonials.ts
│   │   ├── faq.ts
│   │   └── navigation.ts
│   │
│   └── styles/
│       ├── globals.css               # Global styles + Tailwind
│       └── fonts.ts                  # Font configurations
│
├── .env.local                        # Environment variables
├── .eslintrc.json                    # ESLint config
├── .prettierrc                       # Prettier config
├── next.config.js                    # Next.js config
├── tailwind.config.ts                # Tailwind config
├── tsconfig.json                     # TypeScript config
├── package.json
└── README.md
```

---

## Component Architecture

### 1. Common Components

#### Button Component

```typescript
// src/components/common/Button/Button.types.ts
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}
```

```typescript
// src/components/common/Button/Button.tsx
import React from 'react';
import { ButtonProps } from './Button.types';
import { cn } from '@/lib/utils';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  loading = false,
  leftIcon,
  rightIcon,
  children,
  className,
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-red-500/30 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-red-600 text-white hover:bg-red-700 hover:-translate-y-0.5 shadow-red hover:shadow-red-hover',
    secondary: 'bg-transparent text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white',
    tertiary: 'bg-transparent text-red-600 hover:text-red-700 underline',
  };
  
  const sizes = {
    small: 'px-6 py-2.5 text-sm',
    medium: 'px-8 py-4 text-base',
    large: 'px-10 py-5 text-lg',
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
```

#### Card Component

```typescript
// src/components/common/Card/Card.tsx
import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'premium' | 'hover';
  padding?: 'small' | 'medium' | 'large';
  className?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'medium',
  className,
}) => {
  const baseStyles = 'rounded-2xl border transition-all duration-300';
  
  const variants = {
    default: 'bg-white border-gray-200 shadow-md',
    premium: 'bg-gradient-to-br from-white to-amber-50 border-amber-300 shadow-lg',
    hover: 'bg-white border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1',
  };
  
  const paddings = {
    small: 'p-4',
    medium: 'p-6 md:p-8',
    large: 'p-8 md:p-12',
  };
  
  return (
    <div className={cn(baseStyles, variants[variant], paddings[padding], className)}>
      {children}
    </div>
  );
};

export default Card;
```

#### Input Component

```typescript
// src/components/common/Input/Input.tsx
import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, leftIcon, rightIcon, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            {label}
            {props.required && <span className="text-red-600 ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}
          
          <input
            ref={ref}
            className={cn(
              'w-full px-4 py-3.5 text-base border-2 rounded-lg transition-all duration-200',
              'placeholder:text-gray-400 focus:outline-none focus:ring-3 focus:ring-red-500/30',
              error ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-red-600',
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              className
            )}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {rightIcon}
            </div>
          )}
        </div>
        
        {error && (
          <p className="mt-1.5 text-sm text-red-600">{error}</p>
        )}
        
        {helperText && !error && (
          <p className="mt-1.5 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
```

---

### 2. Layout Components

#### Header Component

```typescript
// src/components/layout/Header/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '@/components/common/Button';
import MobileMenu from './MobileMenu';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
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

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white shadow-lg py-4' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
              {/* Chess piece icon or logo */}
              <span className="text-white font-bold text-xl">♔</span>
            </div>
            <span className="font-heading font-bold text-xl text-slate-900">
              Elite Chess Ventures
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    'font-medium transition-colors duration-200 flex items-center',
                    pathname === item.href
                      ? 'text-red-600'
                      : 'text-slate-700 hover:text-red-600'
                  )}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="ml-1 w-4 h-4" />}
                </Link>
                
                {/* Dropdown menu */}
                {item.submenu && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-lg shadow-xl py-2 w-56">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-slate-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="secondary" size="small">
              Call Us
            </Button>
            <Button size="small">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigation={navigation}
      />
    </header>
  );
};

export default Header;
```

#### Footer Component

```typescript
// src/components/layout/Footer/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Newsletter from './Newsletter';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    programs: [
      { name: 'School Chess Programs', href: '/programs/school-chess' },
      { name: 'Private Coaching', href: '/programs/private-coaching' },
      { name: 'Chess Mentorship', href: '/programs/mentorship' },
      { name: 'Corporate Partnerships', href: '/programs/corporate' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Success Stories', href: '/success-stories' },
      { name: 'Tournaments', href: '/tournaments' },
      { name: 'Resources', href: '/resources' },
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQ', href: '/contact#faq' },
      { name: 'Book Demo', href: '/get-started' },
      { name: 'Pricing', href: '/programs#pricing' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="container mx-auto px-6 py-12">
          <Newsletter />
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">♔</span>
              </div>
              <span className="font-heading font-bold text-xl">
                Elite Chess Ventures
              </span>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm">
              Building Kenya's next generation of strategic thinkers through professional chess coaching and mentorship programs.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400">Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-slate-400">+254 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-slate-400">info@elitechess.co.ke</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-slate-400 text-sm">
              © {currentYear} Elite Chess Ventures. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

---

### 3. Section Components

#### Hero Section

```typescript
// src/components/sections/Hero/Hero.tsx
'use client';

import React from 'react';
import Button from '@/components/common/Button';
import { ArrowRight, School, Users, Trophy, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const stats = [
    { icon: School, value: '50+', label: 'Schools Partnered' },
    { icon: Users, value: '2,000+', label: 'Students Trained' },
    { icon: Trophy, value: '100+', label: 'Tournaments Organized' },
    { icon: Calendar, value: '15+', label: 'Years Experience' },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-amber-50 pt-24 pb-16">
      {/* Background Pattern - Optional */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l30 30-30 30L0 30z\' fill=\'%23DC2626\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Trophy className="w-4 h-4" />
              <span>Kenya's Premier Chess Education</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-slate-900 mb-6 leading-tight">
              Building Kenya's Next Generation of{' '}
              <span className="text-red-600">Strategic Thinkers</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
              Professional chess coaching programs for schools and students across Kenya. 
              Develop critical thinking, problem-solving, and confidence through the game of kings.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="large" rightIcon={<ArrowRight />}>
                Book School Demo
              </Button>
              <Button variant="secondary" size="large">
                Start Private Lessons
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <stat.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <div className="font-accent font-bold text-3xl text-slate-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero/hero-main.jpg"
                alt="Kenyan students playing chess"
                className="w-full h-auto object-cover"
              />
              {/* Overlay card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-lg">
                      5 National Champions Trained
                    </p>
                    <p className="text-sm text-slate-600">
                      Producing excellence since 2008
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-400 rounded-full opacity-20 blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-600 rounded-full opacity-20 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
```

---

### 4. Form Components

#### Contact Form with Validation

```typescript
// src/lib/validations.ts
import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().regex(/^(\+254|0)[17]\d{8}$/, 'Please enter a valid Kenyan phone number'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
  programInterest: z.enum(['school', 'private', 'mentorship', 'corporate', 'tournament', 'other']),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
```

```typescript
// src/components/forms/ContactForm/ContactForm.tsx
'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormData } from '@/lib/validations';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import { Mail, Phone, User, MessageSquare } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to submit');

      setSubmitStatus('success');
      reset();
      
      // Optional: Track conversion
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_submission', {
          event_category: 'Contact',
          event_label: data.programInterest,
        });
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          placeholder="John Doe"
          leftIcon={<User size={20} />}
          error={errors.name?.message}
          required
          {...register('name')}
        />

        <Input
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          leftIcon={<Mail size={20} />}
          error={errors.email?.message}
          required
          {...register('email')}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Phone Number"
          type="tel"
          placeholder="+254 712 345 678"
          leftIcon={<Phone size={20} />}
          error={errors.phone?.message}
          required
          {...register('phone')}
        />

        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Program Interest <span className="text-red-600 ml-1">*</span>
          </label>
          <select
            className="w-full px-4 py-3.5 text-base border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-red-500/30 focus:border-red-600 transition-all duration-200"
            {...register('programInterest')}
          >
            <option value="">Select a program</option>
            <option value="school">School Chess Programs</option>
            <option value="private">Private Coaching</option>
            <option value="mentorship">Chess Mentorship</option>
            <option value="corporate">Corporate Partnerships</option>
            <option value="tournament">Tournament Organization</option>
            <option value="other">Other</option>
          </select>
          {errors.programInterest && (
            <p className="mt-1.5 text-sm text-red-600">{errors.programInterest.message}</p>
          )}
        </div>
      </div>

      <Input
        label="Subject"
        placeholder="Brief description of your inquiry"
        error={errors.subject?.message}
        required
        {...register('subject')}
      />

      <div>
        <label className="block text-sm font-semibold text-slate-900 mb-2">
          Message <span className="text-red-600 ml-1">*</span>
        </label>
        <textarea
          rows={5}
          placeholder="Tell us more about your needs..."
          className="w-full px-4 py-3.5 text-base border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-red-500/30 focus:border-red-600 transition-all duration-200 resize-none"
          {...register('message')}
        />
        {errors.message && (
          <p className="mt-1.5 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          Thank you! We'll get back to you within 24 hours.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      <Button
        type="submit"
        size="large"
        fullWidth
        loading={isSubmitting}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
```

---

### 5. Custom Hooks

```typescript
// src/hooks/useScrollPosition.ts
import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
};
```

```typescript
// src/hooks/useMediaQuery.ts
import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

// Usage:
// const isMobile = useMediaQuery('(max-width: 768px)');
```

---

## Data Management

### Static Data Example

```typescript
// src/data/programs.ts
export interface Program {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  benefits: string[];
  targetAudience: string[];
  pricing: {
    starting: number;
    unit: string;
    details: string;
  };
  cta: {
    text: string;
    link: string;
  };
  image: string;
}

export const programs: Program[] = [
  {
    id: 'school-chess',
    title: 'School Chess Programs',
    shortDescription: 'Comprehensive chess curriculum integrated into your school's co-curricular activities.',
    description: 'We provide trained coaches, materials, and structured progression for all skill levels. Transform your school's co-curricular program with professional chess education.',
    icon: '🏫',
    benefits: [
      'Curriculum aligned with educational goals',
      'Professional certified coaches',
      'All materials and equipment provided',
      'Flexible scheduling',
      'Regular progress reports',
    ],
    targetAudience: ['Schools', 'Educational Institutions', 'Administrators'],
    pricing: {
      starting: 15000,
      unit: 'per term',
      details: 'For classes of 20-30 students, includes all materials',
    },
    cta: {
      text: 'Request School Demo',
      link: '/get-started?program=school',
    },
    image: '/images/programs/school-chess.jpg',
  },
  {
    id: 'private-coaching',
    title: 'Private Chess Coaching',
    shortDescription: 'Personalized one-on-one or small group coaching tailored to your child's goals.',
    description: 'Expert coaches provide individualized attention to help your child progress from beginner to competitive player at their own pace.',
    icon: '👨‍🏫',
    benefits: [
      'Personalized learning plans',
      'Flexible location (home/online)',
      'Weekend and evening slots',
      'Tournament preparation',
      'Progress tracking dashboard',
    ],
    targetAudience: ['Parents', 'Students', 'Individual Learners'],
    pricing: {
      starting: 3000,
      unit: 'per month',
      details: 'Weekly 1-hour sessions, all levels welcome',
    },
    cta: {
      text: 'Book Free Trial',
      link: '/get-started?program=private',
    },
    image: '/images/programs/private-coaching.jpg',
  },
  // Add other programs...
];
```

---

## API Routes Example

```typescript
// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations';
import { z } from 'zod';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate data
    const validatedData = contactFormSchema.parse(body);
    
   // Here you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM (e.g., HubSpot, Mailchimp)
    // 4. Send auto-responder to user
    
    // Example: Send email (implement with your email service)
    // await sendEmail({
    //   to: 'info@elitechess.co.ke',
    //   subject: `New Contact: ${validatedData.subject}`,
    //   body: formatEmailBody(validatedData),
    // });
    
    // Example: Send auto-responder
    // await sendEmail({
    //   to: validatedData.email,
    //   subject: 'We received your message - Elite Chess Ventures',
    //   body: autoResponderTemplate(validatedData.name),
    // });
    
    return NextResponse.json(
      { message: 'Form submitted successfully', data: validatedData },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Validation error', errors: error.errors },
        { status: 400 }
      );
    }
    
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

---

## Tailwind Configuration

```typescript
// tailwind.config.ts
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
        red: {
          50: '#FEE2E2',
          100: '#FCA5A5',
          600: '#DC2626',
          700: '#991B1B',
        },
        slate: {
          50: '#F8FAFC',
          900: '#0F172A',
        },
        amber: {
          50: '#FEF3C7',
          300: '#FCD34D',
          600: '#D97706',
          800: '#92400E',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        red: '0 4px 14px rgba(220, 38, 38, 0.25)',
        'red-hover': '0 8px 20px rgba(220, 38, 38, 0.35)',
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

---

## Performance Optimization

### Image Optimization

```typescript
// Use Next.js Image component
import Image from 'next/image';

<Image
  src="/images/hero/hero-main.jpg"
  alt="Kenyan students playing chess"
  width={1200}
  height={800}
  priority // For above-the-fold images
  quality={85}
  placeholder="blur"
  blurDataURL="data:image/..." // Low-res placeholder
/>
```

### Code Splitting

```typescript
// Dynamic imports for heavy components
import dynamic from 'next/dynamic';

const TournamentGallery = dynamic(
  () => import('@/components/features/TournamentGallery'),
  { loading: () => <p>Loading gallery...</p> }
);
```

### Font Optimization

```typescript
// src/styles/fonts.ts
import { Playfair_Display, Inter, Montserrat } from 'next/font/google';

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-accent',
  display: 'swap',
});
```

---

## Testing Strategy

### Component Testing

```typescript
// Example with React Testing Library
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '@/components/common/Button';

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('shows loading state', () => {
    render(<Button loading>Click me</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

---

## Deployment Checklist

### Pre-Deployment

- [ ] All environment variables configured
- [ ] API routes tested
- [ ] Forms connected to backend/email service
- [ ] Analytics installed (Google Analytics, Facebook Pixel)
- [ ] SEO metadata added to all pages
- [ ] Social media preview images
- [ ] Favicon and app icons
- [ ] 404 and error pages
- [ ] Loading states
- [ ] Mobile responsiveness tested on real devices
- [ ] Cross-browser testing (Chrome, Safari, Firefox)
- [ ] Accessibility audit (Lighthouse)
- [ ] Performance optimization (Lighthouse score > 90)
- [ ] Security headers configured

### Post-Deployment

- [ ] SSL certificate active
- [ ] Domain DNS configured
- [ ] Google Search Console setup
- [ ] Google My Business listing
- [ ] Social media links updated
- [ ] Monitor error tracking (Sentry)
- [ ] Set up uptime monitoring
- [ ] Test all forms in production
- [ ] Verify analytics tracking

---

**Architecture Version:** 1.0  
**Last Updated:** February 27, 2026  
**Framework:** Next.js 14+ with App Router  
**Status:** Ready for Implementation
