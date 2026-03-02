# Firebase Integration Guide

## Overview
The admin dashboard has been successfully integrated with Firebase Firestore for data management. All tournaments, blog posts, and team members are now stored in Firebase instead of local data files.

## What Has Been Set Up

### 1. Firebase Configuration
- **File**: `src/lib/firebase.ts`
- Initializes Firebase with your project credentials
- Provides database, storage, and auth instances

### 2. Firebase Service Files
Created service files for each entity with full CRUD operations:

#### Tournaments Service (`src/lib/firebase/tournaments.ts`)
- `getAllTournaments()` - Fetch all tournaments
- `getVisibleTournaments()` - Fetch only visible tournaments (for public pages)
- `getTournamentById(id)` - Fetch single tournament
- `createTournament(data)` - Create new tournament
- `updateTournament(id, data)` - Update existing tournament
- `deleteTournament(id)` - Delete tournament
- `toggleTournamentVisibility(id, isVisible)` - Show/hide tournament

#### Blogs Service (`src/lib/firebase/blogs.ts`)
- `getAllBlogs()` - Fetch all blog posts
- `getPublishedBlogs()` - Fetch only published posts (for public pages)
- `getBlogsByCategory(category)` - Fetch posts by category
- `getBlogById(id)` - Fetch single blog post
- `createBlog(data)` - Create new blog post
- `updateBlog(id, data)` - Update existing blog post
- `deleteBlog(id)` - Delete blog post
- `toggleBlogPublish(id, isPublished)` - Publish/unpublish post

#### Team Service (`src/lib/firebase/team.ts`)
- `getAllTeamMembers()` - Fetch all team members
- `getVisibleTeamMembers()` - Fetch only visible members (for public pages)
- `getTeamMemberById(id)` - Fetch single team member
- `createTeamMember(data)` - Create new team member
- `updateTeamMember(id, data)` - Update existing team member
- `deleteTeamMember(id)` - Delete team member
- `toggleTeamMemberVisibility(id, isVisible)` - Show/hide team member

### 3. Updated Admin Pages
All three admin management pages have been updated:
- **Tournaments Management** - Full Firebase integration with loading states
- **Blogs Management** - Full Firebase integration with loading states
- **Team Management** - Full Firebase integration with loading states

Each page now:
- Fetches data from Firebase on page load
- Shows loading spinner while fetching data
- Displays error messages if something goes wrong
- Saves all changes directly to Firebase
- Auto-refreshes the list after any change

## Firebase Database Structure

Your Firestore database will have three collections:

