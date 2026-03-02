# Elite Chess Ventures - Design System

## Brand Identity

**Company Name:** Elite Chess Ventures  
**Tagline:** "Building Kenya's Strategic Thinkers"  
**Brand Personality:** Professional, Premium, Trustworthy, Approachable, Educational

---

## Color Palette

### Primary Colors

```css
/* Primary Red - Main brand color, CTAs, important elements */
--primary-red: #DC2626;        /* Main Red */
--primary-red-dark: #991B1B;   /* Hover state */
--primary-red-light: #FCA5A5;  /* Backgrounds, highlights */
--primary-red-subtle: #FEE2E2; /* Very light backgrounds */

/* Black - Text, headers, strong contrast */
--primary-black: #0F172A;      /* Almost black (slate-900) */
--secondary-black: #1E293B;    /* Slightly lighter (slate-800) */
--tertiary-black: #334155;     /* Medium dark (slate-700) */

/* White - Backgrounds, contrast */
--primary-white: #FFFFFF;      /* Pure white */
--off-white: #F8FAFC;          /* Subtle background (slate-50) */
--light-gray: #F1F5F9;         /* Card backgrounds (slate-100) */

/* Gold/Light Brown - Accent, premium feel */
--primary-gold: #D97706;       /* Warm gold (amber-600) */
--gold-light: #FCD34D;         /* Light gold (amber-300) */
--gold-dark: #92400E;          /* Dark bronze (amber-800) */
--gold-subtle: #FEF3C7;        /* Light background (amber-100) */
```

### Secondary/Supporting Colors

```css
/* Grays for text and borders */
--gray-50: #F8FAFC;
--gray-100: #F1F5F9;
--gray-200: #E2E8F0;
--gray-300: #CBD5E1;
--gray-400: #94A3B8;
--gray-500: #64748B;
--gray-600: #475569;
--gray-700: #334155;
--gray-800: #1E293B;
--gray-900: #0F172A;

/* Success/Error/Warning */
--success-green: #10B981;      /* For success messages */
--error-red: #DC2626;          /* Same as primary red */
--warning-yellow: #F59E0B;     /* For warnings */
--info-blue: #3B82F6;          /* For informational elements */
```

### Color Usage Guidelines

| Element | Color | Hex |
|---------|-------|-----|
| **Primary CTA Buttons** | Primary Red | #DC2626 |
| **Primary CTA Hover** | Dark Red | #991B1B |
| **Secondary Buttons** | White with Red border | Border: #DC2626 |
| **Text - Headings** | Primary Black | #0F172A |
| **Text - Body** | Secondary Black | #1E293B |
| **Text - Muted** | Gray 600 | #475569 |
| **Links** | Primary Red | #DC2626 |
| **Links Hover** | Dark Red | #991B1B |
| **Background - Main** | White | #FFFFFF |
| **Background - Alternate** | Off-white | #F8FAFC |
| **Cards** | White with shadow | #FFFFFF |
| **Borders** | Gray 200 | #E2E8F0 |
| **Premium Accents** | Gold | #D97706 |
| **Icons - Primary** | Primary Red | #DC2626 |
| **Icons - Secondary** | Gray 600 | #475569 |

---

## Typography

### Font Pairing Strategy

