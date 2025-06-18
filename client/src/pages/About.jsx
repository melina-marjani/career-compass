function About() {
  return (
    <div style={wrapperStyle}>
      <div style={boxStyle}>
        <h2 style={headingStyle}>About CareerCompass</h2>
        <p>CareerCompass helps teens discover the right path in tech by matching their interests to real-world, less-known and commonly-confused careers.</p>
        <p>A free and open-source platform built with 🧡 using React and Node.js.</p>
      </div>
    </div>
  );
}

// --- Styles ---
const wrapperStyle = {
  maxWidth: 800,
  margin: '0 auto',
  padding: '2rem',
};

const boxStyle = {
  backgroundColor: 'rgba(255,255,255,0.95)',
  padding: '2rem',
  borderRadius: '10px',
  boxShadow: '0 0 12px rgba(0,0,0,0.1)',
  borderLeft: '6px solid #FF6E00',
  textAlign: 'center',
};

const headingStyle = {
  color: '#FF6E00',
  marginBottom: '1rem',
};

export default About;
