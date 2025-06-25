const express = require('express');
const router = express.Router();

const careers = [
  {
    title: 'Data Scientist',
    traits: ['data', 'analyze', 'producing', 'changing'],
    description: 'Analyzes large datasets to extract insights.',
    simpleDescription: 'A Data Scientist studies big sets of information to find patterns and answers. They help people make smart decisions by understanding what the numbers say.',
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
    simpleDescription: 'A Data Engineer builds the systems that collect and organize information. This helps others easily find and use the right data.',
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
    simpleDescription: 'A Product Manager helps decide what kind of apps or tools should be made. They talk to different teams and make sure everything runs smoothly.',
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
    simpleDescription: 'A Frontend Developer designs what you see on websites and apps. They make sure everything looks nice and is easy to use.',
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
    simpleDescription: 'A Backend Developer makes sure apps and websites work behind the scenes. They handle how information is stored and moved around.',
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
    simpleDescription: "A Machine Learning Engineer teaches computers how to learn from data and make smart guesses. It's like training a robot brain to solve problems and improve over time.",
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
    simpleDescription: "A UX Designer makes websites and apps easier and more fun to use. They focus on how things look and feel so people don’t get confused or frustrated.",
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
    simpleDescription: "A DevOps Engineer helps make sure apps run smoothly by setting up systems that can update and fix themselves. They connect the people who build apps with the ones who run them.",
    skills: ['Docker', 'Kubernetes', 'CI/CD'],
    averageSalary: '$120,000',
    resources: [
      { label: 'DevOps on AWS', url: 'https://www.aws.training' },
    ],
  },
  {
    title: 'Cybersecurity Analyst',
    traits: ['data', 'analyze', 'producing', 'constant'],
    description: 'Protects systems from digital threats and vulnerabilities.',
    simpleDescription: "A Cybersecurity Analyst helps keep computers and information safe from hackers and other online dangers. They watch for problems, fix weak spots, and make sure everything stays protected.",
    skills: ['Network Security', 'SIEM', 'Incident Response'],
    averageSalary: '$100,000',
    resources: [
      { label: 'IBM Cybersecurity Analyst', url: 'https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst' },
    ],
  },
  {
    title: 'AI Prompt Engineer',
    traits: ['data', 'analyze', 'producing', 'changing'],
    description: 'Designs effective prompts for generative AI models.',
    simpleDescription: "An AI Prompt Engineer figures out the best way to ask questions or give instructions to AI so it gives useful answers. They help make AI easier to talk to and more helpful.",
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
    simpleDescription: "A Cloud Architect plans how a company stores and uses its information online. They make sure everything works smoothly and safely in the 'cloud,' which means over the internet instead of on just one computer.",
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
  simpleDescription: "A Mobile App Developer creates apps that you use on your phone or tablet. They make sure the app looks good, works well, and does what it's supposed to on different devices.",
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
  simpleDescription: "A Tech Support Specialist helps people fix problems with their computers or devices. They answer questions, solve issues, and make sure everything runs smoothly for users.",
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
  simpleDescription: "A Business Intelligence Analyst looks at data to help companies make smart decisions. They turn numbers and charts into clear stories that guide what a business should do next.",
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
  simpleDescription: "A Game Developer makes video games that people can play on computers, phones, or consoles. They bring stories, art, and rules together to create fun and interactive experiences.",
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
  simpleDescription: "A Site Reliability Engineer makes sure websites and apps work smoothly all the time. They fix problems quickly and help prevent things from breaking in the first place.",
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
  simpleDescription: "An AI Researcher studies how to make computers think and learn like humans. They test new ideas and try to improve how smart machines can become over time.",
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
  simpleDescription: "A Digital Marketer uses the internet to help companies get noticed. They create online ads, track what people click on, and find the best ways to reach customers using websites and emails.",
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
  simpleDescription: "A QA Engineer makes sure apps and programs work properly before people use them. They test things out, find mistakes, and help fix bugs so everything runs smoothly.",
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
  simpleDescription: "An IT Systems Administrator helps keep a company’s computers and networks running smoothly. They make sure everything is set up correctly and fix problems when something goes wrong.",
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
  simpleDescription: "An AI Ethics Specialist makes sure technology is used in a fair and responsible way. They think about how decisions made by computers affect people and help avoid harm or unfair treatment.",
  skills: ['Policy', 'AI Ethics', 'Critical Thinking'],
  averageSalary: '$110,000',
  resources: [
    { label: 'Ethics in AI – OpenLearn', url: 'https://www.open.edu/openlearn/science-maths-technology/ethics-ai' },
  ],
},

{
  title: 'Cloud Solutions Architect',
  traits: ['no-data', 'build', 'managing', 'changing'],
  description: 'Designs cloud systems and infrastructure.',
  simpleDescription: "A Cloud Solutions Architect plans how a company stores and uses its files and apps on the internet instead of just one computer. They help make sure everything runs smoothly and can be accessed from anywhere.",
  skills: ['AWS', 'Azure', 'Architecture', 'DevOps'],
  averageSalary: '$140,000',
  resources: [
    { label: 'AWS Architect Path', url: 'https://aws.amazon.com/training/architect/' },
  ],
},
{
  title: 'Robotics Engineer',
  traits: ['no-data', 'build', 'producing', 'changing'],
  description: 'Designs and programs robotic systems.',
  simpleDescription: "A Robotics Engineer designs and builds robots that can do tasks like helping in factories or exploring dangerous places. They figure out how the robot should move and how it follows instructions to get the job done.",
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
  simpleDescription: "An AR/VR Developer creates digital experiences that feel real, like games or simulations you can walk through using special glasses or headsets. They make things that let you explore new places or ideas without leaving your room.",
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
  simpleDescription: "A Blockchain Developer builds apps that help people share and track information safely without needing a middleman. It's like making digital notebooks that no one can secretly change or erase.",
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
  simpleDescription: "A Tech Writer explains how technology works in a way that's easy to understand. They write clear instructions, guides, and manuals so others know how to use tools, websites, or apps.",
  skills: ['Writing', 'Technical Tools', 'Clarity'],
  averageSalary: '$80,000',
  resources: [
    { label: 'Google Tech Writing Course', url: 'https://developers.google.com/tech-writing' },
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
