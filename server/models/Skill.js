import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    icon: {
      type: String,
      default: '⚡'
    },
    level: {
      type: Number,
      min: 0,
      max: 100,
      default: 50
    },
    category: {
      type: String,
      enum: ['frontend', 'backend', 'devops', 'tools'],
      default: 'frontend'
    },
    yearsOfExperience: {
      type: Number,
      default: 1
    }
  },
  { timestamps: true }
);

export default mongoose.model('Skill', skillSchema);
