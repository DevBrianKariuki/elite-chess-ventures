# Elite Chess Ventures - Quick Reference Guide

> **Quick reference for developers during implementation**

---

## 🎨 Color Reference

### Primary Colors (Copy & Paste Ready)

```css
/* Red - Primary Brand Color */
--red-50: #FEE2E2;
--red-100: #FCA5A5;
--red-600: #DC2626;  /* PRIMARY RED */
--red-700: #991B1B;

/* Slate/Black - Text Colors */
--slate-50: #F8FAFC;
--slate-900: #0F172A;  /* PRIMARY BLACK */
--slate-800: #1E293B;
--slate-700: #334155;
--slate-600: #475569;

/* Amber/Gold - Accent */
--amber-50: #FEF3C7;
--amber-300: #FCD34D;
--amber-600: #D97706;  /* PRIMARY GOLD */
--amber-800: #92400E;
```

### Tailwind Classes

```tsx
// Backgrounds
className="bg-red-600"        // Primary red
className="bg-slate-900"      // Primary black
className="bg-white"          // White
className="bg-amber-600"      // Gold accent

// Text
className="text-red-600"      // Red text
className="text-slate-900"    // Black text
className="text-slate-600"    // Gray text
className="text-white"        // White text

// Borders
className="border-red-600"    // Red border
className="border-slate-200"  // Light gray border
```

---

## 📝 Typography Quick Reference

### Font Families

```tsx
className="font-heading"  // Playfair Display (Serif)
className="font-body"     // Inter (Sans-serif)
className="font-accent"   // Montserrat (Numbers/Stats)
```

### Text Sizes

```tsx
// Headings
className="text-7xl"  // 72px - Hero H1
className="text-6xl"  // 60px - Page Title H1
className="text-5xl"  // 48px - Section H2
className="text-4xl"  // 36px - Subsection H3
className="text-2xl"  // 24px - Card Title H4

// Body
className="text-xl"   // 20px - Large body
className="text-lg"   // 18px - Regular body
className="text-base" // 16px - Small body
className="text-sm"   // 14px - Caption
```

### Font Weights

```tsx
className="font-normal"    // 400 - Regular body text
className="font-medium"    // 500 - Navigation
className="font-semibold"  // 600 - Buttons, labels
className="font-bold"      // 700 - Headings
className="font-extrabold" // 800 - Hero headings
```

### Complete Heading Classes

```tsx
// Hero Heading
<h1 className="font-heading font-extrabold text-7xl text-slate-900 leading-tight">
  Your Heading
</h1>

// Section Heading
<h2 className="font-heading font-bold text-5xl text-slate-900 mb-6">
  Section Title
</h2>

// Card Title
<h4 className="font-body font-semibold text-2xl text-slate-900 mb-4">
  Card Title
</h4>

// Body Text
<p className="text-lg text-slate-600 leading-relaxed">
  Body paragraph text
</p>
```

---

## 📐 Spacing Reference

### Padding & Margin Scale

```tsx
className="p-1"   // 4px
className="p-2"   // 8px
className="p-4"   // 16px
className="p-6"   // 24px
className="p-8"   // 32px
className="p-12"  // 48px
className="p-16"  // 64px
className="p-24"  // 96px
```

### Common Spacing Patterns

```tsx
// Section spacing (vertical)
className="py-16 md:py-24 lg:py-32"

// Container spacing (horizontal)
className="px-6 md:px-8 lg:px-12"

// Card padding
className="p-6 md:p-8"

// Button padding
className="px-8 py-4"  // Medium button
className="px-10 py-5" // Large button

// Stack spacing (gap between elements)
className="space-y-4"  // 16px vertical gap
className="space-y-6"  // 24px vertical gap
className="space-x-4"  // 16px horizontal gap
```

---

## 🔘 Button Components

### Quick Copy-Paste Buttons

```tsx
// Primary CTA Button
<button className="bg-red-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-red-700 hover:-translate-y-0.5 transition-all duration-300 shadow-red">
  Get Started
</button>

// Secondary Button
<button className="bg-transparent text-red-600 font-semibold px-8 py-4 rounded-lg border-2 border-red-600 hover:bg-red-600 hover:text-white transition-all duration-300">
  Learn More
</button>

// Large CTA
<button className="bg-red-600 text-white font-semibold text-lg px-10 py-5 rounded-lg hover:bg-red-700 hover:-translate-y-0.5 transition-all duration-300 shadow-lg">
  Book School Demo
</button>
```

---

## 🎴 Card Components

### Basic Card

