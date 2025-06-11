// client/src/pages/Home.jsx
import '/Users/melina/Documents/SideProjects/CareerCompass/client/src/background.css';

function Home() {
  return (
    <div style={wrapperStyle}>
      {/* Welcome box */}
      <div style={sectionBox}>
        <h1 style={{ color: '#f44336', fontSize: '2.5rem' }}>Welcome to CareerCompass</h1>
        <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
          Your guide to exploring exciting tech careers — built just for students.
        </p>
      </div>

      {/* Feature cards */}
      <div style={{ ...sectionBox, display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <FeatureCard
          title="🎯 Personalized Quiz"
          description="Answer a few quick questions and get career suggestions tailored to your interests."
        />
        <FeatureCard
          title="💼 Career Explorer"
          description="Browse high-demand tech roles like Data Scientist, UX Designer, or AI Engineer."
        />
        <FeatureCard
          title="📚 Learn & Plan"
          description="Get free resources, salary info, and skills for every role. Map your learning path."
        />
      </div>

      {/* Quote box */}
      <div style={sectionBox}>
        <blockquote style={{ fontStyle: 'italic', color: '#555', margin: 0 }}>
          "The best way to predict the future is to create it." – Abraham Lincoln
        </blockquote>
      </div>
    </div>
  );
}

const wrapperStyle = {
  maxWidth: 1000,
  margin: '0 auto',
  padding: '3rem 1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
};

const sectionBox = {
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  borderRadius: '12px',
  padding: '2rem',
  boxShadow: '0 0 20px rgba(0,0,0,0.15)',
  backdropFilter: 'blur(4px)',
};

function FeatureCard({ title, description }) {
  return (
    <div style={{
      flex: '1 1 250px',
      backgroundColor: '#ffecec',
      borderLeft: '6px solid #f44336',
      padding: '1.2rem',
      borderRadius: '8px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Home;
