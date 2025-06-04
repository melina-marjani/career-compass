const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Path to the careers.json data file
const careersPath = path.join(__dirname, '..', 'data', 'careers.json');

// POST /api/quiz
router.post('/', (req, res) => {
  const { q1, q2 } = req.body.answers;

  const rawData = fs.readFileSync(careersPath);
  const careers = JSON.parse(rawData);

  let filtered;

  if (q1 === 'yes' && q2 === 'build') {
    filtered = careers.filter(c =>
      ['Data Engineer', 'Machine Learning Engineer'].includes(c.title)
    );
  } else if (q1 === 'yes' && q2 === 'analyze') {
    filtered = careers.filter(c =>
      ['Data Scientist', 'Data Analyst'].includes(c.title)
    );
  } else if (q1 === 'no' && q2 === 'build') {
    filtered = careers.filter(c =>
      ['Software Engineer', 'Backend Developer', 'DevOps Engineer'].includes(c.title)
    );
  } else if (q1 === 'no' && q2 === 'analyze') {
    filtered = careers.filter(c =>
      ['Frontend Developer', 'UX Designer'].includes(c.title)
    );
  } else {
    filtered = careers.slice(0, 3); // fallback
  }

  res.json({ careers: filtered });
});

// GET /api/all-careers
router.get('/all-careers', (req, res) => {
  const rawData = fs.readFileSync(careersPath);
  const allCareers = JSON.parse(rawData);
  res.json(allCareers);
});

module.exports = router;