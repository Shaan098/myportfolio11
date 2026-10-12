// Portfolio content is kept in one place so it stays aligned with the CV.

export const skills = [
  { name: 'C++', icon: 'C++', category: 'languages' },
  { name: 'JavaScript', icon: 'JS', category: 'languages' },
  { name: 'C', icon: 'C', category: 'languages' },
  { name: 'PHP', icon: 'PHP', category: 'languages' },
  { name: 'Python', icon: 'PY', category: 'languages' },
  { name: 'HTML & CSS', icon: '</>', category: 'frameworks' },
  { name: 'Bootstrap', icon: 'B', category: 'frameworks' },
  { name: 'Node.js', icon: 'N', category: 'frameworks' },
  { name: 'Express.js', icon: 'E', category: 'frameworks' },
  { name: 'React.js', icon: 'R', category: 'frameworks' },
  { name: 'Django', icon: 'D', category: 'frameworks' },
  { name: 'Laravel', icon: 'L', category: 'frameworks' },
  { name: 'MySQL', icon: 'SQL', category: 'tools' },
  { name: 'MongoDB', icon: 'DB', category: 'tools' },
  { name: 'VS Code', icon: 'VS', category: 'tools' },
  { name: 'Thunder Client', icon: 'TC', category: 'tools' },
  { name: 'MS Office', icon: 'MS', category: 'tools' },
  { name: 'Problem-Solving', icon: 'PS', category: 'soft skills' },
  { name: 'Teamwork', icon: 'TW', category: 'soft skills' },
  { name: 'Adaptability', icon: 'A', category: 'soft skills' },
];

export const timeline = [
  {
    id: 1,
    year: 'Sep 2025',
    title: 'Software Engineering Job Simulation',
    company: 'Electronic Arts (Forage)',
    description: 'Proposed a College Football gameplay feature, designed class diagrams, wrote OOP-based C++ headers, fixed legacy code bugs, and improved performance with efficient data structures.',
    type: 'work'
  },
  {
    id: 2,
    year: 'Sep 2025',
    title: 'Solutions Architecture Job Simulation',
    company: 'AWS APAC (Forage)',
    description: 'Designed a scalable, highly available AWS Elastic Beanstalk hosting architecture and explained its cost, trade-offs, and load-balancing strategy.',
    type: 'work'
  },
  {
    id: 3,
    year: 'Aug 2023 - Present',
    title: 'Bachelor of Technology - Computer Science and Engineering',
    company: 'Lovely Professional University, India',
    description: 'CGPA: 6.5',
    type: 'education'
  },
  {
    id: 4,
    year: 'Apr 2022 - Mar 2023',
    title: 'Intermediate',
    company: 'SS Memorial University, Ranchi, Jharkhand',
    description: 'Percentage: 62%',
    type: 'education'
  },
  {
    id: 5,
    year: 'Apr 2020 - Mar 2021',
    title: 'Matriculation',
    company: 'Central Academy School, Ranchi, Jharkhand',
    description: 'Percentage: 67%',
    type: 'education'
  },
];

export const certificates = [
  {
    title: 'Elite-certified in Cloud Computing',
    issuer: 'NPTEL, IIT Kharagpur',
    date: 'Oct 2025'
  },
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified Developer Professional',
    issuer: 'Oracle',
    date: 'Sep 2025'
  },
];

export const achievements = [
  'Achieved multi-language proficiency badges on HackerRank (Feb 2026).',
  'Maintained a consistent LeetCode coding streak with a 77.78% acceptance rate (Feb 2026).',
  'Solved 175+ LeetCode problems (Jan 2026).',
];

export const socialLinks = {
  github: 'https://github.com/Shaan098',
  linkedin: 'https://linkedin.com/in/shaan-saurav',
  email: 'shaansaurav633@gmail.com',
  phone: '+91 6204566381'
};

export const projectsData = [
  {
    id: 'inkwell',
    title: 'Inkwell - Real-Time Collaborative Editor',
    description: 'Real-time collaborative text editor with live cursors, presence, offline editing, and automatic reconnection.',
    longDescription: 'Built a real-time collaborative text editor where several users can edit one document at once. Implemented a custom RGA CRDT so concurrent edits merge identically on every client, with offline editing, resend after reconnect, and a heartbeat that repairs dropped messages. Verified correctness with randomized concurrent-editing tests and a live end-to-end check that replays the same operation log in Python and JavaScript.',
    techStack: ['React.js', 'Django', 'Django Channels', 'WebSockets', 'CRDT'],
    category: 'fullstack',
    imageUrl: '/project-inkwell.svg',
    featured: true,
    order: 1
  },
  {
    id: 'sprintdesk',
    title: 'SprintDesk - Sprint Board & Bug Tracker',
    description: 'Full-stack sprint planning and bug tracking app with a drag-and-drop Kanban board.',
    longDescription: 'Built a team sprint planning and bug tracking app where projects, sprints, tasks, and bugs are managed from a drag-and-drop Kanban board. Designed RESTful APIs with JWT authentication and role-based access for admins and developers, enforcing one active sprint per project and one-step ticket status moves. Added ticket assignment, priorities, filters, comments, a sprint progress bar, and Jest unit tests for board workflow rules.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    category: 'fullstack',
    imageUrl: '/project-sprintdesk.svg',
    featured: true,
    order: 2
  },
  {
    id: 'codeforge',
    title: 'CodeForge - Online Judge Platform',
    description: 'Online judge platform with secure authentication, code execution, test evaluation, and progress tracking.',
    longDescription: 'Developed a full-stack online judge platform with secure JWT authentication and a responsive React.js interface. Built RESTful APIs for coding problems, code submissions, hidden test case evaluation, and user progress tracking. Implemented automated code execution and result evaluation with runtime and memory metrics using a modular backend architecture and MongoDB.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    category: 'fullstack',
    imageUrl: '/project-codeforge.svg',
    featured: true,
    order: 3
  },
];

export const stats = [
  { label: 'Projects', value: '3' },
  { label: 'LeetCode Problems', value: '175+' },
  { label: 'Certifications', value: '2' },
  { label: 'LeetCode Acceptance', value: '77.78%' },
];
