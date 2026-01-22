import anime from "animejs";

export function useHeroTextEffect(containerRef) {
  if (!containerRef.current) return;

  const words = containerRef.current.querySelectorAll(".hero-word");

  words.forEach((word) => {
    word.addEventListener("mouseenter", () => {
      anime({
        targets: word,
        color: [
          "#ffffff",
          anime.random(0, 1) > 0.5 ? "#57F695" : "#5AD7FF",
        ],
        duration: 250,
        easing: "easeOutQuad",
      });
    });

    word.addEventListener("mouseleave", () => {
      anime({
        targets: word,
        color: "#ffffff",
        duration: 400,
        easing: "easeOutQuad",
      });
    });
  });
}