### `tournaments` Collection
```javascript
{
  title: string,
  category: string,
  date: timestamp,
  location: string,
  description: string,
  status: 'open' | 'upcoming' | 'closed' | 'completed',
  maxParticipants: number,
  currentParticipants: number,
  registrationDeadline: string,
  entryFee: string,
  features: string[],
  contactEmail: string,
  contactPhone: string,
  isFeatured: boolean,
  isVisible: boolean,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### `blogs` Collection
```javascript
{
  title: string,
  excerpt: string,
  content: string,
  author: string,
  date: string,
  readTime: string,
  category: string,
  image: string,
  isPublished: boolean,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### `team` Collection
```javascript
{
  name: string,
  role: string,
  rating: string,
  bio: string,
  avatar: string,
  photo: string, // URL to photo
  email: string,
  socialLinks: {
    linkedin: string,
    twitter: string
  },
  specialties: string[],
  yearsOfExperience: number,
  isVisible: boolean,
  order: number,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

## Next Steps to Complete

### 1. Initialize Your Firebase Database

Since your database is currently empty, you have two options:

#### Option A: Manually Add Data Through Admin Dashboard
1. Navigate to `/admin` (login with your admin credentials)
2. Go to each management page (Tournaments, Blogs, Team)
3. Click "Add" button and create entries one by one

#### Option B: Create a Data Migration Script
I can create a script that will automatically migrate your existing sample data to Firebase. This would be faster if you want to preserve the sample data.

### 2. Set Up Firebase Security Rules

**IMPORTANT**: Your Firestore database currently has default security rules which may be too permissive or too restrictive. You need to set up proper security rules:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **elite-chess-ventures**
3. Go to **Firestore Database** → **Rules**
4. Update the rules to allow:
   - Public read access to visible/published content
   - Write access only for authenticated admins

Here's a recommended starting point for rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Tournaments
    match /tournaments/{tournamentId} {
      // Anyone can read visible tournaments
      allow read: if resource.data.isVisible == true;
      // Only authenticated users can read all
      allow read: if request.auth != null;
      // Only authenticated users can write
      allow write: if request.auth != null;
    }
    
    // Blogs
    match /blogs/{blogId} {
      // Anyone can read published blogs
      allow read: if resource.data.isPublished == true;
      // Only authenticated users can read all
      allow read: if request.auth != null;
      // Only authenticated users can write
      allow write: if request.auth != null;
    }
    
    // Team Members
    match /team/{memberId} {
      // Anyone can read visible team members
      allow read: if resource.data.isVisible == true;
      // Only authenticated users can read all
      allow read: if request.auth != null;
      // Only authenticated users can write
      allow write: if request.auth != null;
    }
  }
}
```

### 3. Update Public Pages to Use Firebase

Currently, your public pages (tournaments page, blog page, about page) still use the local data files. They need to be updated to fetch from Firebase:

#### Pages to Update:
1. **Tournaments Page** (`src/app/(marketing)/tournaments/page.tsx`)
   - Import `getVisibleTournaments` from Firebase
   - Fetch and display data

2. **Blog Page** (`src/app/(marketing)/blog/page.tsx`)
   - Import `getPublishedBlogs` from Firebase
   - Fetch and display data

3. **Individual Blog Page** (`src/app/(marketing)/blog/[id]/page.tsx`)
   - Import `getBlogById` from Firebase
   - Fetch specific blog post

4. **About Page** (`src/app/(marketing)/about/page.tsx`)
   - Import `getVisibleTeamMembers` from Firebase
   - Fetch and display team members

### 4. Set Up Firebase Authentication (Optional but Recommended)

For better security, integrate Firebase Authentication for your admin login:
- Replace the current localStorage-based auth with Firebase Auth
- Use email/password authentication
- Protect admin routes with Firebase auth state

### 5. Set Up Image Upload (For Team Photos)

Currently, team member photos use URLs. To allow direct image uploads:
1. Enable Firebase Storage in your Firebase Console
2. Create an upload component that uploads images to Firebase Storage
3. Get the download URL and save it in the `photo` field

## Testing the Integration

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Login to admin dashboard**:
   - Navigate to `/admin`
   - Login with your credentials

3. **Test CRUD operations**:
   - Try creating a tournament/blog/team member
   - Edit existing entries
   - Toggle visibility
   - Delete entries

4. **Check Firebase Console**:
   - Open [Firebase Console](https://console.firebase.google.com/)
   - Go to Firestore Database
   - You should see your collections and documents

## Troubleshooting

### If you see "Permission denied" errors:
- Check your Firebase Security Rules
- Make sure you're logged in (for admin pages)

### If data doesn't load:
- Check browser console for errors
- Verify Firebase config in `src/lib/firebase.ts`
- Ensure Firebase package is installed (`npm install firebase`)

### If changes don't persist:
- Check Firebase Console to see if data is being written
- Verify your internet connection
- Check for JavaScript errors in console

## Benefits of Firebase Integration

✅ **Real-time Database**: Data is synced across all devices
✅ **Scalability**: Automatically scales with your traffic
✅ **Security**: Robust security rules
✅ **No Backend Required**: Firebase handles all server-side logic
✅ **Automatic Backups**: Firebase handles data backups
✅ **Fast Performance**: Optimized for speed

## Need Help?

If you need assistance with:
- Setting up Firebase Security Rules
- Creating a data migration script
- Updating public pages to use Firebase
- Setting up Firebase Authentication
- Any other Firebase-related tasks

Just let me know!
