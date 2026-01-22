import { useEffect } from "react";
import "./about.css";
import AboutScene from "./AboutScene";

export default function About() {
  useEffect(() => {
    const counters = document.querySelectorAll(".stat-card h3");

    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      const increment = target / 120;

      const update = () => {
        const value = +counter.innerText;
        if (value < target) {
          counter.innerText = Math.ceil(value + increment);
          setTimeout(update, 20);
        } else {
          counter.innerText =
            target >= 1000 ? target / 1000 + "K+" :
            target === 100 ? "100%" :
            target + "+";
        }
      };

      update();
    });
  }, []);

  return (
    <section className="about-section">
      <div className="about-content">
        {/* LEFT */}
        <div className="about-text">

          {/* CINEMATIC HEADER */}
          <h2 className="about-cinematic-title">
            I DON’T JUST BUILD PROJECTS.
            <br />
            <span>I BUILD CONFIDENCE.</span>
          </h2>

          {/* SUB QUOTE */}
          <p className="about-cinematic-quote">
            Turning <strong>pressure</strong>, <strong>confusion</strong>, and{" "}
            <strong>fear</strong> into{" "}
            <span className="highlight">real, defendable projects</span>.
          </p>

          {/* MAIN INTRO */}
         <p>
  I’m <strong>Sheshank</strong>, founder of{" "}
  <strong>DevForDegree</strong> — a developer, mentor, and tech content
  creator trusted by thousands of engineering students.
</p>

<p>
  I’ve seen too many talented students struggle not because they lack
  intelligence, but because they lack clarity, structure, and real-world
  guidance. That’s where I step in.
</p>

<p>
  Through <strong>DevForDegree</strong> and my tech content, I break down
  complex ideas, expose what actually works in the industry, and help
  students turn confusion into{" "}
  <span className="highlight">production-ready, defendable systems</span>.
</p>

<p>
  Whether it’s a major project, AI system, full-stack application, or
  viva preparation — I don’t just help you submit a project.
  <br />
  <strong>I help you understand it, explain it, and defend it with confidence.</strong>
</p>


          {/* CARDS */}
          <div className="about-cards">
            <div className="about-card">
              <h3>Why DevForDegree Exists</h3>
              <p>
                Too many students fail not because they lack skill, but because
                they lack direction and support. DevForDegree exists to fix that.
              </p>
            </div>

            <div className="about-card">
              <h3>How I Work</h3>
              <p>
                No shortcuts. No recycled templates. Every project is treated
                like a real-world deployment — because your viva depends on it.
              </p>
            </div>

            <div className="about-card">
              <h3>What You Get</h3>
              <p>
                Clear explanations, clean architecture, production-ready code,
                and confidence when it matters the most.
              </p>
            </div>
          </div>

          {/* INTERACTIVE STATS */}
          <div className="about-stats">
            <div className="stat-card">
              <h3 data-target="15000">0</h3>
              <span>Tech Audience</span>
              <div className="stat-bar">
                <span style={{ width: "85%" }}></span>
              </div>
            </div>

            <div className="stat-card">
              <h3 data-target="50">0</h3>
              <span>Projects Delivered</span>
              <div className="stat-bar">
                <span style={{ width: "70%" }}></span>
              </div>
            </div>

            <div className="stat-card">
              <h3 data-target="100">0</h3>
              <span>Viva Support</span>
              <div className="stat-bar">
                <span style={{ width: "100%" }}></span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="about-model">
          <AboutScene />
        </div>
      </div>
    </section>
  );
}
