# 🎨 MERN Portfolio - Client (React + Vite)

A modern, animated React frontend for a personal portfolio website with stunning visual effects and smooth interactions.

## 📋 Features

- ⚡ **Vite** - Lightning-fast build tool and dev server
- 🎨 **Tailwind CSS** - Utility-first responsive styling
- ✨ **Framer Motion** - Smooth animations and page transitions
- 🎭 **GSAP** - Advanced text animations and effects
- 🎯 **React Router** - Client-side routing
- 📧 **Axios** - HTTP requests to backend API
- 🔔 **React Hot Toast** - Beautiful notifications
- 🎯 **SEO Ready** - React Helmet for meta tags
- 📱 **Mobile Responsive** - Works on all devices
- 🎪 **Custom Cursor** - Animated cursor follower

## 🛠️ Installation

```bash
cd client
npm install
```

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.18.0",
  "framer-motion": "^10.16.4",
  "gsap": "^3.12.2",
  "axios": "^1.6.0",
  "react-helmet-async": "^2.0.3",
  "react-hot-toast": "^2.4.1",
  "react-icons": "^4.12.0",
  "@emailjs/browser": "^4.1.0"
}
```

## 🚀 Scripts

```bash
npm run dev       # Start development server (localhost:5173)
npm run build     # Build for production (creates dist/)
npm run preview   # Preview production build locally
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx           # Navigation bar with mobile menu
│   ├── Hero.jsx             # Hero section with animations
│   ├── About.jsx            # About section with stats
│   ├── Skills.jsx           # Skills section with progress bars
│   ├── Projects.jsx         # Projects grid with filters
│   ├── ProjectCard.jsx      # Individual project card
│   ├── Timeline.jsx         # Experience timeline
│   ├── Contact.jsx          # Contact form
│   ├── Footer.jsx           # Footer with social links
│   ├── Loader.jsx           # Loading screen
│   └── CustomCursor.jsx     # Custom animated cursor
├── pages/
│   └── Home.jsx             # Main home page
├── animations/
│   └── variants.js          # Framer Motion animation variants
├── hooks/
│   └── useScrollReveal.js   # Scroll animation hook
├── utils/
│   └── api.js               # Axios API client
├── data/
│   └── portfolioData.js     # Static portfolio data
├── assets/
│   └── profile.jpg          # Profile image
├── App.jsx                  # Main app component
├── main.jsx                 # React entry point
└── index.css                # Global styles
```

## 🎨 Color Scheme

- **Primary**: `#080B14` - Dark background
- **Accent**: `#00F5FF` - Electric cyan
- **Secondary**: `#1A2F4B` - Lighter dark shade

Customize in `tailwind.config.js`

## 📱 Responsive Breakpoints

- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

## 🔧 Environment Variables

Create `.env` in client directory:

```env
VITE_API_URL=http://localhost:5000/api
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📝 Component Documentation

### Navbar
- Fixed navigation with scroll detection
- Mobile hamburger menu
- Social media links
- Smooth hover effects

### Hero
- Animated name reveal with GSAP
- Typing effect for roles
- CTA buttons
- Scroll indicator

### About
- Profile photo with border animation
- Bio text with scroll reveal
- Statistics cards with hover effects

### Skills
- Categorized skill sections
- Animated progress bars
- Icon and proficiency levels

### Projects
- Filterable project gallery
- Project cards with 3D tilt
- Tech stack tags
- GitHub and live demo links

### Timeline
- Vertical animated timeline
- Staggered entrance animations
- Work and education items
- Pulsing timeline dots

### Contact
- Form validation
- Email integration
- Toast notifications
- Contact information display

### Footer
- Social links
- Quick navigation
- Back to top button
- Copyright info

## 🎯 Performance Tips

1. **Code Splitting** - Routes are automatically code-split by Vite
2. **Image Optimization** - Use placeholder images or compress originals
3. **Lazy Loading** - Images load on demand with IntersectionObserver
4. **CSS Optimization** - Tailwind purges unused CSS in production
5. **Asset Compression** - Vite automatically optimizes assets

## 🚀 Production Build

```bash
npm run build
```

Generates optimized files in `dist/` directory:
- Minified CSS and JavaScript
- Optimized images
- Source maps (optional)

Preview production build:
```bash
npm run preview
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Connect dist/ folder to Netlify
```

### GitHub Pages
Update `vite.config.js`:
```javascript
export default {
  base: '/repo-name/',
  // ...
}
```

## 📊 Bundle Size

- Vite optimizes bundle size automatically
- Target: < 200KB gzipped

Check bundle size:
```bash
npm run build  # See terminal output
```

## 🔍 SEO Optimization

All pages include:
- Meta descriptions
- Open Graph tags
- Structured data
- Sitemap (add if needed)

Update in `Home.jsx` Helmet component.

## 🐛 Common Issues

**Port 5173 already in use**
```bash
npm run dev -- --port 3000
```

**API calls failing**
- Check VITE_API_URL in `.env`
- Ensure backend is running on specified port
- Check browser console for CORS errors

**Animations not smooth**
- Check browser performance
- Disable some animations for low-end devices
- Use Chrome DevTools Performance tab

## 📚 Useful Resources

- [Vite Docs](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://greensock.com/gsap/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)

## 📝 Component Creation Guide

1. Create component in `src/components/`
2. Use Framer Motion for animations
3. Export as default
4. Import in parent component
5. Add to Page component

Example:
```jsx
import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';

export default function NewComponent() {
  return (
    <motion.div variants={fadeUp}>
      {/* Component content */}
    </motion.div>
  );
}
```

---

**Built with React, Vite, and Framer Motion! 🚀**