**Primary Font (Headings):** [Playfair Display](https://fonts.google.com/specimen/Playfair+Display)
- Serif font that conveys premium, classic, strategic thinking
- Used for: Headlines, Hero text, Major section titles
- Weights: 600 (Semi-Bold), 700 (Bold), 800 (Extra-Bold)

**Secondary Font (Body):** [Inter](https://fonts.google.com/specimen/Inter)
- Modern, highly readable sans-serif
- Used for: Body text, buttons, navigation, forms
- Weights: 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)

**Accent Font (Optional - Stats/Numbers):** [Montserrat](https://fonts.google.com/specimen/Montserrat)
- Clean, geometric sans-serif
- Used for: Large numbers, statistics, badges
- Weights: 600 (Semi-Bold), 700 (Bold)

### Font Import (Google Fonts)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700&display=swap" rel="stylesheet">
```

### Typography Scale

```css
/* CSS Variables for Typography */
:root {
  /* Font Families */
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
  --font-accent: 'Montserrat', sans-serif;
  
  /* Font Sizes - Desktop */
  --text-xs: 0.75rem;      /* 12px */
  --text-sm: 0.875rem;     /* 14px */
  --text-base: 1rem;       /* 16px */
  --text-lg: 1.125rem;     /* 18px */
  --text-xl: 1.25rem;      /* 20px */
  --text-2xl: 1.5rem;      /* 24px */
  --text-3xl: 1.875rem;    /* 30px */
  --text-4xl: 2.25rem;     /* 36px */
  --text-5xl: 3rem;        /* 48px */
  --text-6xl: 3.75rem;     /* 60px */
  --text-7xl: 4.5rem;      /* 72px */
  
  /* Line Heights */
  --leading-tight: 1.2;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;
  
  /* Letter Spacing */
  --tracking-tight: -0.025em;
  --tracking-normal: 0;
  --tracking-wide: 0.025em;
}
```

### Typography Usage

| Element | Font | Size (Desktop) | Size (Mobile) | Weight | Line Height |
|---------|------|----------------|---------------|--------|-------------|
| **H1 - Hero** | Playfair Display | 72px (7xl) | 48px (5xl) | 800 | 1.2 |
| **H1 - Page Title** | Playfair Display | 60px (6xl) | 36px (4xl) | 700 | 1.2 |
| **H2 - Section** | Playfair Display | 48px (5xl) | 30px (3xl) | 700 | 1.2 |
| **H3 - Subsection** | Playfair Display | 36px (4xl) | 24px (2xl) | 600 | 1.3 |
| **H4 - Card Title** | Inter | 24px (2xl) | 20px (xl) | 600 | 1.4 |
| **Body Large** | Inter | 20px (xl) | 18px (lg) | 400 | 1.6 |
| **Body Regular** | Inter | 18px (lg) | 16px (base) | 400 | 1.6 |
| **Body Small** | Inter | 16px (base) | 14px (sm) | 400 | 1.5 |
| **Caption** | Inter | 14px (sm) | 12px (xs) | 400 | 1.5 |
| **Button Text** | Inter | 16px (base) | 16px (base) | 600 | 1 |
| **Navigation** | Inter | 16px (base) | 14px (sm) | 500 | 1 |
| **Stats/Numbers** | Montserrat | 48px (5xl) | 36px (4xl) | 700 | 1 |

### Typography Examples (CSS Classes)

```css
/* Headings */
.heading-hero {
  font-family: var(--font-heading);
  font-size: clamp(3rem, 5vw, 4.5rem); /* Responsive */
  font-weight: 800;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--primary-black);
}

.heading-1 {
  font-family: var(--font-heading);
  font-size: clamp(2.25rem, 4vw, 3.75rem);
  font-weight: 700;
  line-height: var(--leading-tight);
  color: var(--primary-black);
}

.heading-2 {
  font-family: var(--font-heading);
  font-size: clamp(1.875rem, 3vw, 3rem);
  font-weight: 700;
  line-height: var(--leading-snug);
  color: var(--primary-black);
}

.heading-3 {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 2.5vw, 2.25rem);
  font-weight: 600;
  line-height: var(--leading-snug);
  color: var(--primary-black);
}

/* Body Text */
.body-large {
  font-family: var(--font-body);
  font-size: clamp(1.125rem, 1.5vw, 1.25rem);
  font-weight: 400;
  line-height: var(--leading-relaxed);
  color: var(--secondary-black);
}

.body-regular {
  font-family: var(--font-body);
  font-size: 1.125rem;
  font-weight: 400;
  line-height: var(--leading-relaxed);
  color: var(--secondary-black);
}

.body-small {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 400;
  line-height: var(--leading-normal);
  color: var(--gray-600);
}

