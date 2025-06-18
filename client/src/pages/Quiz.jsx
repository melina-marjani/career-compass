import { useState } from 'react';
import axios from 'axios';

const orange = '#FF6E00';

function Quiz() {
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '', q4: '' });
  const [careers, setCareers] = useState([]);

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5050/api/quiz', { answers });
    setCareers(res.data.careers);
  };

  return (
    <div style={wrapperStyle}>
      <div style={{ ...questionBox, marginBottom: '1.5rem' }}>
        <h1 style={{ color: orange, margin: 0, textAlign: 'center' }}>Tech Career Quiz</h1>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {renderQuestion('q1', 'Do you enjoy working with data?', ['Yes', 'Not really'])}
        {renderQuestion('q2', 'Do you prefer building tools or analyzing information?', ['Building Tools', 'Analyzing Info'])}
        {renderQuestion('q3', 'Do you prefer managing projects or producing them?', ['Managing', 'Producing'])}
        {renderQuestion('q4', 'Do you prefer changing technologies or somewhat constant tools?', ['Changing', 'Constant'])}
        <button type="submit" style={buttonStyle}>See Careers</button>
      </form>

      {careers.length > 0 && (
        <div style={resultsContainer}>
          <div style={{ ...questionBox, marginTop: '2rem', marginBottom: '1rem' }}>
            <h2 style={{ color: orange, textAlign: 'center' }}>Suggested Careers</h2>
          </div>
          <div style={careerGrid}>
            {careers.map((career, i) => (
              <div key={i} style={careerBox}>
                <h3 style={{ marginTop: 0 }}>{career.title}</h3>
                <p>{career.description}</p>
                <p><strong>Skills:</strong> {career.skills.join(', ')}</p>
                <p><strong>Average Salary:</strong> {career.averageSalary}</p>
                <ul>
                  {career.resources.map((res, j) => (
                    <li key={j}>
                      <a href={res.url} target="_blank" rel="noopener noreferrer">{res.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  function renderQuestion(name, questionText, options) {
    return (
      <div style={questionBox}>
        <label>
          <strong>{questionText}</strong>
          <br />
          <select
            name={name}
            value={answers[name]}
            onChange={handleChange}
            required
            style={selectStyle}
          >
            <option value="">--Select--</option>
            <option value={options[0].toLowerCase().split(' ')[0]}>{options[0]}</option>
            <option value={options[1].toLowerCase().split(' ')[0]}>{options[1]}</option>
          </select>
        </label>
      </div>
    );
  }
}

// Styles
const wrapperStyle = {
  maxWidth: 800,
  margin: 'auto',
  padding: '2rem',
};

const questionBox = {
  backgroundColor: 'rgba(255,255,255,0.9)',
  padding: '1.5rem',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
};

const selectStyle = {
  marginTop: '0.5rem',
  padding: '0.5rem',
  fontSize: '1rem',
  borderRadius: '4px',
  width: '100%',
};

const buttonStyle = {
  marginTop: '1rem',
  backgroundColor: orange,
  color: 'white',
  border: 'none',
  padding: '0.8rem 1.5rem',
  fontSize: '1rem',
  borderRadius: '5px',
  cursor: 'pointer',
};

const resultsContainer = {
  marginTop: '2rem',
};

const careerGrid = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
};

const careerBox = {
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  padding: '1.5rem',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

export default Quiz;
