# Elite Chess Ventures - Folder Structure

> **Complete directory organization for scalable development**

---

## 📁 Project Structure Overview

```
elite-chess-website/
│
├── 📄 README.md
├── 📄 WEBSITE_STRATEGY.md
├── 📄 DESIGN_SYSTEM.md
├── 📄 REACT_ARCHITECTURE.md
├── 📄 PROJECT_SETUP.md
├── 📄 QUICK_REFERENCE.md
├── 📄 VISUAL_MOCKUP.md
├── 📄 IMPLEMENTATION_CHECKLIST.md
├── 📄 FOLDER_STRUCTURE.md (this file)
│
├── 📂 src/
│   ├── 📂 app/                          # Next.js App Router
│   │   ├── 📂 (marketing)/              # Route group for marketing pages
│   │   │   ├── 📂 about/
│   │   │   ├── 📂 programs/
│   │   │   │   ├── 📂 school-chess/
│   │   │   │   ├── 📂 private-coaching/
│   │   │   │   ├── 📂 mentorship/
│   │   │   │   └── 📂 corporate/
│   │   │   ├── 📂 tournaments/
│   │   │   ├── 📂 success-stories/
│   │   │   ├── 📂 resources/
│   │   │   ├── 📂 contact/
│   │   │   └── 📂 get-started/
│   │   │
│   │   └── 📂 api/                      # API Routes
│   │       ├── 📂 contact/
│   │       ├── 📂 booking/
│   │       └── 📂 subscribe/
│   │
│   ├── 📂 components/
│   │   ├── 📂 common/                   # Reusable UI components
│   │   │   ├── 📂 Button/
│   │   │   ├── 📂 Card/
│   │   │   ├── 📂 Input/
│   │   │   ├── 📂 Badge/
│   │   │   ├── 📂 Modal/
│   │   │   └── 📂 Image/
│   │   │
│   │   ├── 📂 layout/                   # Layout components
│   │   │   ├── 📂 Header/
│   │   │   ├── 📂 Footer/
│   │   │   └── 📂 Container/
│   │   │
│   │   ├── 📂 sections/                 # Homepage sections
│   │   │   ├── 📂 Hero/
│   │   │   ├── 📂 Programs/
│   │   │   ├── 📂 WhyChess/
│   │   │   ├── 📂 HowItWorks/
│   │   │   ├── 📂 SuccessStories/
│   │   │   ├── 📂 Tournaments/
│   │   │   ├── 📂 FAQ/
│   │   │   └── 📂 FinalCTA/
│   │   │
│   │   ├── 📂 forms/                    # Form components
│   │   │   ├── 📂 ContactForm/
│   │   │   ├── 📂 BookingForm/
│   │   │   ├── 📂 SchoolDemoForm/
│   │   │   └── 📂 NewsletterForm/
│   │   │
│   │   └── 📂 features/                 # Feature-specific components
│   │       ├── 📂 ProgramSelector/
│   │       ├── 📂 TestimonialSlider/
│   │       ├── 📂 TournamentGallery/
│   │       └── 📂 PricingCalculator/
│   │
│   ├── 📂 lib/                          # Utilities & helpers
│   ├── 📂 hooks/                        # Custom React hooks
│   ├── 📂 context/                      # React Context providers
│   ├── 📂 types/                        # TypeScript type definitions
│   ├── 📂 data/                         # Static data & content
│   └── 📂 styles/                       # Global styles
│
└── 📂 public/                           # Static assets
    ├── 📂 images/
    │   ├── 📂 hero/
    │   ├── 📂 programs/
    │   ├── 📂 testimonials/
    │   ├── 📂 tournaments/
    │   └── 📂 team/
    └── 📂 icons/
```

---

## 📍 Directory Purposes

### `/src/app/` - Next.js App Router
**Purpose:** File-based routing with Next.js 14 App Router

#### `(marketing)/` - Route Group
- Groups related pages without adding to URL
- All marketing pages share same layout
- **Contains:** All public-facing pages

**Pages to create:**
```
(marketing)/page.tsx              → Homepage (/)
(marketing)/about/page.tsx        → /about
(marketing)/programs/page.tsx     → /programs
(marketing)/contact/page.tsx      → /contact
...etc
```

