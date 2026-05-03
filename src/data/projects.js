import findrVid from '../findr.mp4';
import meowVid from '../meowmap.mp4';
import modelVid from '../mlmodel.mp4';
import graphicsVid from '../graphics.mp4';
import { insidrAppStore } from './experience';

export const projects = [
  {
    id: 'findr',
    title: 'Findr',
    description: 'A social media app developed in native iOS with Firebase backend',
    longDescription: 'Developed a social media app in native iOS with a team of two. Heavily involved in the UI design. Created the backend with Firebase. Directed refactoring, meetings, and code reviews. Led the App Store approval process.',
    category: 'iOS',
    techStack: ['Swift', 'Firebase', 'UIKit', 'iOS'],
    media: {
      thumbnail: '#667eea', // Placeholder color - purple gradient
      image: null, // Full image for expanded view
      video: findrVid,
      screenshots: [],
      appStoreUrl: null, // Add when available
      githubUrl: null, // Add when available
      demoUrl: null,
    },
    challenges: [
      'Coordinating development between two team members while maintaining code quality',
      'Designing and implementing a scalable Firebase backend architecture',
      'Navigating the App Store approval process and meeting all requirements',
      'Balancing feature development with UI/UX design responsibilities'
    ],
    impact: 'Successfully launched a social media app that demonstrates full-stack iOS development capabilities, from UI design to backend infrastructure and App Store deployment.',
    additionalDetails: [
      'Led code reviews and refactoring efforts to improve code maintainability',
      'Implemented real-time features using Firebase Realtime Database',
      'Created intuitive user interfaces following iOS Human Interface Guidelines'
    ],
    featured: true,
    date: '2024',
  },
  {
    id: 'meowmap',
    title: 'MeowMap',
    description: 'A cat tracking and welfare app built with a team of four',
    longDescription: 'Worked in a team of four on a cat tracking and welfare app. Focused on UI and design. Great opportunity to learn from more experienced software engineers.',
    category: 'iOS',
    techStack: ['Swift', 'iOS', 'UIKit'],
    media: {
      thumbnail: '#764ba2', // Placeholder color - purple
      image: null,
      video: meowVid,
      screenshots: [],
      appStoreUrl: null,
      githubUrl: null,
      demoUrl: null,
    },
    challenges: [
      'Collaborating effectively in a team of four developers',
      'Learning from more experienced engineers while contributing meaningfully',
      'Designing user-friendly interfaces for pet tracking functionality',
      'Implementing location-based features for cat tracking'
    ],
    impact: 'Contributed to a welfare-focused app that helps pet owners track and care for their cats, while gaining valuable experience in team collaboration and iOS development.',
    additionalDetails: [
      'Focused primarily on UI/UX design and implementation',
      'Worked with UIKit to create responsive and accessible interfaces',
      'Participated in team code reviews and design discussions'
    ],
    featured: true,
    date: '2024',
  },
  {
    id: 'ml-model',
    title: 'ML Indoor/Outdoor Detection',
    description: 'Machine learning model for detecting indoor vs outdoor photos',
    longDescription: 'Developed a companion ML model for the Findr app using PyTorch. Used the Places365 dataset to detect if a photo is taken indoors or outdoors. Hosted on Google Cloud, with concurrent requests running.',
    category: 'ML',
    techStack: ['Python', 'PyTorch', 'Google Cloud', 'Machine Learning'],
    media: {
      thumbnail: '#ff6b9d', // Placeholder color - pink
      image: null,
      video: modelVid,
      screenshots: [],
      appStoreUrl: null,
      githubUrl: null,
      demoUrl: null,
    },
    challenges: [
      'Training an accurate model using the Places365 dataset',
      'Optimizing model performance for real-time inference',
      'Deploying and hosting the model on Google Cloud with concurrent request handling',
      'Integrating the ML model with the iOS app backend'
    ],
    impact: 'Created a production-ready ML model that enhances the Findr app experience by automatically categorizing photos, demonstrating practical application of machine learning in mobile development.',
    additionalDetails: [
      'Used PyTorch for model development and training',
      'Implemented efficient preprocessing pipelines for image data',
      'Designed API endpoints for model inference',
      'Optimized for low latency to support real-time app features'
    ],
    featured: false,
    date: '2024',
  },
  {
    id: 'graphics-renderer',
    title: '3D Graphics Renderer',
    description: 'WebGL-based 3D graphics renderer with lighting and shading',
    longDescription: 'Built in JavaScript and WebGL. Processes 3D vectors, normals, and texture maps. Creates textured 3D models with interpolation. Includes lighting systems (Phong, Gourand, ray-tracing) and shading.',
    category: 'Web',
    techStack: ['JavaScript', 'WebGL', '3D Graphics'],
    media: {
      thumbnail: '#4ecdc4', // Placeholder color - teal
      image: null,
      video: graphicsVid,
      screenshots: [],
      appStoreUrl: null,
      githubUrl: null,
      demoUrl: null,
    },
    challenges: [
      'Understanding and implementing complex 3D graphics algorithms',
      'Working with WebGL shaders and GPU programming',
      'Implementing multiple lighting models (Phong, Gourand, ray-tracing)',
      'Optimizing rendering performance for smooth animations'
    ],
    impact: 'Built a comprehensive 3D graphics renderer from scratch, demonstrating deep understanding of computer graphics fundamentals and WebGL programming.',
    additionalDetails: [
      'Implemented vector mathematics for 3D transformations',
      'Created texture mapping and interpolation systems',
      'Developed multiple shading algorithms for realistic rendering',
      'Optimized rendering pipeline for performance'
    ],
    featured: false,
    date: '2024',
  },
  {
    id: 'insidr',
    title: 'Insidr',
    description:
      'React Native app and web experience with Firebase, TypeScript, scraping, and Gemini integrations',
    longDescription:
      'Lead development for Insidr\'s React Native mobile app and website. Built on Firebase with TypeScript, custom scraping workflows, and Gemini integrations. Serves 15,000+ users with $250K+ in pass-through payments processed.',
    category: 'React Native',
    techStack: [
      'React Native',
      'TypeScript',
      'Firebase',
      'Gemini',
      'Web',
    ],
    media: {
      thumbnail: '#1b4332',
      image: null,
      video: null,
      linkPreviewUrl: 'https://insidr.app',
      screenshots: [],
      appStoreUrl: insidrAppStore || null,
      githubUrl: null,
      demoUrl: null,
    },
    challenges: [
      'Shipping cohesive mobile and web experiences with shared product goals',
      'Reliable payments and user scale on Firebase-backed infrastructure',
      'Integrating Gemini and scraping pipelines responsibly and efficiently',
    ],
    impact:
      'Production app and site supporting a growing user base and significant payment volume.',
    additionalDetails: [
      'TypeScript across app and automation surfaces',
      'Firebase for auth, data, and backend services',
    ],
    featured: true,
    date: '2025',
  },
  {
    id: 'backloginator',
    title: 'Backloginator',
    description:
      'Desktop recommendation engine for your Steam backlog—Python, Qt, Steam, YouTube, and curated web sources',
    longDescription:
      'A Python desktop app with a Qt GUI that helps players work through their backlog of unplayed or unfinished Steam games. It integrates with Steam and YouTube, scrapes select gaming sites and Nexus Mods for context, and surfaces personalized recommendations. Includes note-taking plus suggestions for mods, videos, and related articles so planning what to play next stays in one place.',
    category: 'Python',
    techStack: ['Python', 'Qt', 'Steam', 'YouTube', 'Web Scraping', 'Nexus Mods'],
    media: {
      thumbnail: '#1b2838',
      image: null,
      video: null,
      screenshots: [],
      appStoreUrl: null,
      githubUrl: null,
      demoUrl: null,
      demoComingSoon: true,
      cardPlaceholderLines: ['Construction', 'Demo coming soon'],
    },
    challenges: [
      'Combining Steam library data with scraped and API-fed metadata without overwhelming the UI',
      'Building a useful recommendation layer across games, mods, videos, and articles',
      'Keeping scraping workflows maintainable and respectful of site terms',
      'Shipping a cohesive Qt experience for notes, discovery, and backlog triage',
    ],
    impact:
      'Turns a cluttered Steam library into an actionable backlog with research and notes alongside each title.',
    additionalDetails: [
      'Qt-based GUI for browsing recommendations and jotting notes per game',
      'Steam and YouTube integrations alongside targeted scraping of gaming sites and Nexus Mods',
      'Features for mod picks, video deep-dives, and related reading to support what to play next',
    ],
    featured: true,
    date: '2026',
  },
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectsByCategory = (category) => projects.filter(p => p.category === category);
export const getAllCategories = () => [...new Set(projects.map(p => p.category))];

