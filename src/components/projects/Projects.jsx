import "./projects.css";

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-title glow-title">
        FEATURED <span>PROJECTS</span>
      </h2>
      <p className="projects-subtitle">
        Real systems. Real students. Real results.
      </p>

      <div className="projects-grid">

        {/* STOCK MARKET */}
        <div className="project-card">
          <div className="project-image">
            <img src="/images/stock.jpg" alt="Stock Market Prediction" />
          </div>

          <h3>Stock Market Prediction System</h3>

          <div className="tech-stack">
            <span>Python</span>
            <span>Pandas</span>
            <span>ML</span>
            <span>LSTM</span>
          </div>

          <p>
            <strong>Problem:</strong> Investors struggle to analyze trends and
            make data-driven decisions.
          </p>
          <p>
            <strong>Solution:</strong> Built a predictive ML model using
            historical stock data with visualization dashboard.
          </p>
          <p className="result">
            <strong>Result:</strong> Used for live demo & academic showcase.
          </p>

          <div className="project-links">
            <a href="https://your-live-link.com" target="_blank">Live Demo</a>
            <a href="https://github.com/sidhushesank/stock_prediction_using_ml" target="_blank">GitHub</a>
          </div>
        </div>

        {/* BLOG PLATFORM */}
        <div className="project-card">
          <div className="project-image">
            <img src="/images/blog.jpg" alt="Blog Platform" />
          </div>

          <h3>Full Stack Blog Platform</h3>

          <div className="tech-stack">
            <span>React</span>
            <span>Node</span>
            <span>MongoDB</span>
            <span>JWT</span>
          </div>

          <p>
            <strong>Problem:</strong> Creators need simple platforms to publish
            and manage content.
          </p>
          <p>
            <strong>Solution:</strong> Built full-stack blog with authentication,
            admin dashboard, and CRUD posts.
          </p>
          <p className="result">
            <strong>Result:</strong> Deployed live with real users.
          </p>

          <div className="project-links">
            <a href="https://blog-platform-pied-xi.vercel.app/" target="_blank">Live Demo</a>
            <a href="https://github.com/sidhushesank/blog-platform" target="_blank">GitHub</a>
          </div>
        </div>

        {/* DOWNRY */}
        <div className="project-card">
          <div className="project-image">
            <img src="/images/dowry.jpg" alt="Dowry Prediction" />
          </div>

          <h3>Dowry Demand Prediction</h3>

          <div className="tech-stack">
            <span>Python</span>
            <span>Pandas</span>
            <span>ML</span>
            <span>Flask</span>
          </div>

          <p>
            <strong>Problem:</strong> No data-driven way to analyze dowry trends.
          </p>
          <p>
            <strong>Solution:</strong> Prediction system using analytics + ML.
          </p>
          <p className="result">
            <strong>Result:</strong> Selected for college showcase.
          </p>

          <div className="project-links">
            <a href="https://sidhu123.pythonanywhere.com/" target="_blank">Live Demo</a>
            <a href="https://github.com/sidhushesank/ethical_dowry_analyser" target="_blank">GitHub</a>
          </div>
        </div>

      </div>
    </section>
  );
}