#### `api/` - API Routes
- Server-side API endpoints
- Handle form submissions
- Process data before saving/sending

**Routes to create:**
```
api/contact/route.ts     → POST /api/contact
api/booking/route.ts     → POST /api/booking
api/subscribe/route.ts   → POST /api/subscribe
```

---

### `/src/components/` - React Components

#### `common/` - Reusable UI Components
**Purpose:** Shared components used across the entire application

**Typical file structure per component:**
```
Button/
├── Button.tsx         # Main component
├── Button.types.ts    # TypeScript interfaces
├── Button.test.tsx    # Tests (optional)
└── index.ts           # Export barrel
```

**Components to create:**
- `Button` - Primary, secondary, tertiary variants
- `Card` - Container with styling
- `Input` - Form input with validation
- `Badge` - Small labels/tags
- `Modal` - Popup/overlay
- `Image` - Optimized image wrapper

#### `layout/` - Layout Components
**Purpose:** Structural components that define page layout

**Components:**
- `Header/` - Top navigation, logo, menu
- `Footer/` - Bottom content, links, newsletter
- `Container/` - Max-width wrapper for content

#### `sections/` - Homepage Sections
**Purpose:** Large sections that make up the homepage

**Each section is self-contained:**
```
Hero/
├── Hero.tsx           # Main section
├── HeroStats.tsx      # Sub-component for stats
└── index.ts           # Export
```

**Sections:**
- `Hero` - Landing section with main CTA
- `Programs` - 4 program cards
- `WhyChess` - Benefits grid
- `HowItWorks` - Step-by-step process
- `SuccessStories` - Testimonials
- `Tournaments` - Gallery showcase
- `FAQ` - Accordion questions
- `FinalCTA` - Bottom conversion section

#### `forms/` - Form Components
**Purpose:** Complex form components with validation

**Each form includes:**
- Form fields with validation
- Error handling
- Success states
- API integration

#### `features/` - Feature Modules
**Purpose:** Larger, feature-specific components

- `ProgramSelector` - Interactive program chooser
- `TestimonialSlider` - Carousel/slider for testimonials
- `TournamentGallery` - Image gallery with lightbox
- `PricingCalculator` - Interactive pricing tool

---

### `/src/lib/` - Utility Functions
**Purpose:** Shared utility functions and helpers

**Files to create:**
```
utils.ts         # General utilities (cn, formatters)
validations.ts   # Zod schemas for forms
constants.ts     # App-wide constants
api.ts          # API helper functions
```

---

### `/src/hooks/` - Custom React Hooks
**Purpose:** Reusable React hooks for common functionality

**Hooks to create:**
```
useScrollPosition.ts  # Track scroll position
useMediaQuery.ts      # Responsive breakpoints
useForm.ts            # Form utilities
useAnalytics.ts       # Track events
```

---

### `/src/context/` - React Context
**Purpose:** Global state management with React Context API

**Contexts to create:**
```
AppContext.tsx        # General app state
ThemeContext.tsx      # Theme/dark mode (future)
FormContext.tsx       # Form state management
```

---

### `/src/types/` - TypeScript Types
**Purpose:** Centralized type definitions

**Files to create:**
```
index.ts          # Export all types
components.ts     # Component prop types
api.ts            # API request/response types
forms.ts          # Form data types
```

---

### `/src/data/` - Static Data
**Purpose:** JavaScript/TypeScript files containing static content

**Files to create:**
```
programs.ts       # Program details and pricing
testimonials.ts   # Student/parent testimonials
faq.ts            # FAQ questions and answers
navigation.ts     # Navigation menu structure
team.ts           # Team member bios
```

**Example:** `programs.ts`
```typescript
export const programs = [
  {
    id: 'school-chess',
    title: 'School Chess Programs',
    description: '...',
    benefits: [...],
    pricing: {...},
  },
  // ...
];
```

---

### `/src/styles/` - Global Styles
**Purpose:** CSS and style configurations

**Files to create:**
```
globals.css       # Global CSS + Tailwind directives
fonts.ts          # Font configurations (if using local fonts)
```

---

### `/public/` - Static Assets
**Purpose:** Publicly accessible files served directly

