import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Careers from './pages/Careers';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="careers" element={<Careers />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
