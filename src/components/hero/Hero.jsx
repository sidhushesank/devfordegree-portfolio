import { useEffect, useRef } from "react";
import anime from "animejs";
import HeroScene from "./HeroScene";
import "./hero.css";

export default function Hero() { 
  const nameRef = useRef(null);
  const titleRef = useRef(null);

  // SYSTEM COMMANDS
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      el.classList.add("pulse-red");
      setTimeout(() => el.classList.remove("pulse-red"), 1500);
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      el.classList.toggle("services-focus");
    }
  };

  useEffect(() => {
    // Fade-in brand name
    anime({
      targets: nameRef.current,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      easing: "easeOutExpo",
    });

    const words = titleRef.current.querySelectorAll(".hero-word");

    // Initial entrance animation
    anime({
      targets: words,
      opacity: [0, 1],
      translateY: [30, 0],
      delay: anime.stagger(150, { start: 300 }),
      duration: 800,
      easing: "easeOutExpo",
    });

    // Floating animation (up & down forever)
    anime({
      targets: words,
      translateY: [-6, 6],
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
      duration: 2200,
      delay: anime.stagger(250),
    });

    // Hover color interaction (CYAN THEME)
    words.forEach((word) => {
      word.addEventListener("mouseenter", () => {
        anime({
          targets: word,
          color: anime.random([
            "#5AD7FF",
            "#7CFFEA",
            "#9AEAFF",
          ]),
          duration: 250,
          easing: "easeOutQuad",
        });
      });

      word.addEventListener("mouseleave", () => {
        anime({
          targets: word,
          color: "#9AEAFF",
          duration: 250,
          easing: "easeOutQuad",
        });
      });
    });
  }, []);

  return (
    <section className="hero">
      {/* 3D Background */}
      <HeroScene />

      {/* INTERACTIVE HUD LOGO */}
      <div
        className="hero-logo-wrapper"
        onClick={() => {
          const logo = document.querySelector(".hero-logo");
          logo.classList.add("glitch");
          setTimeout(() => logo.classList.remove("glitch"), 400);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <img src="/logo.jpeg" alt="DevForDegree" className="hero-logo" />
        <span className="logo-scanline" />
      </div>

      {/* Content */}
      <div className="hero-content">
        <span ref={nameRef} className="hero-name">
          Sheshank • DevForDegree
        </span>

        <h1 ref={titleRef} className="hero-title">
          <span className="hero-word">Build.</span>
          <span className="hero-word">Deploy.</span>
          <span className="hero-word">Present.</span>
          <span className="hero-word">Defend.</span>
        </h1>

        <p>
          Engineering projects, AI solutions, websites & full viva support.
        </p>

        <div className="hero-actions">
          <button className="primary" onClick={scrollToContact}>
            Get Project Help
          </button>
          <button
            className="secondary"
            onClick={() => {
              document.getElementById("services")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            View Services
          </button>
        </div>
      </div>
    </section>
  );
}
