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
  // Add more here
];

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

  const topCareers = scored.sort((a, b) => b.score - a.score).slice(0, 3);

  res.json({ careers: topCareers });
});

module.exports = router;
