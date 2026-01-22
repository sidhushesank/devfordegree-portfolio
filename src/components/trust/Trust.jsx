// src/components/trust/Trust.jsx
import "./trust.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    name: "Rahul",
    college: "JNTU Hyderabad",
    text: "I had zero idea about ML. Sheshank built my project and also made me understand every line. I cleared my viva confidently."
  },
  {
    name: "Sneha",
    college: "SRM University",
    text: "Best decision I made. Not just project, I actually learned full-stack properly."
  },
  {
    name: "Arjun",
    college: "Osmania University",
    text: "My guide was shocked with the system design. Everything felt industry-level."
  }
];

export default function Trust() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="trust-section">
      <h2 className="trust-title">
        WHY STUDENTS <span>TRUST</span>
        <br />
        DEVFORDEGREE
      </h2>

      <p className="trust-subtitle">
        Not just projects. Real guidance. Real confidence.
      </p>

      <div className="trust-counters">
        <div className="trust-stat">
          <h3>15000+</h3>
          <span>Students Reached</span>
          <div className="stat-bar"><div style={{ width: "90%" }} /></div>
        </div>

        <div className="trust-stat">
          <h3>50+</h3>
          <span>Projects Built</span>
          <div className="stat-bar"><div style={{ width: "70%" }} /></div>
        </div>

        <div className="trust-stat">
          <h3>6+</h3>
          <span>Domains</span>
          <div className="stat-bar"><div style={{ width: "60%" }} /></div>
        </div>

        <div className="trust-stat">
          <h3>100%</h3>
          <span>Viva Support</span>
          <div className="stat-bar"><div style={{ width: "100%" }} /></div>
        </div>
      </div>

      <div className="testimonial-card">
        <p className="testimonial-text">
          “{testimonials[index].text}”
        </p>
        <div className="testimonial-user">
          <strong>{testimonials[index].name}</strong>
          <span>{testimonials[index].college}</span>
        </div>
      </div>

      <div className="trust-cta">
        <h3>Ready to build your final-year project?</h3>
        <button onClick={() => {
  document.querySelector(".contact-section").scrollIntoView({ 
    behavior: "smooth" 
  });
}}>
  Get My Project →
</button>

      </div>
    </section>
  );
}
