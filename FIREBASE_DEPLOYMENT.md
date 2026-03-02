# Firebase Deployment Guide

## Overview
This guide will help you deploy Firestore security rules to fix the "Missing or insufficient permissions" error.

## Prerequisites
- Firebase CLI installed (`npm install -g firebase-tools`)
- Firebase project already created (elite-chess-ventures)
- Logged in to Firebase CLI

---

## Step 1: Install Firebase CLI (if not already installed)

```bash
npm install -g firebase-tools
```

---

## Step 2: Login to Firebase

```bash
firebase login
```

This will open a browser window for you to authenticate with your Google account.

---

## Step 3: Initialize Firebase (if not already done)

In your project root directory:

```bash
firebase init
```

Select:
- **Firestore**: Configure security rules and indexes files
- Use existing project: `elite-chess-ventures`
- Keep the default files:
  - `firestore.rules` (already created)
  - `firestore.indexes.json` (already created)

---

## Step 4: Deploy Firestore Rules

Deploy your security rules to Firebase:

```bash
firebase deploy --only firestore:rules
```

This command uploads the `firestore.rules` file to your Firebase project.

---

## Step 5: Deploy Firestore Indexes

Deploy your indexes:

```bash
firebase deploy --only firestore:indexes
```

---

## Step 6: Verify Deployment

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **elite-chess-ventures**
3. Go to **Firestore Database** → **Rules**
4. You should see your deployed rules

---

## Current Rules Configuration

The current `firestore.rules` file allows:
- ✅ **Read access**: All collections are publicly readable
- ✅ **Write access**: All collections are writable (FOR DEVELOPMENT ONLY)

### ⚠️ IMPORTANT: Production Security

Before going to production, update the rules to require authentication:

```firestore
// Example: Restrict admin operations to authenticated users
match /blogs/{blogId} {
  allow read: if resource.data.isPublished == true || request.auth != null;
  allow create, update, delete: if request.auth != null;
}
```

---

## Troubleshooting

### Error: "Permission denied"
- Make sure you're logged in: `firebase login`
- Check you have owner/editor permissions on the Firebase project
- Verify the project ID matches in `.firebaserc` (if it exists)

### Error: "Failed to get Firebase project"
```bash
firebase use elite-chess-ventures
```

### View current project
```bash
firebase projects:list
```

---

## Quick Deploy Command

To deploy everything at once:

```bash
firebase deploy --only firestore
```

---

## Testing Rules Locally (Optional)

You can test security rules locally using the Firebase Emulator:

```bash
firebase emulators:start --only firestore
```

Then update your Firebase config to use the emulator in development.

---

## Next Steps

1. ✅ Deploy the rules using the commands above
2. ✅ Refresh your admin dashboard
3. ✅ The "Missing or insufficient permissions" error should be resolved
4. ⚠️ Remember to restrict write access before production!

---

## Production Checklist

Before deploying to production:

- [ ] Add authentication to your admin dashboard
- [ ] Update firestore.rules to require auth for write operations
- [ ] Test all CRUD operations with authentication
- [ ] Set up Firebase Authentication (if not already done)
- [ ] Configure admin user accounts
- [ ] Enable audit logging
- [ ] Set up backup policies

---

## Support

For more information, visit:
- [Firestore Security Rules Documentation](https://firebase.google.com/docs/firestore/security/get-started)
- [Firebase CLI Reference](https://firebase.google.com/docs/cli)
