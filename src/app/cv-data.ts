export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  summary: string;
}

export interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[];
}

export const personalInfo: PersonalInfo = {
  name: 'Alessio',
  title: 'Full Stack Developer',
  email: 'alessio@example.com',
  phone: '+39 000 000 0000',
  location: 'Italy',
  github: 'https://github.com/Alessito54',
  linkedin: 'https://linkedin.com/in/alessio',
  summary:
    'Passionate Full Stack Developer with experience building modern web applications. ' +
    'Enthusiastic about clean code, best practices, and continuous learning.'
};

export const experienceItems: ExperienceItem[] = [
  {
    company: 'Tech Company',
    position: 'Full Stack Developer',
    period: '2022 – Present',
    description: [
      'Developed and maintained web applications using Angular and Node.js.',
      'Collaborated with cross-functional teams to deliver high-quality software.',
      'Improved application performance by 30% through code optimization.'
    ]
  },
  {
    company: 'Startup XYZ',
    position: 'Frontend Developer',
    period: '2020 – 2022',
    description: [
      'Built responsive user interfaces with Angular and TypeScript.',
      'Integrated REST APIs and managed state with RxJS.',
      'Participated in agile ceremonies and sprint planning.'
    ]
  }
];

export const educationItems: EducationItem[] = [
  {
    institution: 'University of Technology',
    degree: 'Bachelor of Science in Computer Science',
    period: '2016 – 2020',
    description: 'Graduated with honours. Focus on software engineering and web technologies.'
  },
  {
    institution: 'Online Courses',
    degree: 'Angular & TypeScript Certification',
    period: '2021',
    description: 'Completed advanced Angular development course.'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'Angular', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'HTML / CSS', level: 90 },
      { name: 'SCSS', level: 80 }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Express', level: 70 },
      { name: 'REST APIs', level: 85 }
    ]
  },
  {
    category: 'Tools & Other',
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'Docker', level: 60 },
      { name: 'SQL', level: 70 }
    ]
  }
];
