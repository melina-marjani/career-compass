const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('CareerCompass backend is running!');
});

// Use quiz routes
const quizRoutes = require('./routes/quiz');
app.use('/api', quizRoutes);

app.listen(5050, () => {
  console.log('CareerCompass backend is running on port 5050');
});