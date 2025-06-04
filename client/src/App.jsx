import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Careers from './pages/Careers';
import About from './pages/About';

function App() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>CareerCompass</h1>
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/quiz">Quiz</Link> |{' '}
        <Link to="/careers">Careers</Link> |{' '}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
