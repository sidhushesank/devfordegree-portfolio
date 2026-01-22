import { useEffect, useRef } from "react";
import anime from "animejs";
import "./quoteSection.css";
import StarField from "./StarField";

export default function QuoteSection() {
  const quoteRef = useRef(null);
  const wordsRef = useRef([]);

  useEffect(() => {
    // Entrance animation
    anime({
      targets: quoteRef.current,
      opacity: [0, 1],
      translateY: [24, 0],
      duration: 900,
      easing: "easeOutExpo",
    });

    // Floating motion
    anime({
      targets: quoteRef.current,
      translateY: [-6, 6],
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
      duration: 2800,
    });

    // Hover interactions
    wordsRef.current.forEach((word) => {
      word.addEventListener("mouseenter", () => {
        anime({
          targets: word,
          color: "#5AD7FF",
          textShadow: "0 0 18px rgba(90,215,255,0.7)",
          duration: 300,
          easing: "easeOutQuad",
        });
      });

      word.addEventListener("mouseleave", () => {
        anime({
          targets: word,
          color: "#ffffff",
          textShadow: "0 0 0 rgba(0,0,0,0)",
          duration: 300,
          easing: "easeOutQuad",
        });
      });
    });
  }, []);

  return (
    <section className="quote-section">
      <StarField />
      <div className="quote-content" ref={quoteRef}>
        <span className="quote-line" />

        <h2 className="quote-text">
          <span ref={(el) => (wordsRef.current[0] = el)}>
            We don’t just build projects
          </span>
          {" — "}
          <span ref={(el) => (wordsRef.current[1] = el)}>
            we build confidence
          </span>
          .
        </h2>
      </div>
    </section>
    
  );
}
