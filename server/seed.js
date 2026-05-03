import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Project from './models/Project.js';
import Skill from './models/Skill.js';

dotenv.config();

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with cart, auth, and Stripe payments.',
    longDescription: 'Built with React, Node, MongoDB Atlas. Features product search, dynamic filtering, shopping cart, Stripe checkout integration, JWT authentication, admin panel for inventory management, and order tracking.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'JWT', 'Tailwind CSS'],
    category: 'fullstack',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    liveUrl: 'https://your-ecommerce.vercel.app',
    imageUrl: 'https://via.placeholder.com/400x300?text=E-Commerce',
    featured: true,
    order: 1
  },
  {
    title: 'Real-Time Chat Application',
    description: 'Live messaging with Socket.io, rooms, and file sharing.',
    longDescription: 'Real-time communication platform using Socket.io for instant messaging. Features include private/group chat, typing indicators, online status, file sharing, and message history stored in MongoDB.',
    techStack: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'JWT', 'Express'],
    category: 'fullstack',
    githubUrl: 'https://github.com/yourusername/chatapp',
    liveUrl: 'https://your-chat.vercel.app',
    imageUrl: 'https://via.placeholder.com/400x300?text=Chat+App',
    featured: true,
    order: 2
  },
  {
    title: 'AI Resume Builder',
    description: 'GPT-powered resume generator with PDF export and ATS scoring.',
    longDescription: 'Intelligent resume builder powered by AI. Features template selection, auto-suggestions, real-time PDF preview, ATS score calculation, and one-click download in multiple formats.',
    techStack: ['React', 'OpenAI API', 'Node.js', 'MongoDB', 'PDF-lib', 'Tailwind'],
    category: 'fullstack',
    githubUrl: 'https://github.com/yourusername/ai-resume',
    liveUrl: 'https://your-resume.vercel.app',
    imageUrl: 'https://via.placeholder.com/400x300?text=Resume+Builder',
    featured: true,
    order: 3
  },
  {
    title: 'Task Management Dashboard',
    description: 'Collaborative task management with real-time updates and team features.',
    techStack: ['React', 'Redux', 'Node.js', 'MongoDB', 'Socket.io'],
    category: 'fullstack',
    githubUrl: 'https://github.com/yourusername/taskmanager',
    imageUrl: 'https://via.placeholder.com/400x300?text=Task+Manager',
    featured: false,
    order: 4
  },
  {
    title: 'Weather Forecasting App',
    description: 'Real-time weather data visualization with advanced forecasting.',
    techStack: ['React', 'Weather API', 'Chart.js', 'Tailwind CSS'],
    category: 'frontend',
    githubUrl: 'https://github.com/yourusername/weather-app',
    liveUrl: 'https://your-weather-app.vercel.app',
    imageUrl: 'https://via.placeholder.com/400x300?text=Weather+App',
    featured: false,
    order: 5
  }
];

const skills = [
  { name: 'React.js', icon: '⚛', level: 90, category: 'frontend', yearsOfExperience: 3 },
  { name: 'Node.js', icon: '🟩', level: 85, category: 'backend', yearsOfExperience: 2 },
  { name: 'MongoDB', icon: '🍃', level: 80, category: 'backend', yearsOfExperience: 2 },
  { name: 'Express.js', icon: '🚂', level: 82, category: 'backend', yearsOfExperience: 2 },
  { name: 'Tailwind CSS', icon: '🎨', level: 88, category: 'frontend', yearsOfExperience: 2 },
  { name: 'JavaScript', icon: '⭐', level: 90, category: 'frontend', yearsOfExperience: 3 },
  { name: 'Git & GitHub', icon: '🐙', level: 85, category: 'tools', yearsOfExperience: 3 },
  { name: 'Docker', icon: '🐳', level: 65, category: 'devops', yearsOfExperience: 1 },
  { name: 'AWS', icon: '☁', level: 70, category: 'devops', yearsOfExperience: 1 },
  { name: 'TypeScript', icon: '🔷', level: 75, category: 'frontend', yearsOfExperience: 1 }
];

const seedDB = async () => {
  try {
    await connectDB();

    // Clear existing data
    await Project.deleteMany({});
    await Skill.deleteMany({});

    // Insert projects
    await Project.insertMany(projects);
    console.log(`✅ ${projects.length} projects seeded successfully`);

    // Insert skills
    await Skill.insertMany(skills);
    console.log(`✅ ${skills.length} skills seeded successfully`);

    console.log('✅ Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
};

seedDB();
