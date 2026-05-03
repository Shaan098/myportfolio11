// Static portfolio data - fallback if API fails

export const skills = [
  { name: 'React.js',      icon: '⚛',  level: 90, category: 'frontend' },
  { name: 'JavaScript',    icon: '⭐', level: 90, category: 'frontend' },
  { name: 'HTML & CSS',    icon: '🎨', level: 88, category: 'frontend' },
  { name: 'Bootstrap',     icon: '🎯', level: 85, category: 'frontend' },
  { name: 'Node.js',       icon: '🟩', level: 88, category: 'backend'  },
  { name: 'Express.js',    icon: '🚂', level: 85, category: 'backend'  },
  { name: 'MongoDB',       icon: '🍃', level: 85, category: 'backend'  },
  { name: 'C++',           icon: '📘', level: 80, category: 'languages' },
  { name: 'Git & GitHub',  icon: '🐙', level: 88, category: 'tools'    },
  { name: 'AWS',           icon: '☁',  level: 82, category: 'devops'   },
  { name: 'JWT',           icon: '🔐', level: 85, category: 'backend'  },
  { name: 'MySQL',         icon: '🗄',  level: 80, category: 'tools'    },
];

export const timeline = [
  {
    id: 1,
    year: 'Sep 2025',
    title: 'Software Engineering Virtual Experience',
    company: 'Electronic Arts (FORAGE)',
    description: 'Designed C++ OOP class diagrams, documented gameplay features, and optimized legacy code performance.',
    type: 'work'
  },
  {
    id: 2,
    year: 'Sep 2025',
    title: 'Solutions Architecture Virtual Experience',
    company: 'AWS APAC (FORAGE)',
    description: 'Built scalable AWS hosting architecture with load-balancing strategies and cost optimization.',
    type: 'work'
  },
  {
    id: 3,
    year: 'Aug 2023 - Present',
    title: 'B.Tech Computer Science & Engineering',
    company: 'Lovely Professional University, Punjab',
    description: 'CGPA: 6.2 | Focus on web technologies, cloud computing, and full-stack development.',
    type: 'education'
  },
  {
    id: 4,
    year: 'Apr 2022 - Mar 2023',
    title: 'Intermediate',
    company: 'SS Memorial University, Ranchi',
    description: 'Percentage: 62%',
    type: 'education'
  },
];

export const socialLinks = {
  github:   'https://github.com/Shaan098',
  linkedin: 'https://linkedin.com/in/shaan-saurav',
  email:    'shaansaurav633@gmail.com',
  phone:    '+91 6204566381'
};

export const projectsData = [
  {
    id: '1',
    title: 'Online Multi-Language Compiler',
    description: 'Full-stack web compiler supporting C, C++, Java, and JavaScript execution with real-time output.',
    longDescription: 'Engineered a feature-rich online code compiler supporting multiple programming languages. Implemented secure backend with controlled process handling, real-time code editor with syntax highlighting, and dynamic output management. Users can compile and execute code instantly with safe I/O handling.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Code Execution APIs'],
    category: 'fullstack',
    githubUrl: 'https://github.com/Shaan098/online-compiler',
    liveUrl: 'https://compiler-client-9wha.vercel.app/',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
    featured: true,
    order: 1
  },
  {
    id: '2',
    title: 'AR Educational Content Viewer',
    description: 'Interactive AR platform for visualizing and manipulating 3D educational models.',
    longDescription: 'Created an AR-enabled web platform leveraging React, Node.js, and MongoDB for seamless 3D model interaction. Features include interactive 3D rotation, zooming, AR placement on supported devices, responsive UI with dark mode, and smooth animations for enhanced learning experience.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Three.js', 'AR.js'],
    category: 'fullstack',
    githubUrl: 'https://github.com/Shaan098/AR-viewver',
    imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/60fa55b0bb0508f4ac956653/0x0.jpg?format=jpg&height=300&width=400&fit=bounds',
    featured: true,
    order: 2
  },
  {
    id: '3',
    title: 'Client & Patient Appointment System',
    description: 'Full-stack scheduling platform with JWT auth, role-based access, and appointment tracking.',
    longDescription: 'Developed a comprehensive appointment scheduling system for efficient booking management. Implemented JWT authentication, role-based authorization (admin/user), responsive dashboard with scheduling controls, real-time availability tracking, and appointment history management.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    category: 'fullstack',
    githubUrl: 'https://github.com/Shaan098/client-and-patient-appointment',
    imageUrl: 'https://www.bookingpressplugin.com/wp-content/uploads/2023/12/addons_page.webp',
    featured: true,
    order: 3
  },
];

export const stats = [
  { label: 'Projects Completed', value: '10+', icon: '🚀' },
  { label: 'LeetCode Problems', value: '150+', icon: '📊' },
  { label: 'Certifications', value: '2+', icon: '🏆' },
  { label: 'GitHub Contributions', value: '500+', icon: '📈' },
];
