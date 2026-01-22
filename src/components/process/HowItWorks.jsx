import "./howItWorks.css";
import SnowBackground from "./SnowBackground";

export default function HowItWorks() {
  const steps = [
    {
      title: "Share Requirements",
      front:
        "Tell me your project idea, college needs, and deadline.",
      back:
        "I analyze feasibility, difficulty, scope, and suggest the best tech stack.",
    },
    {
      title: "System Design",
      front:
        "I design architecture, APIs, DB, UI flow.",
      back:
        "You get diagrams, logic flow, and ML pipeline if required.",
    },
    {
      title: "Build & Deploy",
      front:
        "Full development with clean production code.",
      back:
        "Testing, datasets, hosting, live demo if required.",
    },
    {
      title: "Viva & Support",
      front:
        "I explain everything until you're confident.",
      back:
        "Mock questions, explanation, logic, and confidence training.",
    },
  ];

  return (
    <section className="how-section">
      <SnowBackground />

      <div className="how-container">
        <h2 className="how-title">
          HOW IT <span>WORKS</span>
        </h2>

        <p className="how-subtitle">
          A simple, transparent process. No confusion. No surprises.
        </p>

        <div className="how-grid">
          {steps.map((step, i) => (
            <div className="flip-card" key={i}>
              <div className="flip-inner">
                <div className="flip-front">
                  <span className="step-number">0{i + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.front}</p>
                  <small>Hover to flip →</small>
                </div>

                <div className="flip-back">
                  <h3>{step.title}</h3>
                  <p>{step.back}</p>
                  <small>Real-world guidance</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
