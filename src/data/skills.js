export const skills = {
  frontend: [
    { name: 'Swift', level: 'advanced', icon: '' },
    { name: 'React', level: 'intermediate', icon: '' },
    { name: 'JavaScript', level: 'advanced', icon: '' },
    { name: 'TypeScript', level: 'intermediate', icon: '' },
    { name: 'WebGL', level: 'intermediate', icon: '' },
    { name: 'Qt', level: 'intermediate', icon: '' },
  ],
  backend: [
    { name: 'Node.js', level: 'intermediate', icon: '' },
    { name: 'Firebase', level: 'advanced', icon: '' },
    { name: 'REST APIs', level: 'intermediate', icon: '' },
    { name: 'SQL', level: 'intermediate', icon: '' },
    { name: 'Google Cloud', level: 'intermediate', icon: '' },
    { name: 'AWS', level: 'learning', icon: '' },
    { name: 'Web Scraping', level: 'intermediate', icon: '' },
  ],
  mobile: [
    { name: 'iOS Development', level: 'advanced', icon: '' },
    { name: 'UIKit', level: 'advanced', icon: '' },
    { name: 'SwiftUI', level: 'intermediate', icon: '' },
    { name: 'React Native', level: 'advanced', icon: '' },
  ],
  tools: [
    { name: 'Git', level: 'advanced', icon: '' },
    { name: 'Xcode', level: 'advanced', icon: '' },
    { name: 'VS Code', level: 'advanced', icon: '' },
    { name: 'Figma', level: 'intermediate', icon: '' },
    { name: 'Salesforce', level: 'intermediate', icon: '' },
    { name: 'ServiceNow', level: 'intermediate', icon: '' },
  ],
  ml: [
    { name: 'Python', level: 'intermediate', icon: '' },
    { name: 'PyTorch', level: 'intermediate', icon: '' },
    { name: 'Machine Learning', level: 'intermediate', icon: '' },
    { name: 'Gemini', level: 'intermediate', icon: '' },
  ],
};

export const getAllSkills = () => {
  return Object.values(skills).flat();
};
