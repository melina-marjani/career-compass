import { useEffect, useState } from 'react';
import axios from 'axios';

function Careers() {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const res = await axios.get('http://localhost:5050/api/all-careers');
        setCareers(res.data);
      } catch (err) {
        console.error('Failed to fetch careers:', err);
      }
    };
    fetchCareers();
  }, []);

  return (
    <div>
      <h2>All Tech Careers</h2>
      {careers.map((career, i) => (
        <div key={i} style={{ marginBottom: '2rem' }}>
          <h3>{career.title}</h3>
          <p>{career.description}</p>
          <p><strong>Skills:</strong> {career.skills.join(', ')}</p>
          <p><strong>Salary:</strong> {career.averageSalary}</p>
          <ul>
            {career.resources.map((r, j) => (
              <li key={j}><a href={r.url} target="_blank">{r.label}</a></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Careers;
