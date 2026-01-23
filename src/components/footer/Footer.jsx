import { useEffect } from "react";
import "./footer.css";

export default function Footer() {
  useEffect(() => {
    const dots = document.querySelectorAll(".footer-dot");
    dots.forEach((dot, i) => {
      dot.style.left = `${Math.random() * 100}%`;
      dot.style.animationDelay = `${i * 0.5}s`;
    });
  }, []);

  return (
    <footer className="footer">
      {/* floating particles */}
      <div className="footer-particles">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="footer-dot" />
        ))}
      </div>

      <div className="footer-content">
        <h3 className="footer-brand">
          DevForDegree<span>.</span>
        </h3>

        <p className="footer-tagline">
          Built in the shadows. Delivered in the spotlight.
        </p>

        <div className="footer-system">
          SYSTEM STATUS: <span>ONLINE</span>
        </div>

        <div className="footer-links">
          <a href="https://github.com/sidhushesank" target="_blank">GitHub</a>
          <a href="https://instagram.com/devfordegree" target="_blank">Instagram</a>
          <a href="https://www.linkedin.com/in/sheshank-sidheshwar-b84166252/" target="_blank">LinkedIn</a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} DevForDegree — Crafted by Sheshank
        </p>
      </div>
    </footer>
  );
}