```tsx
<div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
  {/* Card content */}
</div>
```

### Premium Card (Gold accent)

```tsx
<div className="bg-gradient-to-br from-white to-amber-50 rounded-2xl p-8 border-2 border-amber-300 shadow-lg">
  <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
    Premium
  </div>
  {/* Card content */}
</div>
```

---

## 📋 Form Elements

### Input Field

```tsx
<div className="w-full">
  <label className="block text-sm font-semibold text-slate-900 mb-2">
    Full Name <span className="text-red-600">*</span>
  </label>
  <input
    type="text"
    placeholder="John Doe"
    className="w-full px-4 py-3.5 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-red-500/30 focus:border-red-600 transition-all duration-200"
  />
</div>
```

### Select Dropdown

```tsx
<select className="w-full px-4 py-3.5 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-red-500/30 focus:border-red-600">
  <option value="">Select an option</option>
  <option value="option1">Option 1</option>
</select>
```

### Textarea

```tsx
<textarea
  rows={5}
  placeholder="Your message..."
  className="w-full px-4 py-3.5 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-red-500/30 focus:border-red-600 resize-none"
/>
```

---

## 🏗️ Layout Patterns

### Container

```tsx
<div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
  {/* Content */}
</div>
```

### Section with Standard Spacing

```tsx
<section className="py-16 md:py-24 lg:py-32">
  <div className="container mx-auto px-6">
    {/* Section content */}
  </div>
</section>
```

### Two-Column Layout

```tsx
<div className="grid lg:grid-cols-2 gap-12 items-center">
  <div>{/* Left column */}</div>
  <div>{/* Right column */}</div>
</div>
```

### Four-Column Grid (Programs)

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <div>{/* Card 1 */}</div>
  <div>{/* Card 2 */}</div>
  <div>{/* Card 3 */}</div>
  <div>{/* Card 4 */}</div>
</div>
```

---

## 🎭 Icons (Lucide React)

### Common Icons

```tsx
import {
  Menu,           // Hamburger menu
  X,              // Close
  ChevronDown,    // Dropdown indicator
  ArrowRight,     // CTA arrows
  Phone,          // Contact
  Mail,           // Email
  MapPin,         // Location
  School,         // School icon
  Users,          // Group/students
  Trophy,         // Achievement
  Calendar,       // Events
  Star,           // Rating
  CheckCircle,    // Success/checkmark
  Facebook,       // Social
  Instagram,      // Social
  Twitter,        // Social
  Linkedin,       // Social
} from 'lucide-react';

// Usage
<Phone className="w-5 h-5 text-red-600" />
<Trophy className="w-8 h-8 text-red-600" />
```

---

## 💫 Animations

### Hover Effects

```tsx
// Lift on hover
className="hover:-translate-y-1 transition-transform duration-300"

// Grow on hover
className="hover:scale-105 transition-transform duration-300"

// Fade in
className="opacity-0 animate-fade-in"

// Button hover
className="hover:bg-red-700 hover:shadow-lg transition-all duration-300"
```

### Framer Motion Examples

```tsx
import { motion } from 'framer-motion';

// Fade in on mount
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>

// Stagger children
<motion.div>
  {items.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: i * 0.1 }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

---

## 🔗 Common Links/CTAs

### Text Copy for CTAs

```tsx
// For Schools
"Book School Demo"
"Request School Visit"
"Get Custom Quote"
"Download School Brochure"

// For Parents
"Book Free Trial"
"Start Private Lessons"
"Schedule Consultation"
"Enroll Now"

// General
"Get Started"
"Learn More"
"Contact Us"
"View Programs"
"See Success Stories"
```

---

## 📱 Responsive Breakpoints

```tsx
// Mobile first approach
className="text-base"           // Mobile (default)
className="md:text-lg"          // Tablet (768px+)
className="lg:text-xl"          // Desktop (1024px+)

// Hide on mobile, show on desktop
className="hidden lg:block"

// Show on mobile, hide on desktop
className="lg:hidden"

// Responsive grid
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"

// Responsive padding
className="py-16 md:py-24 lg:py-32"
```

---

## 🎯 Common Component Patterns

### Badge/Pill

```tsx
<span className="inline-flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">
  <Trophy className="w-4 h-4 mr-2" />
  Featured
</span>
```

### Stat Display

```tsx
<div className="text-center">
  <div className="font-accent font-bold text-5xl text-red-600 mb-2">
    50+
  </div>
  <div className="text-sm text-slate-600">
    Schools Partnered
  </div>
</div>
```

