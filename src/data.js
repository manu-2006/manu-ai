/* Portfolio content and personal details. Photos are stored in public/img. */

export const profile = {
  name: 'Manu',
  full: 'Manu Kumar P',
  role: 'Software Developer & AI Builder',
  location: 'Bengaluru, Karnataka, India',
  email: 'its.manukumar13@gmail.com',
  intro: 'I build thoughtful web experiences and practical AI-powered products, from polished interfaces to working full-stack applications.',
  github: 'https://github.com/manu-2006',
  linkedin: 'https://www.linkedin.com/in/manu-kumar-p',
  instagram: 'https://www.instagram.com/im_._manu',
  resume: '',
  avatar: 'img/faces/smile.jpg',
}

export const heroCounts = [
  { value: '5+', label: 'Projects & products' },
  { value: '3+', label: 'Client projects' },
  { value: '3', label: 'Languages spoken' },
]

export const about = {
  photos: ['img/photos/portrait-tilt.jpg', 'img/photos/portrait-profile.jpg', 'img/photos/portrait-seated.jpg', 'img/photos/portrait-smile.jpg'],
  roles: ['Software Developer', 'AI Builder', 'Web Developer', 'Product Maker'],
  paragraphs: [
    "Hi, I’m Manu Kumar P, a software developer and AI builder based in Bengaluru, India. I enjoy turning ideas into useful, well-designed digital products.",
    'I’m currently pursuing my MCA after completing my BCA at ISBR College. Alongside my studies, I build web applications, explore AI/ML, and develop digital products for real-world problems.',
    'My work spans frontend development, Python-based applications, AI/ML experiments, and websites for clients. I’m especially interested in building products that solve real problems and feel great to use.',
  ],
  stats: [
    { value: 'MCA', label: 'Currently pursuing' },
    { value: 'BCA', label: 'Degree completed' },
    { value: 'React', label: 'Frontend development' },
    { value: 'Python', label: 'AI & backend projects' },
    { value: 'India', label: 'Based in Bengaluru' },
  ],
}

export const projects = [
  {
    title: 'AI Digital Twin Hacker', tag: 'AI · Security research', visual: 'gauge',
    text: 'A web security analysis project that scans URLs, identifies potential weaknesses, estimates attack risk, and offers AI-assisted recommendations.',
    tech: ['Python', 'Flask', 'Chart.js', 'Security analysis'],
    link: 'https://github.com/manu-2006', color: '#FFE5D9',
  },
  {
    title: 'AgriVision', tag: 'AI · Agriculture', visual: 'heatmap',
    text: 'A plant disease detection project exploring image classification with TensorFlow to help identify plant health issues.',
    tech: ['Python', 'TensorFlow', 'Computer Vision'],
    link: 'https://github.com/manu-2006', color: '#FFD9CC',
  },
  {
    title: 'LayerCraft', tag: 'AI · Creative tools', visual: 'outfit',
    text: 'An AI-powered poster editor concept focused on converting poster images into editable layers while preserving Kannada and other Indian-language text.',
    tech: ['React', 'AI/ML', 'OCR', 'Design tools'],
    link: 'https://github.com/manu-2006/kannada-poster-studio', color: '#FFEDE5',
  },
  {
    title: 'SECMINBER', tag: 'Product concept · SaaS', visual: 'gauge',
    text: 'A privacy-first personal memory and reminder product concept designed to turn natural language into useful, structured memories.',
    tech: ['SaaS', 'Product design', 'AI'],
    link: 'https://github.com/manu-2006', color: '#FFE5D9',
  },
  {
    title: 'Client Websites', tag: 'Web development', visual: 'heatmap',
    text: 'Designing, building, and maintaining responsive websites and digital experiences for local clients and organizations.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Supabase'],
    link: 'https://github.com/manu-2006', color: '#FFD9CC',
  },
]

export const journey = [
  { year: '2026', title: 'BCA Completed', org: 'ISBR College', text: 'Completed undergraduate studies and continued building practical software and web projects.', photo: 'img/photos/portrait-laptop.jpg', note: 'building what’s next' },
  { year: 'Present', title: 'MCA Student', org: 'Postgraduate studies', text: 'Currently pursuing a Master of Computer Applications while continuing to build software, AI projects, and client websites.', photo: 'img/photos/portrait-smile.jpg', note: 'learning and building' },
  { year: 'Present', title: 'Software & Web Projects', org: 'Independent development', text: 'Building AI product concepts, full-stack applications, and websites for clients alongside my MCA studies.', photo: 'img/photos/portrait-laptop.jpg', note: 'ideas into products' },
  { year: 'Ongoing', title: 'AI & Product Exploration', org: 'Independent projects', text: 'Exploring AI-assisted creative tools, computer vision, and useful SaaS products.', photo: 'img/photos/portrait-look.jpg', note: 'always learning' },
]

export const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Tailwind CSS', 'Python', 'Flask',
  'C', 'C++', 'Java', 'TensorFlow', 'OpenCV', 'FastAPI', 'Supabase', 'Git',
  'GitHub', 'Vercel', 'Responsive Design', 'AI/ML', 'Computer Vision', 'SEO',
]

export const scoreboard = []
export const certifications = []
