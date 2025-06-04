const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const careersPath = path.join(__dirname, '..', 'data', 'careers.json');

router.post('/', (req, res) => {
  const { q1, q2 } = req.body.answers;

  // Load the career data
  const rawData = fs.readFileSync(careersPath);
  const careers = JSON.parse(rawData);

  let filtered;

  // Match based on quiz answers
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

module.exports = router;
