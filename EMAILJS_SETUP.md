# EmailJS Setup Guide

This guide will help you set up EmailJS to enable email functionality on your Elite Chess Ventures website.

## What is EmailJS?

EmailJS allows you to send emails directly from your browser without needing a backend server. It's perfect for contact forms, callback requests, and consultation bookings.

## Setup Steps

### 1. Create an EmailJS Account

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Add an Email Service

1. In the EmailJS dashboard, click "Add New Service"
2. Choose your email service provider (Gmail, Outlook, etc.)
3. For Gmail:
   - Click "Connect Account"
   - Sign in with your Google account
   - Allow EmailJS to access your account
4. Click "Create Service"
5. **Copy the Service ID** (you'll need this for your .env.local file)

### 3. Create an Email Template

1. Go to "Email Templates" in the sidebar
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Request from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Interest: {{interest}}

Message:
{{message}}

---
This email was sent from Elite Chess Ventures website contact form.
```

4. Click "Save"
5. **Copy the Template ID** (you'll need this for your .env.local file)

### 4. Get Your Public Key

1. Go to "Account" in the sidebar
2. Find the "API Keys" section
3. **Copy your Public Key** (it should start with something like "user_...")

### 5. Update Your Environment Variables

Open your `.env.local` file and replace the placeholder values:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace:
- `your_service_id_here` with your Service ID from Step 2
- `your_template_id_here` with your Template ID from Step 3
- `your_public_key_here` with your Public Key from Step 4

### 6. Test the Integration

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Go to your contact page: http://localhost:3000/contact

3. Try:
   - Filling out the main contact form
   - Clicking "Request Callback" button
   - Clicking "Schedule Free Consultation" button

4. Check your email inbox for the test messages

## Email Template Variables

The forms use these template variables:

- `{{from_name}}` - User's name
- `{{from_email}}` - User's email address
- `{{phone}}` - User's phone number
- `{{interest}}` - Type of inquiry (School Program, Private Coaching, etc.)
- `{{message}}` - User's message
- `{{to_email}}` - Your business email (elitechessventures@gmail.com)

## Features Implemented

### 1. Main Contact Form
Located on `/contact` page - allows users to send general inquiries with:
- Name, email, phone
- Interest selection (School Chess, Private Coaching, etc.)
- Custom message

### 2. Request Callback Modal
Quick action button that opens a modal for callback requests:
- User provides name and phone number
- Can select preferred callback time
- Simplified form for urgent contact

### 3. Schedule Free Consultation Modal
Quick action button that opens a modal for consultation booking:
- User provides complete contact details
- Selects program of interest
- Optional additional information

## Troubleshooting

### Emails not sending?

1. **Check browser console** for any errors
2. **Verify environment variables** are correctly set
3. **Check EmailJS dashboard** for any error logs
4. **Verify email service** is properly connected
5. **Check spam folder** - initial emails might land there

### "EmailJS configuration is missing" error?

- Make sure you've added all three environment variables to `.env.local`
- Restart your development server after adding variables
- Variables must start with `NEXT_PUBLIC_` to be accessible in the browser

### Template variables not showing correctly?

- Go to your EmailJS template and ensure variable names match exactly: `{{from_name}}`, `{{from_email}}`, etc.
- Variable names are case-sensitive

## Free Plan Limits

EmailJS free plan includes:
- 200 emails per month
- 2 email templates
- 1 email service

This should be sufficient for initial testing. For production with higher volume, consider upgrading to a paid plan.

## Security Notes

- Your Public Key is safe to expose in client-side code
- Never commit your `.env.local` file to version control
- The `.env.local` file is already in `.gitignore`
- EmailJS Public Key cannot be used to send spam or abuse your account

## Support

If you encounter issues:
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com
- Check the EmailJS dashboard for error logs

## Next Steps

After setup:
1. Test all three forms thoroughly
2. Customize email templates to match your branding
3. Set up email notifications in your Gmail/email service
4. Consider setting up auto-reply templates for users
