# 🔧 MERN Portfolio - Server (Node.js + Express)

A robust backend API for a personal portfolio website with MongoDB integration, email functionality, and comprehensive error handling.

## 📋 Features

- 🚀 **Express.js** - Fast and minimalist web framework
- 🗄️ **MongoDB + Mongoose** - NoSQL database with ODM
- 📧 **Nodemailer** - Email service integration
- 🔐 **Helmet** - Security headers middleware
- 📊 **Morgan** - HTTP request logging
- ⚡ **Rate Limiting** - Prevent abuse and DDoS attacks
- ✅ **Input Validation** - Express Validator
- 🛡️ **CORS** - Cross-origin resource sharing
- 📝 **Error Handling** - Global error handler middleware
- 🌍 **RESTful API** - Standard HTTP methods

## 🛠️ Installation

```bash
cd server
npm install
```

## 📦 Dependencies

```json
{
  "express": "^4.18.2",
  "mongoose": "^7.5.0",
  "dotenv": "^16.3.1",
  "cors": "^2.8.5",
  "nodemailer": "^6.9.6",
  "express-validator": "^7.0.0",
  "helmet": "^7.0.0",
  "morgan": "^1.10.0",
  "express-rate-limit": "^7.0.0"
}
```

## 🚀 Scripts

```bash
npm run dev       # Start with nodemon (auto-reload)
npm start         # Start production server
npm run seed      # Seed database with sample data
```

## 📁 Project Structure

```
server/
├── config/
│   └── db.js                  # MongoDB connection
├── models/
│   ├── Project.js             # Project schema
│   ├── Message.js             # Contact message schema
│   └── Skill.js               # Skill schema
├── routes/
│   ├── projectRoutes.js       # Project endpoints
│   └── contactRoutes.js       # Contact endpoints
├── controllers/
│   ├── projectController.js   # Project handlers
│   └── contactController.js   # Contact handlers
├── middleware/
│   └── errorHandler.js        # Global error handler
├── server.js                  # Main entry point
├── seed.js                    # Database seeding script
├── .env                       # Environment variables
├── .gitignore
└── package.json
```

## 🔧 Environment Variables

Create `.env` file:

```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
NODE_ENV=development
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your_gmail_app_password
FRONTEND_URL=http://localhost:5173
JWT_SECRET=your_jwt_secret_key
```

### Getting MongoDB URI
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create free account
3. Create cluster
4. Get connection string
5. Replace username and password

