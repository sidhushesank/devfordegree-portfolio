import { useEffect, useRef } from "react";

export default function AuroraCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w, h;
    function resize() {
      w = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    }
    resize();
    window.addEventListener("resize", resize);

    let t = 0;

    function noise(x, y) {
      return Math.sin(x * 0.002 + t) + Math.sin(y * 0.002 + t);
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < 4; i++) {
        const grad = ctx.createLinearGradient(0, 0, w, h);
        grad.addColorStop(0, "rgba(40,80,255,0.12)");
        grad.addColorStop(0.5, "rgba(120,40,200,0.14)");
        grad.addColorStop(1, "rgba(40,200,140,0.12)");

        ctx.fillStyle = grad;
        ctx.beginPath();

        ctx.moveTo(0, h);
        for (let x = 0; x <= w; x += 40) {
          const y =
            h * 0.2 +
            noise(x + i * 200, t * 200 + i * 100) * 160;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(w, h);
        ctx.closePath();
        ctx.fill();
      }

      t += 0.006;
      requestAnimationFrame(draw);
    }

    draw();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        filter: "blur(20px)",
      }}
    />
  );
}
