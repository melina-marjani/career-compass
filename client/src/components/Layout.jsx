import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <nav
        style={{
          backgroundColor: '#FFFF81',
          width: '300px',
          padding: '1rem',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          color: 'white',
          fontWeight: 'bold',
          zIndex: 2
        }}

      >
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ margin: 0, color: '#FF6E00' }}>CareerCompass</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/quiz" style={linkStyle}>Quiz</Link>
          <Link to="/careers" style={linkStyle}>Careers</Link>
          <Link to="/about" style={linkStyle}>About</Link>
        </div>
        <div style={{
          flexGrow: 1,
          display: 'flex',
          alignItems: 'flex-start', // Start lower down instead of center
          justifyContent: 'center',
          textAlign: 'center',
          padding: '4rem 1rem 0 1rem', // Top padding moved down
          fontSize: '1.25rem',
          color: '#412400',
          lineHeight: '1.6'
        }}>
          <div>
            <em>"Opportunity is missed by most people because it is dressed in overalls and looks like work."</em>
            <br />
            <strong>– Thomas A Edison</strong>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main style={{ marginLeft: '320px', padding: '2rem', width: '100%' }}>
        <Outlet />
      </main>
    </div>
  );
}

const linkStyle = {
  color: 'black',
  textDecoration: 'none',
  fontSize: '1.1rem',
  padding: '0.5rem',
  borderRadius: '4px',
  backgroundColor: '#FFC067',
  transition: 'background 0.3s',
};

export default Layout;
