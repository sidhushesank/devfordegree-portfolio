import "./startProject.css";
import { useState } from "react";

export default function StartProject() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    domain: "",
    description: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("YOUR_GOOGLE_SCRIPT_URL", {
      method: "POST",
      body: JSON.stringify(form)
    });

    alert("Request submitted! I'll contact you shortly.");
  };

  return (
    <section className="start-section">
      <h2>Start Your Project</h2>
      <p>Fill this once. I’ll handle everything else.</p>

      <form onSubmit={handleSubmit} className="start-form">
        <input name="name" placeholder="Your Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="phone" placeholder="WhatsApp Number" onChange={handleChange} required />
        <input name="college" placeholder="College" onChange={handleChange} />
        <input name="domain" placeholder="Project Domain (AI/Web/etc)" />
        <textarea name="description" placeholder="Brief about your project..." />

        <button type="submit">Submit Request →</button>
      </form>
    </section>
  );
}