### Avatar/Profile Image

```tsx
<img
  src="/path/to/image.jpg"
  alt="Person name"
  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
/>
```

### Success Message

```tsx
<div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
  <div className="flex items-center space-x-2">
    <CheckCircle className="w-5 h-5" />
    <span>Message sent successfully!</span>
  </div>
</div>
```

### Error Message

```tsx
<div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
  <div className="flex items-center space-x-2">
    <X className="w-5 h-5" />
    <span>Something went wrong. Please try again.</span>
  </div>
</div>
```

---

## 🖼️ Image Patterns

### Optimized Image (Next.js)

```tsx
import Image from 'next/image';

<Image
  src="/images/hero/main.jpg"
  alt="Kenyan students playing chess"
  width={1200}
  height={800}
  priority  // For above-the-fold images
  quality={85}
  className="rounded-2xl"
/>
```

### Background Image

```tsx
<div
  className="h-96 bg-cover bg-center rounded-2xl"
  style={{ backgroundImage: 'url(/images/hero.jpg)' }}
>
  {/* Overlay content */}
</div>
```

---

## 🎨 Gradient Backgrounds

```tsx
// Red to Amber gradient
className="bg-gradient-to-r from-red-600 to-amber-600"

// Subtle background
className="bg-gradient-to-br from-slate-50 via-white to-amber-50"

// Text gradient
className="bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent"
```

---

## 📍 Shadow Utilities

```tsx
// Standard shadows
className="shadow-sm"    // Small
className="shadow-md"    // Medium
className="shadow-lg"    // Large
className="shadow-xl"    // Extra large
className="shadow-2xl"   // 2X large

// Custom red shadow (for CTAs)
className="shadow-[0_4px_14px_rgba(220,38,38,0.25)]"

// Hover shadow
className="hover:shadow-xl transition-shadow duration-300"
```

---

## ✅ Accessibility Patterns

### Focus States

```tsx
// Focus ring
className="focus:outline-none focus:ring-3 focus:ring-red-500/30 focus:border-red-600"

// Focus visible (keyboard only)
className="focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-red-600"
```

### Skip Link

```tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-red-600 text-white px-4 py-2 rounded-lg z-50"
>
  Skip to main content
</a>
```

---

## 🔧 Utility Functions

### cn() - Class Name Merger

```tsx
import { cn } from '@/lib/utils';

<div className={cn(
  'base-classes',
  condition && 'conditional-classes',
  className  // Props className
)} />
```

### Format Currency

```tsx
import { formatCurrency } from '@/lib/utils';

formatCurrency(15000)  // "KES 15,000"
```

### Format Phone

```tsx
import { formatPhoneNumber } from '@/lib/utils';

formatPhoneNumber('+254712345678')  // "+254 712 345 678"
```

---

## 📞 Contact Information Template

```tsx
const CONTACT_INFO = {
  phone: '+254 XXX XXX XXX',
  whatsapp: '+254 XXX XXX XXX',
  email: 'info@elitechess.co.ke',
  address: 'Nairobi, Kenya',
  hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-5PM',
};
```

---

## 🚀 Performance Tips

### Image Optimization
```tsx
// Always use WebP with fallback
<picture>
  <source srcSet="/image.webp" type="image/webp" />
  <img src="/image.jpg" alt="Description" />
</picture>

// Or use Next.js Image
<Image src="/image.jpg" alt="" width={800} height={600} />
```

### Lazy Loading

```tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>
});
```

---

## 📝 Metadata Template

```tsx
export const metadata = {
  title: 'Page Title | Elite Chess Ventures',
  description: 'Page description (150-160 characters)',
  keywords: 'chess coaching Kenya, relevant keywords',
  openGraph: {
    title: 'Page Title',
    description: 'Social media description',
    images: ['/images/og-image.jpg'],
  },
};
```

---

## ⚡ Quick Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Production build
npm run lint             # Run ESLint
npm run type-check       # Check TypeScript

# Formatting
npx prettier --write .   # Format all files

# Deployment
vercel                   # Deploy to Vercel
```

---

## 📚 Most Used Imports

```tsx
// Layout
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

// UI
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import Input from '@/components/common/Input';

// Icons
import { ArrowRight, Phone, Mail, Trophy } from 'lucide-react';

// Animation
import { motion } from 'framer-motion';

// Forms
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Utils
import { cn } from '@/lib/utils';
```

---

**Quick Reference Version:** 1.0  
**Last Updated:** February 27, 2026

**Keep this file open while coding for quick copy-paste access!** 🚀
