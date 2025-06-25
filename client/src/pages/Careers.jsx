import { useEffect, useState } from 'react';
import axios from 'axios';

function Careers() {
  const [careers, setCareers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5050/api/all-careers')
      .then(res => setCareers(res.data))
      .catch(err => console.error('Error fetching careers:', err));
  }, []);

  const filteredCareers = careers.filter((career) =>
    career.title.toLowerCase().includes(search.toLowerCase()) ||
    career.description.toLowerCase().includes(search.toLowerCase()) ||
    career.skills.join(' ').toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={wrapperStyle}>
      <div style={headingBox}>
        <h1 style={headingStyle}>All Tech Careers</h1>
        <h3 style={headingStyle}>including ones you never understood!</h3>
    </div>

      <input
        type="text"
        placeholder="Search by title, skill, or descrption keyword..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={searchStyle}
      />

      {filteredCareers.map((career, i) => (
        <div key={i} style={careerBox}>
          <h2>{career.title}</h2>
          <p>
            <strong style={{ color: '#FF6E00' }}>Super Simple Description: </strong>
            {career.simpleDescription}
          </p>
          <p>
            <strong style={{ color: '#FF6E00' }}>Super Quick Description: </strong>
            {career.description}
          </p>
          <p>
            <strong style={{ color: '#FF6E00' }}>Skills:</strong> {career.skills.join(', ')}
          </p>
          <p>
            <strong style={{ color: '#FF6E00' }}>Average Salary:</strong> {career.averageSalary}
          </p>

          <div>
            <strong>Resources:</strong>
            <ul>
              {career.resources.map((res, j) => (
                <li key={j}>
                  <a href={res.url} target="_blank" rel="noopener noreferrer">{res.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

// --- Styles ---
const wrapperStyle = {
  maxWidth: 900,
  margin: 'auto',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
};

const headingStyle = {
  color: '#FF6E00',
  marginBottom: '1rem',
  textAlign: 'center',
};

const searchStyle = {
  padding: '0.7rem 1rem',
  fontSize: '1rem',
  borderRadius: '8px',
  border: '1px solid #ccc',
  marginBottom: '1.5rem',
};

const careerBox = {
  backgroundColor: 'white',
  padding: '1.5rem',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  borderLeft: '6px solid #FF6E00',
};

const headingBox = {
  display: 'inline-block',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  padding: '0.6rem 1.2rem',
  borderRadius: '8px',
  boxShadow: '0 0 8px rgba(0,0,0,0.08)',
  borderLeft: '5px solid #FF6E00',
  margin: '0 auto',
};



export default Careers;