/* Accent Text */
.stat-number {
  font-family: var(--font-accent);
  font-size: clamp(2.25rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1;
  color: var(--primary-red);
}
```

---

## Spacing System

### Spacing Scale

```css
:root {
  --space-1: 0.25rem;    /* 4px */
  --space-2: 0.5rem;     /* 8px */
  --space-3: 0.75rem;    /* 12px */
  --space-4: 1rem;       /* 16px */
  --space-5: 1.25rem;    /* 20px */
  --space-6: 1.5rem;     /* 24px */
  --space-8: 2rem;       /* 32px */
  --space-10: 2.5rem;    /* 40px */
  --space-12: 3rem;      /* 48px */
  --space-16: 4rem;      /* 64px */
  --space-20: 5rem;      /* 80px */
  --space-24: 6rem;      /* 96px */
  --space-32: 8rem;      /* 128px */
}
```

### Section Spacing

| Section Type | Top Padding (Desktop) | Top Padding (Mobile) | Bottom Padding |
|--------------|----------------------|---------------------|----------------|
| Hero | 80px | 40px | 80px / 40px |
| Regular Section | 96px | 64px | 96px / 64px |
| Compact Section | 64px | 48px | 64px / 48px |
| Footer | 64px | 48px | 32px / 24px |

### Component Spacing

```css
/* Consistent spacing for elements */
.section-padding {
  padding: clamp(4rem, 8vw, 6rem) 0;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem; /* 24px */
}

@media (min-width: 768px) {
  .container {
    padding: 0 2rem; /* 32px */
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 3rem; /* 48px */
  }
}
```

---

## UI Components

### Buttons

#### Primary Button (CTA)

```css
.button-primary {
  background-color: var(--primary-red);
  color: white;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 2rem; /* 16px 32px */
  border-radius: 0.5rem; /* 8px */
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(220, 38, 38, 0.2);
}

.button-primary:hover {
  background-color: var(--primary-red-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(220, 38, 38, 0.3);
}

.button-primary:active {
  transform: translateY(0);
}
```

#### Secondary Button

```css
.button-secondary {
  background-color: transparent;
  color: var(--primary-red);
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  border: 2px solid var(--primary-red);
  cursor: pointer;
  transition: all 0.3s ease;
}

.button-secondary:hover {
  background-color: var(--primary-red);
  color: white;
  transform: translateY(-2px);
}
```

#### Tertiary Button (Text link style)

```css
.button-tertiary {
  background: none;
  color: var(--primary-red);
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.3s ease;
}

.button-tertiary:hover {
  color: var(--primary-red-dark);
}
```

#### Button Sizes

```css
.button-small {
  padding: 0.625rem 1.5rem; /* 10px 24px */
  font-size: 0.875rem; /* 14px */
}

.button-medium {
  padding: 1rem 2rem; /* 16px 32px */
  font-size: 1rem; /* 16px */
}

.button-large {
  padding: 1.25rem 2.5rem; /* 20px 40px */
  font-size: 1.125rem; /* 18px */
}
```

### Cards

```css
.card {
  background: var(--primary-white);
  border-radius: 1rem; /* 16px */
  padding: 2rem; /* 32px */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05),
              0 10px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid var(--gray-200);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08),
              0 20px 30px rgba(0, 0, 0, 0.08);
}

.card-premium {
  background: linear-gradient(135deg, var(--primary-white) 0%, var(--gold-subtle) 100%);
  border: 2px solid var(--primary-gold);
}
```

### Form Inputs

```css
.input {
  font-family: var(--font-body);
  font-size: 1rem;
  padding: 0.875rem 1rem; /* 14px 16px */
  border: 2px solid var(--gray-300);
  border-radius: 0.5rem;
  background: var(--primary-white);
  transition: all 0.3s ease;
  width: 100%;
}

.input:focus {
  outline: none;
  border-color: var(--primary-red);
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}

.input::placeholder {
  color: var(--gray-400);
}

.input-error {
  border-color: var(--error-red);
}

.label {
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--primary-black);
  margin-bottom: 0.5rem;
  display: block;
}
```

### Badges

```css
.badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge-red {
  background-color: var(--primary-red-subtle);
  color: var(--primary-red-dark);
}

.badge-gold {
  background-color: var(--gold-subtle);
  color: var(--gold-dark);
}

