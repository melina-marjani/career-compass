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
    try {
      const res = await axios.post('http://localhost:5050/api/quiz', {
        answers,
      });
      setCareers(res.data.careers);
    } catch (error) {
      console.error('Error calling backend:', error);
    }
  };

  return (
    <div style={wrapperStyle}>
      <div style={{ ...questionBox, marginBottom: '1.5rem' }}>
        <h1 style={{ color: orange, margin: 0 }}>Tech Career Quiz</h1>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Question 1 */}
        <div style={questionBox}>
          <label>
            <strong>Do you enjoy working with data?</strong>
            <br />
            <select name="q1" value={answers.q1} onChange={handleChange} required style={selectStyle}>
              <option value="">--Select--</option>
              <option value="yes">Yes</option>
              <option value="no">Not really</option>
            </select>
          </label>
        </div>

        {/* Question 2 */}
        <div style={questionBox}>
          <label>
            <strong>Do you prefer building tools or analyzing information?</strong>
            <br />
            <select name="q2" value={answers.q2} onChange={handleChange} required style={selectStyle}>
              <option value="">--Select--</option>
              <option value="build">Building Tools</option>
              <option value="analyze">Analyzing Info</option>
            </select>
          </label>
        </div>

        {/* Question 3 */}
        <div style={questionBox}>
          <label>
            <strong>Do you prefer managing projects or producing them?</strong>
            <br />
            <select name="q3" value={answers.q3} onChange={handleChange} required style={selectStyle}>
              <option value="">--Select--</option>
              <option value="managing">Managing</option>
              <option value="producing">Producing</option>
            </select>
          </label>
        </div>

        {/* Question 4 */}
        <div style={questionBox}>
          <label>
            <strong>Do you prefer changing technologies or somewhat constant tools?</strong>
            <br />
            <select name="q4" value={answers.q4} onChange={handleChange} required style={selectStyle}>
              <option value="">--Select--</option>
              <option value="changing">Changing</option>
              <option value="constant">Constant</option>
            </select>
          </label>
        </div>

        <button type="submit" style={buttonStyle}>See Careers</button>
      </form>

            {careers.length > 0 && (
              <div style={resultsContainer}>
                <div style={{ ...questionBox, marginBottom: '1.5rem' }}>
                  <h2 style={{ margin: 0 }}>Suggested Careers</h2>
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
}

// --- Styles ---
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