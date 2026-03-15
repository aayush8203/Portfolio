import './App.css'

function App() {
  return (
    <div className="portfolio-container">
      <header className="hero">
        <h1>Ayush Mishra</h1>
        <p className="title">Full-Stack Developer & IoT Enthusiast</p>
        <p className="intro">Passionate about building scalable web applications and developing smart, innovative IoT solutions.</p>
      </header>

      <section className="section">
        <h2>Projects</h2>
        <div className="grid">
          <div className="card">
            <h3>LifeLane</h3>
            <p>An IoT-based intelligent traffic management system for emergency vehicles, ensuring rapid clearance and smart routing.</p>
          </div>
          <div className="card">
            <h3>VibeStay</h3>
            <p>A modern, full-stack application for managing and booking premium stays with a seamless user experience.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>React</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>IoT & Arduino</li>
          <li>Git</li>
        </ul>
      </section>

      <footer className="footer section">
        <h2>Contact</h2>
        <p style={{ margin: '0 0 0.5rem 0' }}>
          Email:{' '}
          <a href="mailto:ayush@example.com">ayush@example.com</a>
        </p>
        <p style={{ margin: 0 }}>
          GitHub:{' '}
          <a href="https://github.com/aayush8203" target="_blank" rel="noopener noreferrer">
            @aayush8203
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
