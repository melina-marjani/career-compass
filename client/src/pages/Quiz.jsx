import { useState } from 'react';
import axios from 'axios';

function Quiz() {
  const [answers, setAnswers] = useState({ q1: '', q2: '' });
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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Do you enjoy working with data?
          <select name="q1" value={answers.q1} onChange={handleChange}>
            <option value="">--Select--</option>
            <option value="yes">Yes</option>
            <option value="no">Not really</option>
          </select>
        </label>
        <br /><br />
        <label>
          Do you prefer building tools or analyzing information?
          <select name="q2" value={answers.q2} onChange={handleChange}>
            <option value="">--Select--</option>
            <option value="build">Building Tools</option>
            <option value="analyze">Analyzing Info</option>
          </select>
        </label>
        <br /><br />
        <button type="submit">See Careers</button>
      </form>

      {careers.map((career, i) => (
        <div key={i}>
          <h2>{career.title}</h2>
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
  );
}

export default Quiz;
