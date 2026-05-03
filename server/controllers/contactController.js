import Message from '../models/Message.js';
import nodemailer from 'nodemailer';
import { validationResult } from 'express-validator';

// Send message and email
export const sendMessage = async (req, res, next) => {
  try {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation errors',
        errors: errors.array()
      });
    }

    const { name, email, message } = req.body;

    // Save to database
    const newMessage = await Message.create({
      name,
      email,
      message
    });

    // Send email to portfolio owner
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio Contact Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px;">
            <h2 style="color: #00F5FF; margin-bottom: 20px;">New Contact Message</h2>
            <div style="margin-bottom: 15px;">
              <p style="color: #666; margin: 0;">
                <strong style="color: #333;">Name:</strong> ${name}
              </p>
            </div>
            <div style="margin-bottom: 15px;">
              <p style="color: #666; margin: 0;">
                <strong style="color: #333;">Email:</strong> <a href="mailto:${email}">${email}</a>
              </p>
            </div>
            <div style="margin-bottom: 15px;">
              <p style="color: #666; margin: 0;">
                <strong style="color: #333;">Message:</strong>
              </p>
              <p style="color: #666; white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
            <p style="color: #999; font-size: 12px; margin: 0;">
              Sent via Portfolio Contact Form
            </p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    // Also send confirmation to visitor (optional)
    const confirmationMail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We received your message!',
      html: `
        <div style="font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px;">
            <h2 style="color: #00F5FF;">Thank You!</h2>
            <p style="color: #333;">Hi ${name},</p>
            <p style="color: #666; line-height: 1.6;">
              Thanks for reaching out! I've received your message and will get back to you as soon as possible.
            </p>
            <p style="color: #666;">Best regards,<br/>Your Name</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(confirmationMail);

    res.status(201).json({
      success: true,
      message: 'Message sent successfully! I\'ll respond soon.',
      data: newMessage
    });
  } catch (error) {
    console.error('Contact form error:', error);
    next(error);
  }
};

// Get all messages (admin only)
export const getAllMessages = async (req, res, next) => {
  try {
    const messages = await Message.find()
      .sort({ createdAt: -1 })
      .lean();

    res.json({
      success: true,
      count: messages.length,
      data: messages
    });
  } catch (error) {
    next(error);
  }
};

// Mark message as read
export const markAsRead = async (req, res, next) => {
  try {
    const message = await Message.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );

    if (!message) {
      return res.status(404).json({
        success: false,
        message: 'Message not found'
      });
    }

    res.json({
      success: true,
      message: 'Message marked as read',
      data: message
    });
  } catch (error) {
    next(error);
  }
};

// Delete message
export const deleteMessage = async (req, res, next) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);

    if (!message) {
      return res.status(404).json({
        success: false,
        message: 'Message not found'
      });
    }

    res.json({
      success: true,
      message: 'Message deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
