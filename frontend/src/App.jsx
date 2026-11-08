import "./App.css";

const features = [
  {
    number: "01",
    icon: "✦",
    title: "AI Health Assistant",
    description:
      "Get helpful health information, understand symptoms and explore safe next steps with AI-assisted guidance.",
    color: "pink",
  },
  {
    number: "02",
    icon: "⌕",
    title: "Smart Report Analyzer",
    description:
      "Understand your medical reports with simple explanations of test values and important observations.",
    color: "cream",
  },
  {
    number: "03",
    icon: "♡",
    title: "Medication Companion",
    description:
      "Organize medication schedules, keep track of reminders and access useful medicine information.",
    color: "peach",
  },
  {
    number: "04",
    icon: "▦",
    title: "Personal Health Dashboard",
    description:
      "Keep your health records, reports and everyday healthcare information organized in one place.",
    color: "blush",
  },
];

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <a href="#" className="brand">
          <span className="brand-icon">✳</span>
          BENEFICIAL<span>ai</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </nav>

        <a href="#features" className="nav-button">
          Explore Platform <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              THE FUTURE OF INTELLIGENT HEALTHCARE
            </div>

            <h1>
              Better health.
              <br />
              <span>Smarter choices.</span>
              <br />A better you.
            </h1>

            <p className="hero-description">
              Meet a smarter way to understand and manage your health. Explore
              intelligent healthcare tools designed around you.
            </p>

            <div className="hero-actions">
              <a href="#features" className="primary-button">
                Explore BENEFICIALai <span>→</span>
              </a>
              <a href="#about" className="secondary-button">
                Discover more
              </a>
            </div>

            <div className="hero-note">
              <span>✦</span>
              Intelligence That Benefits Life.
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-circle circle-one" />
            <div className="visual-circle circle-two" />

            <div className="health-card">
              <div className="card-top">
                <span className="card-symbol">✳</span>
                <span className="card-status">YOUR HEALTH SPACE</span>
              </div>

              <div className="heart-symbol">♡</div>

              <h3>Your health,</h3>
              <h3 className="highlight-heading">in better hands.</h3>

              <p>
                Understand more. Stay informed. Make confident health decisions.
              </p>

              <div className="card-bottom">
                <span>AI × HEALTHCARE</span>
                <span>BENEFICIALai ↗</span>
              </div>
            </div>

            <div className="floating-badge badge-top">
              <span>✦</span> AI-powered guidance
            </div>

            <div className="floating-badge badge-bottom">
              <span>♡</span> Care made simpler
            </div>
          </div>
        </section>

        <section className="intro-strip" id="about">
          <span>OUR PURPOSE</span>
          <p>
            Making healthcare smarter, simpler and accessible through artificial
            intelligence.
          </p>
        </section>

        <section className="features-section" id="features">
          <div className="section-heading">
            <div>
              <span className="section-label">
                ONE PLATFORM. MANY POSSIBILITIES.
              </span>
              <h2>
                Healthcare that <span>works for you.</span>
              </h2>
            </div>
            <p>
              Everything you need to better understand and organize your
              everyday healthcare journey.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature) => (
              <article
                className={`feature-card ${feature.color}`}
                key={feature.number}
              >
                <div className="feature-top">
                  <span className="feature-icon">{feature.icon}</span>
                  <span className="feature-number">{feature.number}</span>
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>

                <a href="#about" className="feature-link">
                  Discover feature <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="closing-section">
          <span className="section-label">
            A MORE THOUGHTFUL HEALTHCARE EXPERIENCE
          </span>
          <h2>
            Because your health deserves <span>better.</span>
          </h2>
          <p>
            One connected ecosystem. More clarity. More informed everyday
            healthcare decisions.
          </p>
          <a href="#home" className="primary-button">
            Back to top ↑
          </a>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="brand">
          <span className="brand-icon">✳</span>
          BENEFICIAL<span>ai</span>
        </a>
        <p>Intelligence That Benefits Life.</p>
        <span>© 2026 BENEFICIALai. Built with purpose.</span>
      </footer>
    </div>
  );
}

export default App;
