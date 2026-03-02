# Cloudinary Integration Setup Guide

## Overview
Your application now uses **Cloudinary** for storing and serving all images (blog posts, team member photos, and tournament images), while **Firebase Firestore** stores all text data and image URLs.

## Architecture
- **Text Data**: Stored in Firebase Firestore (tournaments, blogs, team members)
- **Images**: Stored in Cloudinary with URLs saved in Firestore
- **Image Serving**: Images are fetched from Cloudinary using the stored URLs

## Benefits of This Approach
✅ **Automatic Optimization**: Cloudinary automatically optimizes images for web
✅ **Image Transformations**: Resize, crop, and format images on-the-fly
✅ **CDN Delivery**: Fast global content delivery
✅ **Better Performance**: Separate concerns - database for data, CDN for media
✅ **Cost-Effective**: Cloudinary's free tier is generous for most websites

---

## Step 1: Create a Cloudinary Account

1. Go to [Cloudinary](https://cloudinary.com/)
2. Click **"Sign Up for Free"**
3. Fill in your details:
   - Email: **elitechessventures@gmail.com** (or your preferred email)
   - Company/Project Name: **Elite Chess Ventures**
4. Verify your email address

---

## Step 2: Get Your Cloudinary Credentials

After logging in to your Cloudinary dashboard:

1. **Go to Dashboard** (https://console.cloudinary.com/console)
2. You'll see your account details at the top:
   - **Cloud Name**: `your_cloud_name` (e.g., `elite-chess`)
   - **API Key**: A long number (e.g., `123456789012345`)
   - **API Secret**: Click "Reveal" to see it

**IMPORTANT**: Keep your API Secret private! Never commit it to public repositories.

### Copy These Values:
```
Cloud Name: dunafshbj
API Key: 971384942914647
API Secret: KYyWHig_wcGNKyOKSLzaPYUfnbg
```

---

## Step 3: Create an Upload Preset

Upload presets allow secure uploading from the client without exposing your API secret.

### Instructions:
1. In Cloudinary dashboard, go to **Settings** (gear icon)
2. Click on **Upload** tab
3. Scroll down to **Upload presets**
4. Click **"Add upload preset"**
5. Configure the preset:
   - **Preset name**: `elite-chess-uploads` (or your choice)
   - **Signing Mode**: Select **"Unsigned"** (for client-side uploads)
   - **Folder**: Leave empty or set to `elite-chess`
   - **Access mode**: **Public**
   - **Unique filename**: Check this (recommended)
   - **Overwrite**: Uncheck (recommended)
6. Click **"Save"**

### Copy This Value:
```
Upload Preset: elite-chess-uploads
```

---

## Step 4: Update Your Environment Variables

Open your `.env.local` file and replace the placeholder values:

```env
# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
NEXT_PUBLIC_CLOUDINARY_API_KEY=your_api_key_here
CLOUDINARY_API_SECRET=your_api_secret_here
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=elite-chess-uploads
```

**Replace with your actual values:**
```env
# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=elite-chess  # Your cloud name
NEXT_PUBLIC_CLOUDINARY_API_KEY=123456789012345  # Your API key
CLOUDINARY_API_SECRET=AbCdEfGhIjKlMnOpQrStUvWxYz  # Your API secret
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=elite-chess-uploads  # Your preset name
```

---

## Step 5: Restart Your Development Server

After updating `.env.local`, you must restart your server for changes to take effect:

### In VS Code Terminal:
1. Stop the current server (Press `Ctrl+C`)
2. Restart it:
   ```bash
   npm run dev
   ```

---

## Step 6: Test Image Upload

### Test Blog Post Image Upload:
1. Navigate to http://localhost:3000/admin
2. Login with your credentials
3. Go to **"Blog Posts"**
4. Click **"Add Blog Post"**
5. Fill in the required fields
6. Under **"Featured Image"**:
   - Click **"Choose an image to upload"**
   - Select an image from your computer
   - You should see a preview
7. Click **"Create Post"**
8. The image will upload to Cloudinary and the URL will be saved to Firestore

### Test Team Member Photo Upload:
1. In the admin dashboard, go to **"Team Members"**
2. Click **"Add Team Member"**
3. Fill in the required fields
4. Under **"Team Member Photo"**:
   - Upload a photo using the file picker
   - Or paste a URL directly
5. Click **"Create Member"**

---

## Verify Upload in Cloudinary

1. Go to your [Cloudinary Media Library](https://console.cloudinary.com/console/media_library)
2. You should see your uploaded images organized in folders:
   - `elite-chess/blogs/` - Blog post images
   - `elite-chess/team/` - Team member photos
   - `elite-chess/tournaments/` - Tournament images (when implemented)

---

## Image Features You Get with Cloudinary

### 1. Automatic Format Optimization
Cloudinary automatically serves WebP to browsers that support it, saving bandwidth.

### 2. Responsive Images
You can transform images on-the-fly by changing the URL:
```
Original: https://res.cloudinary.com/your-cloud/image/upload/v1234/image.jpg
Resized: https://res.cloudinary.com/your-cloud/image/upload/w_400,h_300/v1234/image.jpg
```

### 3. Quality Control
```
High quality: /q_auto:best/image.jpg
Balanced: /q_auto/image.jpg
Lower size: /q_auto:low/image.jpg
```

---

## Troubleshooting

### Error: "Cloudinary configuration is missing"
**Solution**: Make sure you've:
1. Added all values to `.env.local`
2. Restarted your development server
3. Used the correct variable names (with `NEXT_PUBLIC_` prefix)

### Error: "Upload failed"
**Solution**: Check that:
1. Your upload preset is set to **"Unsigned"** mode
2. The preset name matches exactly in your `.env.local`
3. Your internet connection is stable

### Error: "Invalid API credentials"
**Solution**: 
1. Double-check your Cloud Name, API Key, and API Secret
2. Make sure there are no extra spaces in the `.env.local` file
3. Verify the values in your Cloudinary dashboard

### Images not loading on public pages
**Solution**: 
1. Check that the image URLs are properly saved in Firestore
2. Verify the URLs work by opening them in a browser
3. Check browser console for any CORS errors (shouldn't happen with Cloudinary)

---

## Security Best Practices

### ✅ DO:
- Keep `.env.local` in your `.gitignore` (already configured)
- Use unsigned upload presets for client-side uploads
- Regularly rotate your API secret if exposed
- Set reasonable file size limits (currently 5MB)

### ❌ DON'T:
- Commit `.env.local` to Git
- Share your API secret publicly
- Allow unlimited file sizes
- Skip file type validation

---

## What's Been Implemented

### ✅ Blog Posts
- Image upload with file picker
- Manual URL input option
- Image preview before upload
- Stored in: `elite-chess/blogs/[blog-id]/`

### ✅ Team Members
- Photo upload with file picker
- Manual URL input option
- Photo preview before upload
- Stored in: `elite-chess/team/[member-id]/`

### 🔜 Tournaments (Coming Soon)
- Can be implemented following the same pattern
- Will be stored in: `elite-chess/tournaments/[tournament-id]/`

---

## File Structure

```
src/
  lib/
    cloudinary.ts           # Cloudinary upload service
    firebase/
      blogs.ts              # Blog CRUD (stores Cloudinary URLs)
      team.ts               # Team CRUD (stores Cloudinary URLs)
      tournaments.ts        # Tournament CRUD
  app/
    admin/
      (dashboard)/
        blogs/page.tsx      # Blog management with image upload
        team/page.tsx       # Team management with photo upload
        tournaments/page.tsx # Tournament management
```

---

## Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify all environment variables are set correctly
3. Check Cloudinary dashboard for upload logs
4. Restart your development server

---

## Summary Checklist

- [ ] Created Cloudinary account
- [ ] Copied Cloud Name from dashboard
- [ ] Copied API Key from dashboard
- [ ] Copied API Secret from dashboard
- [ ] Created unsigned upload preset
- [ ] Updated `.env.local` with all credentials
- [ ] Restarted development server (`npm run dev`)
- [ ] Tested blog post image upload
- [ ] Tested team member photo upload
- [ ] Verified images appear in Cloudinary Media Library

Once all items are checked, your Cloudinary integration is complete! 🎉
