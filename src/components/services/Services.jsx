import "./Services.css";
import servicesData from "../../data/servicesData";
import AuroraCanvas from "./AuroraCanvas";

export default function Services() {
  return (
    <section className="services-section" id="services">
      {/* Aurora Background */}
      <AuroraCanvas />

      <div className="services-content">
        <header className="services-header">
          <h2>What We Do</h2>
          <p>
            High-quality engineering, development, and research — executed with
            precision, ownership, and zero noise.
          </p>
        </header>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <article className="service-card" key={index}>
              <span className="index">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="cta">Learn more →</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
