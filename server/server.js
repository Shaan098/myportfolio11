import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import projectRoutes from './routes/projectRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import errorHandler from './middleware/errorHandler.js';

// Load environment variables
dotenv.config();

// Connect to database
await connectDB();

const app = express();

// ─── Security Middleware ─────────────────────
app.use(helmet());

// ─── Logging Middleware ─────────────────────
app.use(morgan('dev'));

// ─── CORS Configuration ─────────────────────
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

// ─── Body Parser Middleware ─────────────────
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// ─── Rate Limiting ──────────────────────────
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 contact form submissions per 15 minutes
  skipSuccessfulRequests: true
});

app.use('/api/', generalLimiter);

// ─── Routes ─────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactLimiter, contactRoutes);

// ─── 404 Handler ────────────────────────────
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    path: req.path
  });
});

// ─── Error Handling Middleware ──────────────
app.use(errorHandler);

// ─── Start Server ───────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`
╔══════════════════════════════════════╗
║   🚀 Portfolio API Server Running    ║
║   Port: ${PORT}                          ║
║   Env: ${process.env.NODE_ENV || 'development'}          ║
╚══════════════════════════════════════╝
  `);
});

// ─── Graceful Shutdown ──────────────────────
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully...');
  process.exit(0);
});
