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



### Backend Deployment
Deploy to Render, Railway, or Heroku following their documentation.

## 🔐 Security Considerations

- ✅ CORS configured for frontend origin only
- ✅ Rate limiting on contact form (5 requests per 15 min)
- ✅ Input validation with express-validator
- ✅ Helmet.js for security headers
- ✅ Environment variables for sensitive data
- ✅ MongoDB connection with authentication



**Built with ❤️ to land your dream dev job! 🚀**
