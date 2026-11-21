/* Portfolio content and personal details. Photos are stored in public/img. */

export const profile = {
  name: 'Manu',
  full: 'Manu Kumar P',
  role: 'Student & Technology Enthusiast',
  location: 'Bengaluru, Karnataka, India',
  email: 'its.manukumar13@gmail.com',
  intro: 'I enjoy exploring technology and building practical projects with AI, software, and web development.',
  website: 'https://manu-ai-psi.vercel.app/',
  github: 'https://github.com/manu-2006',
  linkedin: 'https://www.linkedin.com/in/manu-kumar-p',
  instagram: 'https://www.instagram.com/im_._manu',
  resume: '',
  avatar: 'img/faces/smile.jpg',
}

export const heroCounts = [
  { value: 'AI', label: 'Technology interests' },
  { value: 'Web', label: 'Things I explore' },
  { value: 'Build', label: 'Learn by doing' },
]

export const about = {
  photos: ['img/photos/portrait-tilt.jpg', 'img/photos/portrait-profile.jpg', 'img/photos/portrait-seated.jpg', 'img/photos/portrait-smile.jpg'],
  roles: ['Technology Enthusiast', 'AI Explorer', 'Web Projects', 'Always Learning'],
  paragraphs: [
    "Hi, I’m Manu Kumar P, a student based in Bengaluru, India. I enjoy learning about technology and understanding how digital products work.",
    'I explore software, artificial intelligence, web development, and computer vision through hands-on projects and continuous learning.',
    'I like turning what I learn into practical experiments, improving step by step, and sharing the work through my projects.',
  ],
  stats: [
    { value: 'Student', label: 'Learning every day' },
    { value: 'AI & ML', label: 'Areas of interest' },
    { value: 'Web', label: 'Building and exploring' },
    { value: 'India', label: 'Based in Bengaluru' },
  ],
}

export const projects = [
  {
    title: 'AI Digital Twin Hacker', tag: 'Web · Security learning', visual: 'gauge',
    text: 'An educational web-security analysis project with website scanning, risk scoring, and security recommendations.',
    tech: ['Python', 'Flask', 'JavaScript', 'Chart.js'],
    link: 'https://github.com/manu-2006/AI-Digital-Twin-Hacker', color: '#FFE5D9',
  },
  {
    title: 'AgriVision', tag: 'AI · Computer vision', visual: 'heatmap',
    text: 'A plant-disease detection project that uses image classification to analyze leaf images and display prediction results.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
    link: 'https://github.com/manu-2006/Agrivision', color: '#FFD9CC',
  },
  {
    title: 'LayerCraft', tag: 'Creative technology · Exploration', visual: 'outfit',
    text: 'An early-stage concept exploring how poster images could be separated into editable layers while retaining Kannada and other Indian-language text.',
    tech: ['AI', 'OCR', 'Computer Vision', 'Design tools'],
    link: 'https://github.com/manu-2006', color: '#FFEDE5',
  },
]

export const journey = [
  { year: 'Present', title: 'Student', org: 'Learning and development', text: 'Building knowledge through study, practice, and hands-on technology projects.', photo: 'img/photos/portrait-laptop.jpg', note: 'learning and growing' },
  { year: 'Ongoing', title: 'Technology Projects', org: 'Personal projects', text: 'Exploring web applications, AI experiments, and practical software ideas.', photo: 'img/photos/portrait-smile.jpg', note: 'learn by building' },
  { year: 'Ongoing', title: 'AI & Computer Vision', org: 'Continuous exploration', text: 'Learning more about machine learning, image processing, and useful applications of AI.', photo: 'img/photos/portrait-look.jpg', note: 'curious by nature' },
]

export const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Tailwind CSS', 'Python', 'Flask',
  'C', 'C++', 'Java', 'TensorFlow', 'OpenCV', 'FastAPI', 'Supabase', 'Git',
  'GitHub', 'Vercel', 'Responsive Design', 'AI/ML', 'Computer Vision', 'SEO',
]

export const scoreboard = []
export const certifications = []