.badge-success {
  background-color: #D1FAE5;
  color: #065F46;
}
```

---

## Iconography

### Icon Style
- **Style:** Outline/Stroke icons for clean, modern look
- **Library Recommendation:** [Heroicons](https://heroicons.com/) or [Lucide Icons](https://lucide.dev/)
- **Size Scale:** 16px, 20px, 24px, 32px, 48px
- **Stroke Width:** 2px
- **Color:** Inherit from parent or use CSS variables

### Icon Usage

| Context | Size | Color |
|---------|------|-------|
| Navigation | 24px | Gray 600 |
| Buttons (inline) | 20px | White or Red |
| Feature cards | 48px | Primary Red |
| Form inputs | 20px | Gray 400 |
| Social media | 24px | Gray 600 |

### Common Icons Needed

```
Navigation:
- Menu (hamburger)
- Close (X)
- Chevron Down
- Search

Features/Programs:
- School Building
- User (single)
- Users (group)
- Trophy
- Target
- Star
- Check Circle
- Chess Knight (custom or from specific chess icon set)

Contact:
- Phone
- Email
- Location Pin
- Clock

Social:
- Facebook
- Instagram
- Twitter/X
- LinkedIn
- WhatsApp
- YouTube

Actions:
- Arrow Right
- External Link
- Download
- Upload
- Calendar
- Play (video)
```

---

## Layout Grid

### Breakpoints

```css
:root {
  --breakpoint-sm: 640px;   /* Mobile landscape */
  --breakpoint-md: 768px;   /* Tablet */
  --breakpoint-lg: 1024px;  /* Desktop */
  --breakpoint-xl: 1280px;  /* Large desktop */
  --breakpoint-2xl: 1536px; /* Extra large */
}
```

### Container Widths

```css
.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
    padding: 0 2rem;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
    padding: 0 3rem;
  }
}

@media (min-width: 1536px) {
  .container {
    max-width: 1400px;
  }
}
```

### Grid System

```css
.grid {
  display: grid;
  gap: 2rem;
}

.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }

/* Responsive grid example */
.programs-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .programs-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .programs-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

---

## Shadows

```css
:root {
  /* Elevation levels */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07), 
               0 2px 4px rgba(0, 0, 0, 0.05);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1), 
               0 4px 6px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1), 
               0 10px 10px rgba(0, 0, 0, 0.04);
  --shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.15);
  
  /* Colored shadows for CTAs */
  --shadow-red: 0 4px 14px rgba(220, 38, 38, 0.25);
  --shadow-red-hover: 0 8px 20px rgba(220, 38, 38, 0.35);
}
```

---

## Border Radius

```css
:root {
  --radius-sm: 0.25rem;   /* 4px */
  --radius-md: 0.5rem;    /* 8px */
  --radius-lg: 1rem;      /* 16px */
  --radius-xl: 1.5rem;    /* 24px */
  --radius-full: 9999px;  /* Fully rounded */
}
```

| Element | Radius |
|---------|--------|
| Buttons | 8px (md) |
| Cards | 16px (lg) |
| Inputs | 8px (md) |
| Badges | 9999px (full) |
| Images | 16px (lg) |
| Modals | 24px (xl) |

---

## Animation & Transitions

### Timing Functions

```css
:root {
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);
}
```

### Common Transitions

```css
/* Hover transitions */
.transition-all {
  transition: all 0.3s var(--ease-in-out);
}

.transition-colors {
  transition: background-color 0.3s var(--ease-in-out),
              color 0.3s var(--ease-in-out);
}

.transition-transform {
  transition: transform 0.3s var(--ease-smooth);
}
```

### Animations

```css
/* Fade in */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s var(--ease-out);
}

/* Slide in from left */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Pulse (for CTA attention) */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.animate-pulse {
  animation: pulse 2s var(--ease-in-out) infinite;
}
```

---

## Images & Media

### Image Guidelines

1. **Hero Images:**
   - Format: WebP with JPEG fallback
   - Size: 1920x1080px (16:9)
   - Quality: 85%
   - Content: Kenyan students playing chess, in well-lit environments

2. **Program Cards:**
   - Format: WebP with PNG fallback
   - Size: 600x400px (3:2)
   - Quality: 80%
   - Style: Consistent lighting, similar composition

3. **Testimonial Photos:**
   - Format: WebP with JPEG fallback
   - Size: 400x400px (1:1 square)
   - Quality: 85%
   - Style: Professional headshots or candid student photos

