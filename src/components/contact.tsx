import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { useState } from "react";
import "../styles/contact.scss";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Simple mailto method (no backend)
    const mailtoLink = `mailto:cedrickabines15@gmail.com?subject=Message from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${
      formData.email
    }`;
    window.location.href = mailtoLink;
  };

  return (
    <main className="contact-page">
      {/* Left side - contact form */}
      <section className="contact-form">
        <h2>Send me a message</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Right side - contact info */}
      <aside className="contact-info">
        <h2>Contact Info</h2>
        <div className="info-item">
          <Mail /> <span>cedrickabines15@gmail.com</span>
        </div>
        <div className="info-item">
          <Phone /> <span>+63 964 995 8624</span>
        </div>

        <h3>Find me on</h3>
        <div className="social-links">
          <a
            href="https://www.facebook.com/Jced1510"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook />
          </a>
          <a
            href="https://www.instagram.com/jhncd10/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://www.linkedin.com/in/john-cedrick-abines-384325378/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/Regashii"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
        </div>
      </aside>
    </main>
  );
}
