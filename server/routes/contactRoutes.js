import express from 'express';
import { body } from 'express-validator';
import {
  sendMessage,
  getAllMessages,
  markAsRead,
  deleteMessage
} from '../controllers/contactController.js';

const router = express.Router();

// Validation middleware
const messageValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email address'),
  body('message')
    .trim()
    .isLength({ min: 10, max: 5000 })
    .withMessage('Message must be between 10 and 5000 characters')
];

// Public routes
router.post('/', messageValidation, sendMessage);

// Admin routes (can be protected with authentication middleware)
router.get('/', getAllMessages);
router.put('/:id/read', markAsRead);
router.delete('/:id', deleteMessage);

export default router;
