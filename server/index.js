const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const quizRoutes = require('./routes/quiz');
app.use('/api/quiz', quizRoutes);

app.get('/', (req, res) => {
  res.send('CareerCompass backend is running!');
});

const PORT = 5050;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