4. **Tournament Gallery:**
   - Format: WebP
   - Size: 800x600px (4:3)
   - Quality: 80%
   - Content: Action shots, awards, venue photos

### Image Optimization

```css
.image-responsive {
  width: 100%;
  height: auto;
  display: block;
}

.image-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-rounded {
  border-radius: var(--radius-lg);
}

.image-circular {
  border-radius: var(--radius-full);
  aspect-ratio: 1/1;
  object-fit: cover;
}
```

---

## Accessibility Guidelines

### Color Contrast

- **Text on white:** Use primary-black (#0F172A) for AAA compliance
- **White text on red:** Red must be primary-red (#DC2626) or darker
- **Interactive elements:** Minimum 3:1 contrast ratio for focus states
- **Always test:** Use contrast checker tools

### Focus States

```css
.focusable:focus {
  outline: 3px solid var(--primary-red);
  outline-offset: 2px;
}

.button:focus-visible {
  outline: 3px solid var(--primary-red);
  outline-offset: 2px;
}
```

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Logical tab order
- Skip to content link for screen readers
- Clear focus indicators

### ARIA Labels

```html
<!-- Buttons with icons -->
<button aria-label="Open menu">
  <MenuIcon />
</button>

<!-- Form inputs -->
<label for="email">Email Address</label>
<input id="email" type="email" aria-required="true" />

<!-- Navigation -->
<nav aria-label="Main navigation">
  <!-- nav items -->
</nav>
```

---

## Responsive Design Principles

### Mobile-First Approach

1. Design for mobile (320px) first
2. Add complexity as screen size increases
3. Touch targets minimum 44x44px
4. Thumb-friendly placement (bottom navigation if needed)

### Key Breakpoints

```css
/* Mobile: 320px - 639px */
/* Tablet: 640px - 1023px */
/* Desktop: 1024px+ */
```

### Typography Scaling

- Use `clamp()` for fluid typography
- Example: `font-size: clamp(1.5rem, 4vw, 3rem);`
- Test on actual devices, not just browser resize

### Touch Optimization

```css
/* Larger tap targets on mobile */
@media (max-width: 768px) {
  .button {
    min-height: 44px;
    min-width: 44px;
    padding: 1rem 1.5rem;
  }
  
  .nav-link {
    padding: 1rem;
  }
}
```

---

## Brand Assets Checklist

### Required Assets:

- [ ] Logo (SVG format)
  - [ ] Full color version
  - [ ] White version (for dark backgrounds)
  - [ ] Black version
  - [ ] Icon/Symbol only version
  
- [ ] Favicon
  - [ ] 32x32px
  - [ ] 180x180px (Apple Touch Icon)
  - [ ] 512x512px (Android)
  
- [ ] Social Media Assets
  - [ ] Open Graph image (1200x630px)
  - [ ] Twitter Card image (1200x600px)
  - [ ] Profile images for social platforms
  
- [ ] Photography
  - [ ] Hero images (3-5 variations)
  - [ ] Program images (4)
  - [ ] Team photos
  - [ ] Testimonial photos (minimum 6)
  - [ ] Tournament gallery (20+)
  
- [ ] Icons
  - [ ] Custom chess icons if needed
  - [ ] Program icons (4)
  - [ ] Feature icons (set of 8-10)

---

## Design Tools & Resources

### Recommended Tools:
- **Design:** Figma (collaborative design)
- **Prototyping:** Figma or Framer
- **Icons:** Heroicons, Lucide Icons, Feather Icons
- **Images:** Unsplash, Pexels (for placeholders, use real photos for production)
- **Color Testing:** Coolors.co, Adobe Color
- **Accessibility:** Wave, Axe DevTools
- **Performance:** Lighthouse, WebPageTest

### Design File Structure (Figma):
```
Elite Chess Ventures
├── 01 - Design System
│   ├── Colors
│   ├── Typography
│   ├── Components
│   └── Icons
├── 02 - Wireframes
├── 03 - Hi-Fi Designs
│   ├── Homepage
│   ├── Pages
│   └── Responsive Views
└── 04 - Assets Export
```

---

**Design System Version:** 1.0  
**Last Updated:** February 27, 2026  
**Status:** Ready for Development
