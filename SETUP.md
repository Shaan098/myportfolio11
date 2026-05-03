# 📚 Complete Setup & Deployment Guide

## Table of Contents
1. [Local Development Setup](#local-development-setup)
2. [Database Configuration](#database-configuration)
3. [Email Configuration](#email-configuration)
4. [Running the Application](#running-the-application)
5. [Customization](#customization)
6. [Deployment](#deployment)
7. [Troubleshooting](#troubleshooting)

---

## Local Development Setup

### Prerequisites
- Node.js v16+ ([Download](https://nodejs.org/))
- npm or yarn
- Git
- A MongoDB Atlas account (free)
- Gmail account (for email)

### Step 1: Clone Repository
```bash
git clone <your-repo-url>
cd mern-portfolio
```

### Step 2: Install Dependencies

**Frontend**
```bash
cd client
npm install
```

**Backend**
```bash
cd ../server
npm install
```

### Step 3: Environment Configuration

**Client (.env)**
```bash
cp .env.example .env
# Edit .env with your values
```

**Server (.env)**
```bash
cp .env.example .env
# Edit .env with your values
```

---

## Database Configuration

### MongoDB Atlas Setup (FREE)

1. **Create Account**
   - Go to [mongodb.com/atlas](https://www.mongodb.com/atlas)
   - Click "Try Free"
   - Sign up with email

2. **Create Organization**
   - Skip organization creation for free tier
   - Click "Create a project"

3. **Create Cluster**
   - Select "Free" (M0)
   - Choose cloud provider (AWS, Google Cloud, Azure)
   - Select region closest to you
   - Click "Create cluster"
   - Wait 3-5 minutes for cluster to be ready

4. **Set Database Password**
   - Click "Database Access" in left sidebar
   - Click "Add New Database User"
   - Username: `portfolio_user` (or any username)
   - Password: Generate secure password
   - Click "Add User"

5. **Whitelist IP Address**
   - Click "Network Access" in left sidebar
   - Click "Add IP Address"
   - Select "Allow access from anywhere" (or specific IP)
   - Confirm

6. **Get Connection String**
   - Go back to "Clusters"
   - Click "Connect"
   - Click "Connect your application"
   - Copy connection string
   - Replace `<username>` and `<password>` with your database user
   - This is your `MONGODB_URI`

### Test Connection
```bash
# In server directory
npm run seed
```

If successful, you'll see: "✅ Database seeded successfully!"

---

## Email Configuration

### Gmail Setup

1. **Enable 2-Factor Authentication**
   - Go to [myaccount.google.com](https://myaccount.google.com)
   - Click "Security" in left menu
   - Scroll down to "How you sign in to Google"
   - Click "2-Step Verification"
   - Follow the steps

2. **Generate App Password**
   - Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Windows Computer"
   - Click "Generate"
   - Copy the 16-character password
   - This is your `EMAIL_PASS` (remove spaces: `xxxxxxxxxxxxxxxx`)

3. **Update .env**
   ```env
   EMAIL_USER=yourgmail@gmail.com
   EMAIL_PASS=xxxxxxxxxxxxxxxx
   ```

### Test Email
Send a test message through contact form or use:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "your@email.com",
    "message": "Test message"
  }'
```

### Alternative Email Services
- **SendGrid**: More reliable, free tier available
- **AWS SES**: Scalable, pay-as-you-go
- **Mailgun**: Developer-friendly
- **Microsoft Exchange**: For business emails

---

## Running the Application

### Development Mode

**Terminal 1 - Backend**
```bash
cd server
npm run dev
# Output: 🚀 Portfolio API Server Running | Port: 5000
```

**Terminal 2 - Frontend**
```bash
cd client
npm run dev
# Open http://localhost:5173 in browser
```

### Production Build

**Frontend**
```bash
cd client
npm run build
# Creates dist/ folder with optimized files
npm run preview  # Preview production build
```

**Backend**
```bash
cd server
npm start
```

---

## Customization

### 1. Update Your Information

**Edit `/client/src/data/portfolioData.js`**
```javascript
export const skills = [
  { name: 'React.js', icon: '⚛', level: 90, category: 'frontend' },
  // Add your skills
];

export const timeline = [
  {
    year: '2025',
    title: 'Your Job Title',
    company: 'Company Name',
    description: 'What you did here',
  },
  // Add your timeline
];

export const socialLinks = {
  github: 'https://github.com/yourname',
  linkedin: 'https://linkedin.com/in/yourname',
  twitter: 'https://twitter.com/yourname',
  email: 'your@email.com'
};
```

### 2. Add Your Projects

**Option A: Use Admin API**
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Project",
    "description": "Project description",
    "techStack": ["React", "Node.js"],
    "category": "fullstack",
    "githubUrl": "https://github.com/...",
    "liveUrl": "https://...",
    "featured": true
  }'
```

**Option B: Update Seed File**
Edit `/server/seed.js` projects array, then run:
```bash
npm run seed
```

### 3. Update Profile Image
1. Replace image file in `/client/public/`
2. Update image src in `About.jsx`

### 4. Change Color Scheme

**Edit `/client/tailwind.config.js`**
```javascript
theme: {
  extend: {
    colors: {
      primary: '#080B14',    // Background
      accent: '#00F5FF',     // Accent color
      secondary: '#1A2F4B',  // Secondary
    }
  }
}
```

### 5. Update Resume
1. Place PDF in `/client/public/resume.pdf`
2. Update download link in `Hero.jsx`

### 6. Change Fonts

**Edit `/client/src/index.css`**
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');
```

**Edit `/client/tailwind.config.js`**
```javascript
fontFamily: {
  syne: ['YourFont', 'sans-serif'],
  dm: ['AnotherFont', 'sans-serif'],
}
```

---

## Deployment

### Frontend Deployment (Vercel - Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy to Vercel**
```bash
npm install -g vercel
cd client
vercel --prod
```

Or connect GitHub repo on [vercel.com](https://vercel.com)

3. **Set Environment Variables**
   - Go to project settings
   - Add `VITE_API_URL` = your backend URL

### Backend Deployment (Render - Recommended)

1. **Create .github/workflows/deploy.yml**
```yaml
name: Deploy to Render

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Trigger Render Deploy
        run: curl ${{ secrets.RENDER_DEPLOY_HOOK }}
```

2. **Deploy to Render**
   - Go to [render.com](https://render.com)
   - Click "New +" → "Web Service"
   - Connect GitHub repository
   - Select `server` directory
   - Add Environment Variables:
     - `MONGODB_URI`
     - `EMAIL_USER`
     - `EMAIL_PASS`
     - `FRONTEND_URL` (your Vercel URL)
     - `NODE_ENV=production`
   - Click Deploy

### Alternative Hosting

| Platform | Frontend | Backend | Database |
|----------|----------|---------|----------|
| Vercel | ✅ | ✅ | ✅ (via MongoDB) |
| Netlify | ✅ | ❌ | ✅ |
| Railway | ✅ | ✅ | ✅ |
| Heroku | ✅ | ✅ | ✅ (paid) |
| AWS | ✅ | ✅ | ✅ |

---

## Post-Deployment Checklist

- [ ] Update `VITE_API_URL` in frontend
- [ ] Test contact form → email arrives
- [ ] Test all project links
- [ ] Check mobile responsiveness
- [ ] Run Lighthouse audit (target: 90+)
- [ ] Test on different browsers
- [ ] Enable HTTPS/SSL
- [ ] Set up domain name
- [ ] Add Google Analytics
- [ ] Submit sitemap to Google Search Console
- [ ] Share portfolio on LinkedIn

---

## Performance Optimization

### Frontend
```bash
# Check bundle size
npm run build
# Look for chunk sizes in output

# Optimize images
# Use tools like TinyPNG or ImageOptim
```

### Backend
- Enable MongoDB query optimization
- Add indexes to frequently queried fields
- Use caching for projects list
- Compress API responses with gzip

---

## Troubleshooting

### MongoDB Issues

**Connection timeout**
```
Solution:
1. Check IP is whitelisted in Atlas
2. Verify credentials in MONGODB_URI
3. Check internet connection
```

**Authentication failed**
```
Solution:
1. Verify username/password
2. Check for special characters (@, #, $)
3. Regenerate password in Atlas
```

### Email Issues

**Email not sending**
```
Solution:
1. Check EMAIL_USER and EMAIL_PASS
2. Verify 2FA is enabled
3. Generate new app password
4. Check email quota (Gmail: 500/day)
```

**CORS error on frontend**
```
Solution:
1. Update FRONTEND_URL in .env
2. Restart backend server
3. Clear browser cache
4. Check console for detailed error
```

### Port Already in Use

**Port 5000 in use**
```bash
# Linux/Mac
lsof -i :5000
kill -9 <PID>

# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

**Port 5173 in use**
```bash
npm run dev -- --port 3000
```

### Build Issues

**npm install fails**
```bash
# Clear npm cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Vite build errors**
```bash
# Clear dist folder
rm -rf dist
npm run build
```

---

## Support & Resources

- **Express.js**: https://expressjs.com/
- **React**: https://react.dev/
- **MongoDB**: https://docs.mongodb.com/
- **Vite**: https://vitejs.dev/
- **Tailwind**: https://tailwindcss.com/
- **Framer Motion**: https://www.framer.com/motion/

---

**Your portfolio is ready to impress! 🚀 Good luck with your job search!**
