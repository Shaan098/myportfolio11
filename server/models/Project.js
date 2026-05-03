import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
      maxlength: [100, 'Title cannot exceed 100 characters']
    },
    description: {
      type: String,
      required: [true, 'Project description is required'],
      maxlength: [500, 'Description cannot exceed 500 characters']
    },
    longDescription: {
      type: String,
      maxlength: [2000, 'Long description cannot exceed 2000 characters']
    },
    techStack: {
      type: [String],
      required: true
    },
    category: {
      type: String,
      enum: ['frontend', 'backend', 'fullstack', 'mobile'],
      default: 'fullstack'
    },
    githubUrl: {
      type: String,
      trim: true
    },
    liveUrl: {
      type: String,
      trim: true
    },
    imageUrl: {
      type: String,
      default: 'https://via.placeholder.com/400x300'
    },
    featured: {
      type: Boolean,
      default: false
    },
    order: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

export default mongoose.model('Project', projectSchema);
