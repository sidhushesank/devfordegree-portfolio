import LightPillarWrapper from "./LightPillarWrapper";
import "./QuoteSection.css";

export default function QuoteSection() {
  return (
    <section className="quote-section">
      <LightPillarWrapper />

      <div className="quote-content">
        <span className="quote-line" />
        <p className="quote-text">
          “We don’t just build projects —{" "}
          <span>we build confidence.</span>”
        </p>
      </div>
    </section>
  );
}