### Getting Gmail App Password
1. Enable 2-Factor Authentication in Gmail
2. Go to [App Passwords](https://myaccount.google.com/apppasswords)
3. Generate app password for "Mail"
4. Use generated password in `.env`

## 🌐 API Endpoints

### Projects

```
GET    /api/projects              - Get all projects
GET    /api/projects?category=fullstack - Filter by category
GET    /api/projects/:id          - Get single project
POST   /api/projects              - Create project
PUT    /api/projects/:id          - Update project
DELETE /api/projects/:id          - Delete project
```

### Contact

```
POST   /api/contact               - Submit contact form
GET    /api/contact               - Get all messages (admin)
PUT    /api/contact/:id/read      - Mark message as read
DELETE /api/contact/:id           - Delete message
```

### Health

```
GET    /api/health                - API health check
```

## 📊 Database Models

### Project
```javascript
{
  title: String (required),
  description: String (required),
  longDescription: String,
  techStack: [String],
  category: String (frontend|backend|fullstack|mobile),
  githubUrl: String,
  liveUrl: String,
  imageUrl: String,
  featured: Boolean,
  order: Number,
  timestamps: true
}
```

### Message
```javascript
{
  name: String (required),
  email: String (required, email validation),
  message: String (required, 10-5000 chars),
  read: Boolean,
  replied: Boolean,
  timestamps: true
}
```

### Skill
```javascript
{
  name: String (required, unique),
  icon: String,
  level: Number (0-100),
  category: String (frontend|backend|devops|tools),
  yearsOfExperience: Number,
  timestamps: true
}
```

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Create `.env` with your MongoDB URI and email credentials

### 3. Seed Database (Optional)
```bash
npm run seed
```

This adds sample projects and skills to MongoDB.

### 4. Start Server
```bash
npm run dev
```

Server runs on `http://localhost:5000`

### 5. Test API
```bash
# Health check
curl http://localhost:5000/api/health

# Get all projects
curl http://localhost:5000/api/projects

# Send test message
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, this is a test message!"
  }'
```

## 🔐 Security Features

### CORS
- Restricted to frontend origin only
- Configurable per environment

### Rate Limiting
- General API: 100 requests per 15 minutes per IP
- Contact form: 5 requests per 15 minutes per IP

### Helmet
- Sets secure HTTP headers
- Prevents common vulnerabilities

### Input Validation
- Email format validation
- String length validation
- Required field checks

### Error Handling
- Global error handler middleware
- Proper HTTP status codes
- Detailed error messages (dev only)

## 📧 Email Configuration

### Gmail SMTP Setup
1. Enable 2FA in Gmail
2. Generate App Password
3. Use format: `yourgmail@gmail.com` and `app_password`

### Alternative Email Services
- SendGrid
- AWS SES
- Mailgun
- Microsoft Exchange

Update `nodemailer.createTransport()` accordingly.

## 🗄️ MongoDB Best Practices

1. **Indexes** - Add indexes to frequently queried fields
2. **Validation** - Schema validation at database level
3. **Backups** - Enable automated backups
4. **Security** - Use strong passwords and IP whitelist

## 🧪 API Testing

### Using cURL
```bash
# Get projects
curl http://localhost:5000/api/projects

# Send message
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Hello"}'
```

### Using Postman
1. Import endpoints
2. Set environment variables
3. Run requests
4. Check responses

### Using Insomnia
Similar to Postman, import collection and test.

## 🚀 Deployment

### Environment Setup
```env
NODE_ENV=production
PORT=5000
# Use production MongoDB URI
```

### Hosting Options

#### Render
1. Connect GitHub repo
2. Set environment variables
3. Deploy (auto-deploys on push)

#### Railway
1. Connect GitHub
2. Configure environment
3. Deploy

#### Heroku
```bash
git push heroku main
```

#### AWS EC2
1. Launch instance
2. Install Node.js
3. Clone repo and deploy

## 📈 Monitoring

### Logs
- Morgan logs all HTTP requests
- Check console for errors

### Performance
- Monitor API response times
- Check MongoDB query performance
- Use MongoDB Atlas monitoring

## 🐛 Troubleshooting

**MongoDB Connection Failed**
- Check MONGODB_URI
- Verify IP whitelist in Atlas
- Ensure credentials are correct

**Email Not Sending**
- Verify EMAIL_USER and EMAIL_PASS
- Check Gmail App Password
- Review Nodemailer console output

**CORS Error**
- Ensure FRONTEND_URL matches client origin
- Check CORS middleware configuration

**Rate Limit Hit**
- Wait 15 minutes or change limit in code
- Different IP has own limit

## 📚 Useful Resources

- [Express.js Docs](https://expressjs.com/)
- [MongoDB Docs](https://docs.mongodb.com/)
- [Mongoose Docs](https://mongoosejs.com/)
- [Nodemailer Guide](https://nodemailer.com/about/)
- [REST API Best Practices](https://restfulapi.net/)

## 📝 Adding New Endpoints

1. Create model in `models/`
2. Create controller in `controllers/`
3. Create routes in `routes/`
4. Import routes in `server.js`
5. Add validation if needed

Example:
```javascript
// routes/newRoutes.js
import express from 'express';
import { getItems } from '../controllers/newController.js';

const router = express.Router();
router.get('/', getItems);
export default router;

// server.js - add this line
import newRoutes from './routes/newRoutes.js';
app.use('/api/new', newRoutes);
```

## 🔄 Database Migration

```bash
# Backup database
mongodump --uri "mongodb+srv://..."

# Restore database
mongorestore --uri "mongodb+srv://..." dump/
```

---

**Built with Express, Node.js, and MongoDB! 🚀**
