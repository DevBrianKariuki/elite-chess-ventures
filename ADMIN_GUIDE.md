# Elite Chess Website - Admin Dashboard

## Overview

This project includes a comprehensive admin dashboard for managing the Elite Chess website content, including tournaments and blog posts.

## Admin Features

### Authentication System
- Secure login with email and password
- Session management using localStorage
- Protected admin routes
- Simple logout functionality

### Dashboard
- Overview statistics for tournaments and blog posts
- Quick access to recent tournaments and blog posts
- Quick action buttons for content management

### Tournament Management
- ✅ Create, Read, Update, Delete (CRUD) tournaments
- ✅ Filter by status (open, upcoming, closed, completed)
- ✅ Search tournaments by name or location
- ✅ Toggle tournament visibility
- ✅ Set featured tournaments
- ✅ Track participant counts and registration progress
- ✅ Comprehensive tournament details (dates, location, prizes, format, etc.)

### Blog Management
- ✅ Create, Read, Update, Delete (CRUD) blog posts
- ✅ Filter by category
- ✅ Search posts by title or excerpt
- ✅ Toggle publish/draft status
- ✅ Set featured posts
- ✅ Rich content editing with HTML support
- ✅ Tag management

## Getting Started

### 1. Environment Setup

Create a `.env.local` file in the root directory:

```env
# Admin Authentication
ADMIN_EMAIL=admin@elitechess.co.ke
ADMIN_PASSWORD=your_secure_password_here
```

**⚠️ IMPORTANT FOR PRODUCTION:**
- Never commit `.env.local` to version control
- Use strong passwords
- Implement proper password hashing (bcrypt)
- Use a database for user management
- Implement proper session management with JWT tokens
- Add rate limiting to prevent brute force attacks

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

### 4. Access Admin Dashboard

1. Navigate to: `http://localhost:3000/admin`
2. Login with:
   - Email: `admin@elitechess.co.ke`
   - Password: `admin123` (default, or your .env password)

## Admin Routes

- `/admin` - Login page
- `/admin/dashboard` - Main dashboard
- `/admin/tournaments` - Tournament management
- `/admin/blogs` - Blog post management

## Data Structure

### Tournaments
Located in: `src/data/tournaments.ts`

```typescript
interface Tournament {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  location: string;
  category: string;
  status: 'open' | 'upcoming' | 'closed' | 'completed';
  description?: string;
  entryFee?: string;
  prizePool?: string;
  maxParticipants?: number;
  currentParticipants?: number;
  format?: string;
  timeControl?: string;
  registrationDeadline?: string;
  contact?: string;
  isFeatured?: boolean;
  isVisible?: boolean;
}
```

### Blog Posts
Located in: `src/data/blogs.ts`

```typescript
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image?: string;
  tags?: string[];
  isPublished?: boolean;
  isFeatured?: boolean;
}
```

## Current Implementation Notes

### Data Persistence
- **Current:** Data is stored in static TypeScript files and managed in-browser state
- **Production Ready:** Integrate with a database (PostgreSQL, MongoDB, etc.)
- **API Routes:** Ready to be connected to backend API calls

### Authentication
- **Current:** Simple email/password check against environment variables
- **Production Ready:** 
  - Implement proper password hashing (bcrypt)
  - Use database for user management
  - Implement JWT tokens
  - Add refresh tokens
  - Add role-based access control (RBAC)
  - Add two-factor authentication (2FA)

### Recommended Next Steps for Production

1. **Database Integration**
   ```bash
   npm install prisma @prisma/client
   # or
   npm install mongoose
   ```

2. **Enhanced Security**
   ```bash
   npm install bcryptjs jsonwebtoken
   npm install @types/bcryptjs @types/jsonwebtoken --save-dev
   ```

3. **Form Validation**
   ```bash
   npm install zod react-hook-form
   ```

4. **Rich Text Editor**
   ```bash
   npm install @tinymce/tinymce-react
   # or
   npm install react-quill
   ```

5. **Image Upload**
   ```bash
   npm install cloudinary
   # or use AWS S3, DigitalOcean Spaces, etc.
   ```

## Sample Data

The website comes with 8 sample tournaments and 8 sample blog posts for demonstration purposes. You can:
- Edit them through the admin dashboard
- Delete them and add your own
- Toggle their visibility
- Mark them as featured

## Features Overview

### Tournaments Page
- Displays all upcoming tournaments with detailed information
- Shows registration progress bars
- Status badges (open, upcoming, closed, completed)
- Enhanced layout with all tournament details visible
- Registration deadlines and contact information

### Admin Security
- Protected routes that redirect to login if not authenticated
- Session persistence across page refreshes
- Clean logout functionality
- Responsive design for mobile admin access

## Support

For questions or issues, contact: dev@elitechess.co.ke

---

**Built with:** Next.js 14, TypeScript, Tailwind CSS, React
