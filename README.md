# 🚀 MERN Portfolio - A Production-Grade Personal Portfolio

A stunning, fully-responsive personal portfolio website built with the MERN stack (MongoDB, Express.js, React.js, Node.js) to impress recruiters and showcase your technical skills.

## ✨ Features

- **🎨 Modern Design** - Dark theme with electric cyan accents, premium typography
- **⚡ Smooth Animations** - GSAP and Framer Motion for page transitions and scroll animations
- **📱 Fully Responsive** - Mobile-first design works on all devices
- **🎯 Interactive Hero Section** - Animated name reveal with typing effect
- **📊 Animated Skill Bars** - Visual skill progression with smooth animations
- **🗂️ Featured Projects** - Filterable project gallery with live demos and source links
- **📧 Contact Form** - Email integration with Nodemailer and validation
- **🎭 Custom Cursor** - Animated cursor followers for enhanced UX
- **⏱️ Loading Screen** - Professional animated loader
- **🔗 Social Integration** - GitHub, LinkedIn, Twitter links
- **🌙 Dark Theme** - Eye-friendly dark mode with accent colors
- **📄 Resume Download** - PDF resume download functionality
- **🔍 SEO Optimized** - React Helmet for meta tags and SEO
- **⚙️ RESTful API** - Complete backend with MongoDB integration

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library with hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **GSAP** - Advanced animation engine
- **Axios** - HTTP client
- **React Router v6** - Client-side routing
- **React Hot Toast** - Toast notifications
- **React Helmet Async** - SEO meta tags

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **Nodemailer** - Email service
- **Express Validator** - Input validation
- **Helmet** - Security headers
- **Morgan** - HTTP logging
- **Rate Limit** - API rate limiting

## 📁 Project Structure

```
mern-portfolio/
├── client/                    # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/        # React components
│   │   ├── pages/            # Page components
│   │   ├── animations/       # Animation variants
│   │   ├── hooks/            # Custom hooks
│   │   ├── utils/            # API utilities
│   │   ├── data/             # Static data
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── .env
│
├── server/                    # Express Backend
│   ├── config/               # Configuration files
│   ├── models/               # Mongoose models
│   ├── routes/               # API routes
│   ├── controllers/          # Route handlers
│   ├── middleware/           # Custom middleware
│   ├── server.js             # Entry point
│   ├── seed.js               # Database seeding
│   ├── package.json
│   └── .env
│
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- npm or yarn
- MongoDB Atlas account (free tier available)

### Installation

1. **Clone and Setup**
```bash
git clone <your-repo>
cd mern-portfolio
```

2. **Install Frontend Dependencies**
```bash
cd client
npm install
```

3. **Install Backend Dependencies**
```bash
cd ../server
npm install
```

### Environment Variables

**`client/.env`**
```env
VITE_API_URL=http://localhost:5000/api
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**`server/.env`**
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
NODE_ENV=development
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your_gmail_app_password
FRONTEND_URL=http://localhost:5173
```

### Running Locally

**Terminal 1 - Start Backend**
```bash
cd server
npm run dev
```

**Terminal 2 - Start Frontend**
```bash
cd client
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Seed Database

```bash
cd server
npm run seed
```

## 📚 Available Scripts

### Client
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Server
```bash
npm run dev      # Start with nodemon
npm start        # Start production server
npm run seed     # Seed database with sample projects
```

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Get all projects |
| GET | `/api/projects?category=frontend` | Get projects by category |
| GET | `/api/projects/:id` | Get single project |
| POST | `/api/projects` | Create project |
| PUT | `/api/projects/:id` | Update project |
| DELETE | `/api/projects/:id` | Delete project |
| POST | `/api/contact` | Send contact message |
| GET | `/api/health` | Health check |

## 🎨 Customization

### Update Your Information
- Edit `client/src/data/portfolioData.js` with your info
- Update `client/src/components/Navbar.jsx` with your name
- Replace profile image in `client/src/assets/`

### Change Color Scheme
- Edit `client/tailwind.config.js` - accent colors
- Update CSS variables in `client/src/index.css`

### Add Your Projects
- Use the admin API endpoint or seed script
- Update `projectsData` in `client/src/data/portfolioData.js`

## 📦 Building for Production

### Frontend
```bash
cd client
npm run build  # Creates dist/ folder
```

### Deploy to Vercel
```bash
npm install -g vercel
cd client
vercel --prod
```

### Backend Deployment
Deploy to Render, Railway, or Heroku following their documentation.

## 🔐 Security Considerations

- ✅ CORS configured for frontend origin only
- ✅ Rate limiting on contact form (5 requests per 15 min)
- ✅ Input validation with express-validator
- ✅ Helmet.js for security headers
- ✅ Environment variables for sensitive data
- ✅ MongoDB connection with authentication

## 🐛 Troubleshooting

**MongoDB Connection Error**
- Check MONGODB_URI in `.env`
- Whitelist your IP in MongoDB Atlas
- Verify username/password

**Email Not Sending**
- Enable "Less secure app access" or use App Passwords for Gmail
- Check EMAIL_USER and EMAIL_PASS in `.env`

**CORS Error**
- Ensure FRONTEND_URL in server `.env` matches your client URL
- Check browser console for detailed CORS error

## 📝 Checklist Before Deployment

- [ ] Replace placeholder images with your own
- [ ] Update all personal information
- [ ] Add real projects from your GitHub
- [ ] Test contact form and email
- [ ] Check mobile responsiveness
- [ ] Update resume PDF
- [ ] Run Lighthouse audit
- [ ] Test all links and buttons
- [ ] Push code to GitHub
- [ ] Deploy frontend and backend

## 📄 License

MIT License - feel free to use this for your portfolio!

## 🤝 Contributing

Pull requests are welcome! Feel free to fork and submit improvements.

## 📧 Support

Have questions? Feel free to reach out!

---

**Built with ❤️ to land your dream dev job! 🚀**
