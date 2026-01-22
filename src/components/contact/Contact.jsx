// src/components/contact/Contact.jsx
import "./contact.css";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("TRANSMITTING...");

    const formData = new FormData(e.target);

    const res = await fetch("https://formspree.io/f/xjggqqew", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (res.ok) {
      setStatus("SIGNAL RECEIVED. I WILL CONTACT YOU.");
      e.target.reset();
    } else {
      setStatus("TRANSMISSION FAILED. TRY AGAIN.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">
        START <span>THE</span> PROJECT
      </h2>

      <p className="contact-subtitle">
        No forms. No fluff. Just send the signal.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-row">
          <div className="contact-label">NAME</div>
          <input type="text" name="name" placeholder="Your identity" required />
        </div>

        <div className="contact-row">
          <div className="contact-label">EMAIL</div>
          <input type="email" name="email" placeholder="Your signal channel" required />
        </div>

        <div className="contact-row">
          <div className="contact-label">MESSAGE</div>
          <textarea
            name="message"
            placeholder="Describe the mission..."
            required
          />
        </div>

        <button type="submit" className="contact-btn">
          SEND SIGNAL
        </button>

        {status && <p className="contact-status">{status}</p>}
      </form>
    </section>
  );
}
