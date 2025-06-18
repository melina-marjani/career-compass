const express = require('express');
const router = express.Router();

const careers = [
  {
    title: 'Data Scientist',
    traits: ['data', 'analyze', 'producing', 'changing'],
    description: 'Analyzes large datasets to extract insights.',
    skills: ['Python', 'Statistics', 'Machine Learning'],
    averageSalary: '$120,000',
    resources: [
      { label: 'Intro to Data Science – Coursera', url: 'https://coursera.org/learn/intro-data-science' },
    ],
  },
  {
    title: 'Data Engineer',
    traits: ['data', 'build', 'producing', 'changing'],
    description: 'Builds data systems and ETL pipelines.',
    skills: ['SQL', 'Spark', 'ETL', 'Cloud'],
    averageSalary: '$115,000',
    resources: [
      { label: 'Data Engineering on GCP', url: 'https://coursera.org/learn/gcp-data-engineering' },
    ],
  },
  {
    title: 'Product Manager',
    traits: ['no-data', 'analyze', 'managing', 'constant'],
    description: 'Leads product strategy and coordinates teams.',
    skills: ['Agile', 'Communication', 'Planning'],
    averageSalary: '$110,000',
    resources: [
      { label: 'Google Product Management', url: 'https://coursera.org/learn/google-product-management' },
    ],
  },
  {
    title: 'Frontend Developer',
    traits: ['no-data', 'build', 'producing', 'constant'],
    description: 'Creates interactive user interfaces.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    averageSalary: '$100,000',
    resources: [
      { label: 'Frontend Dev Path', url: 'https://freecodecamp.org' },
    ],
  },
  {
    title: 'Backend Developer',
    traits: ['no-data', 'build', 'producing', 'constant'],
    description: 'Builds the logic and database systems behind apps.',
    skills: ['Node.js', 'SQL', 'APIs'],
    averageSalary: '$105,000',
    resources: [
      { label: 'Backend Development – Codecademy', url: 'https://www.codecademy.com/learn/learn-back-end-development' },
    ],
  },
  {
    title: 'Machine Learning Engineer',
    traits: ['data', 'build', 'producing', 'changing'],
    description: 'Implements ML models in scalable systems.',
    skills: ['Python', 'TensorFlow', 'MLOps'],
    averageSalary: '$130,000',
    resources: [
      { label: 'TensorFlow in Practice', url: 'https://coursera.org/specializations/tensorflow-in-practice' },
    ],
  },
  {
    title: 'UX Designer',
    traits: ['no-data', 'analyze', 'producing', 'constant'],
    description: 'Designs user-friendly digital interfaces.',
    skills: ['Figma', 'Research', 'Accessibility'],
    averageSalary: '$95,000',
    resources: [
      { label: 'Google UX Design', url: 'https://coursera.org/professional-certificates/google-ux-design' },
    ],
  },
  {
    title: 'DevOps Engineer',
    traits: ['no-data', 'build', 'managing', 'changing'],
    description: 'Automates deployments and system monitoring.',
    skills: ['Docker', 'Kubernetes', 'CI/CD'],
    averageSalary: '$120,000',
    resources: [
      { label: 'DevOps on AWS', url: 'https://www.aws.training' },
    ],
  },
  {
    title: 'Cybersecurity Analyst',
    traits: ['data', 'analyze', 'producing', 'constant'],
    description: 'Protects systems from digital threats.',
    skills: ['Security', 'Linux', 'SIEM'],
    averageSalary: '$105,000',
    resources: [
      { label: 'Intro to Cybersecurity – IBM', url: 'https://www.coursera.org/learn/ibm-cybersecurity-basics' },
    ],
  },
  {
    title: 'AI Prompt Engineer',
    traits: ['data', 'analyze', 'producing', 'changing'],
    description: 'Designs effective prompts for generative AI models.',
    skills: ['Language Models', 'Prompt Engineering', 'AI Ethics'],
    averageSalary: '$140,000',
    resources: [
      { label: 'Prompt Engineering Guide', url: 'https://github.com/dair-ai/Prompt-Engineering-Guide' },
    ],
  },
  {
    title: 'Cloud Architect',
    traits: ['data', 'build', 'managing', 'changing'],
    description: 'Designs and manages cloud computing infrastructure.',
    skills: ['AWS', 'Azure', 'Architecture'],
    averageSalary: '$145,000',
    resources: [
      { label: 'Cloud Architect Path – Google Cloud', url: 'https://cloud.google.com/training/cloud-architect' },
    ],
  },
  {
  title: 'Mobile App Developer',
  traits: ['no-data', 'build', 'producing', 'changing'],
  description: 'Develops apps for iOS and Android platforms.',
  skills: ['Flutter', 'Swift', 'React Native'],
  averageSalary: '$100,000',
  resources: [
    { label: 'CS50’s Mobile App Dev', url: 'https://cs50.harvard.edu/mobile/' },
  ],
},
{
  title: 'Tech Support Specialist',
  traits: ['no-data', 'analyze', 'managing', 'constant'],
  description: 'Solves user tech problems and system issues.',
  skills: ['Troubleshooting', 'Customer Service', 'Networking'],
  averageSalary: '$65,000',
  resources: [
    { label: 'Google IT Support', url: 'https://coursera.org/professional-certificates/google-it-support' },
  ],
},
{
  title: 'Business Intelligence Analyst',
  traits: ['data', 'analyze', 'producing', 'constant'],
  description: 'Uses data to guide business decisions.',
  skills: ['SQL', 'Power BI', 'Data Visualization'],
  averageSalary: '$90,000',
  resources: [
    { label: 'BI Analyst Track – DataCamp', url: 'https://www.datacamp.com/tracks/business-intelligence-analyst' },
  ],
},
{
  title: 'Game Developer',
  traits: ['no-data', 'build', 'producing', 'changing'],
  description: 'Creates video games for computers and consoles.',
  skills: ['Unity', 'C#', 'Game Design'],
  averageSalary: '$95,000',
  resources: [
    { label: 'Unity Game Dev', url: 'https://learn.unity.com' },
  ],
},
{
  title: 'Site Reliability Engineer (SRE)',
  traits: ['no-data', 'build', 'managing', 'changing'],
  description: 'Ensures reliable system performance and uptime.',
  skills: ['Monitoring', 'Automation', 'Cloud Ops'],
  averageSalary: '$130,000',
  resources: [
    { label: 'SRE by Google', url: 'https://sre.google/books/' },
  ],
},
{
  title: 'AI Researcher',
  traits: ['data', 'analyze', 'producing', 'changing'],
  description: 'Explores new methods in artificial intelligence.',
  skills: ['Deep Learning', 'Research', 'Mathematics'],
  averageSalary: '$150,000',
  resources: [
    { label: 'MIT Deep Learning', url: 'https://deeplearning.mit.edu' },
  ],
},
{
  title: 'Digital Marketer (Tech Focused)',
  traits: ['no-data', 'analyze', 'producing', 'changing'],
  description: 'Uses data tools to drive online campaigns.',
  skills: ['SEO', 'Google Analytics', 'Email Marketing'],
  averageSalary: '$85,000',
  resources: [
    { label: 'Digital Marketing – Google', url: 'https://grow.google/certificates/digital-marketing-ecommerce/' },
  ],
},
{
  title: 'QA Engineer (Software Tester)',
  traits: ['no-data', 'analyze', 'producing', 'constant'],
  description: 'Tests and ensures software quality.',
  skills: ['Automation', 'Manual Testing', 'Debugging'],
  averageSalary: '$85,000',
  resources: [
    { label: 'QA Testing – Coursera', url: 'https://coursera.org/learn/software-testing' },
  ],
},
{
  title: 'IT Systems Administrator',
  traits: ['no-data', 'build', 'managing', 'constant'],
  description: 'Manages and configures company IT infrastructure.',
  skills: ['Linux', 'Networking', 'Security'],
  averageSalary: '$80,000',
  resources: [
    { label: 'CompTIA Network+ Guide', url: 'https://www.comptia.org' },
  ],
},
{
  title: 'AI Ethics Specialist',
  traits: ['data', 'analyze', 'managing', 'changing'],
  description: 'Focuses on fairness, bias, and ethical use of AI.',
  skills: ['Policy', 'AI Ethics', 'Critical Thinking'],
  averageSalary: '$110,000',
  resources: [
    { label: 'Ethics in AI – OpenLearn', url: 'https://www.open.edu/openlearn/science-maths-technology/ethics-ai' },
  ],
},
{
  title: 'Cybersecurity Analyst',
  traits: ['data', 'analyze', 'producing', 'constant'],
  description: 'Protects systems from digital threats and vulnerabilities.',
  skills: ['Network Security', 'SIEM', 'Incident Response'],
  averageSalary: '$100,000',
  resources: [
    { label: 'IBM Cybersecurity Analyst', url: 'https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst' },
  ],
},
{
  title: 'Cloud Solutions Architect',
  traits: ['no-data', 'build', 'managing', 'changing'],
  description: 'Designs cloud systems and infrastructure.',
  skills: ['AWS', 'Azure', 'Architecture', 'DevOps'],
  averageSalary: '$140,000',
  resources: [
    { label: 'AWS Architect Path', url: 'https://aws.amazon.com/training/architect/' },
  ],
},
{
  title: 'UX Designer',
  traits: ['no-data', 'analyze', 'producing', 'constant'],
  description: 'Designs user-friendly and accessible digital experiences.',
  skills: ['Wireframing', 'Figma', 'User Research'],
  averageSalary: '$95,000',
  resources: [
    { label: 'Google UX Design Certificate', url: 'https://coursera.org/professional-certificates/google-ux-design' },
  ],
},
{
  title: 'DevOps Engineer',
  traits: ['no-data', 'build', 'managing', 'changing'],
  description: 'Automates and streamlines software delivery.',
  skills: ['CI/CD', 'Docker', 'Infrastructure as Code'],
  averageSalary: '$125,000',
  resources: [
    { label: 'DevOps Bootcamp – Codecademy', url: 'https://www.codecademy.com/learn/learn-devops' },
  ],
},
{
  title: 'AI Prompt Engineer',
  traits: ['data', 'analyze', 'producing', 'changing'],
  description: 'Crafts effective prompts to interact with AI systems.',
  skills: ['LLMs', 'Communication', 'Critical Thinking'],
  averageSalary: '$130,000',
  resources: [
    { label: 'Learn Prompt Engineering', url: 'https://learnprompting.org' },
  ],
},
{
  title: 'Robotics Engineer',
  traits: ['no-data', 'build', 'producing', 'changing'],
  description: 'Designs and programs robotic systems.',
  skills: ['ROS', 'Python', 'Control Systems'],
  averageSalary: '$115,000',
  resources: [
    { label: 'Intro to Robotics – MIT OCW', url: 'https://ocw.mit.edu/courses/mechanical-engineering/2-12-introduction-to-robotics-fall-2005/' },
  ],
},
{
  title: 'AR/VR Developer',
  traits: ['no-data', 'build', 'producing', 'changing'],
  description: 'Creates immersive augmented and virtual reality experiences.',
  skills: ['Unity', '3D Modeling', 'C#'],
  averageSalary: '$110,000',
  resources: [
    { label: 'Meta AR/VR Developer', url: 'https://coursera.org/professional-certificates/meta-ar-developer' },
  ],
},
{
  title: 'Blockchain Developer',
  traits: ['data', 'build', 'producing', 'changing'],
  description: 'Builds decentralized applications and smart contracts.',
  skills: ['Solidity', 'Ethereum', 'Web3'],
  averageSalary: '$125,000',
  resources: [
    { label: 'Blockchain Dev Path', url: 'https://www.codecademy.com/learn/learn-blockchain' },
  ],
},
{
  title: 'Tech Writer',
  traits: ['no-data', 'analyze', 'producing', 'constant'],
  description: 'Creates manuals, documentation, and technical guides.',
  skills: ['Writing', 'Technical Tools', 'Clarity'],
  averageSalary: '$80,000',
  resources: [
    { label: 'Google Tech Writing Course', url: 'https://developers.google.com/tech-writing' },
  ],
},
{
  title: 'Machine Learning Engineer',
  traits: ['data', 'build', 'producing', 'changing'],
  description: 'Builds systems that learn from data.',
  skills: ['Python', 'TensorFlow', 'Model Deployment'],
  averageSalary: '$135,000',
  resources: [
    { label: 'DeepLearning.AI ML Specialization', url: 'https://coursera.org/specializations/machine-learning-introduction' },
  ],
}


];

router.get('/all-careers', (req, res) => {
  res.json(careers);
});


router.post('/quiz', (req, res) => {
  const { q1, q2, q3, q4 } = req.body.answers;

  const traits = [
    q1 === 'yes' ? 'data' : 'no-data',
    q2,
    q3,
    q4,
  ];

  const scored = careers.map((career) => {
    const score = career.traits.reduce((sum, trait) => sum + (traits.includes(trait) ? 1 : 0), 0);
    return { ...career, score };
  });

  const topCareers = scored.sort((a, b) => b.score - a.score).slice(0, 5);

  res.json({ careers: topCareers });
});

module.exports = router;