#### `/images/` - Image Assets
**Organized by category:**
- `hero/` - Hero section images
- `programs/` - Program-specific images
- `testimonials/` - Student/parent photos
- `tournaments/` - Tournament gallery photos
- `team/` - Team member photos

**Naming convention:**
```
hero-main.jpg
hero-students-1.jpg
program-school-chess.jpg
testimonial-john-doe.jpg
tournament-2024-nairobi.jpg
```

#### `/icons/` - Icons & Small Graphics
- Favicon files
- Logo variations
- Program icons
- UI icons (if not using icon library)

---

## 🎯 Scalability Features

### 1. **Component Isolation**
Each component in its own folder with:
- Main component file
- Type definitions
- Sub-components if needed
- Index file for clean imports

**Benefits:**
- Easy to find and modify
- Self-documenting structure
- Simple to test

### 2. **Route Groups**
Using `(marketing)` folder:
- Keeps URLs clean
- Shared layouts easy
- Organized by purpose

### 3. **Separation of Concerns**
```
Components     → UI presentation
Lib            → Business logic
Hooks          → Reusable behaviors
Data           → Content management
Context        → State management
```

### 4. **Feature Folders**
Large features get their own folder:
```
features/ProgramSelector/
├── ProgramSelector.tsx
├── ProgramCard.tsx
├── ProgramFilter.tsx
└── index.ts
```

---

## 📦 Component Import Examples

### Clean Imports
```typescript
// Good - using barrel exports
import Button from '@/components/common/Button';
import { Hero } from '@/components/sections/Hero';
import { programs } from '@/data/programs';

// Avoid - direct file imports
import Button from '@/components/common/Button/Button';
```

### Barrel Export Pattern
```typescript
// components/common/Button/index.ts
export { default } from './Button';
export * from './Button.types';
```

---

## 🔄 Future Expansion

### Easy to Add:
**New Pages:**
```
src/app/(marketing)/blog/
src/app/(marketing)/shop/
```

**New Components:**
```
src/components/common/Dropdown/
src/components/features/VideoPlayer/
```

**New Utilities:**
```
src/lib/email.ts
src/lib/payments.ts
```

**Authentication (future):**
```
src/app/(auth)/
├── login/
├── register/
└── dashboard/
```

---

## 🎨 Best Practices

### 1. **One Component = One Folder**
```
✅ Good
components/common/Button/
├── Button.tsx
├── Button.types.ts
└── index.ts

❌ Avoid
components/common/
├── Button.tsx
├── ButtonTypes.ts
```

### 2. **Consistent Naming**
- Folders: PascalCase or kebab-case
- Components: PascalCase
- Utilities: camelCase
- Types: PascalCase

### 3. **Co-locate Related Files**
Keep related files close together:
```
Hero/
├── Hero.tsx
├── HeroStats.tsx      # Sub-component
├── HeroImage.tsx      # Sub-component
└── index.ts
```

### 4. **Use Index Files**
Enable cleaner imports:
```typescript
// components/sections/Hero/index.ts
export { default } from './Hero';
export { HeroStats } from './HeroStats';
```

---

## 🚀 Next Steps

1. **Initialize Next.js project** in this structure
2. **Create base configuration files**:
   - `tailwind.config.ts`
   - `tsconfig.json`
   - `.env.local`
3. **Start with common components**
4. **Build out page structure**
5. **Populate with content**

---

## 📋 File Creation Checklist

### High Priority (Start Here)
- [ ] `src/lib/utils.ts`
- [ ] `src/lib/constants.ts`
- [ ] `src/components/common/Button/`
- [ ] `src/components/common/Card/`
- [ ] `src/components/layout/Header/`
- [ ] `src/components/layout/Footer/`
- [ ] `src/app/(marketing)/page.tsx`

### Medium Priority
- [ ] All section components
- [ ] Form components
- [ ] API routes
- [ ] Data files

### Lower Priority
- [ ] Feature components
- [ ] Additional pages
- [ ] Advanced utilities

---

**Folder Structure Version:** 1.0  
**Created:** February 27, 2026  
**Status:** ✅ Complete and Ready

**All directories created successfully!**
