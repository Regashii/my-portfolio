import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { useEffect, useState } from "react";
import resumePDF from "../assets/CED-RESUME.pdf"; // your actual PDF file
import homeImage from "../assets/homeimage-rbg.png";
import "../styles/home.scss";
import AboutMe from "./about";
import AppBar from "./appbar";
import Projects from "./projects";

export default function Home() {
  const [showResume, setShowResume] = useState(false);

  // Prevent body scroll when resume modal is open
  useEffect(() => {
    document.body.style.overflow = showResume ? "hidden" : "auto";
  }, [showResume]);

  const handleOpenResume = () => setShowResume(true);
  const handleCloseResume = () => setShowResume(false);

  return (
    <>
      <AppBar />
      <main className="home" id="home">
        <section className="image-section">
          <img src={homeImage} alt="home-image" />
        </section>

        <section className="intro">
          <header>
            <h1 className="first-name">
              HELLO, IT'S <span>CED</span>
            </h1>
            <h2>
              I'am a <span>Computer Engineer</span>
            </h2>

            <p>
              Passionate Computer Engineering graduate with hands-on experience
              in web development, embedded systems, and networking. Skilled in
              creating responsive web applications using HTML, CSS, JavaScript,
              and MERN stack, and experienced in circuit design and hardware
              troubleshooting. Eager to apply technical knowledge and creativity
              to real-world projects while continuously learning and improving.
            </p>
          </header>
          <div className="buttons">
            <button className="resume-btn" onClick={handleOpenResume}>
              Resume
            </button>
            <aside className="contact-info">
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
          </div>
          <div className="contact-info">
            <div className="info-item">
              <Mail /> <span>cedrickabines15@gmail.com</span>
            </div>
            <div className="info-item">
              <Phone /> <span>+63 964 995 8624</span>
            </div>
          </div>
        </section>
      </main>

      {showResume && (
        <div className="modal-overlay" onClick={handleCloseResume}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <button className="close-btn" onClick={handleCloseResume}>
              ✕
            </button>
            <h2>My Resume</h2>
            <iframe
              src={resumePDF + "#toolbar=0"}
              title="Resume PDF"
              className="resume-preview"
              frameBorder="0"
            ></iframe>
            <a
              href={resumePDF}
              download="Abines_Resume.pdf"
              className="download-btn"
            >
              Download PDF
            </a>
          </div>
        </div>
      )}

      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <AboutMe />
      </div>
    </>
  );
}
